import React from 'react'
import { Container, Content, SideLeft, SideRight } from './styles'

interface IPageProps {
    showSide?: string
    leftContent?: React.ReactNode
    rightContent?: React.ReactNode
}

const Page: React.FC<IPageProps> = ({
    children,
    showSide,
    leftContent,
    rightContent
}) => {

    return (
        <Container>
            <SideLeft showSide={showSide}>
                {leftContent}
            </SideLeft>
            <Content showSide={showSide} style={{
                opacity: showSide ? '0.6' : '1',
                pointerEvents: showSide ? 'none' : 'auto'
            }}>
                {children}
            </Content>
            <SideRight showSide={showSide}>
                {rightContent}
            </SideRight>
        </Container>
    )
}

export default Page
