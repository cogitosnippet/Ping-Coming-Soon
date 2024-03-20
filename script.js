let email = document.getElementById('email-id');
let button = document.getElementById('butt-id');
let alert = document.getElementById('alert-id');
let form = document.getElementById('form-id');

button.addEventListener('click',(e)=>{
  e.preventDefault();
  checking();
})

const checking = ()=>{
  let check = "";
  if(email.value===""){
    alert.style.display = "block";
    button.classList.add("gap");
  }
  else if(email.value.includes("@") && email.value.endsWith(".com")){
    alert.style.display = "none";
    button.classList.remove("gap");
    check = "true";
  }
  else{
    alert.style.display = "block";
    button.classList.add("gap");
  }

  if(check==="true"){
    form.reset()
  }
}