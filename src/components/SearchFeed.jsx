import { useState, useEffect } from "react"
import {Box, Typography} from '@mui/material'
import { useParams } from "react-router"

import { fetchFromAPI } from "../utils/fetchFromApi"
import Videos from "./Videos"
import { currentList } from "../utils/constants"
import Sidebar from "./Sidebar"
import {Stack} from "@mui/material"

const SearchFeed = ({selectedCategory, setSelectedCategory}) => {
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams();

  const getCourse = (title) => {
    const returnArr = [];
    for (let i = 0; i < currentList.length; i++) {
      const klein_title = currentList[i].Title.toLocaleLowerCase();
      const klein_type = currentList[i].Type.toLocaleLowerCase();
      const normalized_title = currentList[i].Title.normalize("NFD").replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "").toLowerCase();
      if(currentList[i].Title.includes(title) || currentList[i].Type.includes(title) || klein_title.includes(title) || klein_type.includes(title) || normalized_title.includes(title)) returnArr.push(currentList[i]);
    }
    console.log(returnArr);
    return returnArr;
}

  useEffect(() => {
    const response = getCourse(searchTerm);
    setVideos(response);
  }, [searchTerm]);

  return (
    <Stack sx={{flexDirection: {sx: "column", md:"row"}}}>
      <Box sx={{height: {sx:'auto', md:'92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
        <Sidebar 
          selectedCategory = {selectedCategory}
          setSelectedCategory = {setSelectedCategory}
          />
      </Box>

      <Box p={2} sx={{overflowY: 'auto', heigth: '90vh', flex: 2}}>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default SearchFeed