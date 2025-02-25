"use client"

import { useProducts } from "@/context/useProducts"
import { ProductCard } from "./product-card"
import styled from "styled-components"

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Três colunas iguais */
  grid-gap: 32px;
  max-width: 100%;
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
