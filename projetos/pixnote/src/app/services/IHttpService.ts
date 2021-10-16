export interface IHttpService {
    get<TResult>(url: string) : Promise<TResult | null>
    post<TResult, TData>(url: string, data: TData) : Promise<TResult | null>
}