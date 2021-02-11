let navbarTemplate = () =>{
    let navbar = document.querySelector('nav');
    nav.innerHTML = `
                        <a class="navbar-brand" href="/">
                            <img src="https://afiliart.com/assets/img/afiliart-light.svg" height="40" class="d-inline-block align-top" alt="Afiliart | Especialista em Marketing Digital">
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNav">
                          <ul class="navbar-nav">
                            <li class="nav-item">
                              <a class="nav-link" href="/sobre-nos">Sobre Nós</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="">Analytics</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="">Academy</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="/comunidade">Comunidade</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="/contato/investimento/">Contato</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link login" href="https://afiliart.memberkit.com.br/">Login</a>
                            </li>
                          </ul>
                        </div>
    `
}
