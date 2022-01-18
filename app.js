var foto;
window.onload = function() {
    foto = new Foto(); // choose file
} ;

function selectImage () {
    document.getElementById('foto-file').click(); //upload photo
};

function makeBright () {
    foto.makeBright(); //brightness
};

let form= document.querySelector('form');
form.style.display = 'none';


function text (){
    form.style.display='block'
};

function add (){
   var message = document.getElementById('message').value;
   console.log(message);
}