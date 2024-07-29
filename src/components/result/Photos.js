import React from "react";

const Photos = (props) => {

    const image = `https://www.artic.edu/iiif/2/${props.photos}/full/843,/0/default.jpg`
  
    return (
            <td className="image">
                <img src={image} alt="no picture" />
            </td> 
    )
}
export default Photos;