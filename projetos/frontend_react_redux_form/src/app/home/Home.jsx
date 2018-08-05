import React, { Component } from 'react';
import './Home.css';

import Topo from '../../componentes/Topo'
import Titulo from '../../componentes/Titulo'

class Index extends Component {
  render() {
    return (
        <div>
            <Topo/>
            <Titulo nome='Home'/>
        </div>
    );
  }
}

export default Index;