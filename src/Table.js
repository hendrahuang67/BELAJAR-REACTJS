import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Pekerjaan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Andi</td>
            <td>Dokter</td>
          </tr>
          <tr>
            <td>Bela</td>
            <td>Wiraswasta</td>
          </tr>
          <tr>
            <td>Clara</td>s
            <td>Karyawan Bank</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table