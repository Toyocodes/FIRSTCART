//product gallery

var productImg = document.getElementById('product-img');
var smallImg = document.getElementsByClassName('small-img');

smallImg[0].addEventListener('click',function(){
    productImg.src = smallImg[0].src
})
smallImg[1].addEventListener('click',function(){
    productImg.src = smallImg[1].src
})
smallImg[2].addEventListener('click',function(){
    productImg.src = smallImg[2].src
})
smallImg[3].addEventListener('click',function(){
    productImg.src = smallImg[3].src
})