"use client"

import styled from "styled-components";

import { Saira_Stencil_One as SairaStencilOneFont } from "next/font/google";
import { PrimaryInputWSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";

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
    padding: 20px 160px;
`;

const Logo = styled.a`
    color: var(--logo--color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`;



export function Header(props : HeaderProps){
    return (
        <TagHeader>
            <Logo className={SairaStencilOne.className}>Capputenno</Logo>
           <div>
                <PrimaryInputWSearchIcon placeholder="Procurando algo específico"/>
                <CartControl/>
           </div>
        </TagHeader>
    )
}