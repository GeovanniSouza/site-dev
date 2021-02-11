let submitForm = () => {
    let email = document.querySelector('#email');
    let emailConfirm = document.querySelector('#emailConfirm');
    let nome = document.querySelector('#name');
    let form = document.querySelector('#form-seo');

    let response = grecaptcha.getResponse();

    let loader = document.querySelector('.loader');
    loader.style.display = 'block';
    let botao = document.querySelector('.btn-form');
    botao.style.display= 'none';

    let usuario = email.value.substring(0, email.value.indexOf("@"));
    let dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
    if(email.value && nome.value && emailConfirm.value && response){
        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {

                if(email.value != emailConfirm.value){
                    loader.style.display = 'none';
                    botao.style.display= 'inline-block';
                    alert('Ops! Os emails não conferem!');
                } else{
                    form.submit();
                }

        } else{
            loader.style.display = 'none';
            botao.style.display= 'inline-block';
            alert('Ops! Email inválido!');
        }

    } else{
        loader.style.display = 'none';
        botao.style.display= 'inline-block';
        alert('Ops! Preencha todos os campos por favor :)');

    }
}

$(document).mouseleave(function () {

    if(!sessionStorage.getItem("googleAdsModal")){
        $('#modalInscricao').modal('show');
        sessionStorage.setItem("googleAdsModal", true);
    }

});
