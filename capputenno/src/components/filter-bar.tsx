"use client"

import styled from "styled-components";
import { FilterBarType } from "./filter-by-type";
import { FilterByPriorityProps } from "./filter-by-priority";

interface FilterBarProps {

}

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
   
`


export function FilterBar(props: FilterBarProps){
    return(
        <FilterContainer>
            <FilterBarType/>
            <FilterByPriorityProps/>
        </FilterContainer>
        
    
    )
}