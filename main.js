const botoes = document.querySelectorAll('botao');
const textos = document.querySelectorAll(".aba-conteudo");

for(let j = 0; j < botoes.length; j++){
    botoes[j].onclick = function(){
        for(let i = 0; i < botoes..length; j++){
            botoes[i].classList.remove("ativo");
            textos[i].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
const coNTADORES = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-15t00:00:00");
const tempoObjetivo2 = new Date("2024-10-15t00:00:00");
const tempoObjetivo3 = new Date("2024-10-15t00:00:00");
const tempoObjetivo4 = new Date("2024-10-15t00:00:00");

const tempos = [tempoObjetivo1, ]