import * as React from 'react';
import styled from '../styled-components'

const Wrapper = styled.div``;

const ResponsiveWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 20px;
  color: #444;
`;

const Item = styled.div`
  text-align: center;
  width: 100px;
  height: 150px;
`;

class HomeContainer extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <Wrapper>
        <main>
          <ResponsiveWrapper>
            <Item>TEST</Item>
          </ResponsiveWrapper>
        </main>
      </Wrapper>
    )
  };
}

export default HomeContainer;