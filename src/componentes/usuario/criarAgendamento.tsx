import { useState } from "react"
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { Usuario } from "../admin/agendas";
import Api from "../../axios/api";
import logo from "./../../assets/LOGO Marca mumi braids.jpeg"
import "./../../styles/agendamento.css"
import "./../../styles/responsive-site.css"

export const CriarAgendamento = () => {
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [telefone, setTelefone] = useState("")
    const [diaAgendado, setDiaAgendado] = useState("")
    const [HoraAgendada, setHoraAgendada] = useState("") 
    const navigation = useNavigate()

    const CadastrarUsuario = async () => {
        //  e.preventDefault();
        const usuario: Usuario = {
            id: Number.parseInt(cpf.concat(telefone)),
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            dia_agendado: format(new Date(diaAgendado), "dd/MM/yyyy"),
            hora_agendada: HoraAgendada,
            data: format(new Date(), "dd/MM/yyyy").toString(),
        }
        if (usuario.nome === "" || usuario.cpf === "" || usuario.telefone === "" || usuario.dia_agendado === "" || usuario.hora_agendada === "") {
            alert("Por favor, preencha todos os campos do formulário antes de cadastrar o agendamento.");
        } else {
            await Api.post("", usuario,
                {
                    params: { cadastrarLinha: "cadastrar" }
                }).then(
                    (response) => {
                        if (response.status === 200) {
                            navigation("/agendas");
                        }
                        console.log("Usuario cadastrado com sucesso:", response.data);
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
        <div className="containerAgendamento containerAgendamento-min" >
            <img src={logo} alt="logo" style={{ width: 150, height: 100, justifyItems: "stretch" }} />
            {/* <h1 className="">Criar Agendamento MUMI BRAIDS</h1> */}
            <hr />
            <h2 className="">Preencha o formulário abaixo para criar um novo agendamento</h2>
            <hr />
            <div className="divForm divForm-min">
                <form action={CadastrarUsuario} style={{ display: "flex", flexDirection: "column", width: "30%", margin: 10 }}>
                    <input className="input-min" type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Nome' />
                    <input className="input-min" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder='CPF' />
                    <input className="input-min" type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder='Telefone' aria-placeholder="" />
                    <input className="input-min" type="date" value={diaAgendado} onChange={(e) => setDiaAgendado(e.target.value)} placeholder='Dia Agendado' />
                    <input className="input-min" type="time" value={HoraAgendada} onChange={(e) => setHoraAgendada(e.target.value)} placeholder='Hora Agendada' />
                    <input className="input-min" type="text" value={format(new Date(), "dd/MM/yyy").toString()} onChange={() => { }} placeholder='Data' />
                    <div className="divButton divButton-min">
                        <button type="submit" style={{ margin: 10, backgroundColor: "#8a2be2", fontSize: 16, fontWeight: "bold", borderRadius: 5 }}>Cadastrar</button>
                        <button type="reset" style={{ margin: 10, borderRadius: 5, fontSize: 16, fontWeight: "bold" }} onClick={() => LimparFormulario}>Limpar</button>
                        <button type="button" style={{ margin: 10, borderRadius: 5, fontSize: 16, fontWeight: "bold" }} onClick={() => navigation("/")}>Voltar</button>
                    </div>
                </form>
            </div>
        </div>

    )
}