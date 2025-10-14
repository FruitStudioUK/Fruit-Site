'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Role = 'creator' | 'brand' | null;

interface RoleContextType {
  role: Role;
  setRole: (role: Role) => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>(null);

  // Load role from localStorage on mount
  useEffect(() => {
    const storedRole = localStorage.getItem('userRole') as Role;
    if (storedRole) setRole(storedRole);
  }, []);

  // Persist role to localStorage whenever it changes
  useEffect(() => {
    if (role) {
      localStorage.setItem('userRole', role);
    }
  }, [role]);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
}
