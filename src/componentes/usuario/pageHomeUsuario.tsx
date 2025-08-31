import { useNavigate } from "react-router-dom"
import logo from "./../../assets/LOGO Marca mumi braids.jpeg"

export type Botao = {
    nome: string;
    action: () => void;
}
export const PageHomeUsuario = () => {
    const navigation = useNavigate()

    const Entrar = () => {
        alert("Você tem acesso para login?",)
        navigation("/login/admin")
    }
    const botoes: Botao[] = [
        { nome: "Agendar", action: () => { navigation("/novoAgendamento") } },
        { nome: "Meus Agendamentos", action: () => { navigation("usuario/agendamento") } },
    ]
    return (
        <div style={{ display: "flex",flexDirection:"column"}} >
            <div style={{ display: "flex", justifyContent: "flex-end", width: "100%"}}>
                <button onClick={Entrar} style={{ color: "#8a2be2", backgroundColor: "black",fontWeight:'bold', fontSize:11}}>Entrar</button>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",width:"100vw",height:"100vh" }}>
                <img src={logo} alt="logo" style={{ width: 150, height: 100, justifyItems: "stretch" }} />
                {botoes.map((botao) => (
                    <div
                        style={
                            {
                                 display: "flex",
                                //border: "1px solid black",                           
                                //  cursor: "pointer",

                            }
                        }
                    >
                        <button onClick={botao.action}
                            style={
                                {
                                    width: "200px",
                                    margin: "10px",
                                    padding: "10px",
                                    textAlign: "center",
                                    backgroundColor: "black",
                                    color: "#8a2be2",
                                    fontWeight: "bold",
                                    borderRadius: 5,
                                    fontSize: 16,
                                }
                            }
                        >
                            {botao.nome}

                        </button>
                    </div>
                ))}
            </div>

        </div>
    )
}
