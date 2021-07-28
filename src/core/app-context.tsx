import { Button } from "@fluentui/react-northstar";
import React, { createContext, FC, useContext, useEffect, useState } from "react";
import { IAppServices, buildServices } from '../services/service-builder'

type IAppContext = {} & IAppServices;

const AppContext = createContext<IAppContext>({} as IAppContext);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider: FC = (props) => {
    const [services, setServices] = useState<IAppContext>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initializeServices = async () => {
            const services = await buildServices();
            setServices(services);
            setLoading(false);
        }
        
        initializeServices();
    }, [setServices, setLoading])
    
    return (loading || !services) ? (
        <Button>Loading</Button> // TODO
    ) : (
        <AppContext.Provider value={services}>{props.children}</AppContext.Provider>
    );
}
