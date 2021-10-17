import styled from 'styled-components'
import Mapa from '../Mapa.png';


export const StyledLoginandRegisterButton = styled.input`
color: white;
font-size:1em;
border-radius: 10px;
background: blue;
margin:25px;
:hover{
background:green;
}
`

export const StyledLogoutButton = styled.button`
color: white;
font-size:1em;
border-radius: 10px;
background: red;
margin:23px;
:hover{
background:green;
}
`


export const LoginAndRegisterDiv = styled.div`
display:flex;
justify-content:center;
align-items:flex-end;
`


export const Logoutdiv = styled.div`
background:green;
display:flex;
justify-content:flex-end;
:hover{
    background:red;
    }
button{color: white;
    font-size:0,5em;
    border-radius: 20px;
    background: orange;
    :hover{
    background:red;
    }
}
`


export const StyledBtnForSingleCountry = styled.button`
color: red;
font-size:1em;
border-radius: 10px;
background: white;

:hover{
    background:lightblue;
    }
&.transform{
    background: orange;
    
}
}
`




export const StyledBtnPagination = styled.button`
color: white;
font-size:1em;
border-radius: 10px;
background: orange;
&.transform{
    
    background:red;
    display:hidden;
}
}
`


export const StyledCountriesDiv = styled.div`
margin:2px;
padding:20px;
width:45rm;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
background-image: url(${Mapa});
align-items:flex-start;
`



export const StyledNav = styled.nav`
width:85rm;
background-image: url(${Mapa});
display: flex;

justify-content: space-around;
`


export const styledImg = styled.img`
width:200px;
height: 200px;
border - radius: 30px;
`
