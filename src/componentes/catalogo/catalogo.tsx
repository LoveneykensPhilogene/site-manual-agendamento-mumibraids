import React, { useState } from "react";

import Api from "../../axios/api";

export type SERVICO = {
    id: number | undefined;
    nome: string | undefined;
    preco: string | undefined;
    descricao: string | undefined;
    tipo: string | undefined;
    foto:""|undefined;
    criado: string | undefined;
    atualizacao: string | undefined;
}

export const Catalogo = () => {

    const [servicos, setServicos] = useState<SERVICO[]>([{} as SERVICO]);



    // const servicos = [
    //     {
    //         id: 1,
    //         nome: "Trança Box Braids",
    //         valor: "R$ 250,00",
    //         descricao: "Trança box braids é um estilo de trança que consiste em dividir o cabelo em seções quadradas e trançar cada seção individualmente" +
    //             ".É um penteado popular entre pessoas com cabelos crespos ou cacheados, pois oferece proteção e versatilidade." +
    //             "As box braids podem ser feitas com diferentes tipos de cabelo, como cabelo natural, cabelo sintético ou cabelo humano" +
    //             " e podem variar em comprimento e espessura." +
    //             " Além disso, as box braids são conhecidas por sua durabilidade, podendo durar semanas ou até meses com os cuidados adequados.",
    //         tipo: "Sem material",
    //         imagem: ""
    //     },
    //     {
    //         id: 2,
    //         nome: "Trança Box Braids",
    //         valor: "R$ 400,00",
    //         descricao: "Trança box braids é um estilo de trança que consiste em dividir o cabelo em seções quadradas e trançar cada seção individualmente" +
    //             ".É um penteado popular entre pessoas com cabelos crespos ou cacheados, pois oferece proteção e versatilidade." +
    //             "As box braids podem ser feitas com diferentes tipos de cabelo, como cabelo natural, cabelo sintético ou cabelo humano" +
    //             " e podem variar em comprimento e espessura." +
    //             " Além disso, as box braids são conhecidas por sua durabilidade, podendo durar semanas ou até meses com os cuidados adequados.",
    //         tipo: "Com material",
    //         imagem: ""
    //     }
    // ]

    const MostrarCatalogo = async () => {

        await Api.get("", {
            params:
            {
                planilha: "CATALOGO"
            }
        }).then(
            (response) => {
                if (response.status === 200) {
                    console.log("Agendamento encontrado:", response.data);
                    setServicos(response.data);
                } else {
                    console.log("Nenhum agendamento encontrado com o ID fornecido." + JSON.stringify(servicos));
                    alert("Nenhum agendamento encontrado com o código fornecido.");
                }
            }
        ).catch((e) => console.log("Erro ao buscar agendamento:", e));
    }

    MostrarCatalogo();

    return (
        <div>
            <h1>Catalogos</h1>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", flexWrap: "wrap", width:"100%", height: 300, overflow: "auto" }}>
                {servicos.map((servico) => {
                    return (
                        <div style={{backgroundColor:"lightgrey",width:300,flexDirection: "column", height: 120,paddingInlineStart:5, borderRadius: 5,margin:20}}>
                            <img src={""} alt={servico.nome} />
                            <h2 style={{margin:2}}> Nome: {servico.nome}</h2>
                            <p style={{margin:2}}> Descrição: {servico.descricao}</p>
                            <p style={{margin:2}}> Preço: {servico.preco}</p>
                            <p style={{margin:2}}> Tipo: {servico.tipo}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}