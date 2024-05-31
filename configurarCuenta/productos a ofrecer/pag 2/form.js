var input = document.getElementsByClassName('formulario_input');
for (var i= 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling,classList.remove('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}