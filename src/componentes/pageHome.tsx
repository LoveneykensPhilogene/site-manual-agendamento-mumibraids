
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar"
import { useNavigate, Link } from "react-router-dom"
import "../styles/pageHome.css"
import "../styles/responsive-site.css"


export const Home = () => {
    const nav = useNavigate();
    return (      
        <div className='container container-min'>  
            <Sidebar className="sideBar" >
                <div className="divImage divImage-min">
                    <img  className="image image-min" src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="User Icon" />
                    <h1>Olá, seja bem vindo!</h1>
                </div>
                <Menu >
                    <MenuItem
                    className="menuItem menuItem-min"
                        onClick={() => { nav("/agendas") }}
                    >
                        Agendas
                    </MenuItem>
                    <MenuItem
                        className="menuItem menuItem-min"
                    component={<Link to="/novoAgendamento" />}
                    //onClick={()=>{nav("/novoAgendamento")}} 
                    >
                        Criar agendamento
                    </MenuItem>
                </Menu>
            </Sidebar>
            </div>
   
    )
}