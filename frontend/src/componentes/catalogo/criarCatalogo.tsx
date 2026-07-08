
import { useState } from "react"
import logo from "./../../assets/LOGO_Marca_mumi_braids-sem-fundo.png"
import { formatDate } from "date-fns"
import Api from "../../axios/api"
import { SERVICO } from "./catalogo"
import { useNavigate } from "react-router-dom"

export const CriarCatalogo = () => {
    const [tipo, setTipo] = useState("")
    const [duracao, setDuracao] = useState("")
    const [nome, setNome] = useState("nenhum nome selecionado")
    const [preco, setPreco] = useState("nenhum preco selecionado")
    const [descricao, setDescricao] = useState("nenhum descricao selecionado")
    const [foto, setFoto] = useState<string | null>(null);
    const [fotoId, setFotoId] = useState('');
    // const [file, setFile] = useState<File>({} as File);
    const [conteudoFile, setConteudoFile] = useState('');
    const navigation = useNavigate();
    //const [file,setFile] =useState(null);


    // const handleImageChange = (e: any) => {
    //     if (e.target.files && e.target.files[0]) {
    //         // Cria uma URL local para a imagem
    //         setFile(e.target.files[0]);
    //         setFoto(URL.createObjectURL(e.target.files[0]));
    //     }
    // };
    // const ar = "iVBORw0KGgoAAAANSUhEUgAAAFoAAAAyCAIAAABTbVtiAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE/2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI1LTExLTA0PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmM3NzhlZDMwLTVmMjMtNDM5Yi1hZDJiLTIzMDE2ODQxZDhmZjwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5SdWEgZG9pcyBkZSBzZXRlbWJybywgNDUyNS0gSXRvdXBhdmEgTm9ydGUgLSBmcmVudGU8L3JkZjpsaT4KICAgPC9yZGY6QWx0PgogIDwvZGM6dGl0bGU+CiA8L3Jk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"
    const f = "data:image/*;base64,"


    //const fileT=blob(Stream.Readable.from(ar))
    //console.log(fileT);
    // const handleFileChange = (e) => {
    //     setFile(e.target.files[0]);
    // };
    // const url = URL.createObjectURL(new Blob([foto[0]], { type: 'image/*' }));   

    // const PegarFile = (e:any) => {
    //     const blob = new Blob([e.target.files[0]], { type: 'image/*' });
    //     const formData = new FormData();
    //     formData.append('file', blob);
    // }

    // const EnviarImagemNogoogleDrive = async (e:any) => {
    //     await Api.post("", JSON.stringify(e.target.files),
    //         {
    //             params: { salvarImagem: "SalvarImagem" }
    //         })
    //         .then(res => res.data)
    //         .then(result => console.log("Arquivo salvo:", result.url))
    //         .catch(err => console.error(err.message));
    // }

    const CriarServico = async () => {

        const servico: SERVICO = {
            id: Math.floor(Math.random() * 1000000),
            nome: nome,
            preco: preco,
            descricao: descricao,
            tipo: tipo === "" || null ? "Qualquer" : tipo,
            duracao: duracao,
            foto: foto,// ? new File([foto], "imagem.png", { type: "image/png" }) : null,
            fotoId: fotoId,
            criado: formatDate(new Date(), "dd/MM/yyyy"),
            atualizacao: formatDate(new Date(), "dd/MM/yyyy")
        }


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

    const EnviarImagemNogoogleDrive = async (e: any) => {
        // const caracteresEspeciais = /'-','_','~','!','@','#','$','%','^','&','*','(',')','+','=','|','\\','{','}'/
        // let file = null;
        // caracteresEspeciais.test(e.target.files[0].name) 
        // if (caracteresEspeciais.test(e.target.files[0].name)) {
        //     alert("Nome do arquivo não pode conter caracteres especiais ou espaços em branco. Por favor, renomeie o arquivo e tente novamente.");
        //     navigation("/catalogo/cadastro");
        // } else {
        const file = e.target.files[0];
        //}
        console.log("Arquivo selecionado:", file);
        //setFoto(URL.createObjectURL(file));
        const reader = new FileReader();
        reader.onload = async (event) => {
            const fileContent = reader.result as ArrayBuffer;
            // console.log("Conteúdo do arquivo:", fileContent + "\n");
            //setFoto(fileContent);
            // 2. Convertemos o ArrayBuffer para uma string binária segura
            const bytes = new Uint8Array(fileContent);
            let stringBinaria = '';

            // Processa o buffer em pedaços para evitar estouro de pilha (stack overflow)
            const tamanhoPedaco = 0; // 32768
            for (let i = 0; i < bytes.length; i += tamanhoPedaco) {
                stringBinaria += String.fromCharCode.apply(
                    null,
                    bytes.subarray(i, i + tamanhoPedaco) as unknown as number[]
                );
                setConteudoFile(stringBinaria);
            }
        }
        reader.onerror = (error) => {
            console.error("Erro ao ler o arquivo:", error);
        };
        //setFoto(reader.readAsDataURL(file) as unknown as string);
        reader.readAsArrayBuffer(file);


        const base64Content = btoa(conteudoFile);
        // console.log("Conteúdo do arquivo em Base64:" + "file :" + base64Content +
        //     "\n" + "fotoId: " + fotoId);
        //setFoto(base64Content);
        await Api.post("",
            JSON.stringify({
                arquivo: base64Content,
                nome: file.name,
                tipo: file.type
            }),
            {
                // params: { imagemDoServico: "imagemDoServico" },
                headers: {
                    //  'Content-Type': 'application/x-www-form-urlencoded'     
                    'Content-Type': 'text/plain; charset=UTF-8'
                },
            }
        )
            .then(res => {
                setFotoId(res.data.fileId);
                setFoto(res.data.fileBase64);
                console.log("Arquivo salvo:", res.data)
            })
            //.then(result => console.log("Arquivo salvo:", result.url))
            .catch(err => console.error(err.message));
        // }
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
                {/* <label htmlFor="duracao">Duração:</label> */}
                <input type="time" className="input" placeholder="Digite a duração" onChange={(e) => { setDuracao(e.target.value) }} style={{ border: "2px solid #FF1493", borderRadius: 5, height: 20 }} />

                <textarea title="descricao" placeholder="Digite a descrição" onChange={(e) => { setDescricao(e.target.value) }} style={{ border: "2px solid #FF1493", borderRadius: 5, height: 60 }} />

                <select name="tipo" defaultValue="selecione" onChange={(e) => { setTipo(e.target.value) }} style={{ cursor: "pointer", border: "2px solid #FF1493", borderRadius: 5, height: 30 }}>

                    <option value="selecione" disabled>Selecione o tipo</option>
                    <option value="Com material"> Com material</option>
                    <option value="Sem material">Sem material</option>
                </select>
                {foto && nome ?
                    <div onClick={() => setFoto(null)} style={{ cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <img src={f + foto} alt="foto" style={{ width: 50, height: 50, justifyItems: "stretch", borderRadius: 75, objectFit: 'fill' }} />
                        <p>Alterar foto</p>
                    </div>
                    :
                    <div>
                        <input style={{ cursor: "pointer" }} type="file" title="Selecione uma imagem" accept="image/png,image/jpeg,image/jpg" alt="foto" onChange={EnviarImagemNogoogleDrive} />
                    </div>
                }
                <button onClick={CriarServico} style={{ backgroundColor: "#FF1493", color: "white", border: "none", borderRadius: 5, height: 30, cursor: "pointer" }}>Criar Serviço</button>
            </div>
        </div>
    )

}



