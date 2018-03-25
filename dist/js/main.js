var btn=document.querySelector('header .fa-bars');
var menu=document.querySelector('.navigation-menu .container')
var arrowdown=document.querySelector('section.advantages .fa-chevron-right')
var text=document.querySelector('section.advantages p')



//console.log(btn)
btn.addEventListener('click', function () {
    //console.log(56456)
    menu.classList.toggle('active-menu')
})


//arrowdown.forEach(function () {
    arrowdown.addEventListener('click', function () {
        text.style.display='block';
        arrowdown.style.transform='rotate(90deg)'
    })
//})



//arrowdown.addEventListener('click', function () {
    //console.log(56446)
    //console.log(text)
    //text.style.display='block';
    //arrowdown.style.transform='rotate(90deg)'
//})