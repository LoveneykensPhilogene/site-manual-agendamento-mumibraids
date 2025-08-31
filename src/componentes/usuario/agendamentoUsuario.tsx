import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const AgendamentoUsuario = () => {
    const navigation = useNavigate()
    const TodosOsAgendamentos = () => {
        alert("Em breve você poderá ver seus agendamentos aqui.");
        alert("Entrar em contato com o administrador para cancelar ou alterar agendamento Telefone: (47) 9 9252-3928");
        navigation("/")
    }
    useEffect(
        () => {
            TodosOsAgendamentos();
        }
    )
    return (
        <div>
            <h1>Pagina não está disponível, no menento.</h1>
        </div>
    )
}