// Función para que el año del copyright esté up to date
const year = new Date().getFullYear();

$(document).ready(function(){
    $("#year").text(year);
});