import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/header";
import { FilterBar } from "@/components/filter-bar";

export default function Home() {
  return (
    <>
      <FilterBar/>
      <div className={styles.page}> </div>
      
    </>
  );
}