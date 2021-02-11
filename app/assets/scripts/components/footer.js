let footerTemplate = () =>{
    let footer = document.querySelector('footer');
    footer.innerHTML = `
                        <div class="padding">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <p class="bold">Redes Sociais</p>
                                        <ul>

                                            <li>
                                                <img src="https://afiliart.com/assets/img/afiliart-light.svg" height="40" alt="Afiliart | Especialista em Marketing Digital">
                                            </li>

                                            <li>
                                                <a href="https://www.facebook.com/afiliart/" target="_blank">
                                                    <i class="fab fa-2x fa-facebook"></i>
                                                </a>
                                                <a href="https://www.linkedin.com/company/afiliart/" target="_blank">
                                                    <i class="fab fa-2x fa-linkedin"></i>
                                                </a>
                                                <a href="https://www.youtube.com/channel/UC_udKU17xwxOVjD0_L3D9yg" target="_blank">
                                                    <i class="fab fa-2x fa-youtube"></i>
                                                </a>
                                                <a href="https://www.instagram.com/afiliart/" target="_blank">
                                                    <i class="fab fa-2x fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>contato@afiliart.com</li>
                                            <li>comercial@afiliart.com</li>
                                        </ul>

                                    </div>
                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <p class="bold">Corporativo</p>
                                        <ul>
                                            <li>Afiliart Empreendimentos Digitais</li>
                                            <li>CNPJ: 25.213.248/0001-61</li>
                                            <li>Telefone: +55 16 99645-6424</li>
                                            <li>Rua Major José Inácio, 1942 - Centro - CEP: 13560-160, São Carlos - SP</li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <p class="bold">Suporte</p>
                                        <ul>
                                            <li><a href="https://afiliart.memberkit.com.br/">Área de Membros</a></li>
                                            <li><a href="/politica-de-privacidade">Políticas de Privacidade</a></li>
                                            <li><a href="https://afiliart.com/afiliados/">Afiliados</a></li>
                                            <!-- <li><a href="#">Central de Ajuda</a></li> -->
                                        </ul>
                                    </div>
                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <p class="bold">Aprenda conosco</p>
                                        <ul>
                                            <li><a href="https://afiliart.com/blog/">Blog</a></li>
                                            <li><a href="https://afiliart.com/cursos/">Cursos</a></li>
                                            <li><a href="https://afiliart.com/materiais/">Materiais</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="copywriting">
                            <div class="container">
                                <p>© <span id="year"></span> · Afiliart. Todos os direitos reservados.</p>
                            </div>
                        </div>
                    `
}
