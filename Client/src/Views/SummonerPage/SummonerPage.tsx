import React from 'react';
import { Flex, Box } from '@chakra-ui/core';
import { fetchSummonerByName } from 'Services/API/summoner';
import { useQuery } from 'react-query';

import NavBar from 'Components/NavBar';
import SummonerCard from 'Components/SummonerCard';
import StatsCard from 'Components/StatsCard';
import MatchList from 'Components/MatchList';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
    name: string;
}

type MatchProps = RouteComponentProps<MatchParams>;

const SummonerPage = (props: MatchProps): JSX.Element => {
    const summonerName = props.match.params.name;
    const { data, isLoading, error } = useQuery(['summoner', { summonerName }], fetchSummonerByName);

    return (
        <>
            <NavBar />
            <Box p={16}>
                {isLoading ? (
                    <Flex>loading...</Flex>
                ) : data ? (
                    <>
                        <Flex>
                            <Flex direction="column" maxWidth="fit-content">
                                <SummonerCard
                                    iconNumber={data.data.profileIconId}
                                    name={data.data.name}
                                    level={data.data.summonerLevel}
                                />
                                <Flex alignSelf="center" mt={5}>
                                    <StatsCard
                                        leaguePoints={data.data.leaguePoints}
                                        wins={data.data.wins}
                                        losses={data.data.losses}
                                        rank={data.data.rank}
                                        tier={data.data.tier}
                                    />
                                </Flex>
                            </Flex>
                            <Flex justifyContent="center" flexGrow={1}>
                                <MatchList accountId={data.data.accountId} />
                            </Flex>
                        </Flex>
                    </>
                ) : error ? (
                    <Flex>error, check console{console.log(error)}</Flex>
                ) : null}
            </Box>
        </>
    );
};

export default SummonerPage;
