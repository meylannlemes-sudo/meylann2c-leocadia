// ==========================================
// CONFIGURAÇÕES DE ACESSIBILIDADE
// ==========================================

const aumentarFonte = document.getElementById("aumentarFonte");
const diminuirFonte = document.getElementById("diminuirFonte");
const contraste = document.getElementById("contraste");
const espacamento = document.getElementById("espacamento");
const resetar = document.getElementById("resetar");

const root = document.documentElement;


// Tamanho inicial da fonte
let tamanhoFonte = 1.2;


// ==========================================
// AUMENTAR FONTE
// ==========================================

aumentarFonte.addEventListener("click", function () {

    if (tamanhoFonte < 2.2) {
        tamanhoFonte += 0.1;

        root.style.setProperty(
            "--tamanho-fonte",
            tamanhoFonte + "rem"
        );
    }

});


// ==========================================
// DIMINUIR FONTE
// ==========================================

diminuirFonte.addEventListener("click", function () {

    if (tamanhoFonte > 0.9) {
        tamanhoFonte -= 0.1;

        root.style.setProperty(
            "--tamanho-fonte",
            tamanhoFonte + "rem"
        );
    }

});


// ==========================================
// ALTO CONTRASTE
// ==========================================

contraste.addEventListener("click", function () {

    document.body.classList.toggle("alto-contraste");

    const ativo =
        document.body.classList.contains("alto-contraste");

    contraste.setAttribute(
        "aria-pressed",
        ativo
    );

});


// ==========================================
// ESPAÇAMENTO DO TEXTO
// ==========================================

espacamento.addEventListener("click", function () {

    document.body.classList.toggle("espacamento-extra");

    const ativo =
        document.body.classList.contains("espacamento-extra");

    espacamento.setAttribute(
        "aria-pressed",
        ativo
    );

});


// ==========================================
// RESTAURAR CONFIGURAÇÕES
// ==========================================

resetar.addEventListener("click", function () {

    // Restaurar tamanho da fonte
    tamanhoFonte = 1.2;

    root.style.setProperty(
        "--tamanho-fonte",
        "1.2rem"
    );

    // Remover contraste
    document.body.classList.remove("alto-contraste");

    contraste.setAttribute(
        "aria-pressed",
        "false"
    );

    // Remover espaçamento
    document.body.classList.remove("espacamento-extra");

    espacamento.setAttribute(
        "aria-pressed",
        "false"
    );

});
