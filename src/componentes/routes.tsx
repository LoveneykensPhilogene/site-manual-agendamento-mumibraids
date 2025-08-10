import {BrowserRouter as HashRouter, Route, Routes } from "react-router-dom"
import { Agendas } from "./agendas"
import { CriarAgendamento } from "./criarAgendamento"
import { Home } from "./pageHome"

export const Rotas=()=>{

    return(
<HashRouter>
<Routes>
    <Route element={<Home />} path="/" />
    <Route element={<Agendas/>} path="/agendas" />    
    <Route element={<CriarAgendamento />} path="/novoAgendamento" />   
</Routes>
</HashRouter>

    )
}