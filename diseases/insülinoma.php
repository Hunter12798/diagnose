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
      <h1 style="text-align:center;">İnsülinoma</h1>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide4()" for="genel">Genel Bilgiler : </label>
    <div label="genel" id="genel">
      <p>
       <ul>
         <li>En sık görülen adacık hücreli tümör </li>
         <li>K/E:3/2 ortalama görülme yaşı 40-50</li>
         <li>Benign, küçük, soliter lezyonlardır.</li>
         <li>MEN 1'de multisentrik ve büyük</li>
         <li>%10 malign(metastaz)</li>4
         <hr>
         <li> <b>Whipple Triadı : Açlıkta hipoglisemi semptomları(halsizlik, baş dönmesi, dil peltekleşir)</b> </li>
         <li>Açlık kan şekerinin 50mg/dl'nin altına düşmesi</li>
         <li>Semptomların glikoz verilmesi ile ortadan kalkması</li>
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
         <li>72 saat açlık provakasyon testi:</li>
         <li>En güvenilir test</li>
         <li>Her 4-6 saatte kan şekeri ve insülin ölçülür</li>
         <li>Hastaların %80'i ilk 24 saatte semptom verir</li>
         <li>Talbutamide, lösin, arginin, Ca infüzyonu</li>
         <hr>
         <li>1.AKŞ < 40 mg/dl</li>
         <li>2.İnsülin > 6-10 mU/ml</li>
         <li>3.C peptit > 2.5 ng/ml</li>
         <li>4.Proinsülin > %25</li>
         <li>5.OAD kullananlarda plazma sülfonüre ölçümleri</li>
         <li>6.Plazma insülin/KŞ > 0.3</li>
         <li>7.Glukagon testi</li>
         <hr>
         <li>İnsülinomada tümör lokalizasyonunu göstermede en değerli yöntem manuel palpasyon + intraoperatif US</li>
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

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide3()" for="radyoloji">Radyoloji : </label>
    <div label="radyoloji" id="radyoloji">
      <p>
       <ul>
         <li>Manuel palpasyon + intraoperatif USG: en değerli yöntem</li>
         <li>BT,MR,Anjiografi,Selektif portal venöz örnekleme,Somatostatin reseptör sintigrafisi</li>
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
         <li>Tümör rezeksiynu sonrasında 10-20 dk içinde KŞ %85 vakada artar.</li>
         <hr>
         <li> <b>Cerrahi</b>:Pankreas mobilize edilir.(insülinoma bulunur) </li>
         <li>Enükleasyon</li>
         <li>Distal pankreatektomi</li>
         <li>Whipple</li>
         <li><b>Medikal</b>(Metastatik hastalarda ve ooperasyona hazırlık aşamasında):</li>
         <li>Diazoxide</li>
         <li>Octreotide</li>
         <li>Kemoterapi, streptozosin, decarbazin, doxorubicin, 5-FU</li>
       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide9()" for="ekbilgiler">Ek Bilgiler : </label>
    <div label="ekbilgiler" id="ekbilgiler">
      <p>
       <ul>
         <li>Prognoz:Malign insülinomalarda küratif rezeksyon ortalama 5 yıllık hastalıksız sağ kalım oranı vermektedir. 10 yılda %29'u sağ kalır.x"</li>
       </ul>
      </p>
    </div>

  </body>
</html>
