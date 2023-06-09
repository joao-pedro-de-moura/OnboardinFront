import React, { useEffect, useState} from 'react';
import { Modal, Button, Input } from 'rsuite';
import axios from '../../services/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import {AvatarGroup,  Avatar } from 'rsuite';
import { set } from 'lodash';


export default  function Modaledit({open, onClose, id, nameModal, emailModal, profileModal, getData, passwordModal}){
  
  
  const uploader = React.useRef();
  

  const estado = useSelector(state => state)
    const [foto, setFoto] = useState('')
    const [name, setName] = useState(nameModal)
    const [email, setEmail] = useState(emailModal)
    const [err, setErr] = useState([])
    const [file, setFile] = useState(profileModal)
    const [password, setPassword] = useState(passwordModal)
    const [newPassword, setNewPassword] = useState(passwordModal)

    useEffect(()=>{
      setName(nameModal);
      setEmail(emailModal)
      setFile(profileModal)
     },[nameModal, emailModal, profileModal])
     
     
     async function changePassword(){
      await axios.put(`/updatePassword/${id}`, {
        password,
        newPassword
        
      }).catch(async function (error) {
        const erros = await error.response.data;
       setErr(erros.map(err => err))
      });
     
      err.map(err => toast.warning(err.message));
      
    }

   async function HandleClick(e){ 
      e.preventDefault()
      onClose()
      handleSend()
      changePassword()
      await axios.put(`/clients/${id}`, {
        email,
        name
        
      },).catch(async function (error) {
        const erros = await error.response.data;
       setErr(erros.map(err => err))
      });
     
      err.map(err => toast.warning(err.message));
      
    }

   
    
    const handleChange = (e) =>{
      
      setFile(e.target.files[0])
     
    }


    

    const handleSend = async () =>{
      onClose()
    
      const formData = new FormData()
      formData.append('user_id', id)
      formData.append('foto', file)
      console.log(file)
        try{
             await axios.post('/upload', formData, {
               
            }).then(() => {
              getData()
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
          nome  <Input  name="name"  value={name} onChange={e => setName(e)} />
          email <Input  name="email"   value={email} onChange={e => setEmail(e)} />
          senha  <Input  name="password"   onChange={e => setPassword(e)} />
          nova senha <Input  name="newPassword"    onChange={e => setNewPassword(e)} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={HandleClick} appearance="primary">
            Ok
          </Button>
          <Button onClick={onClose} appearance="subtle">
            Cancel
          </Button>
          <input type ='file' id='foto' onChange={handleChange} />
         
        </Modal.Footer>
     
      </Modal>
    </>
  );
}
