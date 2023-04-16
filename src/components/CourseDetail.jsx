import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import { currentList } from "../utils/constants";
import {CircularProgress} from "@mui/material";

import ProfileIcon from "../utils/profile-svgrepo-com.svg";

const CourseDetail = ({comments, setComments}) => {
    const {id} = useParams();

    const [commentTerm, setCommentTerm] = useState('');  

    const getCourse = () => {
        console.log(id);
        for (let i = 0; i < currentList.length; i++) {
            if (currentList[i].Title === id) {
                return currentList[i];
            }
            
        }
        return null;
    }

    const currentCourse = getCourse();

    const handleClick = () => {
        console.log(commentTerm);
        const coiso = commentTerm;
        var newarr = [];
        for (let i = 0; i < comments.length; i++) {
            newarr[i] = comments[i];     
        }
        newarr[newarr.length] = coiso;
        setComments(newarr);
    }
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px'
      }}/>
        <Box sx ={{
            boxShadow: 'none', 
            borderRadius: '20px', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: {xs: '356px', md: '320px'},
            heigth: '326px',
            margin: 'auto',
            marginTop: '-110px'
        }}>
            <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff', alignItems: 'center'}}>
                <CardMedia 
                    image={currentCourse.Poster}
                    alt="Profile_picture"
                    sx={{borderRadius: '10%', height: '300px', width: '180px', mb: 2, border: '1px solid #e3e3e3', backgroundColor: 'white'}}
                />
                <Typography variant="h4" sx={{color: '#f9d3b4', width: '80vh'}}>
                    {currentCourse.Title}
                </Typography>
            </CardContent>
        </Box>
        <Box display="flex" p="2" flexDirection='column' alignItems="center">
            <Box sx={{mr: {sm: '100px'}}} />
            <Typography variant="h6" sx={{color: 'white', margin: '30px'}}>
                {currentCourse.Desc}
            </Typography>
            <Box display="flex" flexDirection='column' alignItems="center" marginTop= '30px' marginBottom= '30px'>
                <Box borderRadius="10px" height="150px" width="80vh" backgroundColor="white" display="flex" flexDirection="row" alignItems="center">
                <CardMedia 
                    image={ProfileIcon}
                    alt="Profile_picture"
                    sx={{
                        margin:"10px",
                        marginTop: '-70px', 
                        borderRadius: '50%', 
                        height: '50px', 
                        width: '50px', 
                        border: '1px solid #e3e3e3', 
                        backgroundColor: 'white'}}
                />
                    <textarea className="search-bar" name="comments" id="comments" placeholder="Comment" 
                    value={commentTerm}
                    onChange={(e) => setCommentTerm(e.target.value)}
                    style={{
                        resize: 'none',
                        flex: 1,
                        border: 'none',
                        'font-size': '1rem',
                        'font-family': 'var(--font-raleway)',
                        'font-weight': '500',
                        'padding-right': '1rem',
                        'padding-left': '1rem',
                        'padding-top': '1rem',
                    
                        outline: 'none',
                        color: '#a1a1a1',
                        background: '#1f2123',

                        width: '90%', 
                        height: '79%', 
                        margin: '10px', 
                        borderRadius:"10px"}}>
                    </textarea>
                        <button onClick={handleClick} style={{cursor:"pointer", marginRight: '10px', backgroundColor: '#d88769', border: 'none', borderRadius: '5px', height: '90%', margin: '10px'}}>
                        Submit
                        </button>
                </Box>
                {comments.length > 0 ? (
                    <Typography variant="h4" sx={{marginTop: '30px', color:'white'}}>
                        Comments
                    </Typography>
                ) : (
                    <Typography variant="h4" sx={{marginTop: '30px', color:'white'}}>
                    No comments yet...
                    </Typography>
                    )}
                {comments.map((comment) => (
                    <Box marginTop="30px" borderRadius="10px" height="150px" width="80vh" backgroundColor="white" display="flex" flexDirection="row" alignItems="center">
                    <CardMedia 
                        image={ProfileIcon}
                        alt="Profile_picture"
                        sx={{
                            margin:"10px",
                            marginTop: '-70px', 
                            borderRadius: '50%', 
                            height: '50px', 
                            width: '50px', 
                            border: '1px solid #e3e3e3', 
                            backgroundColor: 'white'}}
                    />
                        <Typography className="search-bar"
                        style={{
                            flex: 1,
                            border: 'none',
                            'font-size': '1rem',
                            'font-family': 'var(--font-raleway)',
                            'font-weight': '500',
                            'padding-right': '1rem',
                            'padding-left': '1rem',
                            'padding-top': '1rem',
                        
                            outline: 'none',
                            color: '#a1a1a1',
                            background: '#1f2123',
    
                            width: '90%', 
                            height: '79%', 
                            margin: '10px', 
                            borderRadius:"10px"}}>
                                {comment}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CourseDetail