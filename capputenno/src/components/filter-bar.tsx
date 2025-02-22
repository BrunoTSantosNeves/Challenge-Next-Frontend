"use client"

import styled from "styled-components";
import { FilterBarType } from "./filter-by-type";

interface FilterBarProps {

}

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    margin-left: 120px; 
    margin-top: 16px;
`


export function FilterBar(props: FilterBarProps){
    return(
        <FilterContainer>
            <FilterBarType/>
        </FilterContainer>
        
    
    )
}