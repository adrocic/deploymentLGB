import React from 'react';
import { Flex, Text, Image, Stack } from '@chakra-ui/core';

type SummonerCardProps = {
    iconNumber: number;
    name: string;
    level: number;
};

const SummonerCard: React.FC<SummonerCardProps> = ({ iconNumber, name, level }): JSX.Element => {
    return (
        <Flex rounded="lg" boxShadow="md" maxWidth="fit-content" p={5} bg="gray.50" direction="column">
            <Text fontSize={12} fontStyle="italic" alignSelf="center">
                Summoner
            </Text>
            <Flex>
                <Image
                    src={`https://ddragon.leagueoflegends.com/cdn/10.3.1/img/profileicon/${iconNumber}.png`}
                    size="200px"
                    p={3}
                    rounded={20}
                />
                <Stack spacing={3}>
                    <Text fontSize={36} fontWeight="bold">
                        {name}
                    </Text>
                    <Text fontSize={16}>Level: {level}</Text>
                </Stack>
            </Flex>
        </Flex>
    );
};

export default SummonerCard;
