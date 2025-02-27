import { PriorityTypes } from "@/context/priority-types";
import { FilterType } from "@/types/filter-types";

export function getCategorybyType(type: FilterType){
    if(type === FilterType.MUG)
    {
        return "mugs"
    }

    if(type === FilterType.SHIRT)
    {
        return "t-shirts"
    }
    return ""
}

export function getFieldByPriority(priority: PriorityTypes){
    if (priority === PriorityTypes.NEWS) 
    {
       return {field: "created_at", order: "ASC"}    
    }

    if (priority === PriorityTypes.BIGGEST_PRICE) 
    {
        return {field: "price_in_cents", order: "DESC"}   
    }

    if (priority === PriorityTypes.MINOR_PRICE) 
    {
        return {field: "price_in_cents", order: "ASC"}     
    }

    return {field: "sales", order: "DESC"}
}

export const MountQuerry = (type: FilterType, priority: PriorityTypes) => {
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