import { IHttpService } from "./IHttpService"

const sessionRepoKey = (value: string) => `${value}-repo`

export class FakeHttpService implements IHttpService {

    get = async <TResult>(url: string) => {
        const promise: Promise<TResult | null> = new Promise(async (resolve, reject) => {
            try {
                const sessionKey = sessionRepoKey(url)
                const json = sessionStorage.getItem(sessionKey)
                const list = json ? JSON.parse(json) as TResult : null
                resolve(list)
            } catch (error) {
                reject(error)
            } finally {
            }
        })
        return promise
    }

    post = async <TData>(url: string, data: TData) => {
        const promise: Promise<any> = new Promise(async (resolve, reject) => {
            try {
                const sessionKey = sessionRepoKey(url)
                const json = sessionStorage.getItem(sessionKey)
                const list = json ? JSON.parse(json) : []
                const newList: any[] = [data, ...list]
                sessionStorage.setItem(sessionKey, JSON.stringify(newList))
                resolve(newList)
            } catch (error) {
                reject(error)
            } finally {
            }
        })
        return promise
    }
}