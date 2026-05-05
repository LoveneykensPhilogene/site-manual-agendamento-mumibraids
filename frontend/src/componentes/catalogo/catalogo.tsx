import React, { useEffect, useState } from "react";

import Api from "../../axios/api";
import logo from "./../../assets/LOGO_Marca_mumi_braids-sem-fundo.png"

export type SERVICO = {
    id: number | undefined;
    nome: string | undefined;
    preco: string
    descricao: string | undefined;
    tipo: string | undefined;
    duracao: string | undefined;
    foto: File | null;
    criado: string | undefined;
    atualizacao: string
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
                    // console.log("Agendamento encontrado:", response.data);
                    setServicos(response.data);
                } else {
                    // console.log("Nenhum agendamento encontrado com o ID fornecido." + JSON.stringify(servicos));
                    alert("Nenhum agendamento encontrado com o código fornecido.");
                }
            }
        ).catch((e) => console.log("Erro ao buscar agendamento:", e));
    }
    useEffect(() => {
        MostrarCatalogo()
    }, [servicos.length]);


    return (
        <div >
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                <img src={logo} alt="logo" style={{ width: 150, height: 100, justifyItems: "stretch" }} />
                <hr style={{ display: "flex", width: "100%", border: "1px solid #FF1493" }} />
            </div>
            <h1 style={{ textAlign: "center" }}>Catalogo de servicos</h1>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", flexWrap: "wrap", width: "100%", overflow: "auto" }}>
                {servicos.map((servico) => {
                    return (
                        <div key={servico.id} style={
                            {
                                justifyContent: "center",
                                backgroundColor:"lightgrey",
                                width: 350,
                                height: 150,
                                margin: 10,
                                flexDirection: "column",
                                border: "2px solid #FF1493",
                                //borderRightWidth:150,
                                paddingLeft: 5,
                                paddingRight: 5,
                                overflow: "hidden",
                                borderRadius: 10,
                                boxShadow: "0 4px 8px 0 rgba(240, 91, 165, 0.95), 0 6px 20px 0 rgba(255, 124, 196, 0.19)"

                            }
                        }>
                            <div
                                style={
                                    {
                                        display: "flex",
                                        flexDirection: "row",
                                        width: 350
                                    }
                                }
                            >
                                <img src={logo} alt={servico.nome} style={{ width: 60, height: 60 }} />

                                <div
                                    style={
                                        {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            flexDirection: "row",
                                            width: 250,
                                            alignItems: "center",
                                        }
                                    }>
                                    <h2 style={{ margin: 2 }}>{servico.nome}</h2>
                                    <p >R$ {Number.parseFloat(servico.preco).toFixed(2)}</p>
                                </div>
                            </div>

                            <div

                            >
                                <div
                                    style={
                                        {
                                            display: "block",
                                            width: 350,
                                            height: 65,
                                            wordBreak: "break-word",
                                            overflow: "hidden",
                                            marginTop: -10


                                        }
                                    }
                                >
                                    <p style={{ fontSize: 14, fontFamily:"serif" }}>
                                        {servico.descricao}
                                    </p>
                                </div>
                                <div
                                    style={
                                        {
                                            display: "flex",
                                            width: 350,
                                            justifyContent: "space-between",
                                            alignItems: "center",

                                        }}
                                >
                                    <p style={{ margin: 2 }}>{servico.tipo}</p>
                                    <p>{"Duracão: 8h"}</p>
                                    <p>{servico.atualizacao}</p>
                                </div>
                            </div>
                        </div>


                    )
                })}
            </div>
        </div>
    )
}