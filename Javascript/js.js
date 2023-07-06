var test1=document.querySelectorAll(".next")[0];
var test2=document.querySelectorAll(".prev")[0];
document.querySelectorAll(".pagination")[0].addEventListener('click',function(){
    test1.classList.toggle("testi-t");
    test1.classList.toggle("testi-b");
    test2.classList.toggle("testi-t");
    test2.classList.toggle("testi-b");
    // alert("hi");
})