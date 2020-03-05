import React, { useState } from 'react';
import { Flex, Stack, RadioButtonGroup, Icon, Text } from '@chakra-ui/core';
import { fetchMatchlist } from 'Services/API/matches';
import { useQuery } from 'react-query';

import MatchCard from 'Components/MatchCard';
import CustomRadio from 'Components/CustomRadio';

type MatchListProps = {
    accountId: string;
    queue?: number;
};

const MatchList: React.FC<MatchListProps> = ({ accountId }) => {
    const [selectedQueue, setSelectedQueue] = useState('');
    const { data, isLoading, error } = useQuery(['match', { accountId, queue: selectedQueue }], fetchMatchlist);

    const changeHandler = (value: any): void => {
        setSelectedQueue(value);
    };

    return (
        <Flex direction="column" justify="start">
            <RadioButtonGroup mb={5} defaultValue="ranked" isInline onChange={(value): void => changeHandler(value)}>
                <CustomRadio value="ranked">Ranked Solo/Duo</CustomRadio>
                <CustomRadio value="normals">Normals</CustomRadio>
            </RadioButtonGroup>
            <Flex direction="column">
                {data?.data ? (
                    <Flex direction="column">
                        <Stack spacing={6}>
                            {data?.data?.map(match => (
                                <Flex key={match.gameId}>
                                    <MatchCard matchInfo={match} champId={match.champion} />
                                </Flex>
                            ))}
                        </Stack>
                    </Flex>
                ) : isLoading ? (
                    <Flex>loading...</Flex>
                ) : error ? (
                    <Flex
                        width={{ base: 400, md: 600, lg: 800 }}
                        height="fit-content"
                        bg="gray.50"
                        rounded="md"
                        boxShadow="md"
                        p={5}
                        direction="column"
                        align="center"
                    >
                        <Icon name="info-outline" size="200px" color="gray.300" />
                        <Text fontSize={24} color="gray.500" mt={5}>
                            No "{selectedQueue}" Games Played Recently
                        </Text>
                    </Flex>
                ) : null}
            </Flex>
        </Flex>
    );
};

export default MatchList;
