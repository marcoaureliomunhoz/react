import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useTheme } from 'styled-components'
import { Button } from './styles'

interface IButtonIconProps {
    icon: IconProp,
    click?: () => void
}

export const ButtonIcon: React.FC<IButtonIconProps> = ({
    icon,
    click
}) => {

    const theme = useTheme()

    return (
        <Button onClick={click}>
            <FontAwesomeIcon icon={icon} size='1x' color={theme.secondaryColorText}/>
        </Button>
    )
}