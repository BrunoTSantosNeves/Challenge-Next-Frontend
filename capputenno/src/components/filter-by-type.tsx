import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import styled from "styled-components"

interface FilterBarItemProps {
    selected: boolean
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    height: 80px;
    list-style: none;
   

`
const FilterItem = styled.li<FilterBarItemProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? '600' : '400'};
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;

    color: var(--text--dark);

    border-bottom: ${props => props.selected ? '4px solid var(--orange--low)' : 'none'};


`

export function FilterBarType() {
    const { type, setType } = useFilter();

    const handleChangeType = (value: FilterType) => {
        setType(value);
    };

    return (
        <FilterList>
            <FilterItem 
                selected={type === FilterType.ALL} 
                onClick={() => handleChangeType(FilterType.ALL)}>
                Todos os Produtos
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.SHIRT} 
                onClick={() => handleChangeType(FilterType.SHIRT)}>
                Camisetas
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.MUG} 
                onClick={() => handleChangeType(FilterType.MUG)}>
                Canecas
            </FilterItem>
        </FilterList>
    );
}