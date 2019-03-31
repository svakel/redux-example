
import * as React from 'react';
import Form from './Form'
import PageInterface from '../PageInterface';

class App extends React.Component<PageInterface, {}> {
  render() {
    return (<div>
      <h1>Welcome <br />to React with Typescript</h1>
      <p>Toimiiko</p>
      <p>The color of this page is: {this.props.color}</p>

      <Form />
    </div>
    );
  }
}

export default App;