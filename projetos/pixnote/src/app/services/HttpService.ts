import axios from "axios"
import {IHttpService} from './IHttpService'

export class HttpService implements IHttpService {

    constructor() {
        console.log('Criando HttpService')
    }

    get = async <TResult>(url: string) => {
        const promise: Promise<TResult> = new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get<TResult>(url)
                resolve(response.data)
            } catch (error) {
                reject(error)
            } finally {
            }
        })
        return promise
    }

    post = async <TResult, TData>(url: string, data: TData) => {
        const promise: Promise<TResult> = new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post<TResult>(url, data)
                resolve(response.data)
            } catch (error) {
                reject(error)
            } finally {
            }
        })
        return promise
    }
}