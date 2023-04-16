import { useState, useEffect } from "react"
import {Box, Stack, Typography} from '@mui/material'

import { fetchFromAPI } from "../utils/fetchFromApi"
import Sidebar from "./Sidebar"
import Videos from "./Videos"
import { currentList } from "../utils/constants"

const Feed = ({selectedCategory, setSelectedCategory}) => {
  setSelectedCategory("Home");
  const [videos, setVideos] = useState(currentList)

  return (
    <Stack sx={{flexDirection: {sx: "column", md:"row"}}}>
      <Box sx={{height: {sx:'auto', md:'92vh'}, px: {sx: 0, md: 2}}}>
        <Sidebar 
          selectedCategory = {selectedCategory}
          setSelectedCategory = {setSelectedCategory}
          />
      </Box>

      <Box p={2} sx={{borderLeft: '2px solid #3d3d3d', overflowY: 'auto', heigth: '90vh', flex: 2}}>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed