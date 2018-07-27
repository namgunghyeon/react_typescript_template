import * as React from 'react';
import HomeTempate from '../templates/HomeTemplate';

class HomePage extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <HomeTempate />
      </div>
    )
  }
};

export default HomePage;