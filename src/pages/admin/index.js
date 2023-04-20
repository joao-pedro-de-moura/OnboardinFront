import React, { useState, useEffect } from "react";
import { Table, FlexboxGrid, IconButton } from 'rsuite';
import axios from '../../services/axios';
import EditIcon from '@rsuite/icons/Edit';
import TrashIcon from '@rsuite/icons/Trash';
import ModalEdit from "../../components/modal/ModalEdit";

  



  export default function Admin(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { Column, HeaderCell, Cell } = Table;
    const [clients, setClients] = useState([])
    const [Att, setAtt] = useState(false)
    const [id, setId] = useState('')


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
        
        setId(rowData.id);
        
      }}
        >
        <Column width={150}>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
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
            />
   </div> 
      
      
    )
}

