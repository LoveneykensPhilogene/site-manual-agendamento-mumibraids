import { useNavigate } from "react-router-dom"
import logo from "./../../assets/LOGO_Marca_mumi_braids-sem-fundo.png"
import { BackgroundColor } from "../../styles/colors/backgroundColor"
import { useContext, useState } from "react"
import Api from "../../axios/api"
import { createContextAdmin } from "../context/contextAdmin"
export const LoginAdmin = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigation = useNavigate()
    const { setAdmin, id } = useContext(createContextAdmin);
    const FazerLogin = async () => {
        const login = await Api.post("", { email: email, senha: senha }, {
            params: { login: "admin" }
        });
        console.log(login.data);
        if (login.data.erro) {
            alert("Não tem acesso, entar em contato com administador")
            navigation("/")
        } else {
            setAdmin(login.data)
            navigation("/admin/"+id+"/home")
        }
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", backgroundColor: BackgroundColor.container, justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }}>
            <img src={logo} alt="logo" style={{ width: 150, height: 100, justifyItems: "stretch", backgroundBlendMode: "difference" }} />
            <input type="text" value={email} onChange={(email) => setEmail(email.target.value)} placeholder="email" />
            <input type="password" security="password" value={senha} onChange={(senha) => setSenha(senha.target.value)} placeholder="Senha" />
            <button style={{ display: "flex", border: "2px solid #FF1493", borderRadius: 5, backgroundColor: "#FF1493", width: 80, justifyContent: "center", fontSize: 14, fontWeight: 'bold' }} onClick={FazerLogin}>Entrar</button>
        </div>
    )
}