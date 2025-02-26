import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import { ProductsFetchResponse } from "@/types/products-response";
import { getCategorybyType } from "@/utils/get-category-by-type";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetch = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(
        API_URL, 
        { query } 
    );
}

const MountQuerry = (type: FilterType) => {
    if (type === FilterType.ALL) {
        return `
        query{
          allProducts{
            id
            name
            price_in_cents
            image_url
          }
        }     
        `;
    }
    return `
        query {
          allProducts(filter: { category: "${getCategorybyType(type)}" }) {
            id
            name
            price_in_cents
            image_url
            category
          }
        }
    `;
}

export function useProducts(){
    const { type } = useFilter();
    const query = MountQuerry(type);
    const { data } = useQuery({
        queryFn: () => fetch(query),
        queryKey: ['products', type]
    });

    return { data: data?.data?.data?.allProducts };
}

