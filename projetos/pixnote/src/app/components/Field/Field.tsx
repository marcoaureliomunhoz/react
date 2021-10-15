import React from 'react'
import { StaticText } from '../StaticText/StaticText'
import { Container, Input } from './styles'

interface IFieldProps {
    title?: string
    value?: any
    change?: (value: any) => void
}

const Field: React.FC<IFieldProps> = ({
    title,
    value,
    change
}) => {

    const titleRender = title ? <StaticText width='100%' marginBottom='3px'>{title}</StaticText> : null

    return (
        <Container>
            {titleRender}
            <Input defaultValue={value} onKeyUp={(e: any) => change ? change(e.target.value) : console.log('change event not implemented')}/>
        </Container>
    )
}

export default Field