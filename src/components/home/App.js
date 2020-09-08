import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
// import List from './List';
import Top from '../../Top';
// import Main from './Main';
import Form from './lib/Form';
import CustomInput from './CustomInput';

class App extends Component {
  render() {
    return (
      <div>
        <Header list='10 Daftar Makanan' />
        <Top />
        <Form />
        <CustomInput />
        {/* <Main namaMakanan={[
          {
            nama: 'Mie Ayam',
            harga: 10000
          },
          {
            nama: 'Bakso',
            harga: 12000
          },
          {
            nama: 'Soto Ayam',
            harga: 15000
          },
        ]} />
        <h1>- Component dari Class App</h1>
        <List /> */}
        <Footer judul='Footer Halaman' nama='Zuhad' />
      </div>
    );
  }
}

export default App;