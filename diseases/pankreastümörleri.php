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
      <h1 style="text-align:center;">Pankreas Tümörleri</h1>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide4()" for="genel">Genel Bilgiler : </label>
    <div label="genel" id="genel">
      <p>
       <ul>
         <li><b>Ekzokrin Tümörleri </b> </li>
         <li>1.Primer malign tümörler</li>
         <li>a-Pankreas başı ve periampüller ca(%80)</li>
         <li>b-Gövde ve kuyruk bölümü ca'ları</li>
         <li>c-Sarkomlar(leiyomyosarkom, hodgkin)</li>
         <li>d-Kistadenokarsinoma</li>
         <hr>
         <li> <b>Sekonder malign tümörleri(komşu organdan direkt yayılım, uzak metastaz)</b> </li>
         <hr>
         <li> <b>Selim tümörler</b> </li>
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

       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide()" for="bulgu">Bulgular : </label>
    <div label="bulgu" id="bulgu">
      <p>
       <ul>
         <li>Ağrı: Her lokalizasyondaki tümörün ilerlemiş devresinde en sık rastlanan yakınmadır. Belirgin olmakla birlikte epigastriumda daha fazladır ve sırta yayılır. Yemekle ilgisi yoktur.
         Hasta ayakta iken veya öne eğilince hafifler, sırtüstü yatınca artar. </li>
         <hr>
         <li>Sarılık: Tümör özellikle <i>periampüller</i> bölgeye yayılmışsa ve pankreas başında ise kendini sarılıkla belli eder. Bu nedenle gövde kuyruk ca'dan daha erken tanı alır.</li>
         <hr>
         <li>Coursavier-Terrier Bulgusu :Hassas olmayan hidropik safra kesesi, şişliğin safra taşından olmadığını ifade eder ve sarılık eşlik eder(Hidrops halinde ağrısız safra kesesi palpasyonu). Safra kesesi şişmiştir çünkü
         safra sıvısı kanser yüzünden dökülemeyip birikir.</li>
         <hr>
         <li>Kilo kaybı: Erken dönemde görülen bir belirtidir. Hasta hiçbir şikayeti olmadan birkaç ay içinde 15-20 kilo kaybedebilir. Bunların yanında iştahsızlık, apati, halsizlik, bulantı, tümör mide ve duodenuma invazyon
         yaparsa hematemez melena, steatoz, hafif hiperglisemi ve periferik tromboflebit migransa rastlanır.</li>
         <hr>
         <li> <b>Pankreasın Nöroendokrin Tümörleri</b>: Nadir tümörlerdir: 1-4/1.000.000 </li>
         <li>%75 fonksiyonel(salgıladıkları hormona göre isimlendirilirler;Gastrinoma, VIPoma vs.)</li>
         <li>Entopik/Ektopik</li>
         <li>APUD(Amine Precursor Uptake and Decarboxylation)</li>
         <li>Endodermal orjin</li>
         <li>%70-80 Benign, %20-30 Malign</li>
         <li>Pankreatik duktal adeno ca'ya göre iyi prognozlu: KC metastazı olsa bile ortalama 5 yıllık sağkalım</li>
       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide2()" for="labbulgu">Laboratuvar Bulguları : </label>
    <div label="labbulgu" id="labbulgu">
      <p>
       <ul>
         <li><b>CA 19-9(%74)</b> ve en önemli bulgu</li>
         <li>Serum alkalen fosfataz</li>
         <li>GGT, Bilirubin, Hipoalbüminemi</li>
         <li>Anemi,CEA, AFP</li>
         <li>Serum tripsin aktivitesi</li>
       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide3()" for="radyoloji">Radyoloji : </label>
    <div label="radyoloji" id="radyoloji">
      <p>
       <ul>
         <li>Non-invaziv:US,BT,MR</li>
         <hr>
         <li>invaziv tetkikler</li>
         <li>ERCP</li>
         <li>Endoskopik US eşliğinde ince iğne aspirasyon biyopsisi</li>
         <li>Endoskopik US</li>
         <li>Laparoskopik US</li>
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
         <li>Cerrahi Tedavi : Hastaların büyük bir kısmı geç dönemde saptandığından tam bir küratif tedavi şansı yoktur.(%8-18)</li>
         <li>Whipple ameliyatı:BT ve MR'da metastaz ve vasküler invazyonu saptanmayan 4-5 cm'den küçük tümörlerde küratif.Whipple ameliyatı = Standart pankreatikoduodenektomi</li>
         <li>Operasyon mortalitesi %5'ten azdır</li>
         <hr>
         <li>ERCP : Safra yollarına stent yerleştirilerek safra akımı sağlanır.(Palyatif işlemler)</li>
         <hr>
         <li>Pankreasın nöroendokrin tümörlerinde eğer tümörün tam lokalizasyonu bulunamazsa hangi kısımdan şüpheleniliyorsa o pankreatik kısım rezeke edilmelidir.</li>
       </ul>
      </p>
    </div>

    <br>

    <label style="font-size:1.5vw;cursor:pointer;" onclick="hide9()" for="ekbilgiler">Ek Bilgiler : </label>
    <div label="ekbilgiler" id="ekbilgiler">
      <p>
       <ul>
         <li> <b>Ekzokrin Tümörleri</b>:Pankreas ca'larının %90'ı duktal sistemden geri kalan %10'u ise asinüs hücrelerinden oluşur </li>
         <li>En çok rastlanan adenokanserlerdir. %65 başta, %20 gövde ve kuyrukta,%15 ise ampulla vateride yer alır.</li>
         <li>Erkek/kadın oranı 2/1'dir. Sıklıkla 55-65 yaşlarda görülür.</li>
         <li>Pankreas adenokanserlerinin özelliği erkenden komşu dokulara, bölgesel lenf düğümleri ve karaciğere metastaz yapmasıdır.</li>
         <li>Pankreas kanserlerinde en çok göze çarpan bulgu kısa sürede aşırı kilo kaybı</li>
         <hr>
         <li>Langerhans adalarındaki hücreler : alfa(glukagon) %15-20, beta(insülin) %60-80, delta(somatostatin) %5-10, Delta 1(VIIP), PP(Pankreatik polipeptit)</li>
       </ul>
      </p>
    </div>

  </body>
</html>
