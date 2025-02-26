import styled from "styled-components"
import { ArrowIcon } from "./icon/arrow-icon"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { PriorityTypes } from "@/context/priority-types"



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
        width: 160px;
    
    }

    svg{
        margin-left: 5px;
    }

`

const PriorityFilter = styled.div`

    postion: absolute;
    width: 250px;
    padding: 12px 16px;
    top: 100%; 
    left: 0; 
    
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

export function FilterByPriorityProps(){
    const [isOpen, setIsOpen] = useState(false)
    const { setPriority } = useFilter()

    const handleOpen = () => setIsOpen(prev => !prev)
    const handleUpdateFilterPriority = (value: PriorityTypes) => {
        setPriority(value)
        setIsOpen(false)
    }
    return(
       <FilterContainer>
            <button onClick={handleOpen}>
                Organizar por
                <ArrowIcon/>
            </button>
            {isOpen && 
            <PriorityFilter>
                <li onClick={() => handleUpdateFilterPriority(PriorityTypes.NEWS)}>Novidades</li>
                <li onClick={() => handleUpdateFilterPriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - Menor</li>
                <li onClick={() => handleUpdateFilterPriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - Maior</li>
                <li onClick={() => handleUpdateFilterPriority(PriorityTypes.POPULLARITY)}>Mais vendidos</li>
            </PriorityFilter>
            }
       </FilterContainer>
    )
}