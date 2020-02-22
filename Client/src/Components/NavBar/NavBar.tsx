import React from 'react';
import { Flex, Text } from '@chakra-ui/core';

import NavbarLink from '../NavbarLink/NavbarLink';

const NavBar = (): JSX.Element => {
    return (
        <Flex width="100%" height={{ base: 12, md: 16 }} bg="gray.100" align="center" px={4}>
            <Flex color="blue.600" fontSize={24} mr={12}>
                <Text fontWeight="bold">LoL</Text>
                <Text>game</Text>
                <Text>Buddy</Text>
            </Flex>
            <NavbarLink to="/summoners/drocic">Summoners</NavbarLink>
            <NavbarLink to="/summoners">Leaderboards</NavbarLink>
            <NavbarLink to="/champions">Champions</NavbarLink>
            <NavbarLink to="/summoners">Items</NavbarLink>
        </Flex>
    );
};

export default NavBar;
