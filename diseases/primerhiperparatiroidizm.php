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
      <h1 style="text-align:center;">Primer Hiperparatiroidizm</h1>
    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide()" for="bulgu">Bulgular : </label>
    <div label="bulgu" id="bulgu">
      <p>
       <ul>
        <li> <b>Fizik Muayene</b>: Primer hiperparatiroidili hastalarda fizik muayene nadiren diagnostiktir </li>
        <li>Bulgular ; Boyunda kitle, ses anomalileri veya kısıklığı, servikal lenfadneopati</li>
        <li>Keratopati(kornea altında kalsiyum birikimi) : Hiperparatiroidizmli hastaların göz muayenesinde çoğunlukla saptanır ancak nonspesifik bir bulgudur</li>
       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide10()" for="tanı">Tanı : </label>
    <div label="tanı" id="tanı">
      <p>
       <ul>
         <li>Hiperparatiroidili hastalarda fizik muayene nadiren diagnostik olup, tanı laboratuvar ve radyolojik veriler temelinde konur.</li>
       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide2()" for="labbulgu">Laboratuvar Bulguları : </label>
    <div label="labbulgu" id="labbulgu">
      <p>
       <ul>
         <li>Hiperkalsemi hemen daima vardır(normal serum Ca:8,5-10,5)</li>
         <li>Vitamin D eksikliği, hipoalbüminemi ve asidozda normokalsemik hiperparatiroidi görülebilir. Total kalsiyum normal olmakla birlikte iyonize kalsiyum artmıştır.</li>
         <li>Serum kalsiyumu 12 mg/dl üzerine çıktığında hiperkalsemi görülür.</li>
         <li>Hipofosfatemi olguların %50'sinde bulunur.</li>
         <li>Parathormon seviyesinde yükseklik</li>
         <li>Alkalen fosfatazın kemik izoenzimi seviyesinin yükselmesi</li>
       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide3()" for="radyoloji">Radyoloji - Testler : </label>
    <div label="radyoloji" id="radyoloji">
      <p>
       <ul>
         <li>Subperiostal rezorpsyon</li>
         <li>Kemik kistleri</li>
         <li>Kafa kemiklerinde tuz-biber görüntüsü</li>
         <hr>
         <li> <b>Kemik Grafilerde</b>: </li>
         <li>Subperiostal rezorpsyon</li>
         <li>Generalize osteopeni ve osteoporoz</li>
         <li>Kafa kemiklerinde tuz-biber görüntüsü</li>
         <li>Kemik kistleri ve brown tümörleri</li>
         <li>Simfizis pubis ve sakroiliak eklemlerde genişleme</li>
         <hr>
         <li>Nefrolitiasis, Nefrokalsinozis</li>
         <li>Dişlerde lamina dura kaybı</li>
         <li>Özefagogramda paratiroid adenomunun basısına ait görünüm</li>
         <li>Gastrointestinal grafilerde peptik ülser, kronik pankreatite bağlı kalsifikasyonlar saptanabilir.</li>
         <hr>
         <li> <b>Hiperparatiroidizm tanılı hastada yapılması gereken ek testler</b>:IVP veya ultrasonografi(renal hücreli kanser) </li>
         <li>Protein gel elektroforez(Multipl myelom ve sarkoidoz)</li>
         <li>24 saatlik idrarda kalsiyum ölçümü(BFHH)</li>
         <li>Göğüs grafisi(Sarkoidoz, fungal hastalık, akciğer veya mediasten malignensisi)</li>
         <li>Postmenapozal kadınlarda mamografi</li>
       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide4()" for="genel">Genel Bilgiler : </label>
    <div label="genel" id="genel">
      <p>
       <ul>
         <li> <b>Sekonder hiperparatiroidizm</b>: Nadir görülür </li>
         <li>Kronik renal yetmezlikli veya malabsorbsyonlu hastalarda gelişir.</li>
         <hr>
         <li> <b>Etyoloji</b></li>
         <li>Kronik renal yetmezlik : Artar fosfat seviyelerine sekonder oluşan hipokalsemi</li>
         <li>D vitamini üretimi için gerekli olan 1-alfa-hidroksilaz aktivitesinin azalması</li>
         <li>Renal diyalizatta yüksek alüminyum içeriği ve fosfat bağlayan ilaçlar nedeni ile kemikte alüminyum akümülasyonu olur. Bu durum osteomalaziye ve daha sonra da PTH stimülasyonuna neden olur.</li>
         <li>Malabsorbsyon : PTH stimülasyonunun nedeni kalsiyum ve D vitamini absorbsyonunda yetersizliktir.</li>
         <hr>
         <li> <b>Tedavi</b> </li>
         <li>Başlangıç tedavi : hiperfosfatemili hastalarda diyette fosfat kısıtlanması</li>
         <li>Vitamin D ve oral kalsiyum verilmesi</li>
         <li>Diyalizatta alüminyum azaltılması</li>
         <hr>
         <li> <b>Cerrahi tedavi endikasyonları</b> </li>
         <li>Kontrol edilemeyen kemik ağrısı</li>
         <li>Kemik kırıkları</li>
         <li>Semptomatik ektopik kalsifikasyonlar</li>
         <li>İntraktbl pruritis(Durmayan, medikal tedaviye yanıt vermeyen kaşıntılar)</li>
         <li>Medikal olarak kontrol edilemeyen hastalık</li>
         <hr>
         <li> <b>Tersiyer hiperparatiroidizm</b>:Sekonder hiperparatiroidizme yol açan esas hücreli hiperplazinin otonomi kazanmasıdır. </li>
         <li>Bu nadir durum en çok uzun süre renal yetmezlikten sonra başarılı renal transplantasyon uygulanan hastalarda görülür.</li>
         <li>Tersiyer hiperparatirodizimin çoğu kısa sürelidir. PTH seviyesi fonksiyone transplant böbreğin altında normale döner.</li>
         <li>İyi fonksyon gören transplante böbrek varlığında PTH aşırı üretimi persistan kalırsa operasyon endikedir.</li>
         <hr>
         <li> <b>Ektopik PTH sendromu</b>: Özellikle akciğer, karaciğer, böbrek ve overlerin malign neoplazmları PTH'a benzer aktivitesi olan bir peptit nadiren de PTH salgılayarak hiperparatiroidiyi taklit eden klinik ve biyokimyasal bozukluklara yol açar. </li>
       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide5()" for="komplikasyonlar">Komplikasyonlar : </label>
    <div label="komplikasyonlar" id="komplikasyonlar">
      <p>
       <ul>
         <li> <b>Renal hastalık</b>:Hastaların %80'inde </li>
         <li>Nefrolitiasis</li>
         <li>Nefrokalsinosis</li>
         <li>Hipertansyon</li>
         <li> <b>Kemik hastalığı</b>: Hastaların %15'inde </li>
         <li>Osteopeni, Osteoporoz, Osteitis fibroza sistika, spontan kırıklar</li>
         <li> <b>Gastrointestinal</b>: Peptik ülser </li>
         <li>Pankreatit</li>
         <li>Kolelitiasis</li>
         <li> <b>Nöropsikiyatrik semptomlar</b>: Psikoz </li>
         <li>Depresyon</li>
         <li>Anksiyete</li>
       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide6()" for="ayırıcıtanı">Ayırıcı Tanı : </label>
    <div label="ayırıcıtanı" id="ayırıcıtanı">
      <p>
       <ul>
         <li> <b>Hiperkalsemi yapan diğer patolojiler</b> </li>
         <li>Kemik metastazları(meme, akciğer, prostat, renal hücreli kanser)</li>
         <li>Kemik tutulumu olan maligniteler(Lenfoma, myeloma, lösemi)</li>
         <li>Granülomatöz hastalıklar(sarkoidoz, tbc)</li>
         <li>Paget hastalığı</li>
         <li>Diğer endokrin hastalıklar(tirotoksikoz, adrenal yetmezlik, feokromasitoma, vipoma)</li>
         <li>İlaçlar(tiazid diüretikler, lityum, Östrojenler/antiöstrojenler, süt-alkali sendromu, vitamin a,d toksisitesi)</li>
         <li>immobilizasyon</li>
         <li>Akut ve kronik renal hastalık</li>
         <li>Benign hipokalsiürik hiperkalsemi(BFHH):Kalsiyum retansiyonu vardır. Primer hiperparatiroidili hastaların aksine hastalarda genelde kalsiyumun düşük üriner atılımı vardır. BFHH'li hastalarda boyun eksplorasyonu <strong>kontrendikedir</strong> </li>
       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide7()" for="tedavi">Tedavi : </label>
    <div label="tedavi" id="tedavi">
      <p>
       <ul>
         <li>Cerrahi girişim için endikasyon primer hiperparatiroidizmin teşhisidir.</li>
         <li>Ameliyat öncesi özellikle yüksek kalsiyum düzeyleri olan hastalarda serum kalsiyumunu düşürmek gerekir.</li>
         <li>Ameliyat endikasyonu konulduktan sonra uygulancak yöntem paratiroidlerin eksplorasyonu ve hastalıklı bezlerin eksizyonudur.</li>
         <li>Paratiroid cerrahisi sonrası geçici hipokalsemi yaygındır.(Aç kemik sendromu)</li>
         <hr>
         <li> <b>Cerrahi seçenekler</b>: </li>
         <li>Soliter andeomlarda : Soliter paratiroidektomi</li>
         <li>Çift adenomlarda : her iki gland çıkarılmalıdır.</li>
         <li>Dört veya multiglandüler hiperplazide; 3,5 paratiroid bezinin çıkarılması veya total paratiroidektomi + bir bezin 50 mg'ının reimplantasyonu</li>
         <li>Familyal hiperparatiroidizm veya multipl neokrin neoplazi sendromunda; total paratiroidektomi ve ototransplantasyon uygulanabilir.</li>
         <li>Paratiroid karsinomunda; tümörün en blok eksizyonu ile aynı tarafta tiroid lobektomi yapılmalıdır.</li>
       </ul>
      </p>
    </div>


  </body>
</html>
