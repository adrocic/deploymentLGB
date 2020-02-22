import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import customTheme from './theme';

import SummonerPage from './Views/SummonerPage';
import ChampionsPage from './Views/ChampionsPage';
import { ReactQueryConfigProvider, ReactQueryProviderConfig } from 'react-query';

const App = (): JSX.Element => {
    const queryConfig: ReactQueryProviderConfig = {
        retry: 2,
        staleTime: 0,
        cacheTime: 5 * 60 * 1000,
        refetchAllOnWindowFocus: false,
        refetchInterval: false,
        suspense: false,
    };

    return (
        <div className="App">
            <ThemeProvider theme={customTheme}>
                <CSSReset />
                <ReactQueryConfigProvider config={queryConfig}>
                    <Router>
                        <Switch>
                            <Route path="/" exact render={(): JSX.Element => <Redirect to={'/home'} />} />
                            <Route path="/summoners/:name" component={SummonerPage} />
                            <Route path="/champions" component={ChampionsPage} />
                        </Switch>
                    </Router>
                </ReactQueryConfigProvider>
            </ThemeProvider>
        </div>
    );
};

export default App;
