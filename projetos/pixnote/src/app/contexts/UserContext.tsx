import React, { createContext, useState } from 'react'

export interface IUser {
    name: string
}

export interface IUserContext {
    state: IUser
    setState: React.Dispatch<React.SetStateAction<IUser>>
}

const UserContextDefaultValue = {
    state: {
        name: ''
    },
    setState: () => {}
}

const UserContext = createContext<IUserContext>(UserContextDefaultValue)

const UserProvider: React.FC = ({
    children 
}) => {

    const [state, setState] = useState<IUser>(UserContextDefaultValue.state)

    return (
        <UserContext.Provider value={{state, setState}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider }
export default UserContext