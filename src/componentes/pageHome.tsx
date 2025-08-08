import { Menu, MenuItem, Sidebar } from "react-pro-sidebar"
import {useNavigate ,Link} from "react-router-dom"

export const Home=()=>{
 const nav=useNavigate();
    return(
        <div>
            <h1 style={{ borderBottom:"2px solid #8a2be2 "}}> Seja bem vindo !</h1>
        <Sidebar  style={{ display:"flex", marginTop:2,backgroundColor:"#8a2be2" }}
        
        >
      Home
            <Menu >
                <MenuItem 
                    onClick={() => { nav("/agendas") }}
                >
              Agendas
                </MenuItem>
                <MenuItem component={<Link to="/novoAgendamento" />}
                //onClick={()=>{nav("/novoAgendamento")}} 
                >                             
                 Criar agendamento
                </MenuItem>
            </Menu>
        </Sidebar>
        </div>
    )
}