document.querySelector('body').addEventListener('mousemove', moveElements);

function moveElements(event) {
    const eyes = document.querySelectorAll('.eye');
    const mouth = document.querySelector('.mouth');

    eyes.forEach(function (eye) {
        // Calcula as coordenadas do centro do olho em relação à janela do navegador
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

        // Calcula o ângulo entre a posição do cursor do mouse e o centro do olho
        let radian = Math.atan2(event.pageX - x, event.pageY - y);

        // Converte o ângulo de radianos para graus e ajusta a orientação do olho
        let rotation = (radian * (180 / Math.PI) * -1) + 270;

        // Aplica a transformação CSS para girar o olho na direção do cursor do mouse
        eye.style.transform = "rotate(" + rotation + "deg)";
    });

    // Calcula a posição horizontal do cursor do mouse em relação à largura da janela do navegador
    let mouthPosition = (event.pageX / window.innerWidth) * 100;

    // Define o limite para a esquerda (10% da largura da janela)
    const limiteEsquerda = 30;

    // Define o limite para a direita (90% da largura da janela)
    const limiteDireita = 60;

    // Verifica se a posição da boca está dentro dos limites definidos
    if (mouthPosition < limiteEsquerda) {
        mouthPosition = limiteEsquerda;
    } else if (mouthPosition > limiteDireita) {
        mouthPosition = limiteDireita;
    }

    // Atualiza a posição da boca
    mouth.style.left = mouthPosition + '%';
}

// Define a função que você deseja executar
// Define a função principal que pisca o olho
function piscarOlho() {
    let eyes = document.querySelectorAll('.eye_box');


    // Alterna entre os tamanhos 10px e 130px para simular o piscar do olho
    eyes.forEach(function (eye) {
        if (eye.style.height === "130px") {
            eye.style.height = "10px";
            eye.style.transition = "1s all";
        } else {
            eye.style.height = "129px";
        }
    });
}

// Define a função secundária que retorna o olho à sua posição normal
function retornarNormal() {
    let eyes = document.querySelectorAll('.eye_box');

    // Retorna o olho à sua posição normal (100px)
    eyes.forEach(function (eye) {
        eye.style.height = "10px";
        eye.style.transition = "0.1s all"; // Transição rápida para retornar à posição normal
    });
}

function chat() {
    let txt = document.querySelector('.texto')
    txt.style.display = 'block'

    let notify = document.querySelector('.notify')
    notify.style.display = 'none'
    let chat = document.querySelector('.chat')
    let icon = document.querySelector('#icon_not')
    icon.style.display = 'none'

    chat.style.height = "auto"
    chat.style.display = "block"

    chat.style.width = "500px"
    setInterval(btns, 12000);
    typeWrite(titulo);
}

function btns() {
    let btn = document.querySelector('.btns')
    btn.style.display = "block"
}

function textoChat() {
    let txt = document.querySelector('.texto')
    txt.style.display = 'block'

}

function notify() {
    let audio = document.querySelector('#pop_up')
    let notify = document.querySelector('.notify')
    notify.style.display = "flex"

}

// Define o intervalo de tempo em milissegundos para piscar o olho (5 segundos = 5000 milissegundos)
const intervaloPiscar = 5000;
const intervaloChat = 2000
// Define o intervalo de tempo em milissegundos para retornar o olho à posição normal (1 segundo = 1000 milissegundos)
const intervaloRetornar = 200;
const intervaloTxt = 2500;
const intervaloReacao = 2000

// Chama a função para piscar o olho a cada 5 segundos
setInterval(piscarOlho, intervaloRetornar);

// Chama a função para retornar o olho à posição normal logo após piscar
setInterval(retornarNormal, intervaloPiscar + intervaloRetornar);
setTimeout(notify, intervaloChat)

// Defina o intervalo de tempo em milissegundos


// Inicie o movimento da sobrancelha
moveSobrancelha();

function moveSobrancelha() {
    const sobrancelhas = document.querySelectorAll('.sobrancelha');

    sobrancelhas.forEach(function (sobrancelha) {
        if (sobrancelha.style.top === "60px") {
            sobrancelha.style.top = "130px";
        } else {
            sobrancelha.style.top = "60px";
        }
    });

    // Chame a função voltaSobrancelha após um intervalo
    setTimeout(voltaSobrancelha, intervaloTxt);
}

function voltaSobrancelha() {
    const sobrancelhas = document.querySelectorAll('.sobrancelha');

    sobrancelhas.forEach(function (sobrancelha) {
        sobrancelha.style.top = "100px";
    });

    // Chame a função moveSobrancelha após um intervalo
    setTimeout(moveSobrancelha, intervaloTxt);
}

