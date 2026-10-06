import './Header.css'
import Header from '../Header'

function Header(){

    return (
        <header class="cabecalho">
        <span class="logo"><img class="imglogo" src="https://institutoamparanimal.org.br/wp-content/uploads/2026/02/orelha_teoria_do_elo_instituto_ampara_animal.png">Cachorro Ouvido</span>
        <nav>
            <ul class="menu">
                <li><a href="#">Início</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header