import { Stack, Box, CardMedia} from "@mui/material";
import { Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import ProfileIcon from '../utils/profile-svgrepo-com.svg'

const ForumDetail = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack sx={{flexDirection: {sx: "column", md:"row"}}}>
      <Box sx={{height: {sx:'auto', md:'92vh'}, px: {sx: 0, md: 2}}}>
        <Sidebar 
          selectedCategory = {selectedCategory}
          setSelectedCategory = {setSelectedCategory}
          />
      </Box>

      <Box p={2} sx={{borderLeft: '2px solid #3d3d3d', overflowY: 'auto', heigth: '90vh', flex: 2}}>
        <Typography variant="h4" sx={{color: '#d88769', fontWeight: 'bold', fontSize: '50px', marginBottom: '25px'}}>
            Fórum
        </Typography>
        <Typography variant="h4" sx={{color: '#d88769', marginBottom: '0px', fontSize: '20px'}}>
            O fórum SJ é onde conheces futuros alunos universitários como tu!
        </Typography>
        <Typography variant="h4" sx={{color: '#d88769', marginBottom: '60px', fontSize: '20px'}}>
            Entra em contacto com alunos que já estão na faculdade e fica a conhecer a experiência universitária
        </Typography>
        <Box marginTop="30px" borderRadius="10px" height="150px" width="80vh" backgroundColor="white" display="flex" flexDirection="row" alignItems="center">
        <CardMedia 
            image={ProfileIcon}
            alt="Profile_picture"
            sx={{
                margin:"25px",
                marginTop: '25px', 
                borderRadius: '50%', 
                height: '60px', 
                width: '60px', 
                border: '1px solid #e3e3e3', 
                backgroundColor: 'white'}}
        />
            <Box sx={{marginLeft: '30px', display: 'flex', flexDirection: 'column', width: '40%', borderRight: '2px solid #d88769'}}> 
                <Typography variant="h6">
                    Nome
                </Typography>
                <Typography variant="h6">
                    Curso
                </Typography>
                <Typography variant="h6">
                    Universidade
                </Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: '30px'}}> 
                <Typography variant="h6">
                    912345678
                </Typography>
                <Typography variant="h6">
                    exemplo@email.com
                </Typography>
                <button variant="h6" style={{cursor:"pointer", marginRight: '10px', backgroundColor: '#d88769', border: 'none', borderRadius: '5px', height: '25px', marginTop: '10px', color: 'white', fontWeight: 'bold', width: '250px'}}>
                    Message
                </button>
            </Box>
        </Box>
        <Box marginTop="30px" borderRadius="10px" height="150px" width="80vh" backgroundColor="white" display="flex" flexDirection="row" alignItems="center">
        <CardMedia 
            image={ProfileIcon}
            alt="Profile_picture"
            sx={{
                margin:"25px",
                marginTop: '25px', 
                borderRadius: '50%', 
                height: '60px', 
                width: '60px', 
                border: '1px solid #e3e3e3', 
                backgroundColor: 'white'}}
        />
            <Box sx={{marginLeft: '30px', display: 'flex', flexDirection: 'column', width: '40%', borderRight: '2px solid #d88769'}}> 
                <Typography variant="h6">
                    Nome
                </Typography>
                <Typography variant="h6">
                    Curso
                </Typography>
                <Typography variant="h6">
                    Universidade
                </Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: '30px'}}> 
                <Typography variant="h6">
                    912345678
                </Typography>
                <Typography variant="h6">
                    exemplo@email.com
                </Typography>
                <button variant="h6" style={{cursor:"pointer", marginRight: '10px', backgroundColor: '#d88769', border: 'none', borderRadius: '5px', height: '25px', marginTop: '10px', color: 'white', fontWeight: 'bold', width: '250px'}}>
                    Message
                </button>
            </Box>
        </Box>
        <Box marginTop="30px" borderRadius="10px" height="150px" width="80vh" backgroundColor="white" display="flex" flexDirection="row" alignItems="center">
        <CardMedia 
            image={ProfileIcon}
            alt="Profile_picture"
            sx={{
                margin:"25px",
                marginTop: '25px', 
                borderRadius: '50%', 
                height: '60px', 
                width: '60px', 
                border: '1px solid #e3e3e3', 
                backgroundColor: 'white'}}
        />
            <Box sx={{marginLeft: '30px', display: 'flex', flexDirection: 'column', width: '40%', borderRight: '2px solid #d88769'}}> 
                <Typography variant="h6">
                    Nome
                </Typography>
                <Typography variant="h6">
                    Curso
                </Typography>
                <Typography variant="h6">
                    Universidade
                </Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: '30px'}}> 
                <Typography variant="h6">
                    912345678
                </Typography>
                <Typography variant="h6">
                    exemplo@email.com
                </Typography>
                <button variant="h6" style={{cursor:"pointer", marginRight: '10px', backgroundColor: '#d88769', border: 'none', borderRadius: '5px', height: '25px', marginTop: '10px', color: 'white', fontWeight: 'bold', width: '250px'}}>
                    Message
                </button>
            </Box>
        </Box>
        <Box marginTop="30px" borderRadius="10px" height="150px" width="80vh" backgroundColor="white" display="flex" flexDirection="row" alignItems="center">
        <CardMedia 
            image={ProfileIcon}
            alt="Profile_picture"
            sx={{
                margin:"25px",
                marginTop: '25px', 
                borderRadius: '50%', 
                height: '60px', 
                width: '60px', 
                border: '1px solid #e3e3e3', 
                backgroundColor: 'white'}}
        />
            <Box sx={{marginLeft: '30px', display: 'flex', flexDirection: 'column', width: '40%', borderRight: '2px solid #d88769'}}> 
                <Typography variant="h6">
                    Nome
                </Typography>
                <Typography variant="h6">
                    Curso
                </Typography>
                <Typography variant="h6">
                    Universidade
                </Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: '30px'}}> 
                <Typography variant="h6">
                    912345678
                </Typography>
                <Typography variant="h6">
                    exemplo@email.com
                </Typography>
                <button variant="h6" style={{cursor:"pointer", marginRight: '10px', backgroundColor: '#d88769', border: 'none', borderRadius: '5px', height: '25px', marginTop: '10px', color: 'white', fontWeight: 'bold', width: '250px'}}>
                    Message
                </button>
            </Box>
        </Box>
      </Box>
    </Stack>
  )
}

export default ForumDetail