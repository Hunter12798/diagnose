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
    </script>
  </head>
  <body>
      <h1 style="text-align:center;">Hiperkalsemik Kriz</h1>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide4()" for="genel">Genel Bilgiler : </label>
    <div label="genel" id="genel">
      <p>
       <ul>
         <li>Hayatı tehdit eden sistemik bir durumdur. Serum kalsiyum seviyesi aşırı yüksektir 13.0mg/dl veya üstü</li>
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
         <li>Başlangıç tedavi; 100ml/h'den daha fazla diürez sağlayacak şekilde iv 4-5 L serum fizyolojik ile hidrasyon</li>
         <li>Üriner kalsiyum atılımını artırmak için furosemid ile diürez</li>
         <li>Rehidratasyondan sonra kardiyak disritmi devam ederse antiaritmik tedavisi</li>
         <li>Rehidratasyon ve diüreze rağmen hiperkalsemi devam ederse Mitramisin, fosfat bağlayıcılar, Parenteral kalsitonin, östrojen veya steroidler faydalı olabilir.</li>
         <hr>
         <li>Kemik metastazı bulunan ileri malignensilerde hiperkalsemiyi normalize etmek zordur ancak hiperparatiroidizmden kaynaklanan hiperkalsemi hidrasyon ve diürezle stabilize olur.</li>
         <li>Primer hiperparatiroidizmden kaynaklanan hiperkalsemik krizde erken cerrahi uygulanmalıdır.</li>
       </ul>
      </p>
    </div>


  </body>
</html>
