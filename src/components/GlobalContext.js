import React from "react";

const GlobalContext = React.createContext({
    searchStringValue: '',
    setSearchStringFn: () => {},
})
export default GlobalContext;