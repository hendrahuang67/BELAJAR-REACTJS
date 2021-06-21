import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {

  const [addrtype, setAddrtype] = useState(["Working", "Home", "school"])
  const Add = addrtype.map(Add => Add
  )
  const handleAddrTypeChange = (e) => {console.clear(), console.log((addrtype[e.target.value]))}

  return (
    < select
      onChange={e => handleAddrTypeChange(e)}
      className="browser-default custom-select" >
      {
        Add.map((address, key) => <option key={key}value={key}>{address}</option>)
      }
    </select >)


}

render(<App />, document.getElementById('root'));
