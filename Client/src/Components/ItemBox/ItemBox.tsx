import React from 'react';
import { Image, Box } from '@chakra-ui/core';

type ItemBoxProps = {
    leagueItemId?: {} | '';
};

const ItemBox: React.FC<ItemBoxProps> = ({ leagueItemId }) => {
    return (
        <>
            {leagueItemId ? (
                <Image
                    rounded="md"
                    size="35px"
                    src={`https://ddragon.leagueoflegends.com/cdn/10.3.1/img/item/${leagueItemId}.png`}
                    m={1}
                />
            ) : (
                <Box size="35px" rounded="md" bg="gray.400" m={1} />
            )}
        </>
    );
};

export default ItemBox;
