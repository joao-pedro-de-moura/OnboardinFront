import React, { useState, useEffect } from "react";
import { Table, FlexboxGrid, IconButton } from 'rsuite';
import axios from '../../services/axios';
import EditIcon from '@rsuite/icons/Edit';
import TrashIcon from '@rsuite/icons/Trash';
import ModalEdit from "../../components/modal/ModalEdit";
import {  Avatar } from 'rsuite';
import { useSelector } from "react-redux";



  export default function Admin(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [Att, setAtt] = useState(false)
    const handleClose = () => (setOpen(false), setAtt(true));
    const { Column, HeaderCell, Cell } = Table;
    const [clients, setClients] = useState([])
    const [id, setId] = useState('')
    const [nameModal, setNameModal] = useState('')
    const [emailModal, setEmailModal] = useState('')
    const [profileModal, setProfileModal] = useState([])
    const [password, setPassword] = useState('')
    
    const idUser = useSelector(state => state.auth.user.id)
    async function getData(){
        const response = await axios.get(`/clients/${idUser}`)
        const {data} = response
        const arrayData = [data]
      setClients(arrayData)
       
       
       
    }
   
     async function handleDelete(RowId){
        await axios.delete(`/clients/${RowId}`)
          setAtt(true)
      }


      useEffect(() => {
       
          getData()
          setAtt(false)
          console.log(idUser)
          console.log(clients)
      },[Att])
     
    return( 
      <div className="show-grid"> 
      <FlexboxGrid align="middle" justify="center" style={{ marginTop: '20px' }}>
        <FlexboxGrid.Item colspan={10}>
    <Table
      width={600}
      height={450}
      data={clients}
      onRowClick={rowData => {
        setId(rowData.id);
        setNameModal(rowData.name);
        setEmailModal(rowData.email);
        setProfileModal(rowData.profiles.length > 0 ? rowData.profiles[0].url : '' )
        setPassword(rowData.password)
      }} >
          
        <Column width={150}>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>
        <Column width={150}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>
        <Column width={150}>
          <HeaderCell>Profile</HeaderCell>
          <Cell style={{ padding: '1px' }}>
          {rowData => (   
              <div> 
                  <Avatar circle src = {rowData.profiles.length > 0 ? rowData.profiles[0].url : ''}  />
              </div>
            )}
            </Cell>
        </Column>
        <Column width={80} fixed="right">
          <HeaderCell>Options</HeaderCell>
          <Cell style={{ padding: '6px' }}>
            {rowData => (
              <div>  
                 <IconButton icon={<TrashIcon />}  onClick={ () => handleDelete(rowData.id)}/>
                 <IconButton icon={<EditIcon onClick={handleOpen}/>}/>
              </div>
            )}
          </Cell>
        </Column>
    </Table>
   </FlexboxGrid.Item>
   </FlexboxGrid>
   <ModalEdit
                 open={open}
                 onClose={handleClose}
                 id ={id}
                 emailModal ={emailModal}
                 nameModal ={nameModal}
                 profileModal={profileModal}
                 passwordModal={password}
                 getData={async ()=> getData()}
            />
   </div> 
  )
}