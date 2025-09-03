import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Agendas } from "./admin/agendas"
import { CriarAgendamento } from "./usuario/criarAgendamento"
import { PageHomeUsuario } from "./usuario/pageHomeUsuario"
import { PageHomeAdmin } from './admin/pageHomeAdmin';
import { LoginAdmin } from "./admin/loginAdmin";
import { ContextAdmin } from "./context/contextAdmin";
import { AgendamentoUsuario } from "./usuario/agendamentoUsuario";


export const Rotas = () => {
    return (
        <BrowserRouter>
            <ContextAdmin>
                <Routes>
                    <Route path={`/admin/:id/home`} element={<PageHomeAdmin />} />
                    <Route path="/admin/login" element={<LoginAdmin />} />
                    <Route path={"admin/:id/agendas"} element={<Agendas />} />
                    <Route path="/" element={<PageHomeUsuario />} />
                    <Route path="usuario/agendamento" element={<AgendamentoUsuario />} />
                    <Route path="/novoAgendamento" element={<CriarAgendamento />} />                 
                </Routes>
            </ContextAdmin>
        </BrowserRouter>

    )
}