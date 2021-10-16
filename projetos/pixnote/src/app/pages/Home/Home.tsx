import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { faAngleDoubleLeft, faAngleDoubleRight, faBars, faPlus } from '@fortawesome/free-solid-svg-icons'
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon'
import { Body } from '../../components/Layout/Body'
import { Footer } from '../../components/Layout/Footer'
import { Header } from '../../components/Layout/Header/Header'
import Page from '../../components/Layout/Page/Page'
import { StaticText } from '../../components/StaticText/StaticText'
import UserContext from '../../contexts/UserContext'
import { Routes } from '../../Routes'
import Button from '../../components/Button/Button'
import { Panel } from '../../components/Layout/Panel'
import { useSelector } from 'react-redux'
import { IInititalState } from '../../reducers/clientReducer'
import { useServices } from 'react-decoupler'
import { Pix } from '../../models/Pix'
import PixCard from './components/PixCard'
import PixForm from './components/PixForm'
import { PixService as PixServiceClass } from '../../services/PixService'
import { FakeHttpService } from '../../services/FakeHttpService'

const Home: React.FC = () => {

    const [ showSide, setShowSide ] = useState('')
    const { state } = useContext(UserContext)
    const history = useHistory()
    const { clientId } = useSelector<{client: IInititalState}, {clientId?: string}>(state => {
        return {
            clientId: state.client.id
        }
    })
    let fakeHttpService: FakeHttpService | null = null
    //fakeHttpService = new FakeHttpService()
    //const PixServiceClassInject: any = null
    const [PixServiceClassInject] = useServices(['PixService'])
    const [pixList, setPixList] = useState<Pix[]>([])

    const pixService = React.useMemo(() => {
        return PixServiceClassInject ? new PixServiceClassInject() : new PixServiceClass(fakeHttpService)
    }, [PixServiceClassInject, fakeHttpService])

    useEffect(() => {
        if (clientId) {
            pixService.listFromClientId(clientId)
                .then((response: any) => {
                    setPixList(response || [])
                })
        }
    }, [clientId, pixService])

    if (!state.name) {
        history.replace(Routes.Login)
        return null
    }

    const leftSideContent = (
        <>
            <Header
                title='Opções'
                size='1em'
                rightContent={<ButtonIcon icon={faAngleDoubleRight} click={showBody} />}
                borderRightWidth='1px'
            />
            <Body borderRightWidth='1px'>
                <Panel>
                    <Button text='Identificar Cliente' width='98%' click={setClient} marginBottom='5px' />
                    <Button text='Sair' width='98%' click={close} />
                </Panel>
            </Body>
        </>
    )

    const rightSideContent = (
        <>
            <Header
                leftContent={<ButtonIcon icon={faAngleDoubleLeft} click={showBody} />}
                size='1em'
                title='Cadastro'
                borderLeftWidth='1px'
            />
            <Body borderLeftWidth='1px'>
                <Panel>
                    <PixForm
                        model={{
                            clientId: clientId,
                            personName: '',
                            key: '',
                            type: ''
                        }}
                        save={(pix: Pix) => savePix(pix)}
                    />
                </Panel>
            </Body>
        </>
    )

    const leftContentHeader = !showSide ? <ButtonIcon icon={faBars} click={showMenu} /> : null
    const rightContentHeader = !showSide ? <ButtonIcon icon={faPlus} click={showForm} /> : null

    return (
        <Page
            showSide={showSide}
            leftContent={leftSideContent}
            rightContent={rightSideContent}
        >
            <Header 
                leftContent={leftContentHeader}
                title='PixNote' 
                rightContent={rightContentHeader}
            />
            <Body>
            {pixList.map((pix, ipix) => {

                return (
                    <PixCard key={`pix-${ipix}`} model={pix} />
                )
            })}
            </Body>
            <Footer>
                <StaticText width='100%' textAlign='center'>Olá {state.name} - {clientId || '?'}!</StaticText>
            </Footer>
        </Page>
    )

    function showBody() {
        setShowSide('')
    }

    function showMenu() {
        setShowSide('left')
    }

    function showForm() {
        setShowSide('right')
    }

    function setClient() {
        history.replace(Routes.ClientIdentify)
    }

    function close() {
        history.replace(Routes.Login)
    }

    function savePix(pix: Pix) {
        pixService.save(pix)
            .then((response: any) => {
                setPixList(response || [])
                showBody()
            })
    }
}

export default Home
