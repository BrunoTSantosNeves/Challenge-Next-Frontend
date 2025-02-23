"use client"

import React, { createContext, useState, ReactNode, useContext } from "react";
import { FilterType } from "@/types/filter-types";

interface FilterContextProps {
    search: string;
    page: number;
    type: FilterType;
    setSearch: (value: string) => void;
    setPage: (value: number) => void;
    setType: (value: FilterType) => void;
}

export const FilterContext = createContext<FilterContextProps>({
    search: '',
    page: 0,
    type: FilterType.ALL,
    setSearch: () => {},
    setPage: () => {},
    setType: () => {},
});

interface FilterContextProviderProps {
    children: ReactNode;
}

export function FilterContextProvider({ children }: FilterContextProviderProps) {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [type, setType] = useState(FilterType.ALL);
    
    return (
        <FilterContext.Provider value={{ search, page, type, setSearch, setPage, setType }}>
            {children}
        </FilterContext.Provider>
    );
}

