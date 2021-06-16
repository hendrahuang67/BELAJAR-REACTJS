import React, { useState } from "react";

export default function MyComponent(props) {
  const [name, setName] = useState("John");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <section>
     <div>
      <h1>Provinsi</h1>
      <select>
      <option value={name} 
        onChange={handleNameChange}>Kepulauan Riau</option>
      </select>

      <h1>Kota</h1>
      <select>
      <option>Batam</option>
      <option>Natuna</option>
      </select>
    </div>
    </section>
  );
}