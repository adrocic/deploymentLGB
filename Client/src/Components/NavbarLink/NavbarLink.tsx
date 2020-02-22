import React from 'react';
import { PseudoBox } from '@chakra-ui/core';
import { NavLink } from 'react-router-dom';

type Props = {
    children?: React.ReactNode;
    to: string;
};

const NavbarLink: React.FC<Props> = ({ to, children }): JSX.Element => {
    return (
        <PseudoBox mr={2} py={6} _hover={{ bg: 'white', color: 'yellow.500', transform: 'translate(0, 3px)' }}>
            <NavLink
                to={to}
                exact
                style={{ textDecoration: 'none', padding: '24px 8px' }}
                activeStyle={{
                    backgroundColor: 'white',
                    color: '#D69E2E',
                }}
            >
                {children}
            </NavLink>
        </PseudoBox>
    );
};

export default NavbarLink;
