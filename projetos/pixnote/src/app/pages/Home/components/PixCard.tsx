import React from 'react'
import { Pix } from '../../../models/Pix'

interface IPixCardProps {
    model: Pix
}

const PixCard: React.FC<IPixCardProps> = ({
    model
}) => {

    return (
        <div style={{padding:'10px', border:'1px solid #000', marginBottom:'10px'}}>
            <div><strong>{model.personName}</strong></div>
            <span>{model.key}</span>
        </div>
    )
}

export default PixCard