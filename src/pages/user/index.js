import React, { useState, useEffect } from "react";
import axios from '../../services/axios';
import { Button } from "rsuite";
import ModalEdit from "../../components/modal/ModalEdit";
 export default function User(){
const [clients, setClients] = useState()
const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(handleClose)

    useEffect(() => {
        async function getData(){
             const response = await axios.get('/clients/1')
             const {data} = response
             
             setClients(data.name)
             
            
         }
         getData()
     }, );
     
     return(
        <div>
            <h1>
            {clients}
            <Button appearance="primary" onClick={handleOpen}>editar</Button>
            <Button appearance="primary">deletar</Button>
            </h1>
            <ModalEdit
                 open={open}
                 onClose={handleClose}
            />
        </div>
        
    )
}