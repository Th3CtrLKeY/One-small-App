import React from 'react';
import './App.css';

class MyMessage extends React.Component {
  render() {
    return <div><h1>I am a {this.props.name}</h1></div>;
  }
}

function App() {
  return (
    <div>
      <h1> Hello React!! </h1>
      <p> I don't react to react </p>
      {/* using our compnent here */}
      <MyMessage name="Hooman" />
    </div>
  );
}
 
export default App;