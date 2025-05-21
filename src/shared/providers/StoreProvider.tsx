'use client';

import React, { ReactNode } from 'react';
import { createContext, useContext } from 'react';
import stores from '../store';

const StoreContext = createContext(stores);

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>;
};
