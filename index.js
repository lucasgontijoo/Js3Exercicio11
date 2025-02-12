function addPlayer() {
    const playerSection = document.getElementById('players-list')

    const h3 = document.createElement('h3')
    h3.innerText = "Jogador:"

    const ul = document.createElement('ul')

    const positionInput = document.getElementById('positionInput')
    const nameInput = document.getElementById('nameInput')
    const numberInput = document.getElementById('numberInput')

    const positionLi = document.createElement('li')
    positionLi.innerText = positionInput.value

    const nameLi = document.createElement('li')
    nameLi.innerText = nameInput.value

    const numberLi = document.createElement('li')
    numberLi.innerText = numberInput.value
    ul.append(positionLi, nameLi, numberLi)

    const check = confirm("Deseja confirmar a escalação do jogador?")
    if(check) {
        playerSection.append(h3, ul)
        document.getElementById('positionInput').value=''
        document.getElementById('nameInput').value=''
        document.getElementById('numberInput').value=''
    } else {
        alert("Operação cancelada.")
    }
}

function removePlayer() {
    const playerSection = document.getElementById('players-list')
    const numberInputRemove = document.getElementById('numberInputRemove')
    const numberInput = document.getElementById('numberInput')
    
    const titles = document.getElementsByName('h3')
    const players = document.getElementsByName('ul')

    if(numberInputRemove.value == numberInput.value) {
        alert("sucesso")
    } else {
        alert('os numeros nao coincidem')
    }
}