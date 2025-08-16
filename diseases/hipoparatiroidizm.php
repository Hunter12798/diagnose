<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script>
      function hide(){
        let gizle = document.getElementById("bulgu");
        if (gizle.style.display === "none") {
          gizle.style.display = "block";
        }
        else {
          gizle.style.display = "none";
        }
      }
      function hide2(){
        let gizle2 = document.getElementById("labbulgu");
        if (gizle2.style.display === "none") {
          gizle2.style.display = "block";
        }
        else {
          gizle2.style.display = "none";
        }
      }
      function hide3(){
        let gizle3 = document.getElementById("radyoloji");
        if (gizle3.style.display === "none") {
          gizle3.style.display = "block";
        }
        else {
          gizle3.style.display = "none";
        }
      }
      function hide4(){
        let gizle4 = document.getElementById("genel");
        if (gizle4.style.display === "none") {
          gizle4.style.display = "block";
        }
        else {
          gizle4.style.display = "none";
        }
      }
      function hide5(){
        let gizle5 = document.getElementById("komplikasyonlar");
        if (gizle5.style.display === "none") {
          gizle5.style.display = "block";
        }
        else {
          gizle5.style.display = "none";
        }
      }
      function hide6(){
        let gizle6 = document.getElementById("ayırıcıtanı");
        if (gizle6.style.display === "none") {
          gizle6.style.display = "block";
        }
        else {
          gizle6.style.display = "none";
        }
      }
      function hide7(){
        let gizle7 = document.getElementById("tedavi");
        if (gizle7.style.display === "none") {
          gizle7.style.display = "block";
        }
        else {
          gizle7.style.display = "none";
        }
      }
      function hide8(){
        let gizle8 = document.getElementById("etyoloji");
        if (gizle8.style.display === "none") {
          gizle8.style.display = "block";
        }
        else {
          gizle8.style.display = "none";
        }
      }
      function hide9(){
        let gizle9 = document.getElementById("ekbilgiler");
        if (gizle9.style.display === "none") {
          gizle9.style.display = "block";
        }
        else {
          gizle9.style.display = "none";
        }
      }
      function hide10(){
        let gizle10 = document.getElementById("tanı");
        if (gizle10.style.display === "none") {
          gizle10.style.display = "block";
        }
        else {
          gizle10.style.display = "none";
        }
      }
    </script>
  </head>
  <body>
      <h1 style="text-align:center;">Hipoparatiroidizm</h1>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide4()" for="genel">Genel Bilgiler : </label>
    <div label="genel" id="genel">
      <p>
       <ul>
         <li>PTH sekresyonunun azlığı sonucu ortaya çıkan klinik olarak nöromüsküler hiperaktivite, biyokimyasal olarak hipokalsemi ve hiperfosfatemi ile karakterize durumdur.</li>
       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide8()" for="etyoloji">Etyoloji : </label>
    <div label="etyoloji" id="etyoloji">
      <p>
       <ul>
         <li>Cerrahi komplikasyon sonucu idiopatik olarak(Total tiroidektomi sonucu) - Hipoparatiroidizm'in en sık sebebi</li>
         <li>Fonksyonel hipoparatiroidi(ağır ve uzun süreli hipomagnezemili hastalarda) PTH'nın etkisizliğine bağlı olarak görülür.</li>
       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide10()" for="tanı">Tanı : </label>
    <div label="tanı" id="tanı">
      <p>
       <ul>

       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide()" for="bulgu">Bulgular : </label>
    <div label="bulgu" id="bulgu">
      <p>
       <ul>
         <li><a href="https://www.youtube.com/watch?v=k599AcihIGg&ab_channel=RegisteredNurseRN" style="cursor:pointer;text-decoration:none;color:black;" target="_blank">Chvostek bulgusu(Masseter kasına vurunca ağzın yana çekilmesi)</a></li>
         <li><a href="https://www.youtube.com/watch?v=p2hnxQTmwuY&ab_channel=RegisteredNurseRN" style="cursor:pointer;text-decoration:none;color:black;" target="_blank">Trousseau belirtisi(Ele gelen kan akımı azaltılınca eldeki kasların kasılması - ebe eli görünümü)</a></li>
       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide2()" for="labbulgu">Laboratuvar Bulguları : </label>
    <div label="labbulgu" id="labbulgu">
      <p>
       <ul>

       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide3()" for="radyoloji">Radyoloji : </label>
    <div label="radyoloji" id="radyoloji">
      <p>
       <ul>

       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide5()" for="komplikasyonlar">Komplikasyonlar : </label>
    <div label="komplikasyonlar" id="komplikasyonlar">
      <p>
       <ul>

       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide6()" for="ayırıcıtanı">Ayırıcı Tanı : </label>
    <div label="ayırıcıtanı" id="ayırıcıtanı">
      <p>
       <ul>

       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide7()" for="tedavi">Tedavi : </label>
    <div label="tedavi" id="tedavi">
      <p>
       <ul>
         <li>Semptomların şiddetli olduğu durumlarda i.v. kalsiyum infüzyonu ile acil tedavi</li>
         <li>Uzun süreli tedavi oral Vitamin D preparatları ile yapılır.</li>
         <li>Kalsitriol 50.000-100.000 mikrogram/gün</li>
         <li>One alpha veya kalsitriol (1,2(OH)<sub>2</sub> D<sub>3</sub>) 0,5-1 mikrogram/gün dozda</li>
         <li>Gerektiğinde tedaviye oral kalsiyum preparatları eklenir.</li>
       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide9()" for="ekbilgiler">Ek Bilgiler : </label>
    <div label="ekbilgiler" id="ekbilgiler">
      <p>
       <ul>
         <li> <b>Psödohipoparatiroidizm</b>: Dominant olarak geçen nadir kalıtsal hastalık </li>
         <li>Dolaşımdaki PTH düzeyleri normal veya yüksek olmasına rağmen hipoparatiroidi belirti ve bulguları vardır.</li>
       </ul>
      </p>
    </div>

  </body>
</html>
