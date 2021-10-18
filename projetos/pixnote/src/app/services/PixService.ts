import { HttpServiceBase } from "./HttpServiceBase"
import { Pix } from "../models/Pix"

export class PixService extends HttpServiceBase {

    constructor(http?: any | null) {
        super(http)
        console.log('Criando PixService')
    }

    listFromClientId = (clientId: string) => {
        return this.http.get<Pix[]>(`${this.urlBase}/pix`)
    }

    save = (pix: Pix) => {
        return this.http.post<any, Pix>(`${this.urlBase}/pix`, pix)
    }
}