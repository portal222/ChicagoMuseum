import React, { useRef, useContext } from "react";
import { Paper,InputBase,IconButton } from "@mui/material";
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';


import { useNavigate } from "react-router-dom";

import GlobalContext from "../GlobalContext";

const SearchPages = (props) => {

    const globalCtx = useContext(GlobalContext);

    const navigate = useNavigate();
    const searchString = useRef();

    const handleClickSearch = () => {
        if (searchString.current.value.trim().length === 0) {
            return false;
        }

        globalCtx.setSearchStringFn(searchString.current.value.trim());
        navigate(props.linkTo);

    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleClickSearch();
        }
    };

    return (
        <Paper 
        component = 'form'
        se={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '40rem',
         
            fontSize: '28px',
            backgroundColor: 'red',
        }}
        >
            <InputBase className="base"
            autoFocus
            placeholder={props.placeholder}
            inputRef={searchString}
            onKeyDown={handleKeyDown}
            />
            <IconButton 
            type='button'
            onClick={handleClickSearch}
            sx={{ p: '3px'}}
            aria-label='search'
            >
       <PlagiarismOutlinedIcon />
            </IconButton>
        </Paper>
    );
};
export default SearchPages;
