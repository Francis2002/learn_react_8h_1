import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({video: {id:{videoId}, snippet}}) => {

  return (
    <Card className="curso" sx={{width:{xs: '100%', sm:'358px', md: '320px'}, boxShadow: 'none', borderRadius: '0', margin: 'auto'}}>
        <div className="card_class">
            Hello
        </div>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
                className="card_media_class"
                image={snippet?.thumbnails?.high?.url} 
                alt={snippet?.title}
                sx={{ width:{xs: '100%', sm:'358px', md: '320px'}, height: '100%'}}
            />
        </Link>
        <CardContent className="card_content_class" sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography className="link1" variant="subtitle1" fontWeight="bold" color="#FFF">
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography className="link2" variant="subtitle2" fontWeight="bold" color="gray">
                    {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard