import React, { createContext, useState } from 'react'

export interface IMyThemeContext {
    primaryColor: string
    primaryColorText: string
    primaryColorBorder: string
    primaryColorBorderOutline: string

    secondaryColor: string
    secondaryColorText: string
    secondaryColorBorder: string
    secondaryColorBorderOutline: string
}

export const MyThemeContextDefaultValue: IMyThemeContext = {
    primaryColor: '#ffffff',
    primaryColorText: '#000000',
    primaryColorBorder: '#dddddd',
    primaryColorBorderOutline: 'transparent',

    secondaryColor: '#ffffff',
    secondaryColorText: '#424242',
    secondaryColorBorder: '#b4b4b4',
    secondaryColorBorderOutline: '#e4e4e4',
}

const MyThemeContext = createContext<IMyThemeContext>(MyThemeContextDefaultValue)

const MyThemeProvider: React.FC = ({
    children 
}) => {

    return (
        <MyThemeContext.Provider value={MyThemeContextDefaultValue}>
            {children}
        </MyThemeContext.Provider>
    )
}

export { MyThemeProvider }
export default MyThemeContext