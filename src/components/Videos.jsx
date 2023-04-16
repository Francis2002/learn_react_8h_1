import { Stack, Box } from "@mui/material"

import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import MovieCard from "./MovieCard";

const Videos = ({videos}) => {
    console.log(videos);
  return (
    <Stack direction = "row" flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((video) => (
            <Box className="movie2">
                <MovieCard movie={video}/>
            </Box>
        ))}

    </Stack>
  )
}

export default Videos