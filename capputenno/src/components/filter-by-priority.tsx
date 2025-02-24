import styled from "styled-components"
import { ArrowIcon } from "./arrow-icon"
import { useState } from "react"

interface FilterByPriorityProps{

}

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: 80px;

    button {
        border: none;
        background: transparent;
        cursor: pointer;
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text--dark);
        
        display: flex;
        align-items: center;
        justify-content: center;
    
    }

`

const PriorityFilter = styled.div`

    postion: absolute;
    width: 250px;
    padding: 12px 16px;
    
    box-shadow: 8px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    list-style: none;

    top: 100%;

    li{
        color: var(--text--dark);
        font-weight: 400;
        font-size: 14px;
        lone-height: 22px;
        cursor: pointer;
    }

    li + li{
        margin-top: 4px;
    
    }

`

export function FilterByPriorityProps(props : FilterByPriorityProps){
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => setIsOpen(prev => !prev)
    return(
       <FilterContainer>
            <button onClick={handleOpen}>
                Organizar por
                <ArrowIcon/>
            </button>
            {isOpen && 
            <PriorityFilter>
                <li>Novidades</li>
                <li>Preço: Maior - Menor</li>
                <li>Preço: Menor - Maior</li>
                <li>Mais vendidos</li>
            </PriorityFilter>
            }
       </FilterContainer>
    )
}