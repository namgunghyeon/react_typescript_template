import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from '../styled-components'
import HeaderContainer from '../containers/HeaderContainer';
import HomePage from '../pages/HomePage';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  margin-top: 5rem;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const App = ()=> (
  <React.Fragment>
    <HeaderContainer
      title="Header"
    />
    <AppWrapper>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
      </Switch>
    </AppWrapper>
  </React.Fragment>
);

export default App;