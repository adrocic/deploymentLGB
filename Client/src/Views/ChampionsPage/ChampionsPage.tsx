import React from 'react';
import { Flex } from '@chakra-ui/core';

import NavBar from 'Components/NavBar';

const ChampionsPage = (): JSX.Element => {
    return (
        <Flex display="column">
            <NavBar />
            <Flex>This is the champions page!</Flex>
        </Flex>
    );
};

export default ChampionsPage;
