const btnSingin = document.getElementById('sig-in');
        btnSigUp = document.getElementById("sig-up");
        formRegistrer = document.querySelector(".register");
        formLogin = document.querySelector(".login");

btnSingin.addEventListener('click', e=>{
    formRegistrer.classList.add('hide');
    formLogin.classList.remove('hide');
});

btnSigUp.addEventListener('click', e=>{
    formLogin.classList.add('hide');
    formRegistrer.classList.remove('hide');
});