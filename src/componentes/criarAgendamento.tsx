import {useState } from "react"
import { format } from 'date-fns';
import { Usuario } from "./agendas";
import Api from "../axios/api";
import { useNavigate } from "react-router-dom";

export const CriarAgendamento = () => {
     const [nome, setNome] = useState("")
         const [cpf, setCpf] = useState("")
         const [telefone, setTelefone] = useState("")
         const [diaAgendado, setDiaAgendado] = useState("")
         const [HoraAgendada, setHoraAgendada] = useState("")   
   const history = useNavigate ()    

    const CadastrarUsuario = async () => {
        //  e.preventDefault();
        const usuario: Usuario = {
            id: Number.parseInt(cpf.concat(telefone)),
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            dia_agendado: diaAgendado,
            hora_agendada: HoraAgendada,
            data: format(new Date(), "dd/MM/yyyy").toString(),
        }
        if(usuario.nome==="" || usuario.cpf==="" || usuario.telefone==="" || usuario.dia_agendado==="" || usuario.hora_agendada===""){
            alert("Por favor, preencha todos os campos do formulário antes de cadastrar o agendamento.");
        }else{                 
        await Api.post("", usuario).then(
            (response) => {
             if(response.status===200){
              history("/agendas");    
           }
                console.log("Usuario cadastrado com sucesso:", response.data);
            }
        )
            .catch((e) => console.log("Erro ao cadastrar usuário:", e));
    }

        console.log("Usuário cadastrado:", usuario);

    }


    return(
        <div >
            <h1>Criar Agendamento MUMI BRAIDS</h1>
            <hr />
            <h2>Preencha o formulário abaixo para criar um novo agendamento</h2>
            <hr />
            <form action={CadastrarUsuario} style={{ display: "flex", flexDirection: "column", width: "30%", margin: 10 }}>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Nome' style={{ margin: 10 }} />
                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder='CPF' style={{ margin: 10 }} />
                <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder='Telefone' style={{ margin: 10 }} />
                <input type="text" value={diaAgendado} onChange={(e) => setDiaAgendado(e.target.value.toString())} placeholder='Dia Agendado' style={{ margin: 10 }} />
                <input type="text" value={HoraAgendada} onChange={(e) => setHoraAgendada(e.target.value.toString())} placeholder='Hora Agendada' style={{ margin: 10 }} />
                <input type="text" value={format(new Date(), "dd/MM/yyy").toString()} onChange={() => { }} placeholder='Data' style={{ margin: 10 }} />
                <button type="submit" style={{ margin: 10, backgroundColor: "#8a2be2", fontSize: 16, fontWeight: "bold" }}>Cadastrar</button>
                <button type="reset" style={{ margin: 10 }}>Limpar</button>
            </form>
        </div>

    )
 }