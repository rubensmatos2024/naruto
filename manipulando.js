
const titulo = document.querySelector("h1");
const button_naruto = document.querySelector("#button-naruto");
const button_sasuke = document.querySelector("#button-sasuke");
const subtitulo = document.querySelector("h2");
const paragrafo = document.querySelector("p");
const image = document.querySelector("img");




button_naruto.addEventListener("click", () => {
    titulo.textContent = "Naruto";

    paragrafo.textContent = "Naruto é um termo popular utilizado pelos japoneses ao referir-se a redemoinho. O nome deve-se a uma região na província de Tokushima, o Estreito de Naruto, onde, devido à formação geológica do lugar, o fenômeno ocorre com frequência."
    subtitulo.textContent = "Origem";

    image.src = "https://assets.papelpop.com/wp-content/uploads/2023/11/naruto.jpg";


});

button_sasuke.addEventListener(`click`, () => {
    titulo.textContent = "Sasuke";

    paragrafo.textContent = "Sasuke é o filho mais novo de Fugaku e Mikoto Uchiha, além de ser o último sobrevivente do clã em Konoha quando a série começa. Após o trágico massacre de sua família quando ele era uma criança pequena, o garoto se tornou frio e distante, tendo como seu único objetivo vingança contra aquele que matou todo o seu clã"
    subtitulo.textContent = "Origem";

    image.src = "https://criticalhits.com.br/wp-content/uploads/2022/10/sasuke-invasao-5-kage.jpg";

});







