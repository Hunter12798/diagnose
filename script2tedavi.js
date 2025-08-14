function order() {
  var benzatinpenisilin,adrenalin,ibuprofen,warfarin,amoksisilin,sertralin,atorvastatin,sildenafil,kaptopril,metronidazol ;

  benzatinpenisilin = document.getElementById("benzatinpenisilin");
  adrenalin = document.getElementById("adrenalin");
  ibuprofen = document.getElementById("ibuprofen");
  warfarin = document.getElementById("warfarin");
  amoksisilin = document.getElementById("amoksisilin");
  sertralin = document.getElementById("sertralin");
  atorvastatin = document.getElementById("atorvastatin");
  sildenafil = document.getElementById("sildenafil");
  kaptopril = document.getElementById("kaptopril");
  trimetoprimsülfametoksazol = document.getElementById("trimetoprimsülfametoksazol");
  metronidazol = document.getElementById("metronidazol");
  propanolol = document.getElementById("propanolol");

  if (propanolol.checked) {
    document.getElementById("propanol").style.display = "block";
  }
  else {
    document.getElementById("propanol").style.display = "none";
  }
  if (metronidazol.checked) {
    document.getElementById("metro").style.display = "block";
  }
  else {
    document.getElementById("metro").style.display = "none";
  }
  if (trimetoprimsülfametoksazol.checked) {
    document.getElementById("trimet").style.display = "block";
  }
  else {
    document.getElementById("trimet").style.display = "none";
  }
  if (kaptopril.checked) {
    document.getElementById("kapto").style.display = "block";
  }
  else {
    document.getElementById("kapto").style.display = "none";
  }
  if (sildenafil.checked) {
    document.getElementById("silde").style.display = "block";
  }
  else {
    document.getElementById("silde").style.display = "none";
  }
  if (atorvastatin.checked) {
    document.getElementById("ator").style.display = "block";
  }
  else {
    document.getElementById("ator").style.display = "none";
  }
  if (sertralin.checked) {
    document.getElementById("sertra").style.display = "block";
  }
  else {
    document.getElementById("sertra").style.display = "none";
  }
  if (amoksisilin.checked) {
    document.getElementById("amoksi").style.display = "block";
  }
  else {
    document.getElementById("amoksi").style.display = "none";
  }
  if (warfarin.checked) {
    document.getElementById("warfa").style.display = "block";
  }
  else {
    document.getElementById("warfa").style.display = "none";
  }
  if (ibuprofen.checked) {
    document.getElementById("ibupro").style.display = "block";
  }
  else {
    document.getElementById("ibupro").style.display = "none";
  }

  if (adrenalin.checked) {
    document.getElementById("adr").style.display = "block";
  }
  else {
    document.getElementById("adr").style.display = "none";
  }

  if (benzatinpenisilin.checked) {
    document.getElementById("benz").style.display = "block";
  }
  else {
    document.getElementById("benz").style.display = "none";
  }
}
