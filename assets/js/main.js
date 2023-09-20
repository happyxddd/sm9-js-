let gameModel = document.querySelector('.game')
let page = document.querySelector('body')

document.addEventListener('keydown', function(event){
    if(event.key == 'r'){
        page.style.backgroundColor = 'red'
    } else if(event.key == 'g'){
        page.style.backgroundColor = 'green'
    } else if(event.key == 'b'){
        page.style.backgroundColor = 'blue'
    } else if(event.key == 'w'){
        gameModel.style.top = gameModel.offsetTop - 20 + 'px'
    } else if(event.key == 'a'){
        gameModel.style.left = gameModel.offsetLeft - 20 + 'px'
    } else if(event.key == 'd'){
        gameModel.style.left = gameModel.offsetLeft + 20 + 'px'
    } else if(event.key == 's'){
        gameModel.style.top = gameModel.offsetTop + 20 + 'px'
    }
})
document.addEventListener('keyup', function(event){
    if(event.key == 'r'){
        page.style.backgroundColor = 'white'
    } else if(event.key == 'g'){
        page.style.backgroundColor = 'white'
    } else if(event.key == 'b'){
        page.style.backgroundColor = 'white'
    }
})