import React from "react";

const MuseumCollapsable = (props) => {


    return (
              
                        <table>
                            <tbody>
                                <tr>
                                    <td className="dimension">{props.artInst.dimensions}</td>
                                </tr>
                                <tr>
                                    <td className="text">{props.artInst.department_title}</td>
                                </tr>
                                <tr>
                                    <td className="place">
                                        {props.artInst.place_of_origin}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="dimension">
                                        {props.artInst.medium_display}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text"
                                        dangerouslySetInnerHTML={{ __html: props.artInst.description }}>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="credit" 
                                    dangerouslySetInnerHTML={{ __html: props.artInst.credit_line }}>
                                   
                                    </td>
                                </tr>
                                <tr>
                                    <td className="credit"
                                     dangerouslySetInnerHTML={{ __html: props.artInst.exhibition_history }}>
                                     
                                    </td>
                                </tr>
                            </tbody>
                        </table>
            
    );
};
export default MuseumCollapsable;