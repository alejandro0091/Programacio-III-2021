function onChangeFecha(){
    let f1 = document.getElementById("fechaInicioCurso");
    let f2 = document.getElementById("fechaFinCurso");

    if(f1.value > f2.value && f2.value !=''){

        alert("La fecha de Incio no puede ser Posterior a la fecha de Fin del Curso");
        f2.value= f1.value;

    }

}

function comprobacionFecha(){
    let f1 = document.getElementById("fincial");
    let f2 = document.getElementById("ffin");

    if(f1.value > f2.value && f2.value !=''){

        alert("La fecha Inicial no puede ser Posterior a la fecha Fin del Curso");
        f2.value= f1.value;

    }

} 

function comparacion(){
    var minima= document.getElementById("cantMin");
    var maxima= document.getElementById("cantMax");

    if(minima.value >= maxima.value && maxima.value !=''){

        alert("La cantidad minima no puede ser igual o superior a la cantidad maxima");
        minima.value="";
        maxima.value="";
        
    }

}
