let add = document.getElementById('increment');
let remove = document.getElementById('decrement');

let int = document.getElementById('number');
let interger = 0;

add.addEventListener('click', function(){
    interger += 1;
    int.innerHTML = interger;
})

remove.addEventListener('click', function(){
    interger -= 1;
    int.innerHTML = interger;
})