import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetch = (): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(
        API_URL, 
        `
        query{
          allProducts{
            id
            name
            price_in_cents
          }
        }     
        `
    );
}

export function useProducts(){
    const { data } = useQuery({
        queryFn: fetch,
        queryKey: ['products']
    });

    return { data: data?.data.data.allProducts };
}

