import React from 'react'
import { useTheme } from 'styled-components'
import { StaticText } from '../StaticText/StaticText'
import { Clickable } from './styles'

interface IButtonProps {
    text?: string
    click?: () => void
    width?: string
}

const Button: React.FC<IButtonProps> = ({
    text,
    click,
    width
}) => {

    const theme = useTheme()

    return (
        <Clickable onClick={click} width={width}>
            <StaticText width='100%' textAlign='center' bold textColor={theme.secondaryColorText}>{text}</StaticText>
        </Clickable>
    )
}

export default Button