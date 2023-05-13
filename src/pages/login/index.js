import {
  Container,
  Content,
  Form,
  ButtonToolbar,
  Button,
  Panel,
  FlexboxGrid,

} from 'rsuite';
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions'


export default function Login(){
  const estado = useSelector(state => state)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const dispatch = useDispatch()

    function HandleClick(e){
      
      dispatch(actions.clicaBotaoRequest({email, password}))
        
}

  return (
      <div className="show-fake-browser login-page">
      <Container>
        <Content>
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={12}>
              <Panel header={<h3>Login</h3>} bordered>
                <Form fluid>
                  <Form.Group>
                    <Form.ControlLabel> email </Form.ControlLabel>
                    <Form.Control name="email" value={email} onChange={e => setEmail(e)}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.ControlLabel>Password</Form.ControlLabel>
                    <Form.Control name="password" type="password" autoComplete="off"
                     value={password} onChange={e => setPassword(e)}  />
                  </Form.Group>
                  <Form.Group>
                    <ButtonToolbar >
                      <Button appearance="primary" onClick={async () => HandleClick}>Sign in</Button>
                      <Button appearance="link" >Forgot password?</Button>
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

 