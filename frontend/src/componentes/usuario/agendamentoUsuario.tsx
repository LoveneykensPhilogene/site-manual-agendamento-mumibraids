import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Api from "../../axios/api"

export type AgendamentoUsuarioProps = {
    id: number;
    nome: string
    dia_agendado: string;
    hora_agendada: string;
    criado: string
}
export const AgendamentoUsuario = () => {
    const navigation = useNavigate()
    const [id, setId] = useState(0);
    const [agendamento, setAgendamento] = useState({} as AgendamentoUsuarioProps);
    const BuscarAgendamentoPorid = async () => {
        await Api.get("", {
            params:
            {
                idAgendamento: id,
                planilha: "AGENDAS"
            }
        }).then(
            (response) => {
                if (response.status===200 && response.data.id===id) {
                    console.log("Agendamento encontrado:", response.data);
                    setAgendamento(response.data);
                } else {
                    console.log("Nenhum agendamento encontrado com o ID fornecido." + agendamento);
                    alert("Nenhum agendamento encontrado com o código fornecido.");
                }
            }
        ).catch((e) => console.log("Erro ao buscar agendamento:", e));
    }
    // alert("Em breve você poderá ver seus agendamentos aqui.");
    // alert("Entrar em contato com o administrador para cancelar ou alterar agendamento Telefone: (47) 9 9252-3928");
    //navigation("/")
    // }
    // useEffect(
    //     () => {
    //         TodosOsAgendamentos();
    //     }
    // )
    return (
        <div style={{ backgroundColor: "black", width: "100vw", height: "1000vh" }}>
            <input type="text" style={{ marginTop: 20 }} onChange={(codigo) => setId(Number.parseInt(codigo.target.value))} placeholder="Digite o código do agendamento" />
            <button onClick={BuscarAgendamentoPorid} style={{ backgroundColor: "#FF1493", marginTop: 20, color: "black", border: "2px solid #FF1493", fontSize: 14, fontWeight: "bold", borderRadius: 5, padding: 6 }}>Buscar Agendamento</button>
            {agendamento.id === id ?
                <div style={{ margin: 30 }}>
                    <h1 style={{ color: "#FF1493" }}>Seu agendamento</h1>
                    <h3 style={{ color: "#FF1493" }}>Etabelessimento : Mumi Braids</h3>
                    <h3 style={{ color: "#FF1493" }}>Endereço : Rua dois de setembro,4525 - Itoupava Norte - Bluemenau - CEP : 89053-303</h3>
                    <p style={{ color: "#FF1493" }}> Teu nome : {agendamento.nome}</p>
                    <p style={{ color: "#FF1493" }}>Dia Agendado : {agendamento.dia_agendado}</p>
                    <p style={{ color: "#FF1493" }}>Hora Agendada : {agendamento.hora_agendada}</p>
                    <p style={{ color: "#FF1493" }}>Criado em : {(agendamento.criado)}</p>
                </div> :
                <div>
                    <h2 style={{ color: "#FF1493",marginInlineStart:10 }}>Por favor digitar o código do agendamento.</h2>
                </div>
            }

        <button type="button" onClick={()=>navigation("/")}
         style={
            { backgroundColor: "#FF1493", marginTop: 20, color: "black", border: "2px solid #FF1493", fontSize: 14, fontWeight: "bold", borderRadius: 5, padding: 6,
                marginInlineStart:"20vw"
             }
        }
         >Voltar</button>
        </div>
    )
}