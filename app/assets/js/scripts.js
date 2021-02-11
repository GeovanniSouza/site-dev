'use strict';

var footerTemplate = function footerTemplate() {
    var footer = document.querySelector('footer');
    footer.innerHTML = '\n                        <div class="padding">\n                            <div class="container">\n                                <div class="row">\n                                    <div class="col-sm-6 col-md-4 col-lg-3">\n                                        <p class="bold">Redes Sociais</p>\n                                        <ul>\n\n                                            <li>\n                                                <img src="https://afiliart.com/assets/img/afiliart-light.svg" height="40" alt="Afiliart | Especialista em Marketing Digital">\n                                            </li>\n\n                                            <li>\n                                                <a href="https://www.facebook.com/afiliart/" target="_blank">\n                                                    <i class="fab fa-2x fa-facebook"></i>\n                                                </a>\n                                                <a href="https://www.linkedin.com/company/afiliart/" target="_blank">\n                                                    <i class="fab fa-2x fa-linkedin"></i>\n                                                </a>\n                                                <a href="https://www.youtube.com/channel/UC_udKU17xwxOVjD0_L3D9yg" target="_blank">\n                                                    <i class="fab fa-2x fa-youtube"></i>\n                                                </a>\n                                                <a href="https://www.instagram.com/afiliart/" target="_blank">\n                                                    <i class="fab fa-2x fa-instagram"></i>\n                                                </a>\n                                            </li>\n                                            <li>contato@afiliart.com</li>\n                                            <li>comercial@afiliart.com</li>\n                                        </ul>\n\n                                    </div>\n                                    <div class="col-sm-6 col-md-4 col-lg-3">\n                                        <p class="bold">Corporativo</p>\n                                        <ul>\n                                            <li>Afiliart Empreendimentos Digitais</li>\n                                            <li>CNPJ: 25.213.248/0001-61</li>\n                                            <li>Telefone: +55 16 99645-6424</li>\n                                            <li>Rua Major Jos\xE9 In\xE1cio, 1942 - Centro - CEP: 13560-160, S\xE3o Carlos - SP</li>\n                                        </ul>\n                                    </div>\n                                    <div class="col-sm-6 col-md-4 col-lg-3">\n                                        <p class="bold">Suporte</p>\n                                        <ul>\n                                            <li><a href="https://afiliart.memberkit.com.br/">\xC1rea de Membros</a></li>\n                                            <li><a href="/politica-de-privacidade">Pol\xEDticas de Privacidade</a></li>\n                                            <li><a href="https://afiliart.com/afiliados/">Afiliados</a></li>\n                                            <!-- <li><a href="#">Central de Ajuda</a></li> -->\n                                        </ul>\n                                    </div>\n                                    <div class="col-sm-6 col-md-4 col-lg-3">\n                                        <p class="bold">Aprenda conosco</p>\n                                        <ul>\n                                            <li><a href="https://afiliart.com/blog/">Blog</a></li>\n                                            <li><a href="https://afiliart.com/cursos/">Cursos</a></li>\n                                            <li><a href="https://afiliart.com/materiais/">Materiais</a></li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class="copywriting">\n                            <div class="container">\n                                <p>\xA9 <span id="year"></span> \xB7 Afiliart. Todos os direitos reservados.</p>\n                            </div>\n                        </div>\n                    ';
};
'use strict';

var navbarTemplate = function navbarTemplate() {
  var navbar = document.querySelector('nav');
  nav.innerHTML = '\n                        <a class="navbar-brand" href="/">\n                            <img src="https://afiliart.com/assets/img/afiliart-light.svg" height="40" class="d-inline-block align-top" alt="Afiliart | Especialista em Marketing Digital">\n                        </a>\n                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\n                            <span class="navbar-toggler-icon"></span>\n                        </button>\n\n                        <div class="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNav">\n                          <ul class="navbar-nav">\n                            <li class="nav-item">\n                              <a class="nav-link" href="/sobre-nos">Sobre N\xF3s</a>\n                            </li>\n                            <li class="nav-item">\n                              <a class="nav-link" href="">Analytics</a>\n                            </li>\n                            <li class="nav-item">\n                              <a class="nav-link" href="">Academy</a>\n                            </li>\n                            <li class="nav-item">\n                              <a class="nav-link" href="/comunidade">Comunidade</a>\n                            </li>\n                            <li class="nav-item">\n                              <a class="nav-link" href="/contato/investimento/">Contato</a>\n                            </li>\n                            <li class="nav-item">\n                              <a class="nav-link login" href="https://afiliart.memberkit.com.br/">Login</a>\n                            </li>\n                          </ul>\n                        </div>\n    ';
};
"use strict";

navbarTemplate();
footerTemplate();
jQuery.support.cors = true;
$(function () {

    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

var modalLeaveHome = function modalLeaveHome() {

    if (!JSON.parse(sessionStorage.getItem("modalLeaveHome"))) {
        document.querySelector('.modalLeave').classList.add('fixed-top');
        document.querySelector('.modalLeave').classList.add('show-modal');
        document.querySelector('body').style.overflow = 'hidden';
        sessionStorage.setItem("modalLeaveHome", true);
    }
};

var closeModalLeave = function closeModalLeave() {
    document.querySelector('.modalLeave').classList.remove('fixed-top');
    document.querySelector('.modalLeave').classList.remove('show-modal');
    document.querySelector('body').style.overflow = 'scroll';
};

var captcha = function captcha() {
    var email = document.querySelector('#email');
    var form = document.querySelector('#form-captcha');

    var response = grecaptcha.getResponse();

    var usuario = email.value.substring(0, email.value.indexOf("@"));
    var dominio = email.value.substring(email.value.indexOf("@") + 1, email.value.length);
    if (email.value && response) {
        if (usuario.length >= 1 && dominio.length >= 3 && usuario.search("@") == -1 && dominio.search("@") == -1 && usuario.search(" ") == -1 && dominio.search(" ") == -1 && dominio.search(".") != -1 && dominio.indexOf(".") >= 1 && dominio.lastIndexOf(".") < dominio.length - 1) {

            form.submit();
        } else {
            alert('Ops! Email inválido');
        }
    } else {
        alert('Ops! Preencha todos campos por favor :)');
    }
};

var typeUser = $("input[name='typeUser']:checked").val();
changeType(typeUser);

$("input[name='typeUser']").change(function () {
    typeUser = $(this).val();
    changeType(typeUser);
});

function changeType(type) {
    if (type == 'padrao') {
        $(".user").show();
        $(".compnay").hide();
    } else if (type == 'produtor') {
        $(".user").hide();
        $(".compnay").show();
    } else if (type == 'afiliado') {
        $(".user").show();
        $(".compnay").hide();
    }
}

var submitForm = function submitForm(dest) {

    var name = document.querySelector('#name').value;
    var lastName = document.querySelector('#lastName').value;
    var email = document.querySelector('#email').value;
    var phone = document.querySelector('#phone').value;
    var company = document.querySelector('#company').value;
    var website = document.querySelector('#website').value;
    var message = document.querySelector('#message').value;

    var medias = document.querySelector('#medias').value;
    var volume = document.querySelector('#volume').value;
    var time = document.querySelector('#time').value;
    var product = document.querySelector('#product').value;

    if ((typeUser == 'padrao' || typeUser == 'afiliado') && (!name || !lastName || !email || !phone || !message)) {
        document.querySelector('#error').style.display = 'block';
    } else if (typeUser == 'produtor' && (!name || !lastName || !email || !phone || !medias || !volume || !time || !product || !message)) {
        document.querySelector('#error').style.display = 'block';
    } else {

        // formData.append('user_id', '');

        var data = {
            service_id: 'gmail',
            template_id: 'template_Zlq7ithP',
            user_id: 'user_ru1Nf9MKx2s6ixEOGInih',
            template_params: {
                name: name,
                lastName: lastName,
                email: email,
                phone: phone,
                company: company,
                website: website,
                message: message,

                medias: medias,
                volume: volume,
                time: time,
                product: product,
                typeUser: typeUser,

                dest: dest
            }
        };

        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function () {
            alert('Mensagem Enviada com Sucesso!');
        }).fail(function (error) {
            alert('Oops... ' + JSON.stringify(error));
        });
    }
};

$(document).ready(function () {

    $('.clientes').owlCarousel({
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4,
                loop: false
            }
        }
    });

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }
});