"use client"

import { useProducts } from "@/context/useProducts"
import { ProductCard } from "./product-card"
import styled from "styled-components"

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  grid-gap: 32px;
  max-width: 100%;
  justify-content: center;
  column-gap: 32px; /* Espaço horizontal reduzido */
  row-gap: 32px;    /* Espaço vertical reduzido */

  margin-top: 10px;
`

export function ProductsList() {
  const { data } = useProducts()
  return (
    <ListContainer>
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price_in_cents}
          image={product.image_url}
        />
      ))}
    </ListContainer>
  )
}
