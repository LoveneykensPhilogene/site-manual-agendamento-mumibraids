import { useNavigate } from "react-router-dom"
import logo from "./../../assets/LOGO Marca mumi braids.jpeg"
export const LoginAdmin = () => {
    const navigation = useNavigate()
    const Entrar=()=>{
        alert("Não tem acesso entar em contato com administador")
        navigation("/")
             }
    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"}}>
            <img src={logo} alt="logo" style={{ width: 150, height: 100, justifyItems: "stretch" }} />
            <input type="text" placeholder="usuário" />
            <input type="password" placeholder="Senha" />
            <button style={{display:"flex",backgroundColor:"#8a2be2",width:80,justifyContent:"center",fontSize:14,fontWeight:'bold'}}  onClick={Entrar}>Entrar</button>
        </div>
    )
}