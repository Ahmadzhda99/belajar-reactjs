// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

const Footer = function (props) {
  return (
    <div>
      <hr />
      <h3>Halaman Footer</h3>
      <h3>Component ini dibuat menggunakan Function bukan Class</h3>
      <p>Nilai ini ditampilkan dari props: {props.judul} </p>
      <p>Nama saya: {props.nama} </p>
    </div >
  );
}

export default Footer;