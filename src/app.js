// Navigation 
const neu = document.getElementById("new")
const alt = document.getElementById("old")
const daten = document.getElementById("data")
// NEW Member // NEUes Mitglied
const mainForm = document.getElementById("mainForm")
const art = document.getElementById("ladenart")
const name = document.getElementById("buisname")
const inhaber = document.getElementById("iname")
const addresse = document.getElementById("baddress")
const email = document.getElementById("bemail")
const save = document.getElementById("submit")
const beschwerden = document.getElementById("complaints")
const blabel = document.getElementById("clabel")





const navigate = (e) => {
  closeAll();
  if(e.target.id == "new"){
    mainForm.style.display = "grid"
    submit.innerHTML = "SPEICHERN"
  }
  else if(e.target.id == "old"){
  }
  else if(e.target.id == "data"){}
  else if(e.target.id == "seek"){
    mainForm.style.display = "grid"
    submit.innerHTML = "SUCHEN"
  }
  else if(e.target.id == "info"){
  }
  else if(e.target.id == "user"){}
  else if(e.target.id == "net"){}
}
const closeAll = () => {
  mainForm.style.display = "none"
  beschwerden.style.display = "none"
}

closeAll()

neu.addEventListener("click",navigate)
old.addEventListener("click",navigate)
data.addEventListener("click",navigate)
seek.addEventListener("click",navigate)
info.addEventListener("click",navigate)
user.addEventListener("click",navigate)
net.addEventListener("click",navigate)
