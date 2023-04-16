import { Stack, Box, Typography } from "@mui/material"
import Sidebar from "./Sidebar"

const ContactsDetail = ({selectedCategory, setSelectedCategory}) => {
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
            Contactos
        </Typography>
        <Typography variant="h4" sx={{color: '#d88769', marginBottom: '0px', fontSize: '20px'}}>
            Ainda não estás confortável com a tua decisão?
        </Typography>
        <Typography variant="h4" sx={{color: '#d88769', marginBottom: '60px', fontSize: '20px'}}>
            Experimenta fazer testes psico-técnicos com os nossos profissionais recomendados:
        </Typography>
        <Typography variant="h6" sx={{color: 'white', marginTop: '20px'}}>
            Dr. Pinto da Costa - 912345678 - pintodacosta@email.com
        </Typography>
        <Typography variant="h6" sx={{color: 'white', marginTop: '20px'}}>
            Dr. Frederico Varandas - 946829473 - fredericovarandas@email.com
        </Typography>
        <Typography variant="h6" sx={{color: 'white', marginTop: '20px'}}>
            Dr. Rui Costa - 912345679 - ruicosta@email.com
        </Typography>
        <Typography variant="h6" sx={{color: 'white', marginTop: '20px'}}>
            Dr. Artur Soares Dias - 987654321 - artursoaresdias@email.com
        </Typography>
      </Box>
    </Stack>
  )
}

export default ContactsDetail