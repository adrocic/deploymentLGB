import React from 'react';
import {
    Flex,
    Image,
    Text,
    Stack,
    Spinner,
    Modal,
    Button,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from '@chakra-ui/core';
import { MatchStats } from 'Services/API/matches';
import { fetchChamps } from 'Services/API/champions';
import { fetchMatch } from 'Services/API/match';
import { useQuery } from 'react-query';
import * as moment from 'moment';

import ItemStack from 'Components/ItemStack';

type MatchInfoProps = {
    matchInfo: MatchStats;
    champId: number;
};

const MatchCard: React.FC<MatchInfoProps> = ({ matchInfo, champId }): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { data, isLoading, error } = useQuery('champions', fetchChamps);
    const singleMatch = useQuery(['match', { matchId: matchInfo.gameId }], fetchMatch);

    const formattedDate = matchInfo.timestamp && moment.unix(matchInfo.timestamp / 1000).format('MMM Do YYYY, HH:mm');

    const championPlayed = Object.values(data?.data.data || {}).find(e => e.key === matchInfo.champion.toString());

    const stats = singleMatch.data?.data?.participants.find(e => e.championId === champId)?.stats;

    const kda = `${stats?.kills} / ${stats?.deaths} / ${stats?.assists}`;

    const gameResult = stats && stats.kills > stats.deaths ? 'Victory' : 'Defeat';

    const resultColor = gameResult && gameResult === 'Victory' ? 'green.500' : 'red.400';

    const minutes = singleMatch.data && Math.floor(singleMatch.data.data.gameDuration / 60);
    const seconds = singleMatch.data && Math.floor(singleMatch.data.data.gameDuration % 60);

    const formatDuration = (minutes: any, seconds: any) => {
        if (seconds != null && seconds < 10) {
            return `${minutes}:0${seconds}`;
        } else if (seconds === 0) {
            return `${minutes}:00`;
        } else {
            return `${minutes}:${seconds}`;
        }
    };

    const creepScore = stats && stats.totalMinionsKilled;

    return (
        <>
            <Flex
                as={Button}
                onClick={onOpen}
                width={{ base: 400, md: 600, lg: 800 }}
                height="fit-content"
                bg="gray.100"
                rounded="md"
                boxShadow="md"
                p={5}
            >
                {data && singleMatch.data && championPlayed ? (
                    <>
                        <Flex justify="space-between" width="inherit" alignItems="center">
                            <Flex>
                                <Image
                                    rounded="full"
                                    size="75px"
                                    src={`https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/${championPlayed.image.full}`}
                                />
                                <Flex
                                    direction="column"
                                    height="75px"
                                    justifyContent="space-between"
                                    alignItems="flex-start"
                                >
                                    <Text fontSize={12} color="gray.400">
                                        {championPlayed.name}
                                    </Text>
                                    <Text fontSize={12} color="gray.500">
                                        {matchInfo.lane}
                                    </Text>
                                </Flex>
                            </Flex>
                            <Stack color={resultColor} direction="column" spacing={2}>
                                <Text>{gameResult}</Text>
                                <Text fontWeight="thin" fontSize={18}>
                                    {kda}
                                </Text>
                                <Text color="gray.500" fontSize={14}>
                                    {creepScore}cs
                                </Text>
                            </Stack>

                            <Flex direction="column" align="center">
                                <Text fontSize={16}>Ranked 5x5</Text>
                                <ItemStack singleMatchData={singleMatch.data.data || null} champId={champId} />
                            </Flex>
                            <Stack direction="column" spacing={2}>
                                <Text alignSelf="start" ml="auto" color="gray.400" fontWeight="normal" fontSize={12}>
                                    {formattedDate}
                                </Text>
                                <Text color="gray.600">{formatDuration(minutes, seconds)}</Text>
                            </Stack>
                        </Flex>
                    </>
                ) : isLoading || singleMatch.isLoading ? (
                    <Spinner size="md" />
                ) : error ? (
                    <Image rounded="full" size="75px" />
                ) : null}
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose} preserveScrollBarGap>
                <ModalOverlay />
                <ModalContent rounded="md">
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>Modal Body....</ModalBody>

                    <ModalFooter>
                        <Text ml="auto" color="gray.400" fontWeight="normal" fontSize={12}>
                            {formattedDate}
                        </Text>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default MatchCard;
