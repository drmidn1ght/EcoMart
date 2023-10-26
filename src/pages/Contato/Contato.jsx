import React from "react";
import Header from "../../components/views/LandingPage/Header/Header";
import Footer from "../../components/views/LandingPage/Footer/Footer";
// import Input from "../../components/common/Input";
// import Textfield from "../../components/common/Textfield";
import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react";
import Button from "../../components/common/Button/Button";


const Contato = () => {
    return (

      <>
      <Header></Header>
        <main>
            <section>
        <h2> Entre em contato </h2>

        <h3> Redes Sociais </h3>
        <ul>
        <li>
        <a href="https://www.facebook.com/pagina-da-ecomart"> Facebook </a> //Falta inserir os ícones do Facebook e Instagram
        </li>

        <li>
        <a href="https://www.instagram.com/pagina-da-ecomart"> Instagram </a>
        </li>
        </ul>

        <h3> Envie-nos um email </h3>
        <p> Estamos abertos para receber suas opiniões. Basta preencher o formulário abaixo: </p>

        <form action=''> 
                <input type="text" name="nome" placeholder="Seu nome" required/>
                <input type="email" name="email" placeholder="Seu email" required/>
                <input type="tel" name="celular" placeholder="Seu celular" required/>
                <textarea className="caixatexto"  name="mensagem" placeholder="Sua mensagem" required></textarea>
               <Button></Button>
        </form> 

    </section>
</main>
<Footer></Footer>
    </>
)}

export default Contato;
