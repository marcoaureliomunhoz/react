import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import { CompA, CompB as CpB } from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaMunhoz from './componentes/FamiliaMunhoz'
// import Membro from './componentes/Membro'
// import Familia from './componentes/Familia'
// import ComponenteClasse from './componentes/ComponenteClasse'
// import Contador from './componentes/Contador'
// import Field from './componentes/Field'
// import fieldReducer from './componentes/FieldReducer'

import CounterReducer from './componentes/Counter/CounterReducer'
import Counter from './componentes/Counter/Counter'

const elemento = document.getElementById('root')

const reducers = combineReducers({
    // field: fieldReducer,
    counter: CounterReducer
})

// Prática 2
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        {/* <PrimeiroComponente valor="Valor do Primeiro Componente"></PrimeiroComponente> */}

        {/* <CompA valor="Componente A"></CompA>
        <CpB valor="Componente B"></CpB> */}

        {/* <MultiElementos></MultiElementos> */}

        {/* <FamiliaMunhoz></FamiliaMunhoz> */}

        {/* <Familia sobrenome="Munhoz">
            <Membro nome="Nelson"></Membro>
            <Membro nome="Nega"></Membro>
        </Familia> */}

        {/* <ComponenteClasse valor="Marco"></ComponenteClasse> */}

        {/* <Contador numeroInicial={0}></Contador> */}

        {/* <Field/> */}

        <Counter/>
    </Provider>
, elemento)

// Prática 1
// ReactDOM.render(<h1>Olá React!</h1>, elemento)