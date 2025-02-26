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