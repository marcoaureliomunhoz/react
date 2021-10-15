import React from 'react'
import { Container, Left, Center, Right, Title, IContainerProps} from './styles'

interface IHeaderProps {
    title: string
    size?: string
    leftContent?: React.ReactNode
    rightContent?: React.ReactNode
}

export const Header: React.FC<IHeaderProps & IContainerProps> = ({
    title,
    size,
    leftContent,
    rightContent,
    borderLeftWidth,
    borderRightWidth
}) => {

    return (
        <Container borderLeftWidth={borderLeftWidth} borderRightWidth={borderRightWidth}>
            <Left>{leftContent}</Left>
            <Center><Title size={size}>{title}</Title></Center>
            <Right>{rightContent}</Right>
        </Container>
    )
}