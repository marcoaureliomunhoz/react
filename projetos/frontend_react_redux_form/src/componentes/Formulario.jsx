import React from 'react'
import { reduxForm } from 'redux-form'

import './Formulario.css'

export default props => 
    <form {...props}>{props.children}</form>