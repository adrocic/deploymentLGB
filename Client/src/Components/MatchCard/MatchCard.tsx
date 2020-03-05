import React from 'react';
import {
    Flex,
    Image,
    Text,
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

    return (
        <>
            <Flex
                as={Button}
                onClick={onOpen}
                width={{ base: 400, md: 600, lg: 800 }}
                height="fit-content"
                bg="gray.50"
                rounded="md"
                boxShadow="md"
                p={5}
            >
                {data && singleMatch.data && championPlayed ? (
                    <>
                        <Image
                            rounded="full"
                            size="75px"
                            src={`https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/${championPlayed.image.full}`}
                        />
                        <Flex direction="column" height="75px" justifyContent="space-between">
                            <Text fontSize={12} color="gray.400">
                                {championPlayed.name}
                            </Text>
                            <Text fontSize={12} color="gray.500">
                                {matchInfo.lane}
                            </Text>
                        </Flex>
                        <Flex direction="column" width="inherit" align="center">
                            <Text fontSize={16}>Ranked 5x5</Text>
                            <ItemStack singleMatchData={singleMatch.data.data || null} champId={champId} />
                        </Flex>
                        <Text alignSelf="start" ml="auto" color="gray.400" fontWeight="normal" fontSize={12}>
                            {formattedDate}
                        </Text>
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
