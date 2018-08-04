import React from 'react'
import { Link } from 'react-router-dom'

import './Topo.css'

export default props => 
    <div className='topo'>
        <Link to='/'>Home</Link>
        <Link to='/editoras'>Editoras</Link>
    </div>