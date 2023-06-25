const colorBox = document.querySelector('.colorBox');
const colorBtn = document.querySelector('.colorBtn');

colorBtn.addEventListener("click",() => {
    colorBox.style.background = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
});
        
const shapeBtn = document.querySelector('.shapeBtn');
const shapeBox = document.querySelector('.shapeBox');

shapeBtn.addEventListener("click", () =>{
    let x = Math.floor((Math.random() * 4) + 1);
    switch(x){
        case 1:  shapeBox.classList.toggle('triangle');
            break;
        case 2:  shapeBox.classList.toggle('rectangle');
            break;
        case 3:  shapeBox.classList.toggle('square');
            break;
        case 4:  shapeBox.classList.toggle('circle');
            break;
        }
    alert("active "+x);
});