import * as React from 'react';
import styled from '../styled-components'

interface props {
  title: string,
}

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 4.5rem;
  background: #F6F8FC;
  box-shadow: 0px 0px 2px 1px #DADDDF;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = styled.div`
  font-size: 30px;
`;

class Header extends React.Component<props, {}> {
  public render() {
    return (
      <Wrapper>
        <HeaderTitle>
          {this.props.title}
        </HeaderTitle>
      </Wrapper>
    )
  }
}

export default Header;