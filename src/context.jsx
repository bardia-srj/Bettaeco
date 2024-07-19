import { createContext } from "react";
export const TabContext = createContext();
export const TabProvider = ({ children }) => {
    return (
        <TabContext.Provider value={{}}>
            {children}
        </TabContext.Provider>
    );
};
