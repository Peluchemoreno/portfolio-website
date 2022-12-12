const projectCards = document.querySelector('.grid__item');
//this will not work with query selector all
//only when selecting one element at a time
//come back to learn more about the differences, and watch more wes bos
projectCards.addEventListener('mouseenter', () => {
    projectCards.style.backgroundColor = 'red';
    console.log('here')
})

console.log(projectCards.style)
//returns CSS2Properties Obj


// change background color on hover

// const hexValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G'];

// function randomNumber() {
//     return Math.floor(Math.random() * hexValues.length)
// }

// let result = "";
// for (i = 0; i < 6; i++) {
//     result += hexValues[randomNumber()]
// }
