import React, { useState, useEffect } from "react";
import { Table, FlexboxGrid, IconButton } from 'rsuite';
import axios from '../../services/axios';
import EditIcon from '@rsuite/icons/Edit';
import TrashIcon from '@rsuite/icons/Trash';
import ModalEdit from "../../components/modal/ModalEdit";
import { AvatarGroup, Avatar } from 'rsuite';
import { Uploader } from 'rsuite';
import CameraRetroIcon from '@rsuite/icons/legacy/CameraRetro';



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


      async function handleDelete(RowId){
        await axios.delete(`/clients/${RowId}`)
          setAtt(true)
      }


      useEffect(() => {
        async function getData(){
             const response = await axios.get('/clients')
             const {data} = response
             setClients(data)
        }
          getData()
          setAtt(false)
      }, [Att])
     
    
    return( 
      <div className="show-grid"> 
      <FlexboxGrid align="middle" justify="center" style={{ marginTop: '20px' }}>
        <FlexboxGrid.Item colspan={6}>
    <Table
      height={400}
      data={clients}
      onRowClick={rowData => {
        console.log(rowData.profiles)
        setId(rowData.id);
        setNameModal(rowData.name);
        setEmailModal(rowData.email);

      }} >

        <Column width={150}>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>
        <Column width={150}>
          <HeaderCell>Profile</HeaderCell>
          <Cell style={{ padding: '6px' }}>
          {rowData => (     
              <div>  
                <AvatarGroup spacing={6}>
                   <Avatar circle src = {rowData.profiles.map(img => img.url)}  />
                </AvatarGroup>
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
                 emaiModal ={emailModal}
                 nameModal ={nameModal}
            />
   </div> 
  )
}

