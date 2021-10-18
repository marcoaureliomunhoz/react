import { HttpService } from "./HttpService"
import { IHttpService } from "./IHttpService"

export abstract class HttpServiceBase {
    
    protected readonly urlBase = 'https://localhost:5001/api'

    protected readonly http: IHttpService

    constructor(http?: any | null) {
        console.log('Criando HttpServiceBase')
        const typeOfHttp = typeof http
        if (typeOfHttp === 'object') {
            this.http = http
        } else if (typeOfHttp === 'function') {
            this.http = new http()
        } else {
            this.http = new HttpService()
        }
    }
}