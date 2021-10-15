import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import Button from '../../components/Button/Button'
import Field from '../../components/Field/Field'
import { Body } from '../../components/Layout/Body'
import { Header } from '../../components/Layout/Header/Header'
import Page from '../../components/Layout/Page/Page'
import { Panel } from '../../components/Layout/Panel'
import UserContext from '../../contexts/UserContext'
import { Routes } from '../../Routes'
import Form from './components/Form'

const Login: React.FC = () => {

    const { setState } = useContext(UserContext)
    const history = useHistory()
    const [name, setName] = useState<any>()

    return (
        <Page>
            <Header title='Identificação' />
            <Body>
                <Form>
                    <Field title='Usuário' value={name} change={(value) => setName(value)} />
                    <Panel marginTop='10px' alignItems='flex-start'>
                        <Button text='Entrar' click={clickEntrar} />
                    </Panel>
                </Form>
            </Body>
        </Page>
    )

    function clickEntrar() {
        setState({ name })
        history.replace(Routes.Index)
    }
}

export default Login
