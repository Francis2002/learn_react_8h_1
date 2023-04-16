import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import { currentList } from "../utils/constants";
import {CircularProgress} from "@mui/material";

import ProfileIcon from "../utils/profile-svgrepo-com.svg";
import { Link } from "react-router-dom";

const ProfileDetail = ({profile, setProfile}) => {

    const [name, setName] = useState(profile?.name || "Username");
    const [chars, setChars] = useState(profile.chars);

    const calculatePercentage = (element, profile) => {
        let cnt = 0;
        for (let i = 0; i < element.Chars.length; i++) {
            if(profile.chars.includes(element.Chars[i])) cnt++;    
        }
        return Math.floor((cnt/element.Chars.length)*100);

    }

    const saveAll = () => {
        let ch11 = document.getElementById('cb11');
        let ch12 = document.getElementById('cb12');
        let ch13 = document.getElementById('cb13');
        let ch14 = document.getElementById('cb14');
        let ch15 = document.getElementById('cb15');
        let ch16 = document.getElementById('cb16');
        let ch17 = document.getElementById('cb17');
        let ch18 = document.getElementById('cb18');
        let ch19 = document.getElementById('cb19');
        let ch21 = document.getElementById('cb21');
        let ch22 = document.getElementById('cb22');
        let ch23 = document.getElementById('cb23');
        let ch24 = document.getElementById('cb24');
        let ch25 = document.getElementById('cb25');
        let ch26 = document.getElementById('cb26');
        let ch27 = document.getElementById('cb27');
        let ch28 = document.getElementById('cb28');
        let ch31 = document.getElementById('cb31');
        let ch32 = document.getElementById('cb32');
        let ch33 = document.getElementById('cb33');
        let ch34 = document.getElementById('cb34');
        let ch41 = document.getElementById('cb41');
        let ch42 = document.getElementById('cb42');
        let ch43 = document.getElementById('cb43');
        let ch44 = document.getElementById('cb44');
        let ch45 = document.getElementById('cb45');
        let ch51 = document.getElementById('cb51');
        let ch52 = document.getElementById('cb52');
        let ch53 = document.getElementById('cb53');
        let ch54 = document.getElementById('cb54');
        if(ch11.checked) setChars(chars.push('ch11'));
        if(ch12.checked) setChars(chars.push('ch12'));
        if(ch13.checked) setChars(chars.push('ch13'));
        if(ch14.checked) setChars(chars.push('ch14'));
        if(ch15.checked) setChars(chars.push('ch15'));
        if(ch16.checked) setChars(chars.push('ch16'));
        if(ch17.checked) setChars(chars.push('ch17'));
        if(ch18.checked) setChars(chars.push('ch18'));
        if(ch19.checked) setChars(chars.push('ch19'));
        if(ch21.checked) setChars(chars.push('ch21'));
        if(ch22.checked) setChars(chars.push('ch22'));
        if(ch23.checked) setChars(chars.push('ch23'));
        if(ch24.checked) setChars(chars.push('ch24'));
        if(ch25.checked) setChars(chars.push('ch25'));
        if(ch26.checked) setChars(chars.push('ch26'));
        if(ch27.checked) setChars(chars.push('ch27'));
        if(ch28.checked) setChars(chars.push('ch28'));
        if(ch31.checked) setChars(chars.push('ch31'));
        if(ch32.checked) setChars(chars.push('ch32'));
        if(ch33.checked) setChars(chars.push('ch33'));
        if(ch34.checked) setChars(chars.push('ch34'));
        if(ch41.checked) setChars(chars.push('ch41'));
        if(ch42.checked) setChars(chars.push('ch42'));
        if(ch43.checked) setChars(chars.push('ch43'));
        if(ch44.checked) setChars(chars.push('ch44'));
        if(ch45.checked) setChars(chars.push('ch45'));
        if(ch51.checked) setChars(chars.push('ch51'));
        if(ch52.checked) setChars(chars.push('ch52'));
        if(ch53.checked) setChars(chars.push('ch53'));
        if(ch54.checked) setChars(chars.push('ch54'));
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
        {profile.created === 'false' ? (
            <div className="body">
            <div className="login-card">
                <h2>Sign Up</h2>
                <form className="login-form">
                    <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="email"/>
                    <input type="password" placeholder="Password"/>
                </form>
                <form className="login-form">
                    <h3 className="cabecalho3">Com que características te relacionas?</h3>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb11"/>
                        <label for="cb1">Empreendedor</label>
                    </div>                  
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb12"/>
                        <label for="cb2">Dinâmico</label>
                    </div>    
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb13"/>
                        <label for="cb3">Trabalhador</label>
                    </div>   
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb14"/>
                        <label for="cb4">Criativo</label>
                    </div>   
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb15"/>
                        <label for="cb5">Artístico</label>
                    </div>   
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb16"/>
                        <label for="cb6">Ambiçoso</label>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb17"/>
                        <label for="cb7">Focado</label>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb18"/>
                        <label for="cb8">Pró-ativo</label>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb19"/>
                        <label for="cb9">Dedicado</label>
                    </div>
                </form>
                <form className="login-form">
                    <h3 className="cabecalho3">Como gostarias que fosse o teu curso?</h3>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb21"/>
                        <label for="cb1">Prático</label>
                    </div>                  
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb22"/>
                        <label for="cb2">Exigente</label>
                    </div>    
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb23"/>
                        <label for="cb3">Desafiador</label>
                    </div>   
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb24"/>
                        <label for="cb4">Em constante evolução</label>
                    </div>   
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb25"/>
                        <label for="cb5">Trabalhoso</label>
                    </div>   
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb26"/>
                        <label for="cb6">Estratégico</label>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb27"/>
                        <label for="cb7">Pragmático</label>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb28"/>
                        <label for="cb8">Teórico</label>
                    </div>
                </form>
                <form className="login-form">
                    <h3 className="cabecalho3">O que te vês a fazer no futuro?</h3>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb31"/>
                        <label for="cb1">Trabalhar por conta própria</label>
                    </div>                  
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb32"/>
                        <label for="cb2">Trabalhar em organizações</label>
                    </div>    
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb33"/>
                        <label for="cb3">Investigação</label>
                    </div>   
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb34"/>
                        <label for="cb4">Nenhuma das anteriores</label>
                    </div>   
                </form>
                <form className="login-form">
                    <h3 className="cabecalho3">Quais as áreas que mais gostas?</h3>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb41"/>
                        <label for="cb1">Ciências Sociais</label>
                    </div>                  
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb42"/>
                        <label for="cb2">Matemática</label>
                    </div>    
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb43"/>
                        <label for="cb3">Literatura</label>
                    </div>   
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb44"/>
                        <label for="cb4">Arte</label>
                    </div> 
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb45"/>
                        <label for="cb5">Física</label>
                    </div> 
                </form>
                <form className="login-form">
                    <h3 className="cabecalho3">Quanto tempo estás à espera de dispensar para a faculdade?</h3>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb51"/>
                        <label for="cb1">{'>90%'}</label>
                    </div>                  
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb52"/>
                        <label for="cb2">75-90%</label>
                    </div>    
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb53"/>
                        <label for="cb3">50-75%</label>
                    </div>   
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <input type="checkbox" id="cb54"/>
                        <label for="cb4">{'<50%'}</label>
                    </div>   
                    <button onClick={() => {
                        saveAll();
                        setProfile({name: `${name}`, created: 'true', chars: chars});
                        }}>Confirm</button>
                </form>
            </div>
            </div>
        ) : (
            <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}}>
                <CardMedia 
                    image={ProfileIcon}
                    alt="Profile_picture"
                    sx={{borderRadius: '10%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3', backgroundColor: 'white'}}
                />
                <Typography variant="h6">
                    {profile.name}
                </Typography>
            </CardContent>)}
        </Box>
      </Box>
      <Box display="flex" p="2" sx={{alignItems:"center" ,justifyContent: 'center', width: '100%'}}>
            {profile?.created === 'true' && currentList.map((element) => (
                element.Chars && <MovieCard movie={element} />
            ))}
      </Box>
      <Box display="flex" p="2" sx={{alignItems:"center" ,justifyContent: 'center', marginTop: '20px', width: '100%'}}>
            {profile?.created === 'true' && currentList.map((element) => (
                element.Chars && <CircularProgress 
                    variant="determinate" 
                    value={calculatePercentage(element, profile)} 
                    sx={{marginLeft: '10%', marginRight: '10%', color: '#f9d3b4'}}
                    />
            ))}
        </Box>
        <Box display="flex" p="2" sx={{alignItems:"center" ,justifyContent: 'center', marginTop: '20px', width: '100%'}}>
            {profile?.created === 'true' && currentList.map((element) => (
                element.Chars && <Typography variant="h6" sx={{marginLeft: '10%', marginRight: '10%', marginBottom: '10%', color: '#f9d3b4'}}>
                {calculatePercentage(element, profile)}%
             </Typography>
         ))}
      </Box>
    </Box>
  )
}

export default ProfileDetail