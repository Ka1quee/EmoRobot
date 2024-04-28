function typeWrite(elemento){
    // Responsavel por separar cada letra
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML=''
    // for each : para cada
   textoArray.forEach((letra, i) =>{
    // dando um tempo pra apresentar cada item
    setTimeout(()=>
    elemento.innerHTML+=letra, 75 * i)
   })
}   


const titulo = document.querySelector('.texto')
// casp queira utilizar essa function em outro texto, apenas traga o identificado do texto pra dentro do parenteses, isso acontece por que a function ja foi criada com parametro, que pode ser alterado a qualquer momento adicionando uma variavel diferente no lugar do parametro


function responde(){
    const titulo = document.querySelector('.texto')

    titulo.innerHTML = "Ele é VIADO! MUITO VIADO, ELE É MUITO DOIDO AAAAAAAAAAAAA"

}

const containerEmoBot = document.querySelector(".container-emo-bot");
const head = document.querySelector(".emo_head");


function onDrag({ movementX, movementY }) {
  let getStyle = window.getComputedStyle(containerEmoBot);
  let leftVal = parseInt(getStyle.left);
  let topVal = parseInt(getStyle.top);
  containerEmoBot.style.left = `${leftVal + movementX}px`;
  containerEmoBot.style.top = `${topVal + movementY}px`;
}


head.addEventListener("mousedown", startDrag);

function startDrag() {
    let eyes = document.querySelectorAll('.eye_box')
    let sobracelha = document.querySelector('.sobrancelha')
    let sobracelha2 = document.querySelector('.sobrancelha_2')


    eyes.forEach(function(eye){
        eye.style.backgroundColor="red"
    })

        sobracelha.style.transform = "rotate(20deg)";    
        sobracelha2.style.transform = "rotate(-20deg)";    


    setTimeout(voltaOlho, 5000)



  containerEmoBot.classList.add("active");
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", stopDrag);
}

function stopDrag() {
  containerEmoBot.classList.remove("active");
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", stopDrag);
}

function voltaOlho(){
    let eyes = document.querySelectorAll('.eye_box')
    let sobracelha = document.querySelectorAll('.sobrancelha')

    eyes.forEach(function(eye){
        eye.style.backgroundColor="#37E8D5"
    })

    sobracelha.forEach(function(sobracelha){
        sobracelha.style.transform = "rotate(0)";    
    })


}
