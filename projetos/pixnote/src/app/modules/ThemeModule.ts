import { DefaultTheme } from 'styled-components'
import { MyThemeContextDefaultValue, IMyThemeContext } from '../contexts/MyThemeContext'

declare module 'styled-components' {
    export interface DefaultTheme extends IMyThemeContext {
    }
}

export const theme: DefaultTheme = { ...MyThemeContextDefaultValue }