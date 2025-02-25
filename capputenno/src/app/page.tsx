"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/header";
import { FilterBar } from "@/components/filter-bar";
import { ProductsList } from "@/components/products-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FilterBar />
        <ProductsList />
        <div className={styles.page}> </div>
      </QueryClientProvider>
    </>
  );
}