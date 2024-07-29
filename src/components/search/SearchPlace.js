import React from "react";
import SearchArt from "./SearchArt.js";
import SearchPages from "./SearchPages.js";


const SearchPlace = () => {

    return (

            <div className="search">
                <SearchArt placeholder={'Search'} linkTo={'/artistCM'} />
                <SearchPages placeholder={'Page - 10482'} linkTo={'/CMpage'} />
            
            </div>
    )

}
export default SearchPlace;