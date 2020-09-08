import React, { Component } from "react";
import './components/home/header.css';

// CSS Inline
const judul = {
  color: 'red',
  backgroundColor: 'blue',
  marginTop: '10px',
}
// Class Component Header
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      judul: 'ini judul dari state',
      dataMakanan: this.props.list,
      nama: 'Zuhad',
      statusRendering: true,
    };
    this.handlePesan = this.handlePesan.bind(this); // agar bisa mengakses data state/props
    this.handleElement = this.handleElement.bind(this);
  }

  handlePesan(pesan, e) {
    // alert(this.state.judul);
    e.preventDefault();
    alert(pesan);
    alert('Hai');
  }
  handleElement() {
    this.setState((state, props) => {
      return { statusRendering: !state.statusRendering };
    });
  }

  render() {
    return (
      <div>
        {
          this.state.statusRendering === true ? (
            <div>
              <h1 style={{ color: 'dodgerblue', backgroundColor: 'green' }}>Selamat Datang</h1>
              <h2 style={judul} className='subJudul'>Hai, {this.state.nama}</h2>
            </div>
          ) : (
              <div>
                <h1 className='subJudul'>Selamat tinggal</h1>
                <h2 id='judulH2'>See u, {this.state.nama}</h2>
              </div>
            )
        }
        <button onClick={this.handleElement}>Change</button>
      </div>
    );
  }
}

export default Header;