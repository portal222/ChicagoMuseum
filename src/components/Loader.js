import React from "react";

import { PuffLoader } from 'react-spinners';

const Loader = () => {

    return (
       <div className="loader">
         <div >
            <PuffLoader size='170px'
            color='#b0bec5'
             speedMultiplier= '0.3' 
              className="puff"      
            />
            </div>
       </div>
          
      
    )

}
export default Loader;