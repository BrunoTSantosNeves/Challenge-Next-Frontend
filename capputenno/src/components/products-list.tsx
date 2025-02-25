"use client"

import { useProducts } from "@/context/useProducts"
import { ProductCard } from "./product-card"
import styled from "styled-components"

const ListConteiner = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 4fr));

    gap: 16px;


`

export function ProductsList(){
    const { data } = useProducts()
    return(
        <ListConteiner>{data?.map(product => <ProductCard 
            key={product.id}
            title={product.name}
            price={product.price_in_cents}
            image={product.image_url}/>)}</ListConteiner>
    )
}