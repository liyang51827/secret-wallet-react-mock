import { useState, createContext } from "react";

export const WalletContext = createContext();

export const WalletConnectProvider = (props) => {
    const [connect, setConnect ] = useState(true);

    return (
        <WalletContext.Provider value={{ connect, setConnect }}>
            {props.children}
        </WalletContext.Provider>
    )
}