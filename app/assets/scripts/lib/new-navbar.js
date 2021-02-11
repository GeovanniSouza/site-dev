let nav = document.querySelector('newnav');
nav.classList.add("navbar");
nav.classList.add("navbar-dark");
nav.classList.add("bg-light");
nav.classList.add("fixed-top");
nav.classList.add("navbar-expand-lg");
nav.innerHTML = `
                    <a class="navbar-brand" href="#">
                        <img src="./img/brand-light.svg" height="30" class="d-inline-block align-top" alt="Afiliart | Especialista em Marketing Digital">
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNav">
                      <ul class="navbar-nav">

                        <li class="nav-item">
                          <a class="nav-link" href="#">Assine</a>
                        </li>

                        <li class="nav-item">
                          <a class="nav-link login" href="#">Entrar</a>
                        </li>
                      </ul>
                    </div>
                `;
