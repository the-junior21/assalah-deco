const burBtn = document.querySelector('.burger-menu');
const navLis = document.querySelector('.mobile-nav')
let togg = false;
burBtn.addEventListener('click', ()=>{
  togg = !togg
  if(togg){
    navLis.style.right = '0';
    console.log("now show me")
    }else{
      navLis.style.right = '-500px';

    console.log("iam gone")
    }
})
const listItems = document.querySelectorAll('.mobile-nav .li');
console.log(listItems); // Should show 6 elements

/*listItems.forEach(item => {
  item.addEventListener('mouseenter',()=>{
    item.style.backgroundColor = '#d4a259'; 
  })
});*/






