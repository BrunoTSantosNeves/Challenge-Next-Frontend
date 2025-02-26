import { useFilter } from "@/hooks/useFilter";
import { ProductsFetchResponse } from "@/types/products-response";
import { getCategorybyType, getFieldByPriority, MountQuerry } from "@/utils/graphql-filters";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useDeferredValue } from "react";


const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetch = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(
        API_URL, 
        { query } 
    );
}


export function useProducts(){
    const { type, priority, search } = useFilter();
    const searchDeferred = useDeferredValue(search)
    const query = MountQuerry(type, priority);
    const { data } = useQuery({
        queryFn: () => fetch(query),
        queryKey: ['products', type, priority]
    });

    const products = data?.data?.data?.allProducts
    const FilteredProducts = products?.filter(product => product.name.includes(searchDeferred))

    return { data: FilteredProducts };
}

