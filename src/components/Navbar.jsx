import { Stack, Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"

import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{position: 'sticky', background: '#212426', top: 0, justifyContent: 'space-between'}}
  >
    <Link to="/" style={{display: 'flex', alignItems:'center'}}>
      <Box height={45} sx={{display: 'flex', alignItems:'center'}}>
        <Typography variant="h4" fontWeight="bold" style={{
          fontSize: '3rem',
          letterSpacing: '0.9px', 
          background: 'rgba(249, 211, 180, 1) 0%',
          backgroundClip: 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          width: 'fit-content',
          'font-family': 'var(--font-roboto)'
        }}>
          SJ
        </Typography>
      </Box>
    </Link> 
    <SearchBar />
  </Stack>
)

export default Navbar