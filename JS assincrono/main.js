
function checaIdade(idade) {
    return new Promise((resolve, reject) => {
        if (idade >= 18) {
            setTimeout(resolve, 2000, idade);
        } else {
            setTimeout(reject, 2000, idade);
        }
    })
}


checaIdade(15)
    .then(function () {
        console.log("Maior que 18");
    })
    .catch(function () {
        console.log("Menor que 18");

    })