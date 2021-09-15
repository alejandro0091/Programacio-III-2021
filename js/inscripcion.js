
function tipoCategoria(){
    let tipoC = document.getElementById('categoria').value 
    if(tipoC == 'docente'){
        document.getElementById('div1').style.display =""
        document.getElementById('div2').style.display =""
    }else {
        document.getElementById('div1').style.display ="none"
        document.getElementById('div2').style.display ="none"
    }
}