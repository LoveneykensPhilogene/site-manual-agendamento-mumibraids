
import { useState } from "react"
import logo from "./../../assets/LOGO_Marca_mumi_braids-sem-fundo.png"
import { formatDate } from "date-fns"
import Api from "../../axios/api"
import { SERVICO } from "./catalogo"
import { useNavigate } from "react-router-dom"


export const CriarCatalogo = () => {
    const [tipo, setTipo] = useState("nenhum tipo selecionado")
    const [nome, setNome] = useState("nenhum nome selecionado")
    const [preco, setPreco] = useState("nenhum preco selecionado")
    const [descricao, setDescricao] = useState("nenhum descricao selecionado")
    // const [foto, setFoto] = useState(null);
    const navigation = useNavigate();

    // const handleImageChange = (e: any) => {
    //     if (e.target.files && e.target.files[0]) {
    //         // Cria uma URL local para a imagem
    //         setFoto(URL.createObjectURL(e.target.files[0]));
    //     }
    // };
    // const url = URL.createObjectURL(new Blob([foto[0]], { type: 'image/*' }));   

    // const PegarFile = (e:any) => {
    //     const blob = new Blob([e.target.files[0]], { type: 'image/*' });
    //     const formData = new FormData();
    //     formData.append('file', blob);
    // }

    const CriarServico = async () => {


        const servico: SERVICO = {
            id: 1945,
            nome: nome,
            preco: preco,
            descricao: descricao,
            tipo: tipo,
            foto: "",
            criado: formatDate(new Date(), "dd/MM/yyyy"),
            atualizacao: formatDate(new Date(), "dd/MM/yyyy")
        }   //    const link = document.createElement('a')
        //    link.href = url
        //    link.download = 'example.txt'
        //    link.click()
        //    URL.revokeObjectURL(url)


        await Api.post("", servico,
            {
                params: { servicoNoCatalogo: "novoServico" }
            }).then(
                (response) => {
                    if (response.status === 200 && response.statusText === "OK") {
                        navigation("/catalogo/consulta");
                    }
                    else {
                        navigation("/catalogo/cadastro");
                    }
                    console.log("Usuario cadastrado com sucesso:", response.data)
                }




            )
            .catch((e) => console.log("Erro ao cadastrar usuário:", e));
    }


    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>

            <img src={logo} alt="logo" style={{ width: 150, height: 100, justifyItems: "stretch" }} />
            <hr style={{ width: 500, border: "1px solid #FF1493" }} />
            <h1>Criar Catalogo</h1>
            {/* <a href={url} download={"imagem_" + formatDate(new Date(), "dd-MM-yyyy_hh-mm")} >Clique aqui</a> */}
            {/* <img src={foto} alt="logo" style={{ width: 150, height: 150, justifyItems: "stretch", borderRadius: 75, objectFit: 'fill' }} /> */}
            <div style={{ display: "flex", width: 300, flexDirection: "column", gap: 10 }}>
                <input style={{}} type="file" title="Selecione uma imagem" accept="image/*" alt="foto" />
                <input type="text" className="input" placeholder="Digite o nome do produto" onChange={(e) => { setNome(e.target.value) }} style={{ border: "2px solid #FF1493", borderRadius: 5, height: 20 }} />
                <input type="text" className="input" placeholder="Digite o valor" onChange={(e) => { setPreco(e.target.value) }} style={{ border: "2px solid #FF1493", borderRadius: 5, height: 20 }} />
                <textarea title="" placeholder="Digite a descrição" onChange={(e) => { setDescricao(e.target.value) }} style={{ border: "2px solid #FF1493", borderRadius: 5, height: 60 }} />
                <select name="tipo" value="Selecione" onChange={(e) => { setTipo(e.target.value) }} style={{ border: "2px solid #FF1493", borderRadius: 5, height: 30 }}>
                    <option value="Selecione" disabled>Selecione o tipo</option>
                    <option value="Com material">Com material</option>
                    <option value="Sem material" >Sem material</option>
                </select>

                <button onClick={CriarServico} style={{ backgroundColor: "#FF1493", color: "white", border: "none", borderRadius: 5, height: 30, cursor: "pointer" }}>Criar Serviço</button>
            </div>
        </div>
    )

}



