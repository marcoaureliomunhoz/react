import React from 'react'

export function filhosComProps(props) {
    return React.Children.map(props.children, child => 
        React.cloneElement(child, { ...props })
    )
}