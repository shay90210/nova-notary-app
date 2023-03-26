import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Collapse,
    NavbarToggler,
    NavbarBrand
} from 'reactstrap';

import { useState } from 'react';

const NavigationBar = ({ ...args }) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Navbar sticky='top' className='main-nav' expand='md' light style={{ backgroundColor: '#AA90B4' }}>
            <NavbarBrand className='brand-name'>
                <img
                    src='/imgs/NovaNotary-Logo.png'
                    alt='notary brand logo'
                    className='brand-logo'
                />
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <NavItem>
                        <NavLink className='nav-link' href='/'>HOME</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' href='/contact'>CONTACT</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default NavigationBar; 