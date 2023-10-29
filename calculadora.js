function agregar(valor){
    document.getElementById('pantalla-Resultados').value += valor;
}

function borrar(){
    document.getElementById('pantalla-Resultados').value = "";
}

function calcular(){
const calculos = document.getElementById('pantalla-Resultados').value;

try {
    document.getElementById('pantalla-Resultados').value = eval(calculos);    
 
} catch (error) {
    document.getElementById('pantalla-Resultados').value ="Error";
}

}
function borrarSolo(){
 const text = document.getElementById('pantalla-Resultados').value;
const text1 = text.slice(0,text.length-1);
 document.getElementById('pantalla-Resultados').value = text1;
}