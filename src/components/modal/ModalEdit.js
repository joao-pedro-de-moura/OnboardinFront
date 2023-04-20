import React, { useState} from 'react';
import { Modal, Button, Input } from 'rsuite';
import axios from '../../services/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from '../toast/Toast';

export default function Modaledit({open, onClose, id}){
  
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [err, setErr] = useState([])
    function HandleClick(e){ 
      e.preventDefault()
       axios.put(`/clients/${id}`, {
        email,
        name
        
      }).catch(function (error) {
        const erros = error.response.data;
       setErr(erros.map(err => err))
      });
      console.log(err)
      err.map(err => toast.warning(err));
      
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
          name  <Input  name="name" label="name" value={name} onChange={e => setName(e)} />
          email<Input  name="email"  label ="email" value={email} onChange={e => setEmail(e)} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={HandleClick} appearance="primary">
            Ok
          </Button>
          <Button onClick={onClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
        <ToastContainer />
      </Modal>
    </>
  );
}
