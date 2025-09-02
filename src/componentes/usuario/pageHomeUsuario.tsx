import { useNavigate } from "react-router-dom"
import logo from "./../../assets/LOGO_Marca_mumi_braids-sem-fundo.png"
import { BackgroundColor } from "../../styles/colors/backgroundColor";

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
        <div style={{ display: "flex", flexDirection: "column", backgroundColor: BackgroundColor.container }} >
            <div style={{ display: "flex", justifyContent: "flex-end", margin: 10 }}>
                <button onClick={Entrar} style={{ border: "2px solid #FF1493", borderRadius: 5, color: "black", fontWeight: 'bold', backgroundColor: "#FF1493", fontSize: 11 }}>Entrar</button>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100vw", height: "100vh" }}>
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
                                    backgroundColor: "#FF1493",
                                    color: "black",
                                    border: "2px solid #FF1493",
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
