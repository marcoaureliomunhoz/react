import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { ClientActions } from '../../actions/ClientActions'
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon'
import Field from '../../components/Field/Field'
import { Body } from '../../components/Layout/Body'
import { Header } from '../../components/Layout/Header/Header'
import Page from '../../components/Layout/Page/Page'
import { IInititalState } from '../../reducers/clientReducer'
import { Routes } from '../../Routes'
import Form from './components/Form'

const ClientIdentify: React.FC = () => {

    const history = useHistory()
    const { id } = useSelector<{client: IInititalState}, {id?: string}>(state => {
        return {
            id: state.client.id
        }
    })
    const dispatch = useDispatch()
    //const clientActions = new ClientActions(dispatch)
    //Ao usar useMemo evitamos a recriação de clientActions toda vez que o componente é renderizado
    const clientActions = React.useMemo(() => new ClientActions(dispatch), [dispatch])
    const storeIdentification = (value: string) => {
        clientActions.setIdentification(value)
    }

    const leftContentHeader = <ButtonIcon icon={faChevronLeft} click={backToHome} />

    console.log('renderizando ClientIdentify...')

    return (
        <Page>
            <Header 
                leftContent={leftContentHeader}
                title='Cliente'
            />
            <Body>
                <Form>
                    <Field title='Identificação' value={id} change={(value) => storeIdentification(value)} />
                </Form>
            </Body>
        </Page>
    )

    function backToHome() {
        history.replace(Routes.Index)
    }
}

export default ClientIdentify
