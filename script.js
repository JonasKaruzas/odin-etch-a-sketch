let boxGridSize = 10;
let inputGridSize;

createBoxes();

function createBoxes(){
    let container = document.createElement('div');
    container.setAttribute('id', 'container');
    document.body.appendChild(container);

    for (let i = 0; i < boxGridSize; i++){
        let box = document.createElement('div');
        box.setAttribute('class', 'outer-box');
        container.appendChild(box);

        for(let j = 0; j < boxGridSize; j++){
            let innerBox = document.createElement('div');
            innerBox.setAttribute('class', 'box');
            box.appendChild(innerBox);
        }
    }

    let boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
        box.addEventListener('mouseenter', function(e){
            e.target.classList.add('paint');
        })
    })
}



let button = document.createElement('button');
button.textContent = 'Reset';
document.body.insertBefore(button,document.body.firstChild);

button.addEventListener('click', function() {
    inputGridSize = Number(prompt('Enter a number for the grid size'));
    if (!inputGridSize || inputGridSize > 100) {
        alert('Something s wrong, try again');
    } else {
        boxGridSize = inputGridSize;
        container.remove(); 
        createBoxes();
    }
})

