import React, { Component } from 'react';
import ApiWilayah from './CascadeApiWilayah';
class App extends Component {
  state = {
    address: ''
  };
  onChange = (value, all) => {
    this.setState({ address: all.map(s => s.label).join(', ') });
  };
  render() {
    const { address } = this.state;
    return (
      <div style={style.container}>
        <h2 style={style.bottomSpace}>Silakan Pilih Provinsi dan Kota</h2>
        <ApiWilayah
          style={style.bottomSpace}
          size='large'
          onChange={this.onChange}
          placeholder='Set Address'
        />
        <i>{address}</i>
      </div>
    );
  }
}
const style = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomSpace: { marginBottom: '2em' }
};
export default App;
