navbarTemplate();
footerTemplate();
jQuery.support.cors = true;
$(function () {

  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });

});

let modalLeaveHome = ()=>{

    if(!JSON.parse(sessionStorage.getItem("modalLeaveHome"))){
        document.querySelector('.modalLeave').classList.add('fixed-top');
        document.querySelector('.modalLeave').classList.add('show-modal');
        document.querySelector('body').style.overflow='hidden';
        sessionStorage.setItem("modalLeaveHome", true);
    }

}

let closeModalLeave = () =>{
    document.querySelector('.modalLeave').classList.remove('fixed-top');
    document.querySelector('.modalLeave').classList.remove('show-modal');
    document.querySelector('body').style.overflow='scroll';
}

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

let typeUser = $("input[name='typeUser']:checked").val();
changeType(typeUser);

$("input[name='typeUser']").change(function(){    
    typeUser = $(this).val();
    changeType(typeUser);
})

function changeType(type){
    if(type == 'padrao'){
        $(".user").show();
        $(".compnay").hide();

    } else if (type == 'produtor'){
        $(".user").hide();
        $(".compnay").show();

    } else if (type == 'afiliado'){
        $(".user").show();
        $(".compnay").hide();
    }
}


let submitForm = (dest) =>{

    let name = document.querySelector('#name').value;
    let lastName = document.querySelector('#lastName').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let company = document.querySelector('#company').value;
    let website = document.querySelector('#website').value;
    let message = document.querySelector('#message').value;


    let medias = document.querySelector('#medias').value;
    let volume = document.querySelector('#volume').value;
    let time = document.querySelector('#time').value;
    let product = document.querySelector('#product').value;

    if((typeUser == 'padrao' || typeUser == 'afiliado') && (!name || !lastName || !email || !phone || !message)){
        document.querySelector('#error').style.display = 'block';

    } else if(typeUser == 'produtor' && (!name || !lastName || !email || !phone || !medias || !volume || !time || !product || !message)){ 
        document.querySelector('#error').style.display = 'block';

    }
        else{
        
        
        // formData.append('user_id', '');

        var data = {
            service_id: 'gmail',
            template_id: 'template_Zlq7ithP',
            user_id: 'user_ru1Nf9MKx2s6ixEOGInih',
            template_params: {
                name:name,
                lastName:lastName,
                email:email,
                phone:phone,
                company:company,                
                website:website,
                message:message,
                
                medias:medias,
                volume:volume,
                time:time,
                product:product,
                typeUser:typeUser,

                dest: dest
            }
        };
    
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function() {
            alert('Mensagem Enviada com Sucesso!');
        }).fail(function(error) {
            alert('Oops... ' + JSON.stringify(error));
        });
        
          
    }
}


$(document).ready(function () {
   
    $('.clientes').owlCarousel({
        margin: 10,
        responsiveClass:true,
        autoplay:true,
        nav:false,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,                
                loop:false
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