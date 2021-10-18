import React, { createContext } from 'react'
import { FakeHttpService } from '../services/FakeHttpService'
import { IHttpService } from '../services/IHttpService'
import { PixService } from '../services/PixService'

export interface IServices {
    httpService: IHttpService
    pixService: PixService
}

export const createServices = (httpService?: IHttpService): IServices => {

    httpService = httpService || new FakeHttpService()

    return {
        httpService: httpService,
        pixService: new PixService(httpService)
    }
}

const defaultValue = createServices()

const ServicesContext = createContext<IServices>(defaultValue)

const ServicesProvider: React.FC = ({
    children 
}) => {

    return (
        <ServicesContext.Provider value={defaultValue}>
            {children}
        </ServicesContext.Provider>
    )
}

export { ServicesProvider }
export default ServicesContext