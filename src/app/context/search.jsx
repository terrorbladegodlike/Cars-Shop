'use client'
import React, { createContext, useContext, useState } from 'react'

// Create context
export const SearchContext = createContext()

export const SearchContextProvider = ({ children }) => {
  const [searchActive, setSearchActive] = useState(false)
  return (
    <SearchContext.Provider value={{ searchActive, setSearchActive }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => useContext(SearchContext);