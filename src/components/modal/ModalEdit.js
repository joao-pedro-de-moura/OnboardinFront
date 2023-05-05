import React, { useState} from 'react';
import { Modal, Button, Input } from 'rsuite';
import axios from '../../services/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { Uploader } from 'rsuite';
  import CameraRetroIcon from '@rsuite/icons/legacy/CameraRetro';


export default  function Modaledit({open, onClose, id, nameModal, emailModal}){
  
  const [fileList, setFileList] = React.useState([]);
  const uploader = React.useRef();
   

  const estado = useSelector(state => state)

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
          name  <Input  name="name"  value={name} onChange={e => setName(e)} />
          email <Input  name="email"   value={email} onChange={e => setEmail(e)} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={HandleClick} appearance="primary">
            Ok
          </Button>
          <Button onClick={onClose} appearance="subtle">
            Cancel
          </Button>
          <Uploader
        fileList={fileList}
        autoUpload={false}
        action="//jsonplaceholder.typicode.com/posts/"
        onChange={setFileList}
        ref={uploader}
      />
      <hr />
      <Button
        disabled={!fileList.length}
        onClick={() => {
          uploader.current.start();
        }}
      >
        Start Upload
      </Button>
        </Modal.Footer>
     
      </Modal>
    </>
  );
}
