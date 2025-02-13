function addPlayer() {
    const playersSection = document.getElementById('players-list')

    const h3 = document.createElement('h3')
    h3.innerText = "Jogador"
    h3.id = 'h3'

    const ul = document.createElement('ul')
    ul.id = 'ul'

    const nameInput = document.getElementById('name')
    const posistionInput = document.getElementById('position')
    const numberInput = document.getElementById('number')

    const nameLi = document.createElement('li')
    nameLi.id = 'nameLi'
    nameLi.innerText = nameInput.value

    const positionLi = document.createElement('li')
    positionLi.id = 'positionLi'
    positionLi.innerText = posistionInput.value

    const numberLi = document.createElement('li')
    numberLi.id = 'numberLi'
    numberLi.innerText = numberInput.value
    ul.append(nameLi, positionLi, numberLi)
    
    const check = confirm("Deseja confirmar a escalação do jogador?")
    if(check) {
        playersSection.append(h3, ul)
        document.getElementById('name').value=''
        document.getElementById('position').value=''
        document.getElementById('number').value=''
    } else {
        alert("Operação cancelada!")
    }
}

function removePlayer() {
    const playersSection = document.getElementById('players-list')
    const h3 = document.getElementById('h3')
    const ul = document.getElementById('ul')
    playersSection.append(h3, ul)

    const numberLi = document.getElementById('numberLi')
    const numberDelete = document.getElementById('numberDelete')
    
    const check = confirm("Deseja confirmar a remoção do jogador?")
    if(numberLi.innerText === numberDelete.value && check) {
        playersSection.removeChild(h3)
        playersSection.removeChild(ul)

        document.getElementById('numberDelete').value=''
    } else {
        alert("Operação cancelada!")
    }
}