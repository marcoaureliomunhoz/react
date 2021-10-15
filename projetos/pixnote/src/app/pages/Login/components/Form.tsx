import React from 'react'
import { isMobile } from 'react-device-detect'
import { Panel } from '../../../components/Layout/Panel'

interface IFormProps {
    width?: string
}

const Form: React.FC<IFormProps> = ({
    children,
    width
}) => {

    return (
        <Panel
            marginLeft='auto'
            marginRight='auto'
            width={width || (isMobile ? '95%' : '75%')}
        >{children}</Panel>
    )
}

export default Form
