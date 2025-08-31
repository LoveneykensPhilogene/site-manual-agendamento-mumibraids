import { useEffect, useState } from "react";
import Api from "../../axios/api";
import { useNavigate } from "react-router-dom";
import "./../../styles/agendas.css"
import "./../../styles/responsive-site.css"

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
    const navigation = useNavigate()

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
        () => { BuscarTodosUsuarios() }
    )

    return (
        <div className="containerAgendas containerAgendas-min" >
            <h1>Lista de agendamentos MUMI BRAIDS</h1>

            <div className="divList divList-min">
                <div className="divCabecalho divCabecalho-min">
                    <h2 style={{ flex: 1 }}>NOME</h2>
                    <h2 style={{ flex: 1 }}>CPF</h2>
                    <h2 style={{ flex: 1 }}>Telefone</h2>
                    <h2 style={{ flex: 1 }}>DIA</h2>
                    <h2 style={{ flex: 1 }}>HORA</h2>
                    <h2 style={{ flex: 1 }}>DATA</h2>
                </div>

                {usuarios.map((usuario) => (
                    <div className="divLinhasContainer-min">

                        <div className="divLinhas divLinhas-min"
                            style={
                                {
                                    backgroundColor: selecionarAG
                                        &&
                                        usuario.nome === nomeSelect ? "#8a2be2" : "",
                                }
                            }
                        >

                            <button style={{ marginInlineEnd: 10 }} onClick={() => SelecionarAgendamento(usuario)}>
                                <img src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="User Icon" style={{ width: 20, height: 20, cursor: 'pointer' }} />
                            </button>
                            <h2 style={{ flex: 1, fontSize: 18 }}>{usuario.nome}</h2>
                            <h2 style={{ flex: 1, fontSize: 18 }}>{usuario.cpf}</h2>
                            <h2 style={{ flex: 1, fontSize: 18 }}>{usuario.telefone}</h2>
                            <h2 style={{ flex: 1, fontSize: 18 }}>{usuario.dia_agendado}</h2>
                            <h2 style={{ flex: 1, fontSize: 18 }}>{usuario.hora_agendada}</h2>
                            <h2 style={{ flex: 1, fontSize: 18 }}>{usuario.data}</h2>
                        </div>
                        <div className="divButtonEditar" >  {selecionarAG === true && usuario.nome === nomeSelect ? <div>
                            <button type="button" style={{ backgroundColor: selecionarAG ? "" : "#8a2be2" }}>Editar</button>
                            <button>Visualizar</button>
                            <button>Deletar</button>
                            <button>Enviar lembrete</button>

                        </div> : ""}
                        </div>
                    </div>
                ))
                }
            </div>
            <div style={{ display: "flex", flex: 1, margin: 20 }}>
                {/* <button style={{ margin: 5, width: 150, backgroundColor: "#8a2be2", fontSize:24,fontWeight:'bold' }} onClick={BuscarTodosUsuarios}>  Visuaisar</button>                  */}
                <button style={{ margin: 5, width: 150, backgroundColor: "#8a2be2", fontSize: 18, fontWeight: 'bold' }} onClick={() => navigation("/")}>Voltar</button>
            </div>
        </div>

    )
}
