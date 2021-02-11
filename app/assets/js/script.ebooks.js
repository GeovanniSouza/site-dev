let captcha = () => {
    let email = document.querySelector('#email');
    let form = document.querySelector('#form-captcha');

    let response = grecaptcha.getResponse();

    let usuario = email.value.substring(0, email.value.indexOf("@"));
    let dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
    if(email.value && response){
        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {

                form.submit();

        } else{
            alert('Ops! Email inválido');
        }

    } else {
        alert('Ops! Preencha todos campos por favor :)');
    }
}
