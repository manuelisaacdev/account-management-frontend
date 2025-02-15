import api from "./api";
import Pagination, { PageRequest, Sort } from "@/interfaces/Pagination";

export default class AbstractService<T, DTO, Q> {
    private url: string;
    
    constructor(url: string) {
        this.url = url;
    }

    findAll(params?: Q & Sort) {
        return api.get<T[]>(this.url + this.handleParameters(params));
    }
    
    findById(entityId: string) {
        return api.get<T>(`${this.url}/${entityId}`);
    }
    
    pagination(params?: Q & PageRequest) {
        return api.get<Pagination<T>>(`${this.url}/pagination${this.handleParameters(params)}`);
    }
    
    count(params?: Q) {
        return api.get<number>(`${this.url}/count${this.handleParameters(params)}`);
    }
    
    update(entityId: string, updateDTO: DTO) {
        return api.put<T>(`${this.url}/${entityId}`, updateDTO);
    }
    
    delete(entityId: string) {
        return api.delete<void>(`${this.url}/${entityId}`);
    }

    protected handleParameters(params?:any): string {
        return params ? `?${Object.keys(params).map((key) => `${key}=${params[key]}`).join('&')}` : '';
    }

    get URL() : string {
        return this.url; 
    }
    
}