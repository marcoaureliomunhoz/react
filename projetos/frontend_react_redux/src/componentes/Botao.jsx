import React from 'react'
import './Botao.css'

export default props => 
    <button {...props} className='botao'>{props.texto}</button>