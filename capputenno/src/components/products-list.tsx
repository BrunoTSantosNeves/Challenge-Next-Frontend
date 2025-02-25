"use client"

import { useProducts } from "@/context/useProducts"
import { ProductCard } from "./product-card"

interface ProductsListProps{

}

export function ProductsList(props: ProductsListProps){
    const { data } = useProducts()
    return(
        <div>{data?.map(product => <ProductCard 
            key={product.id}
            title={product.name}
            price={product.price_in_cents}
            image={product.image_url}/>)}</div>
    )
}