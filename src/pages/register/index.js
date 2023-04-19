import {
    Container,
    Content,
    Form,
    ButtonToolbar,
    Button,
    Panel,
    FlexboxGrid
  } from 'rsuite';
  import React, {useState} from 'react';
import axios from '../../services/axios';
  

  export default function Register(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    function HandleClick(){
        try{
            axios.post('/clients', {
              email,
              password,
              name
            })
        }catch{
          
        }

    }


    return (
        <div className="show-fake-browser login-page">
        <Container>
          <Content>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>Register</h3>} bordered>
                  <Form fluid >
                    <Form.Group>
                      <Form.ControlLabel> e-mail </Form.ControlLabel>
                      <Form.Control name="email" value={email} onChange={e => setEmail(e)}/>
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel> name </Form.ControlLabel>
                      <Form.Control name="name" value={name} onChange={e => setName(e)} />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>Password</Form.ControlLabel>
                      <Form.Control name="password" type="password" autoComplete="off" 
                      value={password} onChange={e => setPassword(e)}  />
                    </Form.Group>
                    <Form.Group>
                      <ButtonToolbar>
                        <Button appearance="primary" type ="submit" onClick={HandleClick}>Register</Button>
                      </ButtonToolbar>
                    </Form.Group>
                  </Form>
                </Panel>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
        </Container>
      </div>
  
    )
  }