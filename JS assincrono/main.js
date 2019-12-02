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
    listText = document.createTextNode('Carregando..');
    list.appendChild(listText)
    listaElement.appendChild(list);

    usuario = inputElement.value;

    axios.get(`https://api.github.com/users/${usuario}/repos`)
        .then(function (response) {
            listaElement.removeChild(list);
            [...response.data].map((dat, index) => {
                dataRepos = (response.data[index].url);
                let list = document.createElement('li');
                let linkElement = document.createElement('a');

                linkElement.setAttribute('href', dataRepos);
                linkElement.textContent = dataRepos;

                list.appendChild(linkElement);
                listaElement.appendChild(list);
            })
        })
        .catch(function (error) {
            console.warn(error);
            listaElement.removeChild(list);
            if (error.response.status === 404) {
                let list = document.createElement('li');
                listText = document.createTextNode('Usuário inexistente');
                list.appendChild(listText)
                listaElement.appendChild(list);
                // alert('Usuário inexistente')
            }
        })

})
