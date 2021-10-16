import { Pix } from "../models/Pix"
import { HttpService } from "./HttpService"
import { IHttpService } from "./IHttpService"

const urlBase = 'https://localhost:5001/api'

export class PixService {

    private readonly http: IHttpService

    constructor(http?: any | null) {
        const typeOfHttp = typeof http
        if (typeOfHttp === 'object') {
            this.http = http
        } else if (typeOfHttp === 'function') {
            this.http = new http()
        } else {
            this.http = new HttpService()
        }
    }

    listFromClientId = (clientId: string) => {
        return this.http.get<Pix[]>(`${urlBase}/pix`)
    }

    save = (pix: Pix) => {
        return this.http.post<any, Pix>(`${urlBase}/pix`, pix)
    }
}