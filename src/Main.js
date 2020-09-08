import React, { Component } from 'react';
import namaMakanan from './components/home/lib/Food';

const namaMakanan2 = [
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
];

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Menu Makanan',
      title2: 'Menu Minuman', // 29. set default value
      inputValue: '',
      inputKota: '',
      // list dan key dari state
      namaMakanan: [
        {
          nama: 'Mie Ayam',
          harga: 10000,
        },
        {
          nama: 'Bakso',
          harga: 12000
        },
        {
          nama: 'Soto Ayam',
          harga: 15000
        },
      ],
    }
    this.rubahData = this.rubahData.bind(this);
    this.handleChange = this.handleChange.bind(this); // handle event onchange
  }

  handleChange(value, e) { // dynamic method
    this.setState({
      [value]: e.target.value, // 30
    });
  }

  rubahData() {
    this.setState((state, props) => {
      return {
        title: state.title2,
        title2: state.title,
      };
    });
  }

  componentDidMount() {
    console.log('Jalan: componentDidMount');
  }

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <h3>{this.state.title2}</h3>
        <input type='text' onChange={(e) => this.handleChange('inputValue', e)} />
        <p>Inputanmu: {this.state.inputValue}</p>
        <input type='text' value={this.state.inputKota} placeholder='kota'
          onChange={(e) => this.handleChange('inputKota', e)} /> {/* nilai value error di console.log */}
        <p>Kotamu: {this.state.inputKota}</p>
        <button onClick={this.rubahData}>Ubah Makanan</button>
        <h3>List Makanan dari State</h3>
        {this.state.namaMakanan.map((value, index) => {
          return (
            <div key={index + 1}>
              <ul>
                <li>No {index + 1}</li>
                <li>Nama {value.nama}</li>
                <li>Harga {value.harga}</li>
              </ul>
            </div>
          )
        })}
        <h3>List Makanan dari Props</h3>
        {this.props.namaMakanan.map((value, index) => {
          return (
            <div key={index + 1}>
              <ul>
                <li>No {index + 1}</li>
                <li>Nama {value.nama}</li>
                <li>Harga {value.harga}</li>
              </ul>
            </div>
          )
        })}
        <h3>List Makanan dari Internal File</h3>
        {namaMakanan2.map((value, index) => {
          return (
            <div key={index + 1}>
              <ul>
                <li>No {index + 1}</li>
                <li>Nama {value.nama}</li>
                <li>Harga {value.harga}</li>
              </ul>
            </div>
          )
        })}
        <h3>List Makanan dari External File (./components/lib/Food.js)</h3>
        {namaMakanan.map((value, index) => {
          return (
            <div key={index + 1}>
              <ul>
                <li>No {index + 1}</li>
                <li>Nama {value.nama}</li>
                <li>Harga {value.harga}</li>
              </ul>
            </div>
          )
        })}
      </div>
    );
  };
}

export default Main;