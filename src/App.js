import React, {useState} from "react";
import Navigation from "./components/Navigation";
import GlobalContext from "./components/GlobalContext";



const App = () => {
    const [searchString, setSearchString] = useState('Enter search criterium!');
   return (
    <GlobalContext.Provider
    value={{
        setSearchStringFn: setSearchString,
        searchStringValue: searchString,
    }}
    >
        <Navigation />
    </GlobalContext.Provider>
        );

}
export default App;





