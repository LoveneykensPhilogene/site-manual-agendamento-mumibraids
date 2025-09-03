import React, { createContext, useState, ReactNode } from "react";

export type ADMIN = {
    id: number|undefined;
    email: string|undefined;
    setAdmin: React.Dispatch<React.SetStateAction<ADMIN>>;
}
export type ContextAdminProps = {
    children?: ReactNode;
};
export const createContextAdmin = createContext({} as ADMIN);

export const ContextAdmin = ({ children }: ContextAdminProps) => {
    const [admin, setAdmin] = useState<ADMIN>({} as ADMIN);
    return (
        <createContextAdmin.Provider value={{ id: admin.id, email: admin.email, setAdmin: setAdmin }}>
            {children}
        </createContextAdmin.Provider>
    );
}
