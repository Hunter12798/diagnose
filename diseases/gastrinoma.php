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
    </script>
  </head>
  <body>
      <h1 style="text-align:center;">Gastrinoma</h1>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide4()" for="genel">Genel Bilgiler : </label>
    <div label="genel" id="genel">
      <p>
       <ul>
         <li>%75 sporadik, %25 MEN1(beingn, multisentrik, ekstrapankreatik, erken yaş)</li>
         <li> <b>En sık fonksyonel malign pankreas nöroendokrin tümörü</b> </li>
         <li>50 yaş üstü erkeklerde sıktır.</li>
         <li>gastrin yanında en az bir peptit hormon daha salgılar(insülin,PP, glukagon, ACTH)</li>
       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide8()" for="etyoloji">Etyoloji : </label>
    <div label="etyoloji" id="etyoloji">
      <p>
       <ul>

       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide10()" for="tanı">Tanı : </label>
    <div label="tanı" id="tanı">
      <p>
       <ul>
         <li>Açlık gastrin düzeyi>1000 pg/ml(%30 görülür ve diagnostiktir. %70 200-1000)</li>
         <li>Sekretin stimülasyon testi:</li>
         <li>BAO/MAO>0,6</li>
         <li>BAO>15 mEq/ml</li>
       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide()" for="bulgu">Bulgular : </label>
    <div label="bulgu" id="bulgu">
      <p>
       <ul>

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

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide3()" for="radyoloji">Radyoloji - Lokalizasyon : </label>
    <div label="radyoloji" id="radyoloji">
      <p>
       <ul>
         <li>Gastrinomanın en sık lokalizasyonu PASSARO üçgeni(Gastrinoma üçgeni)</li>
         <li>%90 gastrinoma üçgeninde(%40 pankreas, %40 duodenum duvarı ve komşu lenf nodları)</li>
         <li>Mide,jejenum,Mezenter,karaciğer,Overler ve böbrekler bulunabileceği diğer yerlerdir.</li>
         <hr>
         <li>Passaro üçgeni sınırları:</li>
         <li>Koledok ile sistik kanal birleşim yeri</li>
         <li>Duodenum 2. ve 3. kısımlarının birleşim yeri</li>
         <li>Pankreas gövde ve boyun birleşim yeri</li>
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

       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide9()" for="ekbilgiler">Ek Bilgiler : </label>
    <div label="ekbilgiler" id="ekbilgiler">
      <p>
       <ul>
         <li> <b>Zolllinger Ellison triadı:</b> </li>
         <li>Atipik peptik ulkus(normalde duodenum ve küçük kurvaturda görülür.)</li>
         <li>Gastrik hiperasidite</li>
         <li>İnsülin salgılamayan adacık hücre tümörü</li>
         <hr>
         <li>Gastrinoma varlığından şüphelenilip ileri tetkik ve değerlendirme yapılması gereken klinik durumlar:</li>
         <li>1-Tekrar eden peptik ülser</li>
         <li>2-Medikal tedaviye cevap vermeyen peptik ülser</li>
         <li>3-Postop. peptik ülser(marginal ülse)</li>
         <li>4-Postbulber veya jejunal peptik ülser</li>
         <li>5-Multiple GIS ülserleri</li>
         <li>6-Peptik ülser aile öyküsü</li>
         <li>7-Etyolojisi açıklanamayan diyare</li>
         <li>MEN 1 hikayesi</li>
         <li>Hiperkalsemi</li>
       </ul>
      </p>
    </div>

  </body>
</html>
