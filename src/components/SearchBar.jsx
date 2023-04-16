import { useState } from "react";
import { useNavigate } from "react-router";

import { Paper, IconButton } from "@mui/material";
import SearchIcon from "../utils/search.svg";
import {Search} from '@mui/icons-material'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(searchTerm)
        {
            navigate(`/search/${searchTerm}`);
        }

        setSearchTerm('');
    }

  return (
    <Paper
        component="form"
        onSubmit = {handleSubmit}
        sx = {{
            'border-radius': '3rem',
            pl: 2,
            '-webkit-box-shadow': '5px 5px 7px #1c1d1f, -5px -5px 7px #222527',
            boxShadow: '5px 5px 7px #1c1d1f, -5px -5px 7px #222527',
            mr: {sm:5},
            background: '#1f2123',
            display: 'flex',
            'align-items': 'center',
            'justify-content': 'center'
        }}
    >
        <input
            className="search-bar"
            placeholder="Procurar cursos"
            value={searchTerm}
            style={{
                flex: 1,
                border: 'none',
                'font-size': '1rem',
                'font-family': 'var(--font-raleway)',
                'font-weight': '500',
                'padding-right': '1rem',
              
                outline: 'none',
                color: '#a1a1a1',
                background: '#1f2123'}}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton
            type="submit"
            sx={{p:'10px',
                color:'#D88769',
                cursor: 'pointer'
            }}
        >
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar