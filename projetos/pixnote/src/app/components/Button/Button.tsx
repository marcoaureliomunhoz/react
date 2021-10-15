import React from 'react'
import { useTheme } from 'styled-components'
import { StaticText } from '../StaticText/StaticText'
import { Clickable } from './styles'

interface IButtonProps {
    text?: string
    click?: () => void
    width?: string
    marginBottom?: string
}

const Button: React.FC<IButtonProps> = ({
    text,
    click,
    width,
    marginBottom
}) => {

    const theme = useTheme()

    return (
        <Clickable onClick={click} width={width} marginBottom={marginBottom}>
            <StaticText width='100%' textAlign='center' bold textColor={theme.secondaryColorText}>{text}</StaticText>
        </Clickable>
    )
}

export default Button