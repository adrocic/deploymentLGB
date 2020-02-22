import React from 'react';
import { Match } from 'Services/API/match';
import { Stack } from '@chakra-ui/core';

import ItemBox from 'Components/ItemBox';

type ItemStackProps = {
    singleMatchData: Match | null;
    champId: number | undefined;
};

const ItemStack: React.FC<ItemStackProps> = ({ singleMatchData, champId }): JSX.Element => {
    const found = singleMatchData?.participants.find(e => e.championId === champId);

    return (
        <Stack isInline>
            <ItemBox leagueItemId={found?.stats.item0} />
            <ItemBox leagueItemId={found?.stats.item1} />
            <ItemBox leagueItemId={found?.stats.item2} />
            <ItemBox leagueItemId={found?.stats.item3} />
            <ItemBox leagueItemId={found?.stats.item4} />
            <ItemBox leagueItemId={found?.stats.item5} />
            <ItemBox leagueItemId={found?.stats.item6} />
        </Stack>
    );
};

export default ItemStack;
