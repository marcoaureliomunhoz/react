import React, { useState } from 'react'
import Button from '../../../components/Button/Button'
import Field from '../../../components/Field/Field'
import { Pix } from '../../../models/Pix'

interface IFormProps {
    model?: Pix
    save?: (model: Pix) => void
}

const PixForm: React.FC<IFormProps> = ({
    model,
    save
}) => {
    const [name, setName] = useState<string>(model?.personName || '')
    const [key, setKey] = useState<string>(model?.key || '')

    console.log('renderizando PixForm...')

    return (
        <>
            <Field title='Nome' value={name} change={(value) => setName(value)} />
            <Field title='Chave' value={key} change={(value) => setKey(value)} />
            <Button text='Salvar' click={() => clickSave()} />
        </>
    )

    function clickSave() {
        if (!save) return
        save({
            clientId: model?.clientId || '',
            personName: name,
            key: key,
            type: ''
        })
    }
}

export default PixForm
