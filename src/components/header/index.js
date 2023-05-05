import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions'
export default function Header(){
    const dispatch = useDispatch()
    const handleLogout = e => {
        dispatch(actions.clicaBotaoErro())
    }
    return(
  <Navbar>
   
    <Nav>
      <Nav.Item appearance="link" href='/admin' >Home</Nav.Item>
      <Nav.Item appearance="link" href='/register'>Register</Nav.Item>
      <Nav.Item appearance="link" href='/'>Sign In</Nav.Item>
    </Nav>
    <Nav pullRight>
      <Nav.Item  onClick={handleLogout}>Logout</Nav.Item>
    </Nav>
  </Navbar>
    )
}