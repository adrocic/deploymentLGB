import React from 'react';
import { Flex, Text, Image, Box } from '@chakra-ui/core';

type StatsCardProps = {
    leaguePoints: number;
    wins: number;
    losses: number;
    rank: string;
    tier: string;
};

const StatsCard: React.FC<StatsCardProps> = ({ leaguePoints, wins, losses, rank, tier }) => {
    const winRate = ((wins / (wins + losses)) * 100).toFixed(1);

    return (
        <>
            {tier ? (
                <Flex rounded="lg" bg="gray.100" boxShadow="md" direction="column" maxWidth="fit-content" p={5}>
                    <Image src={require(`Assets/ranked-emblems/${tier}.png`)} size="200px" />
                    <Flex direction="column" align="center">
                        <Flex mt={5}>
                            <Text mr={3} color="gray.600">
                                {tier} {rank}
                            </Text>
                            <Text color="blue.400">{leaguePoints} lp</Text>
                        </Flex>

                        <Text color="green.500">
                            {wins}W - {losses}L
                        </Text>
                        <Text color="gray.500">Ratio: {winRate}%</Text>
                    </Flex>
                </Flex>
            ) : (
                <Flex rounded="lg" bg="gray.50" boxShadow="md" direction="column" maxWidth="fit-content" p={5}>
                    <Image src={require(`Assets/ranked-emblems/UNRANKED.png`)} size="200px" />
                    <Text color="red.700" textAlign="center" textTransform="uppercase">
                        Unranked
                    </Text>
                </Flex>
            )}
        </>
    );
};

export default StatsCard;
