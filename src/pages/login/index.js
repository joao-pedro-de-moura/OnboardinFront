import React from 'react';

    import { Container, Form, Schema } from 'rsuite';
    import 'rsuite/dist/rsuite.min.css';
    import { Button } from 'rsuite';
    import { ConteinerL } from './styles';
 const model = Schema.Model({
  email: Schema.Types.StringType().isRequired('Please enter a valid email address..'),
  password: Schema.Types.StringType().isEmail('Please enter a valid password address.')
});

const TextField = ({ name, label, accepter, ...rest }) => (
  <Form.Group controlId={name}>
    <Form.ControlLabel>{label} </Form.ControlLabel>
    <Form.Control name={name} accepter={accepter} {...rest} />
  </Form.Group>
);
  export default function Login() {
    
      return (
        <ConteinerL>
          <Form model={model}>
            <TextField name="Email" label="Email" />
            <TextField name="password" label="Password" />
            <Button appearance="primary" type="submit">
               Submit
            </Button>
          </Form>
       </ConteinerL>
      );
    
  }

 