
function symptomcolor() {
  let asd = document.getElementsByClassName("symptomName");
  let nau = document.getElementsByClassName("symptomCheckbox");
  for(let i=0;i<nau.length;i++){
    if(nau[i].checked){
      asd[i].style.backgroundColor = "SlateBlue";
    }
    else {
      asd[i].style.backgroundColor = "MediumSeaGreen";
    }
}
}
function search() {
    let input, filter, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    li = document.getElementsByClassName("symptom");
    for (i = 0; i < li.length; i++) {
        a = document.getElementsByTagName("span")[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}
function ekskoriasyon(){
  let ekskoriasyon = document.getElementsByClassName("ekskoriasyon");
  let ekskoriasyonCheckbox = document.getElementById("ekskoriasyon");
  if(ekskoriasyonCheckbox.checked){
    for (var i = 0; i < ekskoriasyon.length; i++) {
      ekskoriasyon[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < ekskoriasyon.length; i++) {
      ekskoriasyon[i].style.color = "black";
    }
  }
}
function deridetünel(){
  let deridetünel = document.getElementsByClassName("deridetünel");
  let deridetünelCheckbox = document.getElementById("deridetünel");
  if(deridetünelCheckbox.checked){
    for (var i = 0; i < deridetünel.length; i++) {
      deridetünel[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < deridetünel.length; i++) {
      deridetünel[i].style.color = "black";
    }
  }
}
function polidipsi(){
  let polidipsi = document.getElementsByClassName("polidipsi");
  let polidipsiCheckbox = document.getElementById("polidipsi");
  if(polidipsiCheckbox.checked){
    for (var i = 0; i < polidipsi.length; i++) {
      polidipsi[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < polidipsi.length; i++) {
      polidipsi[i].style.color = "black";
    }
  }
}
function ürinerinkontinans(){
  let ürinerinkontinans = document.getElementsByClassName("ürinerinkontinans");
  let ürinerinkontinansCheckbox = document.getElementById("ürinerinkontinans");
  if(ürinerinkontinansCheckbox.checked){
    for (var i = 0; i < ürinerinkontinans.length; i++) {
      ürinerinkontinans[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < ürinerinkontinans.length; i++) {
      ürinerinkontinans[i].style.color = "black";
    }
  }
}
function ürinerretansiyon(){
  let ürinerretansiyon = document.getElementsByClassName("ürinerretansiyon");
  let ürinerretansiyonCheckbox = document.getElementById("ürinerretansiyon");
  if(ürinerretansiyonCheckbox.checked){
    for (var i = 0; i < ürinerretansiyon.length; i++) {
      ürinerretansiyon[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < ürinerretansiyon.length; i++) {
      ürinerretansiyon[i].style.color = "black";
    }
  }
}
function polifaji(){
  let polifaji = document.getElementsByClassName("polifaji");
  let polifajiCheckbox = document.getElementById("polifaji");
  if(polifajiCheckbox.checked){
    for (var i = 0; i < polifaji.length; i++) {
      polifaji[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < polifaji.length; i++) {
      polifaji[i].style.color = "black";
    }
  }
}
function ekstremitedeişlevbozukluğu(){
  let ekstremitedeişlevbozukluğu = document.getElementsByClassName("ekstremitedeişlevbozukluğu");
  let ekstremitedeişlevbozukluğuCheckbox = document.getElementById("ekstremitedeişlevbozukluğu");
  if(ekstremitedeişlevbozukluğuCheckbox.checked){
    for (var i = 0; i < ekstremitedeişlevbozukluğu.length; i++) {
      ekstremitedeişlevbozukluğu[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < ekstremitedeişlevbozukluğu.length; i++) {
      ekstremitedeişlevbozukluğu[i].style.color = "black";
    }
  }
}
function anemisemptom(){
  let anemisemptom = document.getElementsByClassName("anemisemptom");
  let anemisemptomCheckbox = document.getElementById("anemisemptom");
  if(anemisemptomCheckbox.checked){
    for (var i = 0; i < anemisemptom.length; i++) {
      anemisemptom[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < anemisemptom.length; i++) {
      anemisemptom[i].style.color = "black";
    }
  }
}
function hiperkalsemisemptom(){
  let hiperkalsemisemptom = document.getElementsByClassName("hiperkalsemisemptom");
  let hiperkalsemisemptomCheckbox = document.getElementById("hiperkalsemisemptom");
  if(hiperkalsemisemptomCheckbox.checked){
    for (var i = 0; i < hiperkalsemisemptom.length; i++) {
      hiperkalsemisemptom[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < hiperkalsemisemptom.length; i++) {
      hiperkalsemisemptom[i].style.color = "black";
    }
  }
}
function poliüri(){
  let poliüri = document.getElementsByClassName("poliüri");
  let poliüriCheckbox = document.getElementById("poliüri");
  if(poliüriCheckbox.checked){
    for (var i = 0; i < poliüri.length; i++) {
      poliüri[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < poliüri.length; i++) {
      poliüri[i].style.color = "black";
    }
  }
}
function bulanıkgörme(){
  let bulanıkgörme = document.getElementsByClassName("bulanıkgörme");
  let bulanıkgörmeCheckbox = document.getElementById("bulanıkgörme");
  if(bulanıkgörmeCheckbox.checked){
    for (var i = 0; i < bulanıkgörme.length; i++) {
      bulanıkgörme[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < bulanıkgörme.length; i++) {
      bulanıkgörme[i].style.color = "black";
    }
  }
}
function elayakhissizlik(){
  let elayakhissizlik = document.getElementsByClassName("elayakhissizlik");
  let elayakhissizlikCheckbox = document.getElementById("elayakhissizlik");
  if(elayakhissizlikCheckbox.checked){
    for (var i = 0; i < elayakhissizlik.length; i++) {
      elayakhissizlik[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < elayakhissizlik.length; i++) {
      elayakhissizlik[i].style.color = "black";
    }
  }
}
function kilokaybı(){
  let kilokaybı = document.getElementsByClassName("kilokaybı");
  let kilokaybıCheckbox = document.getElementById("kilokaybı");
  if(kilokaybıCheckbox.checked){
    for (var i = 0; i < kilokaybı.length; i++) {
      kilokaybı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < kilokaybı.length; i++) {
      kilokaybı[i].style.color = "black";
    }
  }
}
function kurucilt(){
  let kurucilt = document.getElementsByClassName("kurucilt");
  let kuruciltCheckbox = document.getElementById("kurucilt");
  if(kuruciltCheckbox.checked){
    for (var i = 0; i < kurucilt.length; i++) {
      kurucilt[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < kurucilt.length; i++) {
      kurucilt[i].style.color = "black";
    }
  }
}
function sıkenfeksiyon(){
  let sıkenfeksiyon = document.getElementsByClassName("sıkenfeksiyon");
  let sıkenfeksiyonCheckbox = document.getElementById("sıkenfeksiyon");
  if(sıkenfeksiyonCheckbox.checked){
    for (var i = 0; i < sıkenfeksiyon.length; i++) {
      sıkenfeksiyon[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < sıkenfeksiyon.length; i++) {
      sıkenfeksiyon[i].style.color = "black";
    }
  }
}
function halsizlik(){
  let halsizlik = document.getElementsByClassName("halsizlik");
  let halsizlikCheckbox = document.getElementById("halsizlik");
  if(halsizlikCheckbox.checked){
    for (var i = 0; i < halsizlik.length; i++) {
      halsizlik[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < halsizlik.length; i++) {
      halsizlik[i].style.color = "black";
    }
  }
}
function şişkinlenf(){
  let şişkinlenf = document.getElementsByClassName("şişkinlenf");
  let şişkinlenfCheckbox = document.getElementById("şişkinlenf");
  if(şişkinlenfCheckbox.checked){
    for (var i = 0; i < şişkinlenf.length; i++) {
      şişkinlenf[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < şişkinlenf.length; i++) {
      şişkinlenf[i].style.color = "black";
    }
  }
}
function ateş(){
  let ateş = document.getElementsByClassName("ateş");
  let ateşCheckbox = document.getElementById("ateş");
  if(ateşCheckbox.checked){
    for (var i = 0; i < ateş.length; i++) {
      ateş[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < ateş.length; i++) {
      ateş[i].style.color = "black";
    }
  }
}
function geceterlemesi(){
  let geceterlemesi = document.getElementsByClassName("geceterlemesi");
  let geceterlemesiCheckbox = document.getElementById("geceterlemesi");
  if(geceterlemesiCheckbox.checked){
    for (var i = 0; i < geceterlemesi.length; i++) {
      geceterlemesi[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < geceterlemesi.length; i++) {
      geceterlemesi[i].style.color = "black";
    }
  }
}
function nefesdarlığı(){
  let nefesdarlığı = document.getElementsByClassName("nefesdarlığı");
  let nefesdarlığıCheckbox = document.getElementById("nefesdarlığı");
  if(nefesdarlığıCheckbox.checked){
    for (var i = 0; i < nefesdarlığı.length; i++) {
      nefesdarlığı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < nefesdarlığı.length; i++) {
      nefesdarlığı[i].style.color = "black";
    }
  }
}
function kaşıntı(){
  let kaşıntı = document.getElementsByClassName("kaşıntı");
  let kaşıntıCheckbox = document.getElementById("kaşıntı");
  if(kaşıntıCheckbox.checked){
    for (var i = 0; i < kaşıntı.length; i++) {
      kaşıntı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < kaşıntı.length; i++) {
      kaşıntı[i].style.color = "black";
    }
  }
}
function midebulantısı(){
  let midebulantısı = document.getElementsByClassName("midebulantısı");
  let midebulantısıCheckbox = document.getElementById("midebulantısı");
  if(midebulantısıCheckbox.checked){
    for (var i = 0; i < midebulantısı.length; i++) {
      midebulantısı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < midebulantısı.length; i++) {
      midebulantısı[i].style.color = "black";
    }
  }
}
function göğüsağrısı(){
  let göğüsağrısı = document.getElementsByClassName("göğüsağrısı");
  let göğüsağrısıCheckbox = document.getElementById("göğüsağrısı");
  if(göğüsağrısıCheckbox.checked){
    for (var i = 0; i < göğüsağrısı.length; i++) {
      göğüsağrısı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < göğüsağrısı.length; i++) {
      göğüsağrısı[i].style.color = "black";
    }
  }
}
function omuzağrısı(){
  let omuzağrısı = document.getElementsByClassName("omuzağrısı");
  let omuzağrısıCheckbox = document.getElementById("omuzağrısı");
  if(omuzağrısıCheckbox.checked){
    for (var i = 0; i < omuzağrısı.length; i++) {
      omuzağrısı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < omuzağrısı.length; i++) {
      omuzağrısı[i].style.color = "black";
    }
  }
}
function kolağrısı(){
  let kolağrısı = document.getElementsByClassName("kolağrısı");
  let kolağrısıCheckbox = document.getElementById("kolağrısı");
  if(kolağrısıCheckbox.checked){
    for (var i = 0; i < kolağrısı.length; i++) {
      kolağrısı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < kolağrısı.length; i++) {
      kolağrısı[i].style.color = "black";
    }
  }
}
function çeneağrısı(){
  let çeneağrısı = document.getElementsByClassName("çeneağrısı");
  let çeneağrısıCheckbox = document.getElementById("çeneağrısı");
  if(çeneağrısıCheckbox.checked){
    for (var i = 0; i < çeneağrısı.length; i++) {
      çeneağrısı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < çeneağrısı.length; i++) {
      çeneağrısı[i].style.color = "black";
    }
  }
}
function sırtağrısı(){
  let sırtağrısı = document.getElementsByClassName("sırtağrısı");
  let sırtağrısıCheckbox = document.getElementById("sırtağrısı");
  if(sırtağrısıCheckbox.checked){
    for (var i = 0; i < sırtağrısı.length; i++) {
      sırtağrısı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < sırtağrısı.length; i++) {
      sırtağrısı[i].style.color = "black";
    }
  }
}
function boyunağrısı(){
  let boyunağrısı = document.getElementsByClassName("boyunağrısı");
  let boyunağrısıCheckbox = document.getElementById("boyunağrısı");
  if(boyunağrısıCheckbox.checked){
    for (var i = 0; i < boyunağrısı.length; i++) {
      boyunağrısı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < boyunağrısı.length; i++) {
      boyunağrısı[i].style.color = "black";
    }
  }
}
function dişağrısı(){
  let dişağrısı = document.getElementsByClassName("dişağrısı");
  let dişağrısıCheckbox = document.getElementById("dişağrısı");
  if(dişağrısıCheckbox.checked){
    for (var i = 0; i < dişağrısı.length; i++) {
      dişağrısı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < dişağrısı.length; i++) {
      dişağrısı[i].style.color = "black";
    }
  }
}
function epigastrikağrı(){
  let epigastrikağrı = document.getElementsByClassName("epigastrikağrı");
  let epigastrikağrıCheckbox = document.getElementById("epigastrikağrı");
  if(epigastrikağrıCheckbox.checked){
    for (var i = 0; i < epigastrikağrı.length; i++) {
      epigastrikağrı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < epigastrikağrı.length; i++) {
      epigastrikağrı[i].style.color = "black";
    }
  }
}
function hazımsızlık(){
  let hazımsızlık = document.getElementsByClassName("hazımsızlık");
  let hazımsızlıkCheckbox = document.getElementById("hazımsızlık");
  if(hazımsızlıkCheckbox.checked){
    for (var i = 0; i < hazımsızlık.length; i++) {
      hazımsızlık[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < hazımsızlık.length; i++) {
      hazımsızlık[i].style.color = "black";
    }
  }
}
function başdönmesi(){
  let başdönmesi = document.getElementsByClassName("başdönmesi");
  let başdönmesiCheckbox = document.getElementById("başdönmesi");
  if(başdönmesiCheckbox.checked){
    for (var i = 0; i < başdönmesi.length; i++) {
      başdönmesi[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < başdönmesi.length; i++) {
      başdönmesi[i].style.color = "black";
    }
  }
}
function göğüsteağrılıyanma(){
  let göğüsteağrılıyanma = document.getElementsByClassName("göğüsteağrılıyanma");
  let göğüsteağrılıyanmaCheckbox = document.getElementById("göğüsteağrılıyanma");
  if(göğüsteağrılıyanmaCheckbox.checked){
    for (var i = 0; i < göğüsteağrılıyanma.length; i++) {
      göğüsteağrılıyanma[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < göğüsteağrılıyanma.length; i++) {
      göğüsteağrılıyanma[i].style.color = "black";
    }
  }
}
function terleme(){
  let terleme = document.getElementsByClassName("terleme");
  let terlemeCheckbox = document.getElementById("terleme");
  if(terlemeCheckbox.checked){
    for (var i = 0; i < terleme.length; i++) {
      terleme[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < terleme.length; i++) {
      terleme[i].style.color = "black";
    }
  }
}
function hemipleji(){
  let hemipleji = document.getElementsByClassName("hemipleji");
  let hemiplejiCheckbox = document.getElementById("hemipleji");
  if(hemiplejiCheckbox.checked){
    for (var i = 0; i < hemipleji.length; i++) {
      hemipleji[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < hemipleji.length; i++) {
      hemipleji[i].style.color = "black";
    }
  }
}
function nefeskokusu(){
  let nefeskokusu = document.getElementsByClassName("nefeskokusu");
  let nefeskokusuCheckbox = document.getElementById("nefeskokusu");
  if(nefeskokusuCheckbox.checked){
    for (var i = 0; i < nefeskokusu.length; i++) {
      nefeskokusu[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < nefeskokusu.length; i++) {
      nefeskokusu[i].style.color = "black";
    }
  }
}
function sıkuyku(){
  let sıkuyku = document.getElementsByClassName("sıkuyku");
  let sıkuykuCheckbox = document.getElementById("sıkuyku");
  if(sıkuykuCheckbox.checked){
    for (var i = 0; i < sıkuyku.length; i++) {
      sıkuyku[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < sıkuyku.length; i++) {
      sıkuyku[i].style.color = "black";
    }
  }
}
function splenomegali(){
  let splenomegali = document.getElementsByClassName("splenomegali");
  let splenomegaliCheckbox = document.getElementById("splenomegali");
  if(splenomegaliCheckbox.checked){
    for (var i = 0; i < splenomegali.length; i++) {
      splenomegali[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < splenomegali.length; i++) {
      splenomegali[i].style.color = "black";
    }
  }
}
function boğazağrısı(){
  let boğazağrısı = document.getElementsByClassName("boğazağrısı");
  let boğazağrısıCheckbox = document.getElementById("boğazağrısı");
  if(boğazağrısıCheckbox.checked){
    for (var i = 0; i < boğazağrısı.length; i++) {
      boğazağrısı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < boğazağrısı.length; i++) {
      boğazağrısı[i].style.color = "black";
    }
  }
}
function yüksekateş(){
  let yüksekateş = document.getElementsByClassName("yüksekateş");
  let yüksekateşCheckbox = document.getElementById("yüksekateş");
  if(yüksekateşCheckbox.checked){
    for (var i = 0; i < yüksekateş.length; i++) {
      yüksekateş[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < yüksekateş.length; i++) {
      yüksekateş[i].style.color = "black";
    }
  }
}
function iştahkaybı(){
  let iştahkaybı = document.getElementsByClassName("iştahkaybı");
  let iştahkaybıCheckbox = document.getElementById("iştahkaybı");
  if(iştahkaybıCheckbox.checked){
    for (var i = 0; i < iştahkaybı.length; i++) {
      iştahkaybı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < iştahkaybı.length; i++) {
      iştahkaybı[i].style.color = "black";
    }
  }
}
function kasağrısı(){
  let kasağrısı = document.getElementsByClassName("kasağrısı");
  let kasağrısıCheckbox = document.getElementById("kasağrısı");
  if(kasağrısıCheckbox.checked){
    for (var i = 0; i < kasağrısı.length; i++) {
      kasağrısı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < kasağrısı.length; i++) {
      kasağrısı[i].style.color = "black";
    }
  }
}
function tonsildekızarma(){
  let tonsildekızarma = document.getElementsByClassName("tonsildekızarma");
  let tonsildekızarmaCheckbox = document.getElementById("tonsildekızarma");
  if(tonsildekızarmaCheckbox.checked){
    for (var i = 0; i < tonsildekızarma.length; i++) {
      tonsildekızarma[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < tonsildekızarma.length; i++) {
      tonsildekızarma[i].style.color = "black";
    }
  }
}
function tonsildeşişme(){
  let tonsildeşişme = document.getElementsByClassName("tonsildeşişme");
  let tonsildeşişmeCheckbox = document.getElementById("tonsildeşişme");
  if(tonsildeşişmeCheckbox.checked){
    for (var i = 0; i < tonsildeşişme.length; i++) {
      tonsildeşişme[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < tonsildeşişme.length; i++) {
      tonsildeşişme[i].style.color = "black";
    }
  }
}
function tonsildebeyazyama(){
  let tonsildebeyazyama = document.getElementsByClassName("tonsildebeyazyama");
  let tonsildebeyazyamaCheckbox = document.getElementById("tonsildebeyazyama");
  if(tonsildebeyazyamaCheckbox.checked){
    for (var i = 0; i < tonsildebeyazyama.length; i++) {
      tonsildebeyazyama[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < tonsildebeyazyama.length; i++) {
      tonsildebeyazyama[i].style.color = "black";
    }
  }
}
function üşüme(){
  let üşüme = document.getElementsByClassName("üşüme");
  let üşümeCheckbox = document.getElementById("üşüme");
  if(üşümeCheckbox.checked){
    for (var i = 0; i < üşüme.length; i++) {
      üşüme[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < üşüme.length; i++) {
      üşüme[i].style.color = "black";
    }
  }
}
function karınağrısı(){
  let karınağrısı = document.getElementsByClassName("karınağrısı");
  let karınağrısıCheckbox = document.getElementById("karınağrısı");
  if(karınağrısıCheckbox.checked){
    for (var i = 0; i < karınağrısı.length; i++) {
      karınağrısı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < karınağrısı.length; i++) {
      karınağrısı[i].style.color = "black";
    }
  }
}
function regürjitasyon(){
  let regürjitasyon = document.getElementsByClassName("regürjitasyon");
  let regürjitasyonCheckbox = document.getElementById("regürjitasyon");
  if(regürjitasyonCheckbox.checked){
    for (var i = 0; i < regürjitasyon.length; i++) {
      regürjitasyon[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < regürjitasyon.length; i++) {
      regürjitasyon[i].style.color = "black";
    }
  }
}
function disfaji(){
  let disfaji = document.getElementsByClassName("disfaji");
  let disfajiCheckbox = document.getElementById("disfaji");
  if(disfajiCheckbox.checked){
    for (var i = 0; i < disfaji.length; i++) {
      disfaji[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < disfaji.length; i++) {
      disfaji[i].style.color = "black";
    }
  }
}
function globushissi(){
  let globushissi = document.getElementsByClassName("globushissi");
  let globushissiCheckbox = document.getElementById("globushissi");
  if(globushissiCheckbox.checked){
    for (var i = 0; i < globushissi.length; i++) {
      globushissi[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < globushissi.length; i++) {
      globushissi[i].style.color = "black";
    }
  }
}
function öksürük(){
  let öksürük = document.getElementsByClassName("öksürük");
  let öksürükCheckbox = document.getElementById("öksürük");
  if(öksürükCheckbox.checked){
    for (var i = 0; i < öksürük.length; i++) {
      öksürük[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < öksürük.length; i++) {
      öksürük[i].style.color = "black";
    }
  }
}
function değişenastım(){
  let değişenastım = document.getElementsByClassName("değişenastım");
  let değişenastımCheckbox = document.getElementById("değişenastım");
  if(değişenastımCheckbox.checked){
    for (var i = 0; i < değişenastım.length; i++) {
      değişenastım[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < değişenastım.length; i++) {
      değişenastım[i].style.color = "black";
    }
  }
}
function sıkidraraçıkma(){
  let sıkidraraçıkma = document.getElementsByClassName("sıkidraraçıkma");
  let sıkidraraçıkmaCheckbox = document.getElementById("sıkidraraçıkma");
  if(sıkidraraçıkmaCheckbox.checked){
    for (var i = 0; i < sıkidraraçıkma.length; i++) {
      sıkidraraçıkma[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < sıkidraraçıkma.length; i++) {
      sıkidraraçıkma[i].style.color = "black";
    }
  }
}
function kusma(){
  let kusma = document.getElementsByClassName("kusma");
  let kusmaCheckbox = document.getElementById("kusma");
  if(kusmaCheckbox.checked){
    for (var i = 0; i < kusma.length; i++) {
      kusma[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < kusma.length; i++) {
      kusma[i].style.color = "black";
    }
  }
}
function kabızlık(){
  let kabızlık = document.getElementsByClassName("kabızlık");
  let kabızlıkCheckbox = document.getElementById("kabızlık");
  if(kabızlıkCheckbox.checked){
    for (var i = 0; i < kabızlık.length; i++) {
      kabızlık[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < kabızlık.length; i++) {
      kabızlık[i].style.color = "black";
    }
  }
}
function kemikağrısı(){
  let kemikağrısı = document.getElementsByClassName("kemikağrısı");
  let kemikağrısıCheckbox = document.getElementById("kemikağrısı");
  if(kemikağrısıCheckbox.checked){
    for (var i = 0; i < kemikağrısı.length; i++) {
      kemikağrısı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < kemikağrısı.length; i++) {
      kemikağrısı[i].style.color = "black";
    }
  }
}
function kalpçarpıntısı(){
  let kalpçarpıntısı = document.getElementsByClassName("kalpçarpıntısı");
  let kalpçarpıntısıCheckbox = document.getElementById("kalpçarpıntısı");
  if(kalpçarpıntısıCheckbox.checked){
    for (var i = 0; i < kalpçarpıntısı.length; i++) {
      kalpçarpıntısı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < kalpçarpıntısı.length; i++) {
      kalpçarpıntısı[i].style.color = "black";
    }
  }
}
function konfüzyon(){
  let konfüzyon = document.getElementsByClassName("konfüzyon");
  let konfüzyonCheckbox = document.getElementById("konfüzyon");
  if(konfüzyonCheckbox.checked){
    for (var i = 0; i < konfüzyon.length; i++) {
      konfüzyon[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < konfüzyon.length; i++) {
      konfüzyon[i].style.color = "black";
    }
  }
}
function bayılma(){
  let bayılma = document.getElementsByClassName("bayılma");
  let bayılmaCheckbox = document.getElementById("bayılma");
  if(bayılmaCheckbox.checked){
    for (var i = 0; i < bayılma.length; i++) {
      bayılma[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < bayılma.length; i++) {
      bayılma[i].style.color = "black";
    }
  }
}
function zonklama(){
  let zonklama = document.getElementsByClassName("zonklama");
  let zonklamaCheckbox = document.getElementById("zonklama");
  if(zonklamaCheckbox.checked){
    for (var i = 0; i < zonklama.length; i++) {
      zonklama[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < zonklama.length; i++) {
      zonklama[i].style.color = "black";
    }
  }
}
function başağrısı(){
  let başağrısı = document.getElementsByClassName("başağrısı");
  let başağrısıCheckbox = document.getElementById("başağrısı");
  if(başağrısıCheckbox.checked){
    for (var i = 0; i < başağrısı.length; i++) {
      başağrısı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < başağrısı.length; i++) {
      başağrısı[i].style.color = "black";
    }
  }
}
function kafadahassasiyet(){
  let kafadahassasiyet = document.getElementsByClassName("kafadahassasiyet");
  let kafadahassasiyetCheckbox = document.getElementById("kafadahassasiyet");
  if(kafadahassasiyetCheckbox.checked){
    for (var i = 0; i < kafadahassasiyet.length; i++) {
      kafadahassasiyet[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < kafadahassasiyet.length; i++) {
      kafadahassasiyet[i].style.color = "black";
    }
  }
}
function çiftgörme(){
  let çiftgörme = document.getElementsByClassName("çiftgörme");
  let çiftgörmeCheckbox = document.getElementById("çiftgörme");
  if(çiftgörmeCheckbox.checked){
    for (var i = 0; i < çiftgörme.length; i++) {
      çiftgörme[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < çiftgörme.length; i++) {
      çiftgörme[i].style.color = "black";
    }
  }
}
function görmekaybı(){
  let görmekaybı = document.getElementsByClassName("görmekaybı");
  let görmekaybıCheckbox = document.getElementById("görmekaybı");
  if(görmekaybıCheckbox.checked){
    for (var i = 0; i < görmekaybı.length; i++) {
      görmekaybı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < görmekaybı.length; i++) {
      görmekaybı[i].style.color = "black";
    }
  }
}
function kalçaağrısı(){
  let kalçaağrısı = document.getElementsByClassName("kalçaağrısı");
  let kalçaağrısıCheckbox = document.getElementById("kalçaağrısı");
  if(kalçaağrısıCheckbox.checked){
    for (var i = 0; i < kalçaağrısı.length; i++) {
      kalçaağrısı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < kalçaağrısı.length; i++) {
      kalçaağrısı[i].style.color = "black";
    }
  }
}
function uylukağrısı(){
  let uylukağrısı = document.getElementsByClassName("uylukağrısı");
  let uylukağrısıCheckbox = document.getElementById("uylukağrısı");
  if(uylukağrısıCheckbox.checked){
    for (var i = 0; i < uylukağrısı.length; i++) {
      uylukağrısı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < uylukağrısı.length; i++) {
      uylukağrısı[i].style.color = "black";
    }
  }
}
function ödem(){
  let ödem = document.getElementsByClassName("ödem");
  let ödemCheckbox = document.getElementById("ödem");
  if(ödemCheckbox.checked){
    for (var i = 0; i < ödem.length; i++) {
      ödem[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < ödem.length; i++) {
      ödem[i].style.color = "black";
    }
  }
}
function insomnia(){
  let insomnia = document.getElementsByClassName("insomnia");
  let insomniaCheckbox = document.getElementById("insomnia");
  if(insomniaCheckbox.checked){
    for (var i = 0; i < insomnia.length; i++) {
      insomnia[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < insomnia.length; i++) {
      insomnia[i].style.color = "black";
    }
  }
}
function deriderenkdeğişimi(){
  let deriderenkdeğişimi = document.getElementsByClassName("deriderenkdeğişimi");
  let deriderenkdeğişimiCheckbox = document.getElementById("deriderenkdeğişimi");
  if(deriderenkdeğişimiCheckbox.checked){
    for (var i = 0; i < deriderenkdeğişimi.length; i++) {
      deriderenkdeğişimi[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < deriderenkdeğişimi.length; i++) {
      deriderenkdeğişimi[i].style.color = "black";
    }
  }
}
function telenjiektazi(){
  let telenjiektazi = document.getElementsByClassName("telenjiektazi");
  let telenjiektaziCheckbox = document.getElementById("telenjiektazi");
  if(telenjiektaziCheckbox.checked){
    for (var i = 0; i < telenjiektazi.length; i++) {
      telenjiektazi[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < telenjiektazi.length; i++) {
      telenjiektazi[i].style.color = "black";
    }
  }
}
function kalsinozis(){
  let kalsinozis = document.getElementsByClassName("kalsinozis");
  let kalsinozisCheckbox = document.getElementById("kalsinozis");
  if(kalsinozisCheckbox.checked){
    for (var i = 0; i < kalsinozis.length; i++) {
      kalsinozis[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < kalsinozis.length; i++) {
      kalsinozis[i].style.color = "black";
    }
  }
}
function raynaudfenomeni(){
  let raynaudfenomeni = document.getElementsByClassName("raynaudfenomeni");
  let raynaudfenomeniCheckbox = document.getElementById("raynaudfenomeni");
  if(raynaudfenomeniCheckbox.checked){
    for (var i = 0; i < raynaudfenomeni.length; i++) {
      raynaudfenomeni[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < raynaudfenomeni.length; i++) {
      raynaudfenomeni[i].style.color = "black";
    }
  }
}
function karındaşişkinlik(){
  let karındaşişkinlik = document.getElementsByClassName("karındaşişkinlik");
  let karındaşişkinlikCheckbox = document.getElementById("karındaşişkinlik");
  if(karındaşişkinlikCheckbox.checked){
    for (var i = 0; i < karındaşişkinlik.length; i++) {
      karındaşişkinlik[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < karındaşişkinlik.length; i++) {
      karındaşişkinlik[i].style.color = "black";
    }
  }
}
function fekalinkontinans(){
  let fekalinkontinans = document.getElementsByClassName("fekalinkontinans");
  let fekalinkontinansCheckbox = document.getElementById("fekalinkontinans");
  if(fekalinkontinansCheckbox.checked){
    for (var i = 0; i < fekalinkontinans.length; i++) {
      fekalinkontinans[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < fekalinkontinans.length; i++) {
      fekalinkontinans[i].style.color = "black";
    }
  }
}
function egzersiztoleransındaazalma(){
  let egzersiztoleransındaazalma = document.getElementsByClassName("egzersiztoleransındaazalma");
  let egzersiztoleransındaazalmaCheckbox = document.getElementById("egzersiztoleransındaazalma");
  if(egzersiztoleransındaazalmaCheckbox.checked){
    for (var i = 0; i < egzersiztoleransındaazalma.length; i++) {
      egzersiztoleransındaazalma[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < egzersiztoleransındaazalma.length; i++) {
      egzersiztoleransındaazalma[i].style.color = "black";
    }
  }
}
function pretibialödem(){
  let pretibialödem = document.getElementsByClassName("pretibialödem");
  let pretibialödemCheckbox = document.getElementById("pretibialödem");
  if(pretibialödemCheckbox.checked){
    for (var i = 0; i < pretibialödem.length; i++) {
      pretibialödem[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < pretibialödem.length; i++) {
      pretibialödem[i].style.color = "black";
    }
  }
}
function ishal(){
  let ishal = document.getElementsByClassName("ishal");
  let ishalCheckbox = document.getElementById("ishal");
  if(ishalCheckbox.checked){
    for (var i = 0; i < ishal.length; i++) {
      ishal[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < ishal.length; i++) {
      ishal[i].style.color = "black";
    }
  }
}
function hemoptizi(){
  let hemoptizi = document.getElementsByClassName("hemoptizi");
  let hemoptiziCheckbox = document.getElementById("hemoptizi");
  if(hemoptiziCheckbox.checked){
    for (var i = 0; i < hemoptizi.length; i++) {
      hemoptizi[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < hemoptizi.length; i++) {
      hemoptizi[i].style.color = "black";
    }
  }
}
function eklemağrısı(){
  let eklemağrısı = document.getElementsByClassName("eklemağrısı");
  let eklemağrısıCheckbox = document.getElementById("eklemağrısı");
  if(eklemağrısıCheckbox.checked){
    for (var i = 0; i < eklemağrısı.length; i++) {
      eklemağrısı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < eklemağrısı.length; i++) {
      eklemağrısı[i].style.color = "black";
    }
  }
}
function buruntıkanıklığı(){
  let buruntıkanıklığı = document.getElementsByClassName("buruntıkanıklığı");
  let buruntıkanıklığıCheckbox = document.getElementById("buruntıkanıklığı");
  if(buruntıkanıklığıCheckbox.checked){
    for (var i = 0; i < buruntıkanıklığı.length; i++) {
      buruntıkanıklığı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < buruntıkanıklığı.length; i++) {
      buruntıkanıklığı[i].style.color = "black";
    }
  }
}
function burunkanaması(){
  let burunkanaması = document.getElementsByClassName("burunkanaması");
  let burunkanamasıCheckbox = document.getElementById("burunkanaması");
  if(burunkanamasıCheckbox.checked){
    for (var i = 0; i < burunkanaması.length; i++) {
      burunkanaması[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < burunkanaması.length; i++) {
      burunkanaması[i].style.color = "black";
    }
  }
}
function irinliakıntı(){
  let irinliakıntı = document.getElementsByClassName("irinliakıntı");
  let irinliakıntıCheckbox = document.getElementById("irinliakıntı");
  if(irinliakıntıCheckbox.checked){
    for (var i = 0; i < irinliakıntı.length; i++) {
      irinliakıntı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < irinliakıntı.length; i++) {
      irinliakıntı[i].style.color = "black";
    }
  }
}
function hematüri(){
  let hematüri = document.getElementsByClassName("hematüri");
  let hematüriCheckbox = document.getElementById("hematüri");
  if(hematüriCheckbox.checked){
    for (var i = 0; i < hematüri.length; i++) {
      hematüri[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < hematüri.length; i++) {
      hematüri[i].style.color = "black";
    }
  }
}
function ciltteyara(){
  let ciltteyara = document.getElementsByClassName("ciltteyara");
  let ciltteyaraCheckbox = document.getElementById("ciltteyara");
  if(ciltteyaraCheckbox.checked){
    for (var i = 0; i < ciltteyara.length; i++) {
      ciltteyara[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < ciltteyara.length; i++) {
      ciltteyara[i].style.color = "black";
    }
  }
}
function cilttemorarma(){
  let cilttemorarma = document.getElementsByClassName("cilttemorarma");
  let cilttemorarmaCheckbox = document.getElementById("cilttemorarma");
  if(cilttemorarmaCheckbox.checked){
    for (var i = 0; i < cilttemorarma.length; i++) {
      cilttemorarma[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < cilttemorarma.length; i++) {
      cilttemorarma[i].style.color = "black";
    }
  }
}
function cilttekızarıklık(){
  let cilttekızarıklık = document.getElementsByClassName("cilttekızarıklık");
  let cilttekızarıklıkCheckbox = document.getElementById("cilttekızarıklık");
  if(cilttekızarıklıkCheckbox.checked){
    for (var i = 0; i < cilttekızarıklık.length; i++) {
      cilttekızarıklık[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < cilttekızarıklık.length; i++) {
      cilttekızarıklık[i].style.color = "black";
    }
  }
}
function gözdekızarma(){
  let gözdekızarma = document.getElementsByClassName("gözdekızarma");
  let gözdekızarmaCheckbox = document.getElementById("gözdekızarma");
  if(gözdekızarmaCheckbox.checked){
    for (var i = 0; i < gözdekızarma.length; i++) {
      gözdekızarma[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < gözdekızarma.length; i++) {
      gözdekızarma[i].style.color = "black";
    }
  }
}
function gözdeyanma(){
  let gözdeyanma = document.getElementsByClassName("gözdeyanma");
  let gözdeyanmaCheckbox = document.getElementById("gözdeyanma");
  if(gözdeyanmaCheckbox.checked){
    for (var i = 0; i < gözdeyanma.length; i++) {
      gözdeyanma[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < gözdeyanma.length; i++) {
      gözdeyanma[i].style.color = "black";
    }
  }
}
function gözağrısı(){
  let gözağrısı = document.getElementsByClassName("gözağrısı");
  let gözağrısıCheckbox = document.getElementById("gözağrısı");
  if(gözağrısıCheckbox.checked){
    for (var i = 0; i < gözağrısı.length; i++) {
      gözağrısı[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < gözağrısı.length; i++) {
      gözağrısı[i].style.color = "black";
    }
  }
}
function görmeproblemleri(){
  let görmeproblemleri = document.getElementsByClassName("görmeproblemleri");
  let görmeproblemleriCheckbox = document.getElementById("görmeproblemleri");
  if(görmeproblemleriCheckbox.checked){
    for (var i = 0; i < görmeproblemleri.length; i++) {
      görmeproblemleri[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < görmeproblemleri.length; i++) {
      görmeproblemleri[i].style.color = "black";
    }
  }
}
function kulakinflamasyonu(){
  let kulakinflamasyonu = document.getElementsByClassName("kulakinflamasyonu");
  let kulakinflamasyonuCheckbox = document.getElementById("kulakinflamasyonu");
  if(kulakinflamasyonuCheckbox.checked){
    for (var i = 0; i < kulakinflamasyonu.length; i++) {
      kulakinflamasyonu[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < kulakinflamasyonu.length; i++) {
      kulakinflamasyonu[i].style.color = "black";
    }
  }
}
function işitmeproblemleri(){
  let işitmeproblemleri = document.getElementsByClassName("işitmeproblemleri");
  let işitmeproblemleriCheckbox = document.getElementById("işitmeproblemleri");
  if(işitmeproblemleriCheckbox.checked){
    for (var i = 0; i < işitmeproblemleri.length; i++) {
      işitmeproblemleri[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < işitmeproblemleri.length; i++) {
      işitmeproblemleri[i].style.color = "black";
    }
  }
}
function dehidratasyon(){
  let dehidratasyon = document.getElementsByClassName("dehidratasyon");
  let dehidratasyonCheckbox = document.getElementById("dehidratasyon");
  if(dehidratasyonCheckbox.checked){
    for (var i = 0; i < dehidratasyon.length; i++) {
      dehidratasyon[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < dehidratasyon.length; i++) {
      dehidratasyon[i].style.color = "black";
    }
  }
}
function büyümegeriliği(){
  let büyümegeriliği = document.getElementsByClassName("büyümegeriliği");
  let büyümegeriliğiCheckbox = document.getElementById("büyümegeriliği");
  if(büyümegeriliğiCheckbox.checked){
    for (var i = 0; i < büyümegeriliği.length; i++) {
      büyümegeriliği[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < büyümegeriliği.length; i++) {
      büyümegeriliği[i].style.color = "black";
    }
  }
}
function kasgüçsüzlüğü(){
  let kasgüçsüzlüğü = document.getElementsByClassName("kasgüçsüzlüğü");
  let kasgüçsüzlüğüCheckbox = document.getElementById("kasgüçsüzlüğü");
  if(kasgüçsüzlüğüCheckbox.checked){
    for (var i = 0; i < kasgüçsüzlüğü.length; i++) {
      kasgüçsüzlüğü[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < kasgüçsüzlüğü.length; i++) {
      kasgüçsüzlüğü[i].style.color = "black";
    }
  }
}
function idrardakoyulaşma(){
  let idrardakoyulaşma = document.getElementsByClassName("idrardakoyulaşma");
  let idrardakoyulaşmaCheckbox = document.getElementById("idrardakoyulaşma");
  if(idrardakoyulaşmaCheckbox.checked){
    for (var i = 0; i < idrardakoyulaşma.length; i++) {
      idrardakoyulaşma[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < idrardakoyulaşma.length; i++) {
      idrardakoyulaşma[i].style.color = "black";
    }
  }
}
function akolikgaita(){
  let akolikgaita = document.getElementsByClassName("akolikgaita");
  let akolikgaitaCheckbox = document.getElementById("akolikgaita");
  if(akolikgaitaCheckbox.checked){
    for (var i = 0; i < akolikgaita.length; i++) {
      akolikgaita[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < akolikgaita.length; i++) {
      akolikgaita[i].style.color = "black";
    }
  }
}
function sarılık(){
  let sarılık = document.getElementsByClassName("sarılık");
  let sarılıkCheckbox = document.getElementById("sarılık");
  if(sarılıkCheckbox.checked){
    for (var i = 0; i < sarılık.length; i++) {
      sarılık[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < sarılık.length; i++) {
      sarılık[i].style.color = "black";
    }
  }
}
function hepatomegali(){
  let hepatomegali = document.getElementsByClassName("hepatomegali");
  let hepatomegaliCheckbox = document.getElementById("hepatomegali");
  if(hepatomegaliCheckbox.checked){
    for (var i = 0; i < hepatomegali.length; i++) {
      hepatomegali[i].style.color = "maroon";
    }
  }
  else {
    for (var i = 0; i < hepatomegali.length; i++) {
      hepatomegali[i].style.color = "black";
    }
  }
}
function çilekdil(){
  let çilekdil = document.getElementsByClassName("çilekdil");
  let çilekdilCheckbox = document.getElementById("çilekdil");
  if(çilekdilCheckbox.checked){
    for (var i = 0; i < çilekdil.length; i++) {
      çilekdil[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < çilekdil.length; i++) {
      çilekdil[i].style.color = "black";
    }
  }
}
function taşikardi(){
  let taşikardi = document.getElementsByClassName("taşikardi");
  let taşikardiCheckbox = document.getElementById("taşikardi");
  if(taşikardiCheckbox.checked){
    for (var i = 0; i < taşikardi.length; i++) {
      taşikardi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < taşikardi.length; i++) {
      taşikardi[i].style.color = "black";
    }
  }
}
function cilttesoyulma(){
  let cilttesoyulma = document.getElementsByClassName("cilttesoyulma");
  let cilttesoyulmaCheckbox = document.getElementById("cilttesoyulma");
  if(cilttesoyulmaCheckbox.checked){
    for (var i = 0; i < cilttesoyulma.length; i++) {
      cilttesoyulma[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < cilttesoyulma.length; i++) {
      cilttesoyulma[i].style.color = "black";
    }
  }
}
function iritabilite(){
  let iritabilite = document.getElementsByClassName("iritabilite");
  let iritabiliteCheckbox = document.getElementById("iritabilite");
  if(iritabiliteCheckbox.checked){
    for (var i = 0; i < iritabilite.length; i++) {
      iritabilite[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < iritabilite.length; i++) {
      iritabilite[i].style.color = "black";
    }
  }
}
function steatorrhea(){
  let steatorrhea = document.getElementsByClassName("steatorrhea");
  let steatorrheaCheckbox = document.getElementById("steatorrhea");
  if(steatorrheaCheckbox.checked){
    for (var i = 0; i < steatorrhea.length; i++) {
      steatorrhea[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < steatorrhea.length; i++) {
      steatorrhea[i].style.color = "black";
    }
  }
}
function mentalretardasyon(){
  let mentalretardasyon = document.getElementsByClassName("mentalretardasyon");
  let mentalretardasyonCheckbox = document.getElementById("mentalretardasyon");
  if(mentalretardasyonCheckbox.checked){
    for (var i = 0; i < mentalretardasyon.length; i++) {
      mentalretardasyon[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < mentalretardasyon.length; i++) {
      mentalretardasyon[i].style.color = "black";
    }
  }
}
function midriyazis(){
  let midriyazis = document.getElementsByClassName("midriyazis");
  let midriyazisCheckbox = document.getElementById("midriyazis");
  if(midriyazisCheckbox.checked){
    for (var i = 0; i < midriyazis.length; i++) {
      midriyazis[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < midriyazis.length; i++) {
      midriyazis[i].style.color = "black";
    }
  }
}
function konjunktivit(){
  let konjunktivit = document.getElementsByClassName("konjunktivit");
  let konjunktivitCheckbox = document.getElementById("konjunktivit");
  if(konjunktivitCheckbox.checked){
    for (var i = 0; i < konjunktivit.length; i++) {
      konjunktivit[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < konjunktivit.length; i++) {
      konjunktivit[i].style.color = "black";
    }
  }
}
function fotosensitivite(){
  let fotosensitivite = document.getElementsByClassName("fotosensitivite");
  let fotosensitiviteCheckbox = document.getElementById("fotosensitivite");
  if(fotosensitiviteCheckbox.checked){
    for (var i = 0; i < fotosensitivite.length; i++) {
      fotosensitivite[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < fotosensitivite.length; i++) {
      fotosensitivite[i].style.color = "black";
    }
  }
}
function nöbet(){
  let nöbet = document.getElementsByClassName("nöbet");
  let nöbetCheckbox = document.getElementById("nöbet");
  if(nöbetCheckbox.checked){
    for (var i = 0; i < nöbet.length; i++) {
      nöbet[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < nöbet.length; i++) {
      nöbet[i].style.color = "black";
    }
  }
}
function ensesertliği(){
  let ensesertliği = document.getElementsByClassName("ensesertliği");
  let ensesertliğiCheckbox = document.getElementById("ensesertliği");
  if(ensesertliğiCheckbox.checked){
    for (var i = 0; i < ensesertliği.length; i++) {
      ensesertliği[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < ensesertliği.length; i++) {
      ensesertliği[i].style.color = "black";
    }
  }
}
function sürekliağlama(){
  let sürekliağlama = document.getElementsByClassName("sürekliağlama");
  let sürekliağlamaCheckbox = document.getElementById("sürekliağlama");
  if(sürekliağlamaCheckbox.checked){
    for (var i = 0; i < sürekliağlama.length; i++) {
      sürekliağlama[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < sürekliağlama.length; i++) {
      sürekliağlama[i].style.color = "black";
    }
  }
}
function fontanelbombeliği(){
  let fontanelbombeliği = document.getElementsByClassName("fontanelbombeliği");
  let fontanelbombeliğiCheckbox = document.getElementById("fontanelbombeliği");
  if(fontanelbombeliğiCheckbox.checked){
    for (var i = 0; i < fontanelbombeliği.length; i++) {
      fontanelbombeliği[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < fontanelbombeliği.length; i++) {
      fontanelbombeliği[i].style.color = "black";
    }
  }
}
function davranışdeğişikliği(){
  let davranışdeğişikliği = document.getElementsByClassName("davranışdeğişikliği");
  let davranışdeğişikliğiCheckbox = document.getElementById("davranışdeğişikliği");
  if(davranışdeğişikliğiCheckbox.checked){
    for (var i = 0; i < davranışdeğişikliği.length; i++) {
      davranışdeğişikliği[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < davranışdeğişikliği.length; i++) {
      davranışdeğişikliği[i].style.color = "black";
    }
  }
}
function bilinçkaybı(){
  let bilinçkaybı = document.getElementsByClassName("bilinçkaybı");
  let bilinçkaybıCheckbox = document.getElementById("bilinçkaybı");
  if(bilinçkaybıCheckbox.checked){
    for (var i = 0; i < bilinçkaybı.length; i++) {
      bilinçkaybı[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < bilinçkaybı.length; i++) {
      bilinçkaybı[i].style.color = "black";
    }
  }
}
function konuşmagüçlüğü(){
  let konuşmagüçlüğü = document.getElementsByClassName("konuşmagüçlüğü");
  let konuşmagüçlüğüCheckbox = document.getElementById("konuşmagüçlüğü");
  if(konuşmagüçlüğüCheckbox.checked){
    for (var i = 0; i < konuşmagüçlüğü.length; i++) {
      konuşmagüçlüğü[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < konuşmagüçlüğü.length; i++) {
      konuşmagüçlüğü[i].style.color = "black";
    }
  }
}
function kanlıgaita(){
  let kanlıgaita = document.getElementsByClassName("kanlıgaita");
  let kanlıgaitaCheckbox = document.getElementById("kanlıgaita");
  if(kanlıgaitaCheckbox.checked){
    for (var i = 0; i < kanlıgaita.length; i++) {
      kanlıgaita[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < kanlıgaita.length; i++) {
      kanlıgaita[i].style.color = "black";
    }
  }
}
function artirit(){
  let artirit = document.getElementsByClassName("artirit");
  let artiritCheckbox = document.getElementById("artirit");
  if(artiritCheckbox.checked){
    for (var i = 0; i < artirit.length; i++) {
      artirit[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < artirit.length; i++) {
      artirit[i].style.color = "black";
    }
  }
}
function eklemsertliği(){
  let eklemsertliği = document.getElementsByClassName("eklemsertliği");
  let eklemsertliğiCheckbox = document.getElementById("eklemsertliği");
  if(eklemsertliğiCheckbox.checked){
    for (var i = 0; i < eklemsertliği.length; i++) {
      eklemsertliği[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < eklemsertliği.length; i++) {
      eklemsertliği[i].style.color = "black";
    }
  }
}
function skrotumtutulumu(){
  let skrotumtutulumu = document.getElementsByClassName("skrotumtutulumu");
  let skrotumtutulumuCheckbox = document.getElementById("skrotumtutulumu");
  if(skrotumtutulumuCheckbox.checked){
    for (var i = 0; i < skrotumtutulumu.length; i++) {
      skrotumtutulumu[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < skrotumtutulumu.length; i++) {
      skrotumtutulumu[i].style.color = "black";
    }
  }
}
function kaskrampları(){
  let kaskrampları = document.getElementsByClassName("kaskrampları");
  let kaskramplarıCheckbox = document.getElementById("kaskrampları");
  if(kaskramplarıCheckbox.checked){
    for (var i = 0; i < kaskrampları.length; i++) {
      kaskrampları[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < kaskrampları.length; i++) {
      kaskrampları[i].style.color = "black";
    }
  }
}
function kırılgantırnak(){
  let kırılgantırnak = document.getElementsByClassName("kırılgantırnak");
  let kırılgantırnakCheckbox = document.getElementById("kırılgantırnak");
  if(kırılgantırnakCheckbox.checked){
    for (var i = 0; i < kırılgantırnak.length; i++) {
      kırılgantırnak[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < kırılgantırnak.length; i++) {
      kırılgantırnak[i].style.color = "black";
    }
  }
}
function kabasaç(){
  let kabasaç = document.getElementsByClassName("kabasaç");
  let kabasaçCheckbox = document.getElementById("kabasaç");
  if(kabasaçCheckbox.checked){
    for (var i = 0; i < kabasaç.length; i++) {
      kabasaç[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < kabasaç.length; i++) {
      kabasaç[i].style.color = "black";
    }
  }
}
function hafızakaybı(){
  let hafızakaybı = document.getElementsByClassName("hafızakaybı");
  let hafızakaybıCheckbox = document.getElementById("hafızakaybı");
  if(hafızakaybıCheckbox.checked){
    for (var i = 0; i < hafızakaybı.length; i++) {
      hafızakaybı[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < hafızakaybı.length; i++) {
      hafızakaybı[i].style.color = "black";
    }
  }
}
function depresyon(){
  let depresyon = document.getElementsByClassName("depresyon");
  let depresyonCheckbox = document.getElementById("depresyon");
  if(depresyonCheckbox.checked){
    for (var i = 0; i < depresyon.length; i++) {
      depresyon[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < depresyon.length; i++) {
      depresyon[i].style.color = "black";
    }
  }
}
function halüsinasyon(){
  let halüsinasyon = document.getElementsByClassName("halüsinasyon");
  let halüsinasyonCheckbox = document.getElementById("halüsinasyon");
  if(halüsinasyonCheckbox.checked){
    for (var i = 0; i < halüsinasyon.length; i++) {
      halüsinasyon[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < halüsinasyon.length; i++) {
      halüsinasyon[i].style.color = "black";
    }
  }
}
function laringospazm(){
  let laringospazm = document.getElementsByClassName("laringospazm");
  let laringospazmCheckbox = document.getElementById("laringospazm");
  if(laringospazmCheckbox.checked){
    for (var i = 0; i < laringospazm.length; i++) {
      laringospazm[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < laringospazm.length; i++) {
      laringospazm[i].style.color = "black";
    }
  }
}
function tetani(){
  let tetani = document.getElementsByClassName("tetani");
  let tetaniCheckbox = document.getElementById("tetani");
  if(tetaniCheckbox.checked){
    for (var i = 0; i < tetani.length; i++) {
      tetani[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < tetani.length; i++) {
      tetani[i].style.color = "black";
    }
  }
}
function aritmi(){
  let aritmi = document.getElementsByClassName("aritmi");
  let aritmiCheckbox = document.getElementById("aritmi");
  if(aritmiCheckbox.checked){
    for (var i = 0; i < aritmi.length; i++) {
      aritmi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < aritmi.length; i++) {
      aritmi[i].style.color = "black";
    }
  }
}
function wheezing(){
  let wheezing = document.getElementsByClassName("wheezing");
  let wheezingCheckbox = document.getElementById("wheezing");
  if(wheezingCheckbox.checked){
    for (var i = 0; i < wheezing.length; i++) {
      wheezing[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < wheezing.length; i++) {
      wheezing[i].style.color = "black";
    }
  }
}
function ortopne(){
  let ortopne = document.getElementsByClassName("ortopne");
  let ortopneCheckbox = document.getElementById("ortopne");
  if(ortopneCheckbox.checked){
    for (var i = 0; i < ortopne.length; i++) {
      ortopne[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < ortopne.length; i++) {
      ortopne[i].style.color = "black";
    }
  }
}
function burunakıntısı(){
  let burunakıntısı = document.getElementsByClassName("burunakıntısı");
  let burunakıntısıCheckbox = document.getElementById("burunakıntısı");
  if(burunakıntısıCheckbox.checked){
    for (var i = 0; i < burunakıntısı.length; i++) {
      burunakıntısı[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < burunakıntısı.length; i++) {
      burunakıntısı[i].style.color = "black";
    }
  }
}
function proteinüri(){
  let proteinüri = document.getElementsByClassName("proteinüri");
  let proteinüriCheckbox = document.getElementById("proteinüri");
  if(proteinüriCheckbox.checked){
    for (var i = 0; i < proteinüri.length; i++) {
      proteinüri[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < proteinüri.length; i++) {
      proteinüri[i].style.color = "black";
    }
  }
}
function hipoalbüminemi(){
  let hipoalbüminemi = document.getElementsByClassName("hipoalbüminemi");
  let hipoalbüminemiCheckbox = document.getElementById("hipoalbüminemi");
  if(hipoalbüminemiCheckbox.checked){
    for (var i = 0; i < hipoalbüminemi.length; i++) {
      hipoalbüminemi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < hipoalbüminemi.length; i++) {
      hipoalbüminemi[i].style.color = "black";
    }
  }
}
function hiperlipidemi(){
  let hiperlipidemi = document.getElementsByClassName("hiperlipidemi");
  let hiperlipidemiCheckbox = document.getElementById("hiperlipidemi");
  if(hiperlipidemiCheckbox.checked){
    for (var i = 0; i < hiperlipidemi.length; i++) {
      hiperlipidemi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < hiperlipidemi.length; i++) {
      hiperlipidemi[i].style.color = "black";
    }
  }
}
function köpüksüidrar(){
  let köpüksüidrar = document.getElementsByClassName("köpüksüidrar");
  let köpüksüidrarCheckbox = document.getElementById("köpüksüidrar");
  if(köpüksüidrarCheckbox.checked){
    for (var i = 0; i < köpüksüidrar.length; i++) {
      köpüksüidrar[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < köpüksüidrar.length; i++) {
      köpüksüidrar[i].style.color = "black";
    }
  }
}
function venlerdegenişleme(){
  let venlerdegenişleme = document.getElementsByClassName("venlerdegenişleme");
  let venlerdegenişlemeCheckbox = document.getElementById("venlerdegenişleme");
  if(venlerdegenişlemeCheckbox.checked){
    for (var i = 0; i < venlerdegenişleme.length; i++) {
      venlerdegenişleme[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < venlerdegenişleme.length; i++) {
      venlerdegenişleme[i].style.color = "black";
    }
  }
}
function subkutanözamfizem(){
  let subkutanözamfizem = document.getElementsByClassName("subkutanözamfizem");
  let subkutanözamfizemCheckbox = document.getElementById("subkutanözamfizem");
  if(subkutanözamfizemCheckbox.checked){
    for (var i = 0; i < subkutanözamfizem.length; i++) {
      subkutanözamfizem[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < subkutanözamfizem.length; i++) {
      subkutanözamfizem[i].style.color = "black";
    }
  }
}
function plevralefüzyonsemptom(){
  let plevralefüzyonsemptom = document.getElementsByClassName("plevralefüzyonsemptom");
  let plevralefüzyonsemptomCheckbox = document.getElementById("plevralefüzyonsemptom");
  if(plevralefüzyonsemptomCheckbox.checked){
    for (var i = 0; i < plevralefüzyonsemptom.length; i++) {
      plevralefüzyonsemptom[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < plevralefüzyonsemptom.length; i++) {
      plevralefüzyonsemptom[i].style.color = "black";
    }
  }
}
function kalpyetmezliği(){
  let kalpyetmezliği = document.getElementsByClassName("kalpyetmezliği");
  let kalpyetmezliğiCheckbox = document.getElementById("kalpyetmezliği");
  if(kalpyetmezliğiCheckbox.checked){
    for (var i = 0; i < kalpyetmezliği.length; i++) {
      kalpyetmezliği[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < kalpyetmezliği.length; i++) {
      kalpyetmezliği[i].style.color = "black";
    }
  }
}
function cilttesolukluk(){
  let cilttesolukluk = document.getElementsByClassName("cilttesolukluk");
  let cilttesoluklukCheckbox = document.getElementById("cilttesolukluk");
  if(cilttesoluklukCheckbox.checked){
    for (var i = 0; i < cilttesolukluk.length; i++) {
      cilttesolukluk[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < cilttesolukluk.length; i++) {
      cilttesolukluk[i].style.color = "black";
    }
  }
}
function elayaküşüme(){
  let elayaküşüme = document.getElementsByClassName("elayaküşüme");
  let elayaküşümeCheckbox = document.getElementById("elayaküşüme");
  if(elayaküşümeCheckbox.checked){
    for (var i = 0; i < elayaküşüme.length; i++) {
      elayaküşüme[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < elayaküşüme.length; i++) {
      elayaküşüme[i].style.color = "black";
    }
  }
}
function pika(){
  let pika = document.getElementsByClassName("pika");
  let pikaCheckbox = document.getElementById("pika");
  if(pikaCheckbox.checked){
    for (var i = 0; i < pika.length; i++) {
      pika[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < pika.length; i++) {
      pika[i].style.color = "black";
    }
  }
}
function glossit(){
  let glossit = document.getElementsByClassName("glossit");
  let glossitCheckbox = document.getElementById("glossit");
  if(glossitCheckbox.checked){
    for (var i = 0; i < glossit.length; i++) {
      glossit[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < glossit.length; i++) {
      glossit[i].style.color = "black";
    }
  }
}
function kemikdeformiteleri(){
  let kemikdeformiteleri = document.getElementsByClassName("kemikdeformiteleri");
  let kemikdeformiteleriCheckbox = document.getElementById("kemikdeformiteleri");
  if(kemikdeformiteleriCheckbox.checked){
    for (var i = 0; i < kemikdeformiteleri.length; i++) {
      kemikdeformiteleri[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < kemikdeformiteleri.length; i++) {
      kemikdeformiteleri[i].style.color = "black";
    }
  }
}
function kelebekraş(){
  let kelebekraş = document.getElementsByClassName("kelebekraş");
  let kelebekraşCheckbox = document.getElementById("kelebekraş");
  if(kelebekraşCheckbox.checked){
    for (var i = 0; i < kelebekraş.length; i++) {
      kelebekraş[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < kelebekraş.length; i++) {
      kelebekraş[i].style.color = "black";
    }
  }
}
function gözdekuruma(){
  let gözdekuruma = document.getElementsByClassName("gözdekuruma");
  let gözdekurumaCheckbox = document.getElementById("gözdekuruma");
  if(gözdekurumaCheckbox.checked){
    for (var i = 0; i < gözdekuruma.length; i++) {
      gözdekuruma[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < gözdekuruma.length; i++) {
      gözdekuruma[i].style.color = "black";
    }
  }
}
function ağızdakuruma(){
  let ağızdakuruma = document.getElementsByClassName("ağızdakuruma");
  let ağızdakurumaCheckbox = document.getElementById("ağızdakuruma");
  if(ağızdakurumaCheckbox.checked){
    for (var i = 0; i < ağızdakuruma.length; i++) {
      ağızdakuruma[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < ağızdakuruma.length; i++) {
      ağızdakuruma[i].style.color = "black";
    }
  }
}
function tükürükbezişişmesi(){
  let tükürükbezişişmesi = document.getElementsByClassName("tükürükbezişişmesi");
  let tükürükbezişişmesiCheckbox = document.getElementById("tükürükbezişişmesi");
  if(tükürükbezişişmesiCheckbox.checked){
    for (var i = 0; i < tükürükbezişişmesi.length; i++) {
      tükürükbezişişmesi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < tükürükbezişişmesi.length; i++) {
      tükürükbezişişmesi[i].style.color = "black";
    }
  }
}
function vajinadakuruma(){
  let vajinadakuruma = document.getElementsByClassName("vajinadakuruma");
  let vajinadakurumaCheckbox = document.getElementById("vajinadakuruma");
  if(vajinadakurumaCheckbox.checked){
    for (var i = 0; i < vajinadakuruma.length; i++) {
      vajinadakuruma[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < vajinadakuruma.length; i++) {
      vajinadakuruma[i].style.color = "black";
    }
  }
}
function kuruöksürük(){
  let kuruöksürük = document.getElementsByClassName("kuruöksürük");
  let kuruöksürükCheckbox = document.getElementById("kuruöksürük");
  if(kuruöksürükCheckbox.checked){
    for (var i = 0; i < kuruöksürük.length; i++) {
      kuruöksürük[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < kuruöksürük.length; i++) {
      kuruöksürük[i].style.color = "black";
    }
  }
}
function yeleboyun(){
  let yeleboyun = document.getElementsByClassName("yeleboyun");
  let yeleboyunCheckbox = document.getElementById("yeleboyun");
  if(yeleboyunCheckbox.checked){
    for (var i = 0; i < yeleboyun.length; i++) {
      yeleboyun[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < yeleboyun.length; i++) {
      yeleboyun[i].style.color = "black";
    }
  }
}
function amenore(){
  let amenore = document.getElementsByClassName("amenore");
  let amenoreCheckbox = document.getElementById("amenore");
  if(amenoreCheckbox.checked){
    for (var i = 0; i < amenore.length; i++) {
      amenore[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < amenore.length; i++) {
      amenore[i].style.color = "black";
    }
  }
}
function genişgöğüs(){
  let genişgöğüs = document.getElementsByClassName("genişgöğüs");
  let genişgöğüsCheckbox = document.getElementById("genişgöğüs");
  if(genişgöğüsCheckbox.checked){
    for (var i = 0; i < genişgöğüs.length; i++) {
      genişgöğüs[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < genişgöğüs.length; i++) {
      genişgöğüs[i].style.color = "black";
    }
  }
}
function koilonişi(){
  let koilonişi = document.getElementsByClassName("koilonişi");
  let koilonişiCheckbox = document.getElementById("koilonişi");
  if(koilonişiCheckbox.checked){
    for (var i = 0; i < koilonişi.length; i++) {
      koilonişi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < koilonişi.length; i++) {
      koilonişi[i].style.color = "black";
    }
  }
}
function düşükensesaççizgisi(){
  let düşükensesaççizgisi = document.getElementsByClassName("düşükensesaççizgisi");
  let düşükensesaççizgisiCheckbox = document.getElementById("düşükensesaççizgisi");
  if(düşükensesaççizgisiCheckbox.checked){
    for (var i = 0; i < düşükensesaççizgisi.length; i++) {
      düşükensesaççizgisi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < düşükensesaççizgisi.length; i++) {
      düşükensesaççizgisi[i].style.color = "black";
    }
  }
}
function artmışben(){
  let artmışben = document.getElementsByClassName("artmışben");
  let artmışbenCheckbox = document.getElementById("artmışben");
  if(artmışbenCheckbox.checked){
    for (var i = 0; i < artmışben.length; i++) {
      artmışben[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < artmışben.length; i++) {
      artmışben[i].style.color = "black";
    }
  }
}
function brakidaktili(){
  let brakidaktili = document.getElementsByClassName("brakidaktili");
  let brakidaktiliCheckbox = document.getElementById("brakidaktili");
  if(brakidaktiliCheckbox.checked){
    for (var i = 0; i < brakidaktili.length; i++) {
      brakidaktili[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < brakidaktili.length; i++) {
      brakidaktili[i].style.color = "black";
    }
  }
}
function ayrıkmemebaşı(){
  let ayrıkmemebaşı = document.getElementsByClassName("ayrıkmemebaşı");
  let ayrıkmemebaşıCheckbox = document.getElementById("ayrıkmemebaşı");
  if(ayrıkmemebaşıCheckbox.checked){
    for (var i = 0; i < ayrıkmemebaşı.length; i++) {
      ayrıkmemebaşı[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < ayrıkmemebaşı.length; i++) {
      ayrıkmemebaşı[i].style.color = "black";
    }
  }
}
function kistikhigroma(){
  let kistikhigroma = document.getElementsByClassName("kistikhigroma");
  let kistikhigromaCheckbox = document.getElementById("kistikhigroma");
  if(kistikhigromaCheckbox.checked){
    for (var i = 0; i < kistikhigroma.length; i++) {
      kistikhigroma[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < kistikhigroma.length; i++) {
      kistikhigroma[i].style.color = "black";
    }
  }
}
function penisteyara(){
  let penisteyara = document.getElementsByClassName("penisteyara");
  let penisteyaraCheckbox = document.getElementById("penisteyara");
  if(penisteyaraCheckbox.checked){
    for (var i = 0; i < penisteyara.length; i++) {
      penisteyara[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < penisteyara.length; i++) {
      penisteyara[i].style.color = "black";
    }
  }
}
function vajinadayara(){
  let vajinadayara = document.getElementsByClassName("vajinadayara");
  let vajinadayaraCheckbox = document.getElementById("vajinadayara");
  if(vajinadayaraCheckbox.checked){
    for (var i = 0; i < vajinadayara.length; i++) {
      vajinadayara[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < vajinadayara.length; i++) {
      vajinadayara[i].style.color = "black";
    }
  }
}
function anüsteyara(){
  let anüsteyara = document.getElementsByClassName("anüsteyara");
  let anüsteyaraCheckbox = document.getElementById("anüsteyara");
  if(anüsteyaraCheckbox.checked){
    for (var i = 0; i < anüsteyara.length; i++) {
      anüsteyara[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < anüsteyara.length; i++) {
      anüsteyara[i].style.color = "black";
    }
  }
}
function ağızdayara(){
  let ağızdayara = document.getElementsByClassName("ağızdayara");
  let ağızdayaraCheckbox = document.getElementById("ağızdayara");
  if(ağızdayaraCheckbox.checked){
    for (var i = 0; i < ağızdayara.length; i++) {
      ağızdayara[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < ağızdayara.length; i++) {
      ağızdayara[i].style.color = "black";
    }
  }
}
function dudaktayara(){
  let dudaktayara = document.getElementsByClassName("dudaktayara");
  let dudaktayaraCheckbox = document.getElementById("dudaktayara");
  if(dudaktayaraCheckbox.checked){
    for (var i = 0; i < dudaktayara.length; i++) {
      dudaktayara[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < dudaktayara.length; i++) {
      dudaktayara[i].style.color = "black";
    }
  }
}
function ellerdeyara(){
  let ellerdeyara = document.getElementsByClassName("ellerdeyara");
  let ellerdeyaraCheckbox = document.getElementById("ellerdeyara");
  if(ellerdeyaraCheckbox.checked){
    for (var i = 0; i < ellerdeyara.length; i++) {
      ellerdeyara[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < ellerdeyara.length; i++) {
      ellerdeyara[i].style.color = "black";
    }
  }
}
function penistesiğil(){
  let penistesiğil = document.getElementsByClassName("penistesiğil");
  let penistesiğilCheckbox = document.getElementById("penistesiğil");
  if(penistesiğilCheckbox.checked){
    for (var i = 0; i < penistesiğil.length; i++) {
      penistesiğil[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < penistesiğil.length; i++) {
      penistesiğil[i].style.color = "black";
    }
  }
}
function vajinadasiğil(){
  let vajinadasiğil = document.getElementsByClassName("vajinadasiğil");
  let vajinadasiğilCheckbox = document.getElementById("vajinadasiğil");
  if(vajinadasiğilCheckbox.checked){
    for (var i = 0; i < vajinadasiğil.length; i++) {
      vajinadasiğil[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < vajinadasiğil.length; i++) {
      vajinadasiğil[i].style.color = "black";
    }
  }
}
function anüstesiğil(){
  let anüstesiğil = document.getElementsByClassName("anüstesiğil");
  let anüstesiğilCheckbox = document.getElementById("anüstesiğil");
  if(anüstesiğilCheckbox.checked){
    for (var i = 0; i < anüstesiğil.length; i++) {
      anüstesiğil[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < anüstesiğil.length; i++) {
      anüstesiğil[i].style.color = "black";
    }
  }
}
function palmareritem(){
  let palmareritem = document.getElementsByClassName("palmareritem");
  let palmareritemCheckbox = document.getElementById("palmareritem");
  if(palmareritemCheckbox.checked){
    for (var i = 0; i < palmareritem.length; i++) {
      palmareritem[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < palmareritem.length; i++) {
      palmareritem[i].style.color = "black";
    }
  }
}
function plantareritem(){
  let plantareritem = document.getElementsByClassName("plantareritem");
  let plantareritemCheckbox = document.getElementById("plantareritem");
  if(plantareritemCheckbox.checked){
    for (var i = 0; i < plantareritem.length; i++) {
      plantareritem[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < plantareritem.length; i++) {
      plantareritem[i].style.color = "black";
    }
  }
}
function ağızdabeyazyama(){
  let ağızdabeyazyama = document.getElementsByClassName("ağızdabeyazyama");
  let ağızdabeyazyamaCheckbox = document.getElementById("ağızdabeyazyama");
  if(ağızdabeyazyamaCheckbox.checked){
    for (var i = 0; i < ağızdabeyazyama.length; i++) {
      ağızdabeyazyama[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < ağızdabeyazyama.length; i++) {
      ağızdabeyazyama[i].style.color = "black";
    }
  }
}
function alopesi(){
  let alopesi = document.getElementsByClassName("alopesi");
  let alopesiCheckbox = document.getElementById("alopesi");
  if(alopesiCheckbox.checked){
    for (var i = 0; i < alopesi.length; i++) {
      alopesi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < alopesi.length; i++) {
      alopesi[i].style.color = "black";
    }
  }
}
function nodül(){
  let nodül = document.getElementsByClassName("nodül");
  let nodülCheckbox = document.getElementById("nodül");
  if(nodülCheckbox.checked){
    for (var i = 0; i < nodül.length; i++) {
      nodül[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < nodül.length; i++) {
      nodül[i].style.color = "black";
    }
  }
}
function kalpteüfürüm(){
  let kalpteüfürüm = document.getElementsByClassName("kalpteüfürüm");
  let kalpteüfürümCheckbox = document.getElementById("kalpteüfürüm");
  if(kalpteüfürümCheckbox.checked){
    for (var i = 0; i < kalpteüfürüm.length; i++) {
      kalpteüfürüm[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < kalpteüfürüm.length; i++) {
      kalpteüfürüm[i].style.color = "black";
    }
  }
}
function peteşipurpuraekimoz(){
  let peteşipurpuraekimoz = document.getElementsByClassName("peteşipurpuraekimoz");
  let peteşipurpuraekimozCheckbox = document.getElementById("peteşipurpuraekimoz");
  if(peteşipurpuraekimozCheckbox.checked){
    for (var i = 0; i < peteşipurpuraekimoz.length; i++) {
      peteşipurpuraekimoz[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < peteşipurpuraekimoz.length; i++) {
      peteşipurpuraekimoz[i].style.color = "black";
    }
  }
}
function ascites(){
  let ascites = document.getElementsByClassName("ascites");
  let ascitesCheckbox = document.getElementById("ascites");
  if(ascitesCheckbox.checked){
    for (var i = 0; i < ascites.length; i++) {
      ascites[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < ascites.length; i++) {
      ascites[i].style.color = "black";
    }
  }
}
function pubertedegecikme(){
  let pubertedegecikme = document.getElementsByClassName("pubertedegecikme");
  let pubertedegecikmeCheckbox = document.getElementById("pubertedegecikme");
  if(pubertedegecikmeCheckbox.checked){
    for (var i = 0; i < pubertedegecikme.length; i++) {
      pubertedegecikme[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < pubertedegecikme.length; i++) {
      pubertedegecikme[i].style.color = "black";
    }
  }
}
function etbeni(){
  let etbeni = document.getElementsByClassName("etbeni");
  let etbeniCheckbox = document.getElementById("etbeni");
  if(etbeniCheckbox.checked){
    for (var i = 0; i < etbeni.length; i++) {
      etbeni[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < etbeni.length; i++) {
      etbeni[i].style.color = "black";
    }
  }
}
function kötükokuludışkı(){
  let kötükokuludışkı = document.getElementsByClassName("kötükokuludışkı");
  let kötükokuludışkıCheckbox = document.getElementById("kötükokuludışkı");
  if(kötükokuludışkıCheckbox.checked){
    for (var i = 0; i < kötükokuludışkı.length; i++) {
      kötükokuludışkı[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < kötükokuludışkı.length; i++) {
      kötükokuludışkı[i].style.color = "black";
    }
  }
}
function akantozisnigrikans(){
  let akantozisnigrikans = document.getElementsByClassName("akantozisnigrikans");
  let akantozisnigrikansCheckbox = document.getElementById("akantozisnigrikans");
  if(akantozisnigrikansCheckbox.checked){
    for (var i = 0; i < akantozisnigrikans.length; i++) {
      akantozisnigrikans[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < akantozisnigrikans.length; i++) {
      akantozisnigrikans[i].style.color = "black";
    }
  }
}
function spidernevi(){
  let spidernevi = document.getElementsByClassName("spidernevi");
  let spiderneviCheckbox = document.getElementById("spidernevi");
  if(spiderneviCheckbox.checked){
    for (var i = 0; i < spidernevi.length; i++) {
      spidernevi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < spidernevi.length; i++) {
      spidernevi[i].style.color = "black";
    }
  }
}
function lökonişi(){
  let lökonişi = document.getElementsByClassName("lökonişi");
  let lökonişiCheckbox = document.getElementById("lökonişi");
  if(lökonişiCheckbox.checked){
    for (var i = 0; i < lökonişi.length; i++) {
      lökonişi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < lökonişi.length; i++) {
      lökonişi[i].style.color = "black";
    }
  }
}
function çomakparmak(){
  let çomakparmak = document.getElementsByClassName("çomakparmak");
  let çomakparmakCheckbox = document.getElementById("çomakparmak");
  if(çomakparmakCheckbox.checked){
    for (var i = 0; i < çomakparmak.length; i++) {
      çomakparmak[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < çomakparmak.length; i++) {
      çomakparmak[i].style.color = "black";
    }
  }
}
function jinekomasti(){
  let jinekomasti = document.getElementsByClassName("jinekomasti");
  let jinekomastiCheckbox = document.getElementById("jinekomasti");
  if(jinekomastiCheckbox.checked){
    for (var i = 0; i < jinekomasti.length; i++) {
      jinekomasti[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < jinekomasti.length; i++) {
      jinekomasti[i].style.color = "black";
    }
  }
}
function testisbüzüşmesi(){
  let testisbüzüşmesi = document.getElementsByClassName("testisbüzüşmesi");
  let testisbüzüşmesiCheckbox = document.getElementById("testisbüzüşmesi");
  if(testisbüzüşmesiCheckbox.checked){
    for (var i = 0; i < testisbüzüşmesi.length; i++) {
      testisbüzüşmesi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < testisbüzüşmesi.length; i++) {
      testisbüzüşmesi[i].style.color = "black";
    }
  }
}
function tenesmus(){
  let tenesmus = document.getElementsByClassName("tenesmus");
  let tenesmusCheckbox = document.getElementById("tenesmus");
  if(tenesmusCheckbox.checked){
    for (var i = 0; i < tenesmus.length; i++) {
      tenesmus[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < tenesmus.length; i++) {
      tenesmus[i].style.color = "black";
    }
  }
}
function rektalağrı(){
  let rektalağrı = document.getElementsByClassName("rektalağrı");
  let rektalağrıCheckbox = document.getElementById("rektalağrı");
  if(rektalağrıCheckbox.checked){
    for (var i = 0; i < rektalağrı.length; i++) {
      rektalağrı[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < rektalağrı.length; i++) {
      rektalağrı[i].style.color = "black";
    }
  }
}
function fistül(){
  let fistül = document.getElementsByClassName("fistül");
  let fistülCheckbox = document.getElementById("fistül");
  if(fistülCheckbox.checked){
    for (var i = 0; i < fistül.length; i++) {
      fistül[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < fistül.length; i++) {
      fistül[i].style.color = "black";
    }
  }
}
function böbrektaşı(){
  let böbrektaşı = document.getElementsByClassName("böbrektaşı");
  let böbrektaşıCheckbox = document.getElementById("böbrektaşı");
  if(böbrektaşıCheckbox.checked){
    for (var i = 0; i < böbrektaşı.length; i++) {
      böbrektaşı[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < böbrektaşı.length; i++) {
      böbrektaşı[i].style.color = "black";
    }
  }
}
function deasemptom(){
  let deasemptom = document.getElementsByClassName("deasemptom");
  let deasemptomCheckbox = document.getElementById("deasemptom");
  if(deasemptomCheckbox.checked){
    for (var i = 0; i < deasemptom.length; i++) {
      deasemptom[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < deasemptom.length; i++) {
      deasemptom[i].style.color = "black";
    }
  }
}
function kolanjit(){
  let kolanjit = document.getElementsByClassName("kolanjit");
  let kolanjitCheckbox = document.getElementById("kolanjit");
  if(kolanjitCheckbox.checked){
    for (var i = 0; i < kolanjit.length; i++) {
      kolanjit[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < kolanjit.length; i++) {
      kolanjit[i].style.color = "black";
    }
  }
}
function karaciğerinflamasyonu(){
  let karaciğerinflamasyonu = document.getElementsByClassName("karaciğerinflamasyonu");
  let karaciğerinflamasyonuCheckbox = document.getElementById("karaciğerinflamasyonu");
  if(karaciğerinflamasyonuCheckbox.checked){
    for (var i = 0; i < karaciğerinflamasyonu.length; i++) {
      karaciğerinflamasyonu[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < karaciğerinflamasyonu.length; i++) {
      karaciğerinflamasyonu[i].style.color = "black";
    }
  }
}
function sağaltkadranağrısı(){
  let sağaltkadranağrısı = document.getElementsByClassName("sağaltkadranağrısı");
  let sağaltkadranağrısıCheckbox = document.getElementById("sağaltkadranağrısı");
  if(sağaltkadranağrısıCheckbox.checked){
    for (var i = 0; i < sağaltkadranağrısı.length; i++) {
      sağaltkadranağrısı[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < sağaltkadranağrısı.length; i++) {
      sağaltkadranağrısı[i].style.color = "black";
    }
  }
}
function noktüri(){
  let noktüri = document.getElementsByClassName("noktüri");
  let noktüriCheckbox = document.getElementById("noktüri");
  if(noktüriCheckbox.checked){
    for (var i = 0; i < noktüri.length; i++) {
      noktüri[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < noktüri.length; i++) {
      noktüri[i].style.color = "black";
    }
  }
}
function mideekşimesi(){
  let mideekşimesi = document.getElementsByClassName("mideekşimesi");
  let mideekşimesiCheckbox = document.getElementById("mideekşimesi");
  if(mideekşimesiCheckbox.checked){
    for (var i = 0; i < mideekşimesi.length; i++) {
      mideekşimesi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < mideekşimesi.length; i++) {
      mideekşimesi[i].style.color = "black";
    }
  }
}
function qtkısalması(){
  let qtkısalması = document.getElementsByClassName("qtkısalması");
  let qtkısalmasıCheckbox = document.getElementById("qtkısalması");
  if(qtkısalmasıCheckbox.checked){
    for (var i = 0; i < qtkısalması.length; i++) {
      qtkısalması[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < qtkısalması.length; i++) {
      qtkısalması[i].style.color = "black";
    }
  }
}
function dişgelişimbozukluğu(){
  let dişgelişimbozukluğu = document.getElementsByClassName("dişgelişimbozukluğu");
  let dişgelişimbozukluğuCheckbox = document.getElementById("dişgelişimbozukluğu");
  if(dişgelişimbozukluğuCheckbox.checked){
    for (var i = 0; i < dişgelişimbozukluğu.length; i++) {
      dişgelişimbozukluğu[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < dişgelişimbozukluğu.length; i++) {
      dişgelişimbozukluğu[i].style.color = "black";
    }
  }
}
function katarakt(){
  let katarakt = document.getElementsByClassName("katarakt");
  let kataraktCheckbox = document.getElementById("katarakt");
  if(kataraktCheckbox.checked){
    for (var i = 0; i < katarakt.length; i++) {
      katarakt[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < katarakt.length; i++) {
      katarakt[i].style.color = "black";
    }
  }
}
function qtuzaması(){
  let qtuzaması = document.getElementsByClassName("qtuzaması");
  let qtuzamasıCheckbox = document.getElementById("qtuzaması");
  if(qtuzamasıCheckbox.checked){
    for (var i = 0; i < qtuzaması.length; i++) {
      qtuzaması[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < qtuzaması.length; i++) {
      qtuzaması[i].style.color = "black";
    }
  }
}
function stuzaması(){
  let stuzaması = document.getElementsByClassName("stuzaması");
  let stuzamasıCheckbox = document.getElementById("stuzaması");
  if(stuzamasıCheckbox.checked){
    for (var i = 0; i < stuzaması.length; i++) {
      stuzaması[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < stuzaması.length; i++) {
      stuzaması[i].style.color = "black";
    }
  }
}
function candidiasis(){
  let candidiasis = document.getElementsByClassName("candidiasis");
  let candidiasisCheckbox = document.getElementById("candidiasis");
  if(candidiasisCheckbox.checked){
    for (var i = 0; i < candidiasis.length; i++) {
      candidiasis[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < candidiasis.length; i++) {
      candidiasis[i].style.color = "black";
    }
  }
}
function apati(){
  let apati = document.getElementsByClassName("apati");
  let apatiCheckbox = document.getElementById("apati");
  if(apatiCheckbox.checked){
    for (var i = 0; i < apati.length; i++) {
      apati[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < apati.length; i++) {
      apati[i].style.color = "black";
    }
  }
}
function hematemez(){
  let hematemez = document.getElementsByClassName("hematemez");
  let hematemezCheckbox = document.getElementById("hematemez");
  if(hematemezCheckbox.checked){
    for (var i = 0; i < hematemez.length; i++) {
      hematemez[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < hematemez.length; i++) {
      hematemez[i].style.color = "black";
    }
  }
}
function melena(){
  let melena = document.getElementsByClassName("melena");
  let melenaCheckbox = document.getElementById("melena");
  if(melenaCheckbox.checked){
    for (var i = 0; i < melena.length; i++) {
      melena[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < melena.length; i++) {
      melena[i].style.color = "black";
    }
  }
}
function hiperglisemi(){
  let hiperglisemi = document.getElementsByClassName("hiperglisemi");
  let hiperglisemiCheckbox = document.getElementById("hiperglisemi");
  if(hiperglisemiCheckbox.checked){
    for (var i = 0; i < hiperglisemi.length; i++) {
      hiperglisemi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < hiperglisemi.length; i++) {
      hiperglisemi[i].style.color = "black";
    }
  }
}
function tromboflebit(){
  let tromboflebit = document.getElementsByClassName("tromboflebit");
  let tromboflebitCheckbox = document.getElementById("tromboflebit");
  if(tromboflebitCheckbox.checked){
    for (var i = 0; i < tromboflebit.length; i++) {
      tromboflebit[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < tromboflebit.length; i++) {
      tromboflebit[i].style.color = "black";
    }
  }
}
function oligüri(){
  let oligüri = document.getElementsByClassName("oligüri");
  let oligüriCheckbox = document.getElementById("oligüri");
  if(oligüriCheckbox.checked){
    for (var i = 0; i < oligüri.length; i++) {
      oligüri[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < oligüri.length; i++) {
      oligüri[i].style.color = "black";
    }
  }
}
function dizüri(){
  let dizüri = document.getElementsByClassName("dizüri");
  let dizüriCheckbox = document.getElementById("dizüri");
  if(dizüriCheckbox.checked){
    for (var i = 0; i < dizüri.length; i++) {
      dizüri[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < dizüri.length; i++) {
      dizüri[i].style.color = "black";
    }
  }
}
function yanağrısı(){
  let yanağrısı = document.getElementsByClassName("yanağrısı");
  let yanağrısıCheckbox = document.getElementById("yanağrısı");
  if(yanağrısıCheckbox.checked){
    for (var i = 0; i < yanağrısı.length; i++) {
      yanağrısı[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < yanağrısı.length; i++) {
      yanağrısı[i].style.color = "black";
    }
  }
}
function hipertansyon(){
  let hipertansyon = document.getElementsByClassName("hipertansyon");
  let hipertansyonCheckbox = document.getElementById("hipertansyon");
  if(hipertansyonCheckbox.checked){
    for (var i = 0; i < hipertansyon.length; i++) {
      hipertansyon[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < hipertansyon.length; i++) {
      hipertansyon[i].style.color = "black";
    }
  }
}
function erkendoygunlukhissi(){
  let erkendoygunlukhissi = document.getElementsByClassName("erkendoygunlukhissi");
  let erkendoygunlukhissiCheckbox = document.getElementById("erkendoygunlukhissi");
  if(erkendoygunlukhissiCheckbox.checked){
    for (var i = 0; i < erkendoygunlukhissi.length; i++) {
      erkendoygunlukhissi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < erkendoygunlukhissi.length; i++) {
      erkendoygunlukhissi[i].style.color = "black";
    }
  }
}
function geğirme(){
  let geğirme = document.getElementsByClassName("geğirme");
  let geğirmeCheckbox = document.getElementById("geğirme");
  if(geğirmeCheckbox.checked){
    for (var i = 0; i < geğirme.length; i++) {
      geğirme[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < geğirme.length; i++) {
      geğirme[i].style.color = "black";
    }
  }
}
function hematokezya(){
  let hematokezya = document.getElementsByClassName("hematokezya");
  let hematokezyaCheckbox = document.getElementById("hematokezya");
  if(hematokezyaCheckbox.checked){
    for (var i = 0; i < hematokezya.length; i++) {
      hematokezya[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < hematokezya.length; i++) {
      hematokezya[i].style.color = "black";
    }
  }
}
function akne(){
  let akne = document.getElementsByClassName("akne");
  let akneCheckbox = document.getElementById("akne");
  if(akneCheckbox.checked){
    for (var i = 0; i < akne.length; i++) {
      akne[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < akne.length; i++) {
      akne[i].style.color = "black";
    }
  }
}
function eklemdeşişlik(){
  let eklemdeşişlik = document.getElementsByClassName("eklemdeşişlik");
  let eklemdeşişlikCheckbox = document.getElementById("eklemdeşişlik");
  if(eklemdeşişlikCheckbox.checked){
    for (var i = 0; i < eklemdeşişlik.length; i++) {
      eklemdeşişlik[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < eklemdeşişlik.length; i++) {
      eklemdeşişlik[i].style.color = "black";
    }
  }
}
function irregülermenstürasyon(){
  let irregülermenstürasyon = document.getElementsByClassName("irregülermenstürasyon");
  let irregülermenstürasyonCheckbox = document.getElementById("irregülermenstürasyon");
  if(irregülermenstürasyonCheckbox.checked){
    for (var i = 0; i < irregülermenstürasyon.length; i++) {
      irregülermenstürasyon[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < irregülermenstürasyon.length; i++) {
      irregülermenstürasyon[i].style.color = "black";
    }
  }
}
function ağrılıilişki(){
  let ağrılıilişki = document.getElementsByClassName("ağrılıilişki");
  let ağrılıilişkiCheckbox = document.getElementById("ağrılıilişki");
  if(ağrılıilişkiCheckbox.checked){
    for (var i = 0; i < ağrılıilişki.length; i++) {
      ağrılıilişki[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < ağrılıilişki.length; i++) {
      ağrılıilişki[i].style.color = "black";
    }
  }
}
function virilizasyon(){
  let virilizasyon = document.getElementsByClassName("virilizasyon");
  let virilizasyonCheckbox = document.getElementById("virilizasyon");
  if(virilizasyonCheckbox.checked){
    for (var i = 0; i < virilizasyon.length; i++) {
      virilizasyon[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < virilizasyon.length; i++) {
      virilizasyon[i].style.color = "black";
    }
  }
}
function erektildisfonksyon(){
  let erektildisfonksyon = document.getElementsByClassName("erektildisfonksyon");
  let erektildisfonksyonCheckbox = document.getElementById("erektildisfonksyon");
  if(erektildisfonksyonCheckbox.checked){
    for (var i = 0; i < erektildisfonksyon.length; i++) {
      erektildisfonksyon[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < erektildisfonksyon.length; i++) {
      erektildisfonksyon[i].style.color = "black";
    }
  }
}
function galaktore(){
  let galaktore = document.getElementsByClassName("galaktore");
  let galaktoreCheckbox = document.getElementById("galaktore");
  if(galaktoreCheckbox.checked){
    for (var i = 0; i < galaktore.length; i++) {
      galaktore[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < galaktore.length; i++) {
      galaktore[i].style.color = "black";
    }
  }
}
function kasküçülmesi(){
  let kasküçülmesi = document.getElementsByClassName("kasküçülmesi");
  let kasküçülmesiCheckbox = document.getElementById("kasküçülmesi");
  if(kasküçülmesiCheckbox.checked){
    for (var i = 0; i < kasküçülmesi.length; i++) {
      kasküçülmesi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < kasküçülmesi.length; i++) {
      kasküçülmesi[i].style.color = "black";
    }
  }
}
function osteoporoz(){
  let osteoporoz = document.getElementsByClassName("osteoporoz");
  let osteoporozCheckbox = document.getElementById("osteoporoz");
  if(osteoporozCheckbox.checked){
    for (var i = 0; i < osteoporoz.length; i++) {
      osteoporoz[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < osteoporoz.length; i++) {
      osteoporoz[i].style.color = "black";
    }
  }
}
function libidokaybı(){
  let libidokaybı = document.getElementsByClassName("libidokaybı");
  let libidokaybıCheckbox = document.getElementById("libidokaybı");
  if(libidokaybıCheckbox.checked){
    for (var i = 0; i < libidokaybı.length; i++) {
      libidokaybı[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < libidokaybı.length; i++) {
      libidokaybı[i].style.color = "black";
    }
  }
}
function cilttekabalaşma(){
  let cilttekabalaşma = document.getElementsByClassName("cilttekabalaşma");
  let cilttekabalaşmaCheckbox = document.getElementById("cilttekabalaşma");
  if(cilttekabalaşmaCheckbox.checked){
    for (var i = 0; i < cilttekabalaşma.length; i++) {
      cilttekabalaşma[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < cilttekabalaşma.length; i++) {
      cilttekabalaşma[i].style.color = "black";
    }
  }
}
function periorbitalödem(){
  let periorbitalödem = document.getElementsByClassName("periorbitalödem");
  let periorbitalödemCheckbox = document.getElementById("periorbitalödem");
  if(periorbitalödemCheckbox.checked){
    for (var i = 0; i < periorbitalödem.length; i++) {
      periorbitalödem[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < periorbitalödem.length; i++) {
      periorbitalödem[i].style.color = "black";
    }
  }
}
function dildekalınlaşma(){
  let dildekalınlaşma = document.getElementsByClassName("dildekalınlaşma");
  let dildekalınlaşmaCheckbox = document.getElementById("dildekalınlaşma");
  if(dildekalınlaşmaCheckbox.checked){
    for (var i = 0; i < dildekalınlaşma.length; i++) {
      dildekalınlaşma[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < dildekalınlaşma.length; i++) {
      dildekalınlaşma[i].style.color = "black";
    }
  }
}
function yüzdeödem(){
  let yüzdeödem = document.getElementsByClassName("yüzdeödem");
  let yüzdeödemCheckbox = document.getElementById("yüzdeödem");
  if(yüzdeödemCheckbox.checked){
    for (var i = 0; i < yüzdeödem.length; i++) {
      yüzdeödem[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < yüzdeödem.length; i++) {
      yüzdeödem[i].style.color = "black";
    }
  }
}
function saçdökülmesi(){
  let saçdökülmesi = document.getElementsByClassName("saçdökülmesi");
  let saçdökülmesiCheckbox = document.getElementById("saçdökülmesi");
  if(saçdökülmesiCheckbox.checked){
    for (var i = 0; i < saçdökülmesi.length; i++) {
      saçdökülmesi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < saçdökülmesi.length; i++) {
      saçdökülmesi[i].style.color = "black";
    }
  }
}
function siyanoz(){
  let siyanoz = document.getElementsByClassName("siyanoz");
  let siyanozCheckbox = document.getElementById("siyanoz");
  if(siyanozCheckbox.checked){
    for (var i = 0; i < siyanoz.length; i++) {
      siyanoz[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < siyanoz.length; i++) {
      siyanoz[i].style.color = "black";
    }
  }
}
function bradikardi(){
  let bradikardi = document.getElementsByClassName("bradikardi");
  let bradikardiCheckbox = document.getElementById("bradikardi");
  if(bradikardiCheckbox.checked){
    for (var i = 0; i < bradikardi.length; i++) {
      bradikardi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < bradikardi.length; i++) {
      bradikardi[i].style.color = "black";
    }
  }
}
function kiloalma(){
  let kiloalma = document.getElementsByClassName("kiloalma");
  let kiloalmaCheckbox = document.getElementById("kiloalma");
  if(kiloalmaCheckbox.checked){
    for (var i = 0; i < kiloalma.length; i++) {
      kiloalma[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < kiloalma.length; i++) {
      kiloalma[i].style.color = "black";
    }
  }
}
function parestezi(){
  let parestezi = document.getElementsByClassName("parestezi");
  let paresteziCheckbox = document.getElementById("parestezi");
  if(paresteziCheckbox.checked){
    for (var i = 0; i < parestezi.length; i++) {
      parestezi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < parestezi.length; i++) {
      parestezi[i].style.color = "black";
    }
  }
}
function sinirlilik(){
  let sinirlilik = document.getElementsByClassName("sinirlilik");
  let sinirlilikCheckbox = document.getElementById("sinirlilik");
  if(sinirlilikCheckbox.checked){
    for (var i = 0; i < sinirlilik.length; i++) {
      sinirlilik[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < sinirlilik.length; i++) {
      sinirlilik[i].style.color = "black";
    }
  }
}
function menoraji(){
  let menoraji = document.getElementsByClassName("menoraji");
  let menorajiCheckbox = document.getElementById("menoraji");
  if(menorajiCheckbox.checked){
    for (var i = 0; i < menoraji.length; i++) {
      menoraji[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < menoraji.length; i++) {
      menoraji[i].style.color = "black";
    }
  }
}
function sestekabalaşma(){
  let sestekabalaşma = document.getElementsByClassName("sestekabalaşma");
  let sestekabalaşmaCheckbox = document.getElementById("sestekabalaşma");
  if(sestekabalaşmaCheckbox.checked){
    for (var i = 0; i < sestekabalaşma.length; i++) {
      sestekabalaşma[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < sestekabalaşma.length; i++) {
      sestekabalaşma[i].style.color = "black";
    }
  }
}
function karpaltünelsendromu(){
  let karpaltünelsendromu = document.getElementsByClassName("karpaltünelsendromu");
  let karpaltünelsendromuCheckbox = document.getElementById("karpaltünelsendromu");
  if(karpaltünelsendromuCheckbox.checked){
    for (var i = 0; i < karpaltünelsendromu.length; i++) {
      karpaltünelsendromu[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < karpaltünelsendromu.length; i++) {
      karpaltünelsendromu[i].style.color = "black";
    }
  }
}
function livedoretikülaris(){
  let livedoretikülaris = document.getElementsByClassName("livedoretikülaris");
  let livedoretikülarisCheckbox = document.getElementById("livedoretikülaris");
  if(livedoretikülarisCheckbox.checked){
    for (var i = 0; i < livedoretikülaris.length; i++) {
      livedoretikülaris[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < livedoretikülaris.length; i++) {
      livedoretikülaris[i].style.color = "black";
    }
  }
}
function düşük(){
  let düşük = document.getElementsByClassName("düşük");
  let düşükCheckbox = document.getElementById("düşük");
  if(düşükCheckbox.checked){
    for (var i = 0; i < düşük.length; i++) {
      düşük[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < düşük.length; i++) {
      düşük[i].style.color = "black";
    }
  }
}
function dengeproblemleri(){
  let dengeproblemleri = document.getElementsByClassName("dengeproblemleri");
  let dengeproblemleriCheckbox = document.getElementById("dengeproblemleri");
  if(dengeproblemleriCheckbox.checked){
    for (var i = 0; i < dengeproblemleri.length; i++) {
      dengeproblemleri[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < dengeproblemleri.length; i++) {
      dengeproblemleri[i].style.color = "black";
    }
  }
}
function pulmonerembolisemptom(){
  let pulmonerembolisemptom = document.getElementsByClassName("pulmonerembolisemptom");
  let pulmonerembolisemptomCheckbox = document.getElementById("pulmonerembolisemptom");
  if(pulmonerembolisemptomCheckbox.checked){
    for (var i = 0; i < pulmonerembolisemptom.length; i++) {
      pulmonerembolisemptom[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < pulmonerembolisemptom.length; i++) {
      pulmonerembolisemptom[i].style.color = "black";
    }
  }
}
function kalpkrizisemptom(){
  let kalpkrizisemptom = document.getElementsByClassName("kalpkrizisemptom");
  let kalpkrizisemptomCheckbox = document.getElementById("kalpkrizisemptom");
  if(kalpkrizisemptomCheckbox.checked){
    for (var i = 0; i < kalpkrizisemptom.length; i++) {
      kalpkrizisemptom[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < kalpkrizisemptom.length; i++) {
      kalpkrizisemptom[i].style.color = "black";
    }
  }
}
function inme(){
  let inme = document.getElementsByClassName("inme");
  let inmeCheckbox = document.getElementById("inme");
  if(inmeCheckbox.checked){
    for (var i = 0; i < inme.length; i++) {
      inme[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < inme.length; i++) {
      inme[i].style.color = "black";
    }
  }
}
function dvt(){
  let dvt = document.getElementsByClassName("dvt");
  let dvtCheckbox = document.getElementById("dvt");
  if(dvtCheckbox.checked){
    for (var i = 0; i < dvt.length; i++) {
      dvt[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < dvt.length; i++) {
      dvt[i].style.color = "black";
    }
  }
}
function metaliktat(){
  let metaliktat = document.getElementsByClassName("metaliktat");
  let metaliktatCheckbox = document.getElementById("metaliktat");
  if(metaliktatCheckbox.checked){
    for (var i = 0; i < metaliktat.length; i++) {
      metaliktat[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < metaliktat.length; i++) {
      metaliktat[i].style.color = "black";
    }
  }
}
function hipotansyon(){
  let hipotansyon = document.getElementsByClassName("hipotansyon");
  let hipotansyonCheckbox = document.getElementById("hipotansyon");
  if(hipotansyonCheckbox.checked){
    for (var i = 0; i < hipotansyon.length; i++) {
      hipotansyon[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < hipotansyon.length; i++) {
      hipotansyon[i].style.color = "black";
    }
  }
}
function tuzisteği(){
  let tuzisteği = document.getElementsByClassName("tuzisteği");
  let tuzisteğiCheckbox = document.getElementById("tuzisteği");
  if(tuzisteğiCheckbox.checked){
    for (var i = 0; i < tuzisteği.length; i++) {
      tuzisteği[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < tuzisteği.length; i++) {
      tuzisteği[i].style.color = "black";
    }
  }
}
function hipoglisemi(){
  let hipoglisemi = document.getElementsByClassName("hipoglisemi");
  let hipoglisemiCheckbox = document.getElementById("hipoglisemi");
  if(hipoglisemiCheckbox.checked){
    for (var i = 0; i < hipoglisemi.length; i++) {
      hipoglisemi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < hipoglisemi.length; i++) {
      hipoglisemi[i].style.color = "black";
    }
  }
}
function infertilite(){
  let infertilite = document.getElementsByClassName("infertilite");
  let infertiliteCheckbox = document.getElementById("infertilite");
  if(infertiliteCheckbox.checked){
    for (var i = 0; i < infertilite.length; i++) {
      infertilite[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < infertilite.length; i++) {
      infertilite[i].style.color = "black";
    }
  }
}
function morstria(){
  let morstria = document.getElementsByClassName("morstria");
  let morstriaCheckbox = document.getElementById("morstria");
  if(morstriaCheckbox.checked){
    for (var i = 0; i < morstria.length; i++) {
      morstria[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < morstria.length; i++) {
      morstria[i].style.color = "black";
    }
  }
}
function yüzfelci(){
  let yüzfelci = document.getElementsByClassName("yüzfelci");
  let yüzfelciCheckbox = document.getElementById("yüzfelci");
  if(yüzfelciCheckbox.checked){
    for (var i = 0; i < yüzfelci.length; i++) {
      yüzfelci[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < yüzfelci.length; i++) {
      yüzfelci[i].style.color = "black";
    }
  }
}
function koldüşmesi(){
  let koldüşmesi = document.getElementsByClassName("koldüşmesi");
  let koldüşmesiCheckbox = document.getElementById("koldüşmesi");
  if(koldüşmesiCheckbox.checked){
    for (var i = 0; i < koldüşmesi.length; i++) {
      koldüşmesi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < koldüşmesi.length; i++) {
      koldüşmesi[i].style.color = "black";
    }
  }
}
function bufalohörgücü(){
  let bufalohörgücü = document.getElementsByClassName("bufalohörgücü");
  let bufalohörgücüCheckbox = document.getElementById("bufalohörgücü");
  if(bufalohörgücüCheckbox.checked){
    for (var i = 0; i < bufalohörgücü.length; i++) {
      bufalohörgücü[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < bufalohörgücü.length; i++) {
      bufalohörgücü[i].style.color = "black";
    }
  }
}
function aydedeyüzü(){
  let aydedeyüzü = document.getElementsByClassName("aydedeyüzü");
  let aydedeyüzüCheckbox = document.getElementById("aydedeyüzü");
  if(aydedeyüzüCheckbox.checked){
    for (var i = 0; i < aydedeyüzü.length; i++) {
      aydedeyüzü[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < aydedeyüzü.length; i++) {
      aydedeyüzü[i].style.color = "black";
    }
  }
}
function sentripedalobezite(){
  let sentripedalobezite = document.getElementsByClassName("sentripedalobezite");
  let sentripedalobeziteCheckbox = document.getElementById("sentripedalobezite");
  if(sentripedalobeziteCheckbox.checked){
    for (var i = 0; i < sentripedalobezite.length; i++) {
      sentripedalobezite[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < sentripedalobezite.length; i++) {
      sentripedalobezite[i].style.color = "black";
    }
  }
}
function yaraiyileşmesindegecikme(){
  let yaraiyileşmesindegecikme = document.getElementsByClassName("yaraiyileşmesindegecikme");
  let yaraiyileşmesindegecikmeCheckbox = document.getElementById("yaraiyileşmesindegecikme");
  if(yaraiyileşmesindegecikmeCheckbox.checked){
    for (var i = 0; i < yaraiyileşmesindegecikme.length; i++) {
      yaraiyileşmesindegecikme[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < yaraiyileşmesindegecikme.length; i++) {
      yaraiyileşmesindegecikme[i].style.color = "black";
    }
  }
}
function kladikasyo(){
  let kladikasyo = document.getElementsByClassName("kladikasyo");
  let kladikasyoCheckbox = document.getElementById("kladikasyo");
  if(kladikasyoCheckbox.checked){
    for (var i = 0; i < kladikasyo.length; i++) {
      kladikasyo[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < kladikasyo.length; i++) {
      kladikasyo[i].style.color = "black";
    }
  }
}
function zayıfnabız(){
  let zayıfnabız = document.getElementsByClassName("zayıfnabız");
  let zayıfnabızCheckbox = document.getElementById("zayıfnabız");
  if(zayıfnabızCheckbox.checked){
    for (var i = 0; i < zayıfnabız.length; i++) {
      zayıfnabız[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < zayıfnabız.length; i++) {
      zayıfnabız[i].style.color = "black";
    }
  }
}
function kalfağrısı(){
  let kalfağrısı = document.getElementsByClassName("kalfağrısı");
  let kalfağrısıCheckbox = document.getElementById("kalfağrısı");
  if(kalfağrısıCheckbox.checked){
    for (var i = 0; i < kalfağrısı.length; i++) {
      kalfağrısı[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < kalfağrısı.length; i++) {
      kalfağrısı[i].style.color = "black";
    }
  }
}
function parlakcilt(){
  let parlakcilt = document.getElementsByClassName("parlakcilt");
  let parlakciltCheckbox = document.getElementById("parlakcilt");
  if(parlakciltCheckbox.checked){
    for (var i = 0; i < parlakcilt.length; i++) {
      parlakcilt[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < parlakcilt.length; i++) {
      parlakcilt[i].style.color = "black";
    }
  }
}
function yavaşgelişentırnak(){
  let yavaşgelişentırnak = document.getElementsByClassName("yavaşgelişentırnak");
  let yavaşgelişentırnakCheckbox = document.getElementById("yavaşgelişentırnak");
  if(yavaşgelişentırnakCheckbox.checked){
    for (var i = 0; i < yavaşgelişentırnak.length; i++) {
      yavaşgelişentırnak[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < yavaşgelişentırnak.length; i++) {
      yavaşgelişentırnak[i].style.color = "black";
    }
  }
}
function ciltteısıartışı(){
  let ciltteısıartışı = document.getElementsByClassName("ciltteısıartışı");
  let ciltteısıartışıCheckbox = document.getElementById("ciltteısıartışı");
  if(ciltteısıartışıCheckbox.checked){
    for (var i = 0; i < ciltteısıartışı.length; i++) {
      ciltteısıartışı[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < ciltteısıartışı.length; i++) {
      ciltteısıartışı[i].style.color = "black";
    }
  }
}
function enoftalmus(){
  let enoftalmus = document.getElementsByClassName("enoftalmus");
  let enoftalmusCheckbox = document.getElementById("enoftalmus");
  if(enoftalmusCheckbox.checked){
    for (var i = 0; i < enoftalmus.length; i++) {
      enoftalmus[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < enoftalmus.length; i++) {
      enoftalmus[i].style.color = "black";
    }
  }
}
function miyozis(){
  let miyozis = document.getElementsByClassName("miyozis");
  let miyozisCheckbox = document.getElementById("miyozis");
  if(miyozisCheckbox.checked){
    for (var i = 0; i < miyozis.length; i++) {
      miyozis[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < miyozis.length; i++) {
      miyozis[i].style.color = "black";
    }
  }
}
function ptozis(){
  let ptozis = document.getElementsByClassName("ptozis");
  let ptozisCheckbox = document.getElementById("ptozis");
  if(ptozisCheckbox.checked){
    for (var i = 0; i < ptozis.length; i++) {
      ptozis[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < ptozis.length; i++) {
      ptozis[i].style.color = "black";
    }
  }
}
function anhidrozis(){
  let anhidrozis = document.getElementsByClassName("anhidrozis");
  let anhidrozisCheckbox = document.getElementById("anhidrozis");
  if(anhidrozisCheckbox.checked){
    for (var i = 0; i < anhidrozis.length; i++) {
      anhidrozis[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < anhidrozis.length; i++) {
      anhidrozis[i].style.color = "black";
    }
  }
}
function taşipne(){
  let taşipne = document.getElementsByClassName("taşipne");
  let taşipneCheckbox = document.getElementById("taşipne");
  if(taşipneCheckbox.checked){
    for (var i = 0; i < taşipne.length; i++) {
      taşipne[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < taşipne.length; i++) {
      taşipne[i].style.color = "black";
    }
  }
}
function bradipne(){
  let bradipne = document.getElementsByClassName("bradipne");
  let bradipneCheckbox = document.getElementById("bradipne");
  if(bradipneCheckbox.checked){
    for (var i = 0; i < bradipne.length; i++) {
      bradipne[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < bradipne.length; i++) {
      bradipne[i].style.color = "black";
    }
  }
}
function kalpseslerindeazalma(){
  let kalpseslerindeazalma = document.getElementsByClassName("kalpseslerindeazalma");
  let kalpseslerindeazalmaCheckbox = document.getElementById("kalpseslerindeazalma");
  if(kalpseslerindeazalmaCheckbox.checked){
    for (var i = 0; i < kalpseslerindeazalma.length; i++) {
      kalpseslerindeazalma[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < kalpseslerindeazalma.length; i++) {
      kalpseslerindeazalma[i].style.color = "black";
    }
  }
}
function papilödem(){
  let papilödem = document.getElementsByClassName("papilödem");
  let papilödemCheckbox = document.getElementById("papilödem");
  if(papilödemCheckbox.checked){
    for (var i = 0; i < papilödem.length; i++) {
      papilödem[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < papilödem.length; i++) {
      papilödem[i].style.color = "black";
    }
  }
}
function pupilrefleksanomalisi(){
  let pupilrefleksanomalisi = document.getElementsByClassName("pupilrefleksanomalisi");
  let pupilrefleksanomalisiCheckbox = document.getElementById("pupilrefleksanomalisi");
  if(pupilrefleksanomalisiCheckbox.checked){
    for (var i = 0; i < pupilrefleksanomalisi.length; i++) {
      pupilrefleksanomalisi[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < pupilrefleksanomalisi.length; i++) {
      pupilrefleksanomalisi[i].style.color = "black";
    }
  }
}
function yüzeyelnefes(){
  let yüzeyelnefes = document.getElementsByClassName("yüzeyelnefes");
  let yüzeyelnefesCheckbox = document.getElementById("yüzeyelnefes");
  if(yüzeyelnefesCheckbox.checked){
    for (var i = 0; i < yüzeyelnefes.length; i++) {
      yüzeyelnefes[i].style.color = "Maroon";
    }
  }
  else {
    for (var i = 0; i < yüzeyelnefes.length; i++) {
      yüzeyelnefes[i].style.color = "black";
    }
  }
}
