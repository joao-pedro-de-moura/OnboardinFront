import React, { useState} from 'react';
import { Modal, Button, Input } from 'rsuite';
import axios from '../../services/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import {AvatarGroup,  Avatar } from 'rsuite';


export default  function Modaledit({open, onClose, id, nameModal, emailModal, profileModal}){
  
  const [fileList, setFileList] = React.useState([]);
  const uploader = React.useRef();
   

  const estado = useSelector(state => state)
    const [foto, setFoto] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [err, setErr] = useState([])
    
   async function HandleClick(e){ 
      e.preventDefault()
      onClose()
      await axios.put(`/clients/${id}`, {
        email,
        name
        
      }, {headers: {
        Authorization : `Bearer ${estado.auth.token}`
        }}).catch(async function (error) {
        const erros = await error.response.data;
       setErr(erros.map(err => err))
      });
     
      err.map(err => toast.warning(err.message));
      
    }

    const handleChange = async e =>{
      const file = e.target.files[0]
      setFoto(file)
      const formData = new FormData()
      formData.append('user_id', id)
      formData.append('foto', foto)
      console.log(foto)
        try{
             await axios.post('/', formData, {
               
            })
         
          }catch{
              console.log(foto) 
          } 

    }
    
  return (
    <>

      <Modal
        open={open}
        onClose={onClose}
        
      >
        <Modal.Header>
          <Modal.Title>Modal Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <AvatarGroup spacing={6}>
        <Avatar circle src = {profileModal}  />
        </AvatarGroup >
          name  <Input  name="name"  value={nameModal} onChange={e => setName(e)} />
          email <Input  name="email"   value={emailModal} onChange={e => setEmail(e)} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={HandleClick} appearance="primary">
            Ok
          </Button>
          <Button onClick={onClose} appearance="subtle">
            Cancel
          </Button>
          <input type ='file' id='foto' onChange={ handleChange} />
         
        </Modal.Footer>
     
      </Modal>
    </>
  );
}
