import { useContext, useState } from "react"
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import Api from "../../axios/api";
import logo from "./../../assets/LOGO_Marca_mumi_braids-sem-fundo.png"
import "./../../styles/agendamento.css"
import "./../../styles/responsive-site.css"
import { createContextAdmin } from "../context/contextAdmin";

export const CriarAgendamento = () => {
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [telefone, setTelefone] = useState("")
    const [diaAgendado, setDiaAgendado] = useState("")
    const [HoraAgendada, setHoraAgendada] = useState("")
    const navigation = useNavigate()
    const { id, email } = useContext(createContextAdmin);
    const CadastrarUsuario = async () => {
        //  e.preventDefault();     

        const usuario = {
            id: Number.parseInt(cpf.concat(telefone)),
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            dia_agendado: format(new Date(diaAgendado ? diaAgendado : "" + alert("dia não pode ser nulo")), "dd/MM/yyyy"),
            hora_agendada: HoraAgendada,
            data: format(new Date(), "dd/MM/yyyy").toString(),
        }

        if (usuario.nome === "" || usuario.cpf === "" || usuario.telefone === "" || usuario.dia_agendado === "" || usuario.hora_agendada === "") {
            alert("Por favor, preencha todos os campos do formulário antes de cadastrar o agendamento.");
        } else {
            if ((email == null || email === "")) {
                alert("No momento você não tem permissão para criar agendamentos, entre em contato com a Mumi Braids pelo telefone : (47) 9 92523928.");
                navigation("/")
            }
            await Api.post("", usuario,
                {
                    params: { cadastrarLinha: "cadastrar" }
                }).then(
                    (response) => {
                        if (response.status === 200 && id) {
                            navigation("/admin/" + id + "/agendas");
                        }
                        else {
                            navigation("/");
                        }
                        console.log("Usuario cadastrado com sucesso:", response.data)
                    }




                )
                .catch((e) => console.log("Erro ao cadastrar usuário:", e));
        }

        //console.log("Usuário cadastrado:", usuario);

    }

    const LimparFormulario = () => {
        setNome("");
        setCpf("");
        setTelefone("");
        setDiaAgendado("");
        setHoraAgendada("");
    }

    // const ModalCalendario = () => {
    //     return (
    //         <ReactModal isOpen={modalOpen}
    //      className={"modal"}
    //         >
    //             <Calendar/>
    //             </ReactModal>
    //     )
    // }


    return (
        <div className="containerAgendamento containerAgendamento-min" style={{ backgroundColor: "black" }} >
            <img src={logo} alt="logo" style={{ width: 150, height: 100, justifyItems: "stretch" }} />
            {/* <h1 className="">Criar Agendamento MUMI BRAIDS</h1> */}
            <h2 style={{ color: "#FF1493" }}>Preencha o formulário abaixo para criar um novo agendamento</h2>
            <div className="divForm divForm-min">
                <form action={CadastrarUsuario} style={{ display: "flex", flexDirection: "column", width: "30%", margin: 10 }}>
                    <input className="input-min" type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Nome' />
                    <input className="input-min" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder='CPF' />
                    <input className="input-min" type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder='Telefone' aria-placeholder="" />
                    <input className="input-min" type="date" value={diaAgendado} onChange={(e) => setDiaAgendado(e.target.value)} placeholder='Dia Agendado' />
                    <input className="input-min" type="time" value={HoraAgendada} onChange={(e) => setHoraAgendada(e.target.value)} placeholder='Hora Agendada' />
                    <input className="input-min" type="text" value={format(new Date(), "dd/MM/yyy").toString()} onChange={() => { }} placeholder='Data' />
                    <div className="divButton divButton-min">
                        <button type="submit" style={{
                            margin: 10, backgroundColor: "#FF1493", border: "2px solid #FF1493", fontSize: 16, fontWeight: "bold", borderRadius: 5
                        }}>Cadastrar</button>
                        <button type="reset" style={{ backgroundColor: "#FF1493", border: "2px solid #FF1493", margin: 10, borderRadius: 5, fontSize: 16, fontWeight: "bold" }} onClick={() => LimparFormulario}>Limpar</button>
                        <button type="button" style={{ backgroundColor: "#FF1493", border: "2px solid #FF1493", margin: 10, borderRadius: 5, fontSize: 16, fontWeight: "bold" }} onClick={() => { if (email) { navigation("/admin/" + id + "/home") } else { navigation("/") } }}>Voltar</button>
                    </div>
                </form>
            </div>
        </div>

    )
}