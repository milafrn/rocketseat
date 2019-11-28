let body = document.querySelector('body')
let inputElement = document.createElement('input')
let buttonElement = document.createElement('button')
buttonElement.textContent = 'Adicionar'
let listaElement = document.createElement('ul');

body.appendChild(inputElement);
body.appendChild(buttonElement);
body.appendChild(listaElement);

let usuario = undefined;

buttonElement.addEventListener('click', () => {
    let list = document.createElement('li');
    listaElement.appendChild(list);
    let listText = document.createTextNode(inputElement.value);
    list.appendChild(listText);
    usuario = inputElement.value;
    let paragrafo = document.createElement('p');
    body.appendChild(paragrafo);

    axios.get(`https://api.github.com/users/${usuario}/repos`)
        .then(function (response) {
            paragrafo.textContent = JSON.stringify(response)
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        })
})
