import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HomeTemplate from './HomeTemplate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeTemplate> <div>test</div> </HomeTemplate>, div);
  ReactDOM.unmountComponentAtNode(div);
});
