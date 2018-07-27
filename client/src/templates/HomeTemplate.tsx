import * as React from 'react';
import styled from '../styled-components'
import HomeContainer from '../containers/HomeContainer';

const Wrapper = styled.div``;

class HomeTemplate extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <Wrapper>
        <HomeContainer />
      </Wrapper>
    )
  }
}

export default HomeTemplate;