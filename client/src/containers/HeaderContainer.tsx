import * as React from 'react';
import Header from '../components/Header';

interface props {
  title: string,
}

class HeaderContainer extends React.Component<props, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <Header
        {...this.props}
      />
    )
  };
}

export default HeaderContainer;