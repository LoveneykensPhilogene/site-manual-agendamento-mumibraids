
import {useState } from "react"
import logo from "./../../assets/LOGO_Marca_mumi_braids-sem-fundo.png"
import { formatDate } from "date-fns"
import Api from "../../axios/api"
import { SERVICO } from "./catalogo"
import { useNavigate } from "react-router-dom"

export const CriarCatalogo = () => {
    const [tipo, setTipo] = useState("nenhum tipo selecionado")
    const [duracao, setDuracao] = useState("nenhuma duração selecionada")
    const [nome, setNome] = useState("nenhum nome selecionado")
    const [preco, setPreco] = useState("nenhum preco selecionado")
    const [descricao, setDescricao] = useState("nenhum descricao selecionado")
    const [foto, setFoto] = useState<string | null>(null);
    const navigation = useNavigate();
    // const [file,setFile] =useState(null);
   

    const handleImageChange = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            // Cria uma URL local para a imagem
            setFoto(URL.createObjectURL(e.target.files[0]));
        }
    };

    // const handleFileChange = (e) => {
    //     setFile(e.target.files[0]);
    // };
    // const url = URL.createObjectURL(new Blob([foto[0]], { type: 'image/*' }));   

    // const PegarFile = (e:any) => {
    //     const blob = new Blob([e.target.files[0]], { type: 'image/*' });
    //     const formData = new FormData();
    //     formData.append('file', blob);
    // }

    const CriarServico = async () => {

        const servico: SERVICO = {
            id: Math.floor(Math.random() * 1000000),
            nome: nome,
            preco: preco,
            descricao: descricao,
            tipo: tipo,
            duracao: duracao.concat("h"),
            foto: foto ? new File([foto], "imagem.png", { type: "image/png" }) : null,
            criado: formatDate(new Date(), "dd/MM/yyyy"),
            atualizacao: formatDate(new Date(), "dd/MM/yyyy")
        }   //    const link = document.createElement('a')
        //    link.href = url
        //    link.download = 'example.txt'
        //    link.click()
        //    URL.revokeObjectURL(url)

        // const MostrarImagem = (e: any) => {
        //     const fotoUpload = new FileReader();
        //     fotoUpload.onload = (e: any) => {
        //         setFoto(e.target.result);
        //     };
        //     fotoUpload.readAsDataURL(e.target.files[0]);

        // }       


//         const handleUpload = async () => {
//             if (!file) return;
// let data = null;
//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onload = () => {
//                 const base64String = reader.result.split(',')[1];
//                 data = {
//                     base64: base64String,
//                     type: file.type,
//                     name: file.name
//                 };
//             }

//                 await Api.post("", JSON.stringify(data))
//                 .then(res => res.data)
//                     .then(result => console.log("Arquivo salvo:", result.url))
//                     .catch(err => console.error(err));
//             }
        // Envia para o Apps Script
        //     fetch(WEB_APP_URL, {
        //         method: 'POST',
        //         body: JSON.stringify(data),
        //     })
        //         .then(res => res.json())
        //         .then(result => console.log("Arquivo salvo:", result.url))
        //         .catch(err => console.error(err));
        // }






        
        await Api.post("", servico,
            {
                params: { servicoNoCatalogo: "novoServico" }
            }).then(
                (response) => {
                    if (response.status === 200) {
                        console.log("Serviço criado com sucesso:", response.statusText);
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
                <input type="text" className="input" placeholder="Digite o nome do produto" onChange={(e) => { setNome(e.target.value.toUpperCase()) }} style={{ border: "2px solid #FF1493", borderRadius: 5, height: 20 }} />
                <input type="text" className="input" placeholder="Digite o valor" onChange={(e) => { setPreco(e.target.value) }} style={{ border: "2px solid #FF1493", borderRadius: 5, height: 20 }} />

                <input type="text" className="input" placeholder="Digite a duração" onChange={(e) => { setDuracao(e.target.value) }} style={{ border: "2px solid #FF1493", borderRadius: 5, height: 20 }} />
                 
                <textarea title="descricao" placeholder="Digite a descrição" onChange={(e) => { setDescricao(e.target.value) }} style={{ border: "2px solid #FF1493", borderRadius: 5, height: 60 }} />

                <select name="tipo" defaultValue="selecione" onChange={(e) => { setTipo(e.target.value) }} style={{ cursor: "pointer", border: "2px solid #FF1493", borderRadius: 5, height: 30 }}>

                    <option value="selecione" disabled>Selecione o tipo</option>
                    <option value="Com material"> Com material</option>
                    <option value="Sem material">Sem material</option>
                </select>
                {foto && nome ?
                    <div onClick={() => setFoto(null)} style={{ cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <img src={foto} alt="foto" style={{ width: 50, height: 50, justifyItems: "stretch", borderRadius: 75, objectFit: 'fill' }} />
                        <p>Alterar foto</p>
                    </div>
                    :
                    <div>
                        <input style={{ cursor: "pointer" }} type="file" title="Selecione uma imagem" accept="image/*" alt="foto" onChange={handleImageChange} />
                    </div>
                }
                <button onClick={CriarServico} style={{ backgroundColor: "#FF1493", color: "white", border: "none", borderRadius: 5, height: 30, cursor: "pointer" }}>Criar Serviço</button>
            </div>
        </div>
    )

}



