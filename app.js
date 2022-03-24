// Happy coding!
function bgColor(color){
    document.body.style.backgroundColor = color;
}

document.querySelector('.canvas').addEventListener('click', function(event){
    // Con el getComputedStyle podemos saber los colores aplicados a un elemento.
    bgColor(getComputedStyle(event.target).backgroundColor);
});