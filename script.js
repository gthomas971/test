fetch('./data.json').then(data=>{
  console.log(data)
})


let nav_active = "bouffe";
document.getElementById('add').addEventListener('click',()=>{
  document.getElementById('modal').style.visibility = "visible"
})

let nav = document.querySelectorAll('.nav');
let array_nav = ["bouffe","boisson","autre"]

for(let item of nav){
  item.addEventListener('click',()=>{
    nav_active = item.dataset.nav;
    nav.forEach((e, i) => {
      if(item === e ){
        document.getElementById(nav_active).classList.add("nav-active")
        item.classList.add("active");
      }
      else{
        array_nav.forEach((elt, i) => {
            if(elt !== nav_active) document.getElementById(elt).classList.remove("nav-active");
        });
        e.classList.remove("active");
      }
    });


  })
}

let importance_array = ["hard","sad","cool"]
function valid(){
  let item = document.getElementById('item').value;
  let importance = document.getElementById('importance')
  let value = importance.options[importance.selectedIndex].value;
  let div = document.createElement("div");
  div.classList.add('item',`${importance_array[value-1]}`)
  let span = document.createElement("span");
  span.innerHTML = item;
  div.append(span)
  document.getElementById(nav_active).append(div)  // `<div class="item ${importance_array[value-1]}"><span>Escargot</span></div>`;
  document.getElementById('modal').style.visibility = "hidden"
}
