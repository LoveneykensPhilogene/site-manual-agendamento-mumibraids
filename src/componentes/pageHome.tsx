import { Menu, MenuItem, Sidebar } from "react-pro-sidebar"
import { useNavigate, Link } from "react-router-dom"

export const Home = () => {
    const nav = useNavigate();
    return (      
        <div style={{backgroundColor:'white'}}>  
            <Sidebar style={{ display: "flex",margin:10, flexDirection:'column',borderRadius:'0px 10px 10px 0px', backgroundColor: "#8a2be2",height:850}}

            >
                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:'row'}}>
                    <img src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="User Icon" style={{ width: 20, height: 20 }} />
                    <h1>Olá, seja bem vindo!</h1>
                </div>
                <Menu  style={{flex:1}}>
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