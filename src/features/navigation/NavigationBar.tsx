import { NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navigationBar.css';
import logo from '../../images/logo.png';
import profilePic from '../../images/profile.png';

const NavigationBar = () => {
    return (
        <>
        <Navbar className="navBar">
          <img src={logo} className='logo'/>
            <Nav className="me-auto">
              <Nav.Link href=''>УСОБ Семково</Nav.Link>
              <Nav.Link href="/reservation">Резервация</Nav.Link>
              <NavDropdown title="Ресторант" id="basic-nav-dropdown">
                <NavDropdown.Item href="/restaurant">Меню</NavDropdown.Item>
                <NavDropdown.Item href="/dailyMenu">Дневно меню</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Писти" id="basic-nav-dropdown">
                <NavDropdown.Item href="/skiSlopes">Карта и информация</NavDropdown.Item>
                <NavDropdown.Item href="/skiSlopesPrices">Цени</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='/skiEqipment'>Ски екипировка</Nav.Link>
              <Nav.Link href='/sauna'>Сауна</Nav.Link>
              {/* <Nav.Link href='/profile'>
                <img src={profilePic} className='profilePic'/>
              </Nav.Link> */}
               <Nav.Link href='/login'>
                <img src={profilePic} className='profilePic'/>
              </Nav.Link>
            </Nav>
        </Navbar>
      </>
    )
}; 

export default NavigationBar;