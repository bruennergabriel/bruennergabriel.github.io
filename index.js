

function mostrarfecha() {
    document.getElementById("resultadofecha").style.display= 'block';
    document.getElementById("resultadocorreo").style.display= 'none';
    document.getElementById("resultadotel").style.display= 'none';
    document.getElementById("resultadodireccion").style.display= 'none';

    }

function mostrarcorreo() {
    document.getElementById("resultadocorreo").style.display= 'block';
    document.getElementById("resultadotel").style.display= 'none';
    document.getElementById("resultadodireccion").style.display= 'none';
    document.getElementById("resultadofecha").style.display= 'none';
    
    }

function mostrartel() {
    document.getElementById("resultadotel").style.display= 'block';
    document.getElementById("resultadocorreo").style.display= 'none';
    document.getElementById("resultadofecha").style.display= 'none';
    document.getElementById("resultadodireccion").style.display= 'none';
    }

function mostrardireccion() {
    document.getElementById("resultadodireccion").style.display= 'block';
    document.getElementById("resultadocorreo").style.display= 'none';
    document.getElementById("resultadotel").style.display= 'none';
    document.getElementById("resultadofecha").style.display= 'none';
    }

