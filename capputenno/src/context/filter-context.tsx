"use client"

import React, { createContext, useState, ReactNode, useContext } from "react";
import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "./priority-types";

interface FilterContextProps {
    search: string;
    page: number;
    type: FilterType;
    priority: PriorityTypes;
    setSearch: (value: string) => void;
    setPage: (value: number) => void;
    setType: (value: FilterType) => void;
    setPriority: (value: PriorityTypes) => void;
}

export const FilterContext = createContext<FilterContextProps>({
    search: '',
    page: 0,
    type: FilterType.ALL,
    priority: PriorityTypes.NEWS,
    setSearch: () => {},
    setPage: () => {},
    setType: () => {},
    setPriority: (value: PriorityTypes) => {},
});

interface FilterContextProviderProps {
    children: ReactNode;
}

export function FilterContextProvider({ children }: FilterContextProviderProps) {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [type, setType] = useState(FilterType.ALL);
    const [priority, setPriority] = useState(PriorityTypes.POPULLARITY);
    
    return (
        <FilterContext.Provider value={{ search, page, type, priority, setSearch, setPage, setType, setPriority }}>
            {children}
        </FilterContext.Provider>
    );
}

