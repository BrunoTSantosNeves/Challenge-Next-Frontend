import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import { ProductsFetchResponse } from "@/types/products-response";
import { getCategorybyType, getFieldByPriority } from "@/utils/graphql-filters";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { PriorityTypes } from "./priority-types";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetch = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(
        API_URL, 
        { query } 
    );
}

const MountQuerry = (type: FilterType, priority: PriorityTypes) => {
  if (type === FilterType.ALL && priority === PriorityTypes.POPULLARITY) {
      return `
      query {
        allProducts(sortField: "sales", sortOrder: "DESC") {
          id
          name
          price_in_cents
          image_url
        }
      }     
      `;
  }

  const sortSettings = getFieldByPriority(priority);
  const categoryFilter = getCategorybyType(type);

  return `
      query {
        allProducts(
          ${categoryFilter ? `filter: { category: "${categoryFilter}" },` : ""}
          sortField: "${sortSettings.field}", 
          sortOrder: "${sortSettings.order}"
        ) {
          id
          name
          price_in_cents
          image_url
          category
        }
      }
  `;
};
export function useProducts(){
    const { type, priority } = useFilter();
    const query = MountQuerry(type, priority);
    const { data } = useQuery({
        queryFn: () => fetch(query),
        queryKey: ['products', type, priority]
    });

    return { data: data?.data?.data?.allProducts };
}

