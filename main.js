const images=["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];
let a=document.querySelector('.items');
for (let index = 0; index < images.length; index++) {
    a.innerHTML +=`<div class="item"><img src="${images[index]}" alt="img1"></div>`;             
}           
document.querySelector('.item').classList.add('active')

    