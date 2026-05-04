
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar"
import { Link, useNavigate } from "react-router-dom"
import "./../../styles/pageHomeAdmin.css"
import "./../../styles/responsive-site.css"
import { useContext } from "react"
import { ADMIN, createContextAdmin } from "../context/contextAdmin"


export const PageHomeAdmin = () => {
    const navigation = useNavigate();
    const { id, setAdmin } = useContext(createContextAdmin);
    return (
        <div className='container container-min' style={{ flexDirection: "column" }}>
            <Sidebar className="sideBar" >
                <div className="divImage divImage-min">
                    <img className="image image-min" src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="User Icon" />
                    <h1>Olá, seja bem vindo!</h1>
                </div>
                <Menu style={{ display: 'flex', fontSize: 44 }} >
                    <MenuItem
                        className="menuItem menuItem-min"
                        component={<Link to={`/admin/${id}/agendas`} />}
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
                <div style={{ display: "flex", justifyContent: "end", alignItems: "flex-end", height: "900px", margin: 20, flexDirection: "column" }}>
                    <button type="button" style={{ backgroundColor: " #FF1493", width: 60, border: "2px solid #FF1493", borderRadius: 5, fontSize: 14, fontWeight: "bold" }} onClick={() => { setAdmin({} as ADMIN); navigation("/") }}>Sair</button>
                </div>
            </Sidebar>

        </div>

    )
}