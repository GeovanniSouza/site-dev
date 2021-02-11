let submitForm = () => {
    let email = document.querySelector('#email');
    let nome = document.querySelector('#nome');
    let form = document.querySelector('#form-seo');

    let loader = document.querySelector('.loader');
    loader.style.display = 'block';
    let botao = document.querySelector('.btn-form');
    botao.style.display= 'none';

    let usuario = email.value.substring(0, email.value.indexOf("@"));
    let dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
    if(email.value && nome.value){
        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
                // $.post("https://area-de-membros-4.herokuapp.com/createUser",
                $.post("https://api.coursise.com/api/v1/members-area/user",
                    {
                      name: nome.value,
                      email: email.value,
                      course: 8,
                      path: "/curso-google-adwords/wp-admin/admin-ajax.php"
                    },
                    function(data,status){
                        console.log(data);
                            form.submit();
                });
        } else{
            loader.style.display = 'none';
            botao.style.display= 'inline-block';
            alert('Ops! Email inválido');
        }

    } else{
        loader.style.display = 'none';
        botao.style.display= 'inline-block';
        alert('Ops! Preencha os dois campos por favor :)');

    }
}

$(document).mouseleave(function () {

    if(!sessionStorage.getItem("googleAdsModal")){
        $('#modalInscricao').modal('show');
        sessionStorage.setItem("googleAdsModal", true);
    }

});
