import { BrowserRouter as HashRouter, Route, Routes } from "react-router-dom"
import { Agendas } from "./admin/agendas"
import { CriarAgendamento } from "./usuario/criarAgendamento"
import { PageHomeUsuario } from "./usuario/pageHomeUsuario"
import { PageHomeAdmin } from './admin/pageHomeAdmin';
import { AgendamentoUsuario } from "./usuario/agendamentoUsuario";
import { LoginAdmin } from "./admin/loginAdmin";

export const Rotas = () => {

    return (
        <HashRouter>
            <Routes>
                <Route element={<PageHomeUsuario />} path="/" />
                <Route element={<PageHomeAdmin />} path="/admin" />
                <Route element={<LoginAdmin />} path="login/admin" />
                <Route element={<Agendas />} path="admin/agendas" />
                <Route element={<AgendamentoUsuario />} path="/usuario/agendamento" />
                <Route element={<CriarAgendamento />} path="/novoAgendamento" />
            </Routes>
        </HashRouter>

    )
}