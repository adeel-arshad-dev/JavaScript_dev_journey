const buttons= document.querySelectorAll('.button')
const body=document.querySelector('body')
buttons.forEach(function(button){
  button.addEventListener("click",function(e){
    if(e.target.id==="grey"){
      // but we can do that generically as given in 2,3,4 
      body.style.backgroundColor="grey"
    }
    if(e.target.id==="yellow"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="white"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="blue"){
      body.style.backgroundColor=e.target.id
    }
  })
})
