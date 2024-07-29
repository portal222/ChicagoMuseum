import React, { useState, useEffect, useContext } from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MuseumCollapsable from "./MuseumCollapsable";


const TableRow = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <>



            <tr>
                <td className="collapse">

                    <IconButton
                        aria-label='expand row'
                        size='small'
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>

                    more...</td>


            </tr>
            <tr>
                <td>
                    <Collapse in={open} timeout='auto' unmountOnExit>
                        <Box sx={{ margin: 0 }}>
                            <MuseumCollapsable
                                artInst={props?.details}
                            />

                        </Box>
                    </Collapse>
                </td>
            </tr>




        </>

    );
};
export default TableRow;