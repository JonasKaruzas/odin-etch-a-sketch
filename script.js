let container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);

for (let i = 0; i < 256; i++){
    let box = document.createElement('div');
    box.setAttribute('class', 'box');
    container.appendChild(box);
}

let boxes = document.querySelectorAll('.box');
// boxes.addEventListener('click', function(e){
//     console.log(e);
// })
boxes.forEach(function(box) {
    box.addEventListener('mouseenter', function(e){
        // console.log(e.target);
        e.target.classList.add('paint');
    })
})