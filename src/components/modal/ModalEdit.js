import React, {useEffect, useState} from 'react';
import { Modal, Button, Input } from 'rsuite';
import axios from '../../services/axios';
import { useSelector, useDispatch } from "react-redux";
import * as actions from'../../store/actions'

export default function Modaledit({open, onClose}){
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const id = useSelector(state => state.auth.user.id)
    const nameStore = useSelector(state => state.auth.user.name)
    const emailStore = useSelector(state => state.auth.user.email)
    useEffect(() => {
      setName(nameStore)


    }, [nameStore, emailStore, id ])

    function HandleClick(){
     dispatch(actions.editRequest({name, id, email}))
      console.log(name)
      
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
             <Input  name="name" value={name} onChange={e => setName(e)} />
             <Input  name="email" value={email} onChange={e => setEmail(e)} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={HandleClick} appearance="primary">
            Ok
          </Button>
          <Button onClick={onClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
