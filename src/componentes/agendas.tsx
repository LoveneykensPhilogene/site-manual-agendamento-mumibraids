import { useEffect, useState } from "react";
import Api from "../axios/api";
import { format } from 'date-fns';
import { Link, useNavigate } from "react-router-dom";

export interface Usuario {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    dia_agendado: string;
    hora_agendada: string;
    data: string
    //status: string;
}

export const Agendas = () => {
     const [usuarios, setUsuarios] = useState<Usuario[]>([{} as Usuario]);    
     const [selecionarAG, setSelecionarAG] = useState(false);
     const [nomeSelect, setNomeSelect] = useState("");
     //const formattedDate = format(new Dat), 'dd,MM, yyyy ');
     const navigation=useNavigate()

     const SelecionarAgendamento = (usuario: Usuario) => {
         if (usuario) {
             setSelecionarAG(true);
             setNomeSelect(usuario.nome);
         }
         //setSelecionarAG(selecionarAG);

         console.log(selecionarAG);
         //alert("Agendamento selecionado "+ "Nome do Cliente : "+usuario.nome)
     }
     const BuscarTodosUsuarios = async () => {
         console.log("Buscando todos os usuários...");
         await Api.get("", {
             params: {
                 planilha: "usuario"
             }
         }
         ).then((response) => {
             setUsuarios(response.data)
             console.log("Usuários encontrados:", usuarios);
         }
         ).catch((e) => console.log(e));
         // console.log("Usuários encontrados:", format(usuarios[3].dia_agendado, "dd/MM/yyyy") ); 

     }
     useEffect(
       ()=>{ BuscarTodosUsuarios()},
       []
     )     
     
     return (
         <div style={{ display: 'flex', flexDirection: "column" }}>
             <h1>Lista de agendamentos MUMI BRAIDS</h1>

             <div style={{ display: "flex", flexDirection: "column", }}>
                 <div style={
                     {
                         display: "flex",
                         flex: 1,
                         flexDirection: "row",
                         margin: 10,
                         ///alignItems: "center",
                         justifyContent: "space-around",
                         width: "60%",
                         paddingLeft: 10,
                         borderBottom: "2px solid black",
                     }
                 }>
                     <h2 style={{ flex: 1 }}>NOME</h2>
                     <h2 style={{ flex: 1 }}>CPF</h2>
                     <h2 style={{ flex: 1 }}>Telefone</h2>
                     <h2 style={{ flex: 1 }}>DIA</h2>
                     <h2 style={{ flex: 1 }}>HORA</h2>
                     <h2 style={{ flex: 1 }}>DATA</h2>
                 </div>

                 {usuarios.map((usuario) => (

                     <div style={
                         {
                             display: "flex",
                             flex: 1,
                             flexDirection: "row",
                             backgroundColor: selecionarAG && usuario.nome === nomeSelect ? "#8a2be2" : "",
                             margin: 10,
                             alignItems: "center",
                             justifyContent: "space-around",
                             width: "60%",
                             borderRadius: 10,
                             paddingLeft: 10,
                             borderBottom: "1px solid black"
                         }
                     }>

                         <button style={{ marginInlineEnd: 10 }} onClick={() => SelecionarAgendamento(usuario)}>
                             <img src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="User Icon" style={{ width: 20, height: 20 }} />
                         </button>
                         <h2 style={{ flex: 1, fontSize: 18 }}>{usuario.nome}</h2>
                         <h2 style={{ flex: 1, fontSize: 18 }}>{usuario.cpf}</h2>
                         <h2 style={{ flex: 1, fontSize: 18 }}>{usuario.telefone}</h2>
                         <h2 style={{ flex: 1, fontSize: 18 }}>{usuario.dia_agendado}</h2>
                         <h2 style={{ flex: 1, fontSize: 18 }}>{usuario.hora_agendada}</h2>
                         <h2 style={{ flex: 1, fontSize: 18 }}>{usuario.data}</h2>
                     </div>
                 ))
                 }
             </div>
             <div style={{display:"flex",flex:1, margin:20}}>
                 {/* <button style={{ margin: 5, width: 150, backgroundColor: "#8a2be2", fontSize:24,fontWeight:'bold' }} onClick={BuscarTodosUsuarios}>  Visuaisar</button>                  */}
                 <button style={{ margin: 5, width: 150, backgroundColor: "#8a2be2", fontSize: 18, fontWeight: 'bold' }} onClick={()=>navigation("/")}>Voltar</button>              
             </div>
             </div>
             
             )
             }
 