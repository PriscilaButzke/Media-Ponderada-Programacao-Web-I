const n = document.querySelector("#nome");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const botao = document.getElementById("b1");
const med = document.getElementById("me");
const r = document.getElementById("resp")


botao.addEventListener('click', ()=> {
    let n = nome.value;
    let num1 = (n1.value);
    let num2 = (n2.value);
    let num3 = (n3.value);
    let m = (med.value);
    let mf = (num1 + num2*2 + num3*3 + m)/7;

r.innerHTML=`${n} suas notas são: <br>
Nota 1: ${num1} <br>
Nota 2: ${num2} <br>
Nota 3: ${num3}<br>
Média de Exercícios: ${m}<br>

Média final: ${mf.toFixed(2)}`
})