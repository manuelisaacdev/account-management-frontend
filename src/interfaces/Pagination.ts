export interface Sort {
    orderBy?: string,
    direction?: "ASC" | "DESC"
}

export interface PageRequest extends Sort {
    page?: number,
    size?: number,
}

export default interface Pagination<T> {
    content: T[],
    pageable: {
        pageNumber: number,
        pageSize: number,
        sort: {
            sorted: boolean,
            unsorted: boolean,
            empty: boolean
        },
        offset: number,
        paged: boolean,
        unpaged: boolean
    },
    totalPages: number,
    totalElements: number,
    last: boolean,
    first: boolean,
    size: number,
    number: number,
    sort: {
        sorted: boolean,
        unsorted: boolean,
        empty: boolean
    },
    numberOfElements: number,
    empty: boolean
}