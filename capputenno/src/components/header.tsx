"use client"

import styled from "styled-components";

import { Saira_Stencil_One as SairaStencilOneFont } from "next/font/google";
import { PrimaryInputWSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";
import { useFilter } from "@/hooks/useFilter";


const SairaStencilOne = SairaStencilOneFont({
    subsets: ["latin"],
    weight: ["400"],
    });

interface HeaderProps {

}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 35px;
    height: 80px; 

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 65px;
        border-radius: 50%; 
    }


`;

const Logo = styled.a`
    color: var(--logo--color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
    
`;



export function Header(props : HeaderProps){
    const {setSearch, search} = useFilter();
    return (
        <TagHeader>
            <Logo className={SairaStencilOne.className}>Capputenno</Logo>
           <div>
                <PrimaryInputWSearchIcon
                value={search}
                handlechange={setSearch}
                placeholder="Procurando algo específico"/>
                <CartControl/>
           </div>
           
        </TagHeader>
        
    )
}