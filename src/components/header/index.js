import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions'
export default function Header(){
    const dispatch = useDispatch()
    const handleLogout = e => {
        dispatch(actions.clicaBotaoErro())
    }
    return(
  <Navbar>
    <Navbar.Brand href="#">RSUITE</Navbar.Brand>
    <Nav>
      <Nav.Item icon={<HomeIcon appearance="link" href='/' />}>Home</Nav.Item>
      <Nav.Item appearance="link" href='/register'>News</Nav.Item>
      <Nav.Item appearance="link" href='/login'>Products</Nav.Item>
      <Nav.Menu title="About">
        <Nav.Item>Company</Nav.Item>
        <Nav.Item>Team</Nav.Item>
        <Nav.Menu title="Contact">
          <Nav.Item>Via email</Nav.Item>
          <Nav.Item>Via telephone</Nav.Item>
        </Nav.Menu>
      </Nav.Menu>
    </Nav>
    <Nav pullRight>
      <Nav.Item icon={<CogIcon />} onClick={handleLogout}>Settings</Nav.Item>
    </Nav>
  </Navbar>
    )
}