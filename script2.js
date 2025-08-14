function order() {
  var kby,kbyy,aby,abyy,afas,afa,hipotiroidi,hipotiroid,prolaktinoma,prolak,behcet,beh,peptikülser,peptik,kronikti,kroniktin,akutti,akuttin,insülinoma,insülin,pankreastümörleri,pankreastüm,hipoparatiroidizm,hipoparat,hiperkalsemikkriz,hiperkalsemik,
  primerhiperparatiroidizm,hiperparatirodizm,akutapandisit,apandisit,cro,crohn,ülseratif,ük,siroz,sir,ara,rasifiliz,sif,turner,tur,sjögren,sjög,sle,lupus,talasemi,talas,dea,demir,hipokalsemi,hipoca,hiperkalemi,hiperka,fmf,medfev,
  romatoidartirit, romato,hsp,henoch, ensefalit,ensef,yenidoğanmenenjiti,ydmen,yetişkinmenenjiti,yetmen, kawasaki, kawa, hepatita,hepa, renaltübülerasidoz,rta, temporalartirit , skleroderma , tüberkülöz , hiperkalsemi, kalpkrizi,diyabet,lenfoma,
  mononucleosis, mono, lenfo, diya, kalp , temp , sklero , tüber , hiper,reflü,ref,bruselloz,brus,wegener,weg,addison,addis,polikistikoversendromu,pkos,febrilkonvülzyon,febrilkon ;
  var üsye,üsy,triküspitstenozu,triküspitstenoz,nefrotiksendrom,nefrotik,nefritiksendrom,nefritik,obstrüktifşok,obstrüktif,hipovolemikşok,hipovolemik,ardiyojenikşok,kardiyojenik,anaflaksi,anaf,septikşok,septik,nörojenikşok,nörojenik,
  febrilnötropeni,febrilnötro,mitralstenoz,mitral,dka,dkaX,hhod,hho,pulmoneremboli,pulmonerembo,pnömotorax,pnömotora,horner,horn,dvt,dvtX,pah,pahX,cushing, cushin,felç,fel,kibas,kiba,kalptamponadı,kalptampon,gut,gutt,çölyak,çölyakk,
  kaudaequina,kauda,septikartrit,septikart,multiplemyelom,myelom,uyuz,uyuzz,başbitlenmesi,başbiti,gövdebitlenmesi,gövdebit,kasıkbitlenmesi,kasıkbit,böcekısırması,böcek,kutanözlanşmanyazis,kutanöz,kızıl,kızıll,faranjit,faranjitt,
  nekrotizanfasiit,nekrotizanfasiitt,kolera,koleraa,iye,iyee,ehec,ehecc,shigella,shigellaa,böbrektaşıhastalık,böbrektaşıhastalıkk,gisşarbonu,gisşarb,akciğerşarbonu,acşarb,derişarbonu,derişarb,pnömoni,pnömonii,salmonellagastroenteriti,sal,
  tifo,tif,krup,krupp,kruppNum,bakteriyeltrakeit,bakteriyeltrakeitt,bakteriyeltrakeittNum;
  var anafNum,septikNum,nörojenikNum,febrilnötroNum,mitralNum,dkaXNum,hhoNum,pulmoneremboNum,pnömotoraNum,horneNum,dvtXNum,pahXNum,felNum,cushinNum,addisNum,kbyyNum,abyyNum,afaNum,hipotiroidNum,prolakNum,behNum,peptikNum,kroniktinNum,akuttinNum,
  insülinNum,pankreastümNum,hipoparatNum,hiperkalsemikNum,hiperparatirodizmNum,apandisitNum,croNum,ülseratifNum,sirNum,raNum,sifNum,turNum,sjögNum,lupusNum,talasNum,demirNum,hipocaNum,hiperkaNum,medfevNum,romatoNum,henochNum,ensefNum,ydmenNum,
  yetmenNum, kawaNum,tempNum , skleroNum, tüberNum , hiperNum , kalpNum , diyaNum, lenfoNum,monoNum,refNum,brusNum,wegNum,rtaNum,hepaNum,kardiyojenikNum,hipovolemikNum,obstrüktifNum,nefritikNum,nefrotikNum,triküspitstenozNum,üsyNum,kibaNum,kalptamponNum,
  pkosNum,febrilkonNum,guttNum,çölyakkNum,kaudaNum,septikartNum,myelomNum,uyuzNum,başbitiNum,gövdebitNum,kasıkbitNum,böcekNum,kutanözNum,kızıllNum,faranjittNum,nekrotizanfasiittNum,koleraaNum,iyeeNum,eheccNum,shigellaaNum,böbrektaşıhastalıkkNum,
  gisşarbNum,acşarbNum,derişarbNum,pnömoniiNum,salNum,tifNum,epiglottitis,epiglottitiss,epiglottitissNum,difteri,difterii,difteriiNum,boğmaca,boğmacaa,boğmacaaNum,virallarenjit,virallarenjitt,virallarenjittNum,
  laringomalazi,laringomalazii,laringomalaziiNum,subglottikstenoz,subglottikstenozz,subglottikstenozzNum,larengealweb,larengealwebb,larengealwebbNum,laringosel,laringosell,laringosellNum,af,aff,affNum,vf,vff,vffNum,
  ky,kyy,kyyNum,myokardittNum,myokarditt,myokardit,akutpankreatit, akutpankreatitt,akutpankreatittNum,enterobiusvermicularis,enterobiusvermiculariss,enterobiusvermicularissNum, epilepsi, epilepsiiNum, epilepsii ;
  var trichuristrichura, trichuristrichuraa, trichuristrichuraaNum,astım,astımm,astımmNum,vajinoz,vajinozz,vajinozzNum,reye,reyee,reyeeNum,kızamık, kızamıkk, kızamıkkNum ,aam,aamm,aammNum,infektifendokardit,infektifendokarditt,infektifendokarditNum,
  çinkoeksikliği,çinkoeksikliğii,çinkoeksikliğiiNum,sıtma,sıtmaa,sıtmaaNum,migren,migrenList, migrenNum,liddlesendromu,liddlesendromuList,liddlesendromuNum,gordonsendromu,gordonsendromuList,gordonsendromuNum,feokromositoma,
  feokromositomaList,feokromositomaNum,barttersendromu,barttersendromuList,barttersendromuNum,gitelmansendromu,gitelmansendromuList,gitelmansendromuNum,glokom,glokomList,glokomNum,ttp,ttpList,ttpNum;

  ttp = document.getElementById("ttp");
  ttpList = ttp.getElementsByTagName("li");
  ttpNum = 0;

  for (var i = 0; i < ttpList.length; i++) {
    if (ttpList[i].style.color == "maroon") {
      ttpNum++;
    }
  }

  glokom = document.getElementById("glokom");
  glokomList = glokom.getElementsByTagName("li");
  glokomNum = 0;

  for (var i = 0; i < glokomList.length; i++) {
    if (glokomList[i].style.color == "maroon") {
      glokomNum++;
    }
  }

  barttersendromu = document.getElementById("barttersendromu");
  barttersendromuList = barttersendromu.getElementsByTagName("li");
  barttersendromuNum = 0;

  for (var i = 0; i < barttersendromuList.length; i++) {
    if (barttersendromuList[i].style.color == "maroon") {
      barttersendromuNum++;
    }
  }

  gitelmansendromu = document.getElementById("gitelmansendromu");
gitelmansendromuList = gitelmansendromu.getElementsByTagName("li");
gitelmansendromuNum = 0;

for (var i = 0; i < gitelmansendromuList.length; i++) {
  if (gitelmansendromuList[i].style.color == "maroon") {
    gitelmansendromuNum++;
  }
}

  feokromositoma = document.getElementById("feokromositoma");
feokromositomaList = feokromositoma.getElementsByTagName("li");
feokromositomaNum = 0;

for (var i = 0; i < feokromositomaList.length; i++) {
  if (feokromositomaList[i].style.color == "maroon") {
    feokromositomaNum++;
  }
}


  gordonsendromu = document.getElementById("gordonsendromu");
  gordonsendromuList = gordonsendromu.getElementsByTagName("li");
  gordonsendromuNum = 0;

  for (var i = 0; i < gordonsendromuList.length; i++) {
    if (gordonsendromuList[i].style.color == "maroon") {
      gordonsendromuNum++;
    }
  }


  liddlesendromu = document.getElementById("liddlesendromu");
liddlesendromuList = liddlesendromu.getElementsByTagName("li");
liddlesendromuNum = 0;

for (var i = 0; i < liddlesendromuList.length; i++) {
  if (liddlesendromuList[i].style.color == "maroon") {
    liddlesendromuNum++;
  }
}

  migren = document.getElementById("migren");
  migrenList = migren.getElementsByTagName("li");
  migrenNum = 0;

  for (var i = 0; i < migrenList.length; i++) {
    if (migrenList[i].style.color == "maroon") {
      migrenNum++;
    }
  }

  akutrömatizmalateş = document.getElementById("akutrömatizmalateş");
  akutrömatizmalateşList = akutrömatizmalateş.getElementsByTagName("li");
  akutrömatizmalateşNum = 0;
  for (var i = 0; i < akutrömatizmalateşList.length; i++) {
    if (akutrömatizmalateşList[i].style.color == "maroon") {
      akutrömatizmalateşNum++;
    }
  }

  sıtma = document.getElementById("sıtma");
  sıtmaa = sıtma.getElementsByTagName("li");
  sıtmaaNum = 0;

  for (var i = 0; i < sıtmaa.length; i++) {
    if (sıtmaa[i].style.color == "maroon" ) {
      sıtmaaNum ++ ;
    }
    else {
    }
  }

  çinkoeksikliği = document.getElementById("çinkoeksikliği");
  çinkoeksikliğii = çinkoeksikliği.getElementsByTagName("li");
  çinkoeksikliğiiNum = 0;

  for (var i = 0; i < çinkoeksikliğii.length; i++) {
    if (çinkoeksikliğii[i].style.color == "maroon" ) {
      çinkoeksikliğiiNum ++ ;
    }
    else {
    }
  }

  infektifendokardit = document.getElementById("infektifendokardit");
  infektifendokarditt = infektifendokardit.getElementsByTagName("li");
  infektifendokardittNum = 0;

  for (var i = 0; i < infektifendokarditt.length; i++) {
    if (infektifendokarditt[i].style.color == "maroon" ) {
      infektifendokardittNum ++ ;
    }
    else {
    }
  }

  aam = document.getElementById("aam");
  aamm = aam.getElementsByTagName("li");
  aammNum = 0;

  for (var i = 0; i < aamm.length; i++) {
    if (aamm[i].style.color == "maroon" ) {
      aammNum ++ ;
    }
    else {
    }
  }

  kızamık = document.getElementById("kızamık");
  kızamıkk = kızamık.getElementsByTagName("li");
  kızamıkkNum = 0;

  for (var i = 0; i < kızamıkk.length; i++) {
    if (kızamıkk[i].style.color == "maroon" ) {
      kızamıkkNum ++ ;
    }
    else {
    }
  }

  reye = document.getElementById("reye");
  reyee = reye.getElementsByTagName("li");
  reyeeNum = 0;

  for (var i = 0; i < reyee.length; i++) {
    if (reyee[i].style.color == "maroon" ) {
      reyeeNum ++ ;
    }
    else {
    }
  }

  vajinoz = document.getElementById("vajinoz");
  vajinozz = vajinoz.getElementsByTagName("li");
  vajinozzNum = 0;

  for (var i = 0; i < vajinozz.length; i++) {
    if (vajinozz[i].style.color == "maroon" ) {
      vajinozzNum ++ ;
    }
    else {
    }
  }

  astım = document.getElementById("astım");
  astımm = astım.getElementsByTagName("li");
  astımmNum = 0;

  for (var i = 0; i < astımm.length; i++) {
    if (astımm[i].style.color == "maroon" ) {
      astımmNum ++ ;
    }
    else {
    }
  }

  trichuristrichura = document.getElementById("trichuristrichura");
  trichuristrichuraa = trichuristrichura.getElementsByTagName("li");
  trichuristrichuraaNum = 0;

  for (var i = 0; i < trichuristrichuraa.length; i++) {
    if (trichuristrichuraa[i].style.color == "maroon" ) {
      trichuristrichuraaNum ++ ;
    }
    else {
    }
  }

  epilepsi = document.getElementById("epilepsi");
  epilepsii = epilepsi.getElementsByTagName("li");
  epilepsiiNum = 0;

  for (var i = 0; i < epilepsii.length; i++) {
    if (epilepsii[i].style.color == "maroon" ) {
      epilepsiiNum ++ ;
    }
    else {
    }
  }

  enterobiusvermicularis = document.getElementById("enterobiusvermicularis");
  enterobiusvermiculariss = enterobiusvermicularis.getElementsByTagName("li");
  enterobiusvermicularissNum = 0;

  for (var i = 0; i < enterobiusvermiculariss.length; i++) {
    if (enterobiusvermiculariss[i].style.color == "maroon" ) {
      enterobiusvermicularissNum ++ ;
    }
    else {
    }
  }

  akutpankreatit = document.getElementById("akutpankreatit");
  akutpankreatitt = akutpankreatit.getElementsByTagName("li");
  akutpankreatittNum = 0;

  for (var i = 0; i < akutpankreatitt.length; i++) {
    if (akutpankreatitt[i].style.color == "maroon" ) {
      akutpankreatittNum ++ ;
    }
    else {
    }
  }

  myokardit = document.getElementById("myokardit");
  myokarditt = myokardit.getElementsByTagName("li");
  myokardittNum = 0;

  for (var i = 0; i < myokarditt.length; i++) {
    if (myokarditt[i].style.color == "maroon" ) {
      myokardittNum ++ ;
    }
    else {
    }
  }

  ky = document.getElementById("ky");
  kyy = ky.getElementsByTagName("li");
  kyyNum = 0;

  for (var i = 0; i < kyy.length; i++) {
    if (kyy[i].style.color == "maroon" ) {
      kyyNum ++ ;
    }
    else {
    }
  }

  vf = document.getElementById("vf");
  vff = vf.getElementsByTagName("li");
  vffNum = 0;

  for (var i = 0; i < vff.length; i++) {
    if (vff[i].style.color == "maroon" ) {
      vffNum ++ ;
    }
    else {
    }
  }

  af = document.getElementById("af");
  aff = af.getElementsByTagName("li");
  affNum = 0;

  for (var i = 0; i < aff.length; i++) {
    if (aff[i].style.color == "maroon" ) {
      affNum ++ ;
    }
    else {
    }
  }

  laringosel = document.getElementById("laringosel");
  laringosell = laringosel.getElementsByTagName("li");
  laringosellNum = 0;

  for (var i = 0; i < laringosell.length; i++) {
    if (laringosell[i].style.color == "maroon" ) {
      laringosellNum ++ ;
    }
    else {
    }
  }

  larengealweb = document.getElementById("larengealweb");
  larengealwebb = larengealweb.getElementsByTagName("li");
  larengealwebbNum = 0;

  for (var i = 0; i < larengealwebb.length; i++) {
    if (larengealwebb[i].style.color == "maroon" ) {
      larengealwebbNum ++ ;
    }
    else {
    }
  }

  subglottikstenoz = document.getElementById("subglottikstenoz");
  subglottikstenozz = subglottikstenoz.getElementsByTagName("li");
  subglottikstenozzNum = 0;

  for (var i = 0; i < subglottikstenozz.length; i++) {
    if (subglottikstenozz[i].style.color == "maroon" ) {
      subglottikstenozzNum ++ ;
    }
    else {
    }
  }

  laringomalazi = document.getElementById("laringomalazi");
  laringomalazii = laringomalazi.getElementsByTagName("li");
  laringomalaziiNum = 0;

  for (var i = 0; i < laringomalazii.length; i++) {
    if (laringomalazii[i].style.color == "maroon" ) {
      laringomalaziiNum ++ ;
    }
    else {
    }
  }

  virallarenjit = document.getElementById("virallarenjit");
  virallarenjitt = virallarenjit.getElementsByTagName("li");
  virallarenjittNum = 0;

  for (var i = 0; i < virallarenjitt.length; i++) {
    if (virallarenjitt[i].style.color == "maroon" ) {
      virallarenjittNum ++ ;
    }
    else {
    }
  }

  boğmaca = document.getElementById("boğmaca");
  boğmacaa = boğmaca.getElementsByTagName("li");
  boğmacaaNum = 0;

  for (var i = 0; i < boğmacaa.length; i++) {
    if (boğmacaa[i].style.color == "maroon" ) {
      boğmacaaNum ++ ;
    }
    else {
    }
  }

  difteri = document.getElementById("difteri");
  difterii = difteri.getElementsByTagName("li");
  difteriiNum = 0;

  for (var i = 0; i < difterii.length; i++) {
    if (difterii[i].style.color == "maroon" ) {
      difteriiNum ++ ;
    }
    else {
    }
  }

  epiglottitis = document.getElementById("epiglottitis");
  epiglottitiss = epiglottitis.getElementsByTagName("li");
  epiglottitissNum = 0;

  for (var i = 0; i < epiglottitiss.length; i++) {
    if (epiglottitiss[i].style.color == "maroon" ) {
      epiglottitissNum ++ ;
    }
    else {
    }
  }

  bakteriyeltrakeit = document.getElementById("bakteriyeltrakeit");
  bakteriyeltrakeitt = bakteriyeltrakeit.getElementsByTagName("li");
  bakteriyeltrakeittNum = 0;

  for (var i = 0; i < bakteriyeltrakeitt.length; i++) {
    if (bakteriyeltrakeitt[i].style.color == "maroon" ) {
      bakteriyeltrakeittNum ++ ;
    }
    else {
    }
  }

  krup = document.getElementById("krup");
  krupp = krup.getElementsByTagName("li");
  kruppNum = 0;

  for (var i = 0; i < krupp.length; i++) {
    if (krupp[i].style.color == "maroon" ) {
      kruppNum ++ ;
    }
    else {
    }
  }

  temporalartirit = document.getElementById("temporalartirit");
  skleroderma = document.getElementById("skleroderma");
  tüberkülöz = document.getElementById("tüberkülöz");
  hiperkalsemi = document.getElementById("hiperkalsemi");
  kalpkrizi = document.getElementById("disease0");
  diyabet = document.getElementById("disease1");
  lenfoma = document.getElementById("disease2");
  mononucleosis = document.getElementById("disease3");
  reflü = document.getElementById("disease4");
  bruselloz = document.getElementById("bruselloz");
  wegener = document.getElementById("granulomatosiswithpolyangiitis");
  renaltübülerasidoz = document.getElementById("renaltübülerasidoz");
  hepatita = document.getElementById("hepatita");
  kawasaki = document.getElementById("kawasaki");
  yetişkinmenenjiti = document.getElementById("yetişkinmenenjiti");
  yenidoğanmenenjiti = document.getElementById("yenidoğanmenenjiti");
  ensefalit = document.getElementById("ensefalit");
  hsp = document.getElementById("hsp");
  romatoidartirit = document.getElementById("romatoidartirit");
  fmf = document.getElementById("fmf");
  hiperkalemi = document.getElementById("hiperkalemi");
  hipokalsemi = document.getElementById("hipokalsemi");
  dea = document.getElementById("dea");
  talasemi = document.getElementById("talasemi");
  sle = document.getElementById("sle");
  sjögren = document.getElementById("sjögren");
  turner = document.getElementById("turner");
  sifiliz = document.getElementById("sifiliz");
  ara = document.getElementById("ara");
  siroz = document.getElementById("siroz");
  ük = document.getElementById("ük");
  crohn = document.getElementById("crohn");
  akutapandisit = document.getElementById("akutapandisit");
  primerhiperparatiroidizm = document.getElementById("primerhiperparatiroidizm");
  hiperkalsemikkriz = document.getElementById("hiperkalsemikkriz");
  hipoparatiroidizm = document.getElementById("hipoparatiroidizm");
  pankreastümörleri = document.getElementById("pankreastümörleri");
  insülinoma = document.getElementById("insülinoma");
  akuttin = document.getElementById("akuttin");
  kroniktin = document.getElementById("kroniktin");
  peptikülser = document.getElementById("peptikülser");
  behcet = document.getElementById("behcet");
  prolaktinoma = document.getElementById("prolaktinoma");
  hipotiroidi = document.getElementById("hipotiroidi");
  afas = document.getElementById("afas");
  aby = document.getElementById("aby");
  kby = document.getElementById("kby");
  addison = document.getElementById("addison");
  cushing = document.getElementById("cushing");
  felç = document.getElementById("felç");
  pah = document.getElementById("pah");
  dvthastalık = document.getElementById("dvthastalık");
  horner = document.getElementById("horner");
  pnömotorax = document.getElementById("pnömotorax");
  pulmoneremboli = document.getElementById("pulmoneremboli");
  hhod = document.getElementById("hhod");
  dka = document.getElementById("dka");
  mitralstenoz = document.getElementById("mitralstenoz");
  febrilnötropeni = document.getElementById("febrilnötropeni");
  nörojenikşok = document.getElementById("nörojenikşok");
  septikşok = document.getElementById("septikşok");
  anaflaksi = document.getElementById("anaflaksi");
  kardiyojenikşok = document.getElementById("kardiyojenikşok");
  hipovolemikşok = document.getElementById("hipovolemikşok");
  obstrüktifşok = document.getElementById("obstrüktifşok");
  nefritiksendrom = document.getElementById("nefritiksendrom");
  nefrotiksendrom = document.getElementById("nefrotiksendrom");
  triküspitstenozu = document.getElementById("triküspitstenozu");
  üsye = document.getElementById("üsye");
  kibas = document.getElementById("kibas");
  kalptamponadı = document.getElementById("kalptamponadı");
  polikistikoversendromu = document.getElementById("polikistikoversendromu");
  febrilkonvülzyon = document.getElementById("febrilkonvülzyon");
  gut = document.getElementById("gut");
  çölyak = document.getElementById("çölyak");
  kaudaequina = document.getElementById("kaudaequina");
  septikartrit = document.getElementById("septikartrit");
  multiplemyelom = document.getElementById("multiplemyelom");
  uyuz = document.getElementById("uyuz");
  başbitlenmesi = document.getElementById("başbitlenmesi");
  gövdebitlenmesi = document.getElementById("gövdebitlenmesi");
  kasıkbitlenmesi = document.getElementById("kasıkbitlenmesi");
  böcekısırması = document.getElementById("böcekısırması");
  kutanözlanşmanyazis = document.getElementById("kutanözlanşmanyazis");
  kızıl = document.getElementById("kızıl");
  faranjit = document.getElementById("faranjit");
  nekrotizanfasiit = document.getElementById("nekrotizanfasiit");
  kolera = document.getElementById("kolera");
  iye = document.getElementById("iye");
  ehec = document.getElementById("ehec");
  shigella = document.getElementById("shigella");
  böbrektaşıhastalık = document.getElementById("böbrektaşıhastalık");
  gisşarbonu = document.getElementById("gisşarbonu");
  akciğerşarbonu = document.getElementById("akciğerşarbonu");
  derişarbonu = document.getElementById("derişarbonu");
  pnömoni = document.getElementById("pnömoni");
  salmonellagastroenteriti = document.getElementById("salmonellagastroenteriti");
  tifo = document.getElementById("tifo");

  temp = temporalartirit.getElementsByTagName("li");
  sklero = skleroderma.getElementsByTagName("li");
  tüber = tüberkülöz.getElementsByTagName("li");
  hiper = hiperkalsemi.getElementsByTagName("li");
  kalp = kalpkrizi.getElementsByTagName("li");
  diya = diyabet.getElementsByTagName("li");
  lenfo = lenfoma.getElementsByTagName("li");
  mono = mononucleosis.getElementsByTagName("li");
  ref = reflü.getElementsByTagName("li");
  brus = bruselloz.getElementsByTagName("li");
  weg = wegener.getElementsByTagName("li");
  rta = renaltübülerasidoz.getElementsByTagName("li");
  hepa = hepatita.getElementsByTagName("li");
  kawa = kawasaki.getElementsByTagName("li");
  yetmen = yetişkinmenenjiti.getElementsByTagName("li");
  ydmen = yenidoğanmenenjiti.getElementsByTagName("li");
  ensef = ensefalit.getElementsByTagName("li");
  henoch = hsp.getElementsByTagName("li");
  romato = romatoidartirit.getElementsByTagName("li");
  medfev = fmf.getElementsByTagName("li");
  hiperka = hiperkalemi.getElementsByTagName("li");
  hipoca = hipokalsemi.getElementsByTagName("li");
  demir = dea.getElementsByTagName("li");
  talas = talasemi.getElementsByTagName("li");
  lupus = sle.getElementsByTagName("li");
  sjög = sjögren.getElementsByTagName("li");
  tur = turner.getElementsByTagName("li");
  sif = sifiliz.getElementsByTagName("li");
  ra = ara.getElementsByTagName("li");
  sir = siroz.getElementsByTagName("li");
  ülseratif = ük.getElementsByTagName("li");
  cro = crohn.getElementsByTagName("li");
  apandisit = akutapandisit.getElementsByTagName("li");
  hiperparatirodizm = primerhiperparatiroidizm.getElementsByTagName("li");
  hiperkalsemik = hiperkalsemikkriz.getElementsByTagName("li");
  hipoparat = hipoparatiroidizm.getElementsByTagName("li");
  pankreastüm = pankreastümörleri.getElementsByTagName("li");
  insülin = insülinoma.getElementsByTagName("li");
  akutti = akuttin.getElementsByTagName("li");
  kronikti = kroniktin.getElementsByTagName("li");
  peptik = peptikülser.getElementsByTagName("li");
  beh = behcet.getElementsByTagName("li");
  prolak = prolaktinoma.getElementsByTagName("li");
  hipotiroid = hipotiroidi.getElementsByTagName("li");
  afa = afas.getElementsByTagName("li");
  abyy = aby.getElementsByTagName("li");
  kbyy = kby.getElementsByTagName("li");
  addis = addison.getElementsByTagName("li");
  cushin = cushing.getElementsByTagName("li");
  fel = felç.getElementsByTagName("li");
  pahX = pah.getElementsByTagName("li");
  dvtX = dvthastalık.getElementsByTagName("li");
  horne = horner.getElementsByTagName("li");
  pnömotora = pnömotorax.getElementsByTagName("li");
  pulmonerembo = pulmoneremboli.getElementsByTagName("li");
  hho = hhod.getElementsByTagName("li");
  dkaX = dka.getElementsByTagName("li");
  mitral = mitralstenoz.getElementsByTagName("li");
  febrilnötro = febrilnötropeni.getElementsByTagName("li");
  nörojenik = nörojenikşok.getElementsByTagName("li");
  septik = septikşok.getElementsByTagName("li");
  anaf = anaflaksi.getElementsByTagName("li");
  kardiyojenik = kardiyojenikşok.getElementsByTagName("li");
  hipovolemik = hipovolemikşok.getElementsByTagName("li");
  obstrüktif = obstrüktifşok.getElementsByTagName("li");
  nefritik = nefritiksendrom.getElementsByTagName("li");
  nefrotik = nefrotiksendrom.getElementsByTagName("li");
  triküspitstenoz = triküspitstenozu.getElementsByTagName("li");
  üsy = üsye.getElementsByTagName("li");
  kiba = kibas.getElementsByTagName("li");
  kalptampon = kalptamponadı.getElementsByTagName("li");
  pkos = polikistikoversendromu.getElementsByTagName("li");
  febrilkon = febrilkonvülzyon.getElementsByTagName("li");
  gutt = gut.getElementsByTagName("li");
  çölyakk = çölyak.getElementsByTagName("li");
  kauda = kaudaequina.getElementsByTagName("li");
  septikart = septikartrit.getElementsByTagName("li");
  myelom = multiplemyelom.getElementsByTagName("li");
  uyuzz = uyuz.getElementsByTagName("li");
  başbiti = başbitlenmesi.getElementsByTagName("li");
  gövdebit = gövdebitlenmesi.getElementsByTagName("li");
  kasıkbit = kasıkbitlenmesi.getElementsByTagName("li");
  böcek = böcekısırması.getElementsByTagName("li");
  kutanöz = kutanözlanşmanyazis.getElementsByTagName("li");
  kızıll = kızıl.getElementsByTagName("li");
  faranjitt = faranjit.getElementsByTagName("li");
  nekrotizanfasiitt = nekrotizanfasiit.getElementsByTagName("li");
  koleraa = kolera.getElementsByTagName("li");
  iyee = iye.getElementsByTagName("li");
  ehecc = ehec.getElementsByTagName("li");
  shigellaa = shigella.getElementsByTagName("li");
  böbrektaşıhastalıkk = böbrektaşıhastalık.getElementsByTagName("li");
  gisşarb = gisşarbonu.getElementsByTagName("li");
  acşarb = akciğerşarbonu.getElementsByTagName("li");
  derişarb = derişarbonu.getElementsByTagName("li");
  pnömonii = pnömoni.getElementsByTagName("li");
  sal = salmonellagastroenteriti.getElementsByTagName("li");
  tif = tifo.getElementsByTagName("li");

  tifNum = 0;
  salNum = 0;
  tempNum = 0 ;
  skleroNum = 0;
  tüberNum = 0;
  hiperNum = 0;
  kalpNum = 0;
  diyaNum = 0 ;
  lenfoNum = 0;
  monoNum = 0;
  refNum = 0;
  brusNum = 0;
  wegNum = 0;
  rtaNum = 0;
  hepaNum = 0;
  kawaNum = 0;
  yetmenNum = 0;
  ydmenNum = 0;
  ensefNum = 0;
  henochNum = 0;
  romatoNum = 0;
  medfevNum = 0;
  hiperkaNum = 0;
  hipocaNum = 0;
  demirNum = 0;
  talasNum = 0;
  lupusNum = 0;
  sjögNum = 0;
  turNum = 0;
  sifNum = 0;
  raNum = 0;
  sirNum = 0;
  ülseratifNum = 0;
  croNum = 0;
  apandisitNum = 0;
  hiperparatirodizmNum = 0;
  hiperkalsemikNum = 0;
  hipoparatNum = 0;
  pankreastümNum = 0;
  insülinNum = 0;
  akuttinNum = 0;
  kroniktinNum = 0;
  peptikNum = 0;
  behNum = 0;
  prolakNum = 0;
  hipotiroidNum = 0;
  afaNum = 0;
  abyyNum = 0;
  kbyyNum = 0;
  addisNum = 0;
  cushinNum = 0;
  felNum = 0;
  pahXNum = 0;
  dvtXNum = 0;
  horneNum = 0;
  pnömotoraNum = 0;
  pulmoneremboNum = 0;
  hhoNum = 0;
  dkaXNum = 0;
  mitralNum = 0;
  febrilnötroNum = 0;
  nörojenikNum = 0;
  septikNum = 0;
  anafNum = 0;
  kardiyojenikNum = 0;
  hipovolemikNum = 0;
  obstrüktifNum = 0;
  nefritikNum = 0;
  nefrotikNum = 0;
  triküspitstenozNum = 0;
  üsyNum = 0;
  kibaNum = 0;
  kalptamponNum = 0;
  pkosNum = 0;
  febrilkonNum = 0;
  guttNum = 0;
  çölyakkNum = 0;
  kaudaNum = 0;
  septikartNum = 0;
  myelomNum = 0;
  uyuzNum = 0;
  başbitiNum = 0;
  gövdebitNum = 0;
  kasıkbitNum = 0;
  böcekNum = 0;
  kutanözNum = 0;
  kızıllNum = 0;
  faranjittNum = 0;
  nekrotizanfasiittNum = 0;
  koleraaNum = 0;
  iyeeNum = 0;
  eheccNum = 0;
  shigellaaNum = 0;
  böbrektaşıhastalıkkNum = 0;
  gisşarbNum = 0;
  acşarbNum = 0;
  derişarbNum = 0;
  pnömoniiNum = 0;

  for (var i = 0; i < tif.length; i++) {
    if (tif[i].style.color == "maroon" ) {
      tifNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < sal.length; i++) {
    if (sal[i].style.color == "maroon" ) {
      salNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < pnömonii.length; i++) {
    if (pnömonii[i].style.color == "maroon" ) {
      pnömoniiNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < derişarb.length; i++) {
    if (derişarb[i].style.color == "maroon" ) {
      derişarbNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < acşarb.length; i++) {
    if (acşarb[i].style.color == "maroon" ) {
      acşarbNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < gisşarb.length; i++) {
    if (gisşarb[i].style.color == "maroon" ) {
      gisşarbNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < böbrektaşıhastalıkk.length; i++) {
    if (böbrektaşıhastalıkk[i].style.color == "maroon" ) {
      böbrektaşıhastalıkkNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < shigellaa.length; i++) {
    if (shigellaa[i].style.color == "maroon" ) {
      shigellaaNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < ehecc.length; i++) {
    if (ehecc[i].style.color == "maroon" ) {
      eheccNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < iyee.length; i++) {
    if (iyee[i].style.color == "maroon" ) {
      iyeeNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < koleraa.length; i++) {
    if (koleraa[i].style.color == "maroon" ) {
      koleraaNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < nekrotizanfasiitt.length; i++) {
    if (nekrotizanfasiitt[i].style.color == "maroon" ) {
      nekrotizanfasiittNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < faranjitt.length; i++) {
    if (faranjitt[i].style.color == "maroon" ) {
      faranjittNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < kızıll.length; i++) {
    if (kızıll[i].style.color == "maroon" ) {
      kızıllNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < kutanöz.length; i++) {
    if (kutanöz[i].style.color == "maroon" ) {
      kutanözNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < böcek.length; i++) {
    if (böcek[i].style.color == "maroon" ) {
      böcekNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < kasıkbit.length; i++) {
    if (kasıkbit[i].style.color == "maroon" ) {
      kasıkbitNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < gövdebit.length; i++) {
    if (gövdebit[i].style.color == "maroon" ) {
      gövdebitNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < başbiti.length; i++) {
    if (başbiti[i].style.color == "maroon" ) {
      başbitiNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < uyuzz.length; i++) {
    if (uyuzz[i].style.color == "maroon" ) {
      uyuzNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < myelom.length; i++) {
    if (myelom[i].style.color == "maroon" ) {
      myelomNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < septikart.length; i++) {
    if (septikart[i].style.color == "maroon" ) {
      septikartNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < kauda.length; i++) {
    if (kauda[i].style.color == "maroon" ) {
      kaudaNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < çölyakk.length; i++) {
    if (çölyakk[i].style.color == "maroon" ) {
      çölyakkNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < gutt.length; i++) {
    if (gutt[i].style.color == "maroon" ) {
      guttNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < febrilkon.length; i++) {
    if (febrilkon[i].style.color == "maroon" ) {
      febrilkonNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < pkos.length; i++) {
    if (pkos[i].style.color == "maroon" ) {
      pkosNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < kalptampon.length; i++) {
    if (kalptampon[i].style.color == "maroon" ) {
      kalptamponNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < kiba.length; i++) {
    if (kiba[i].style.color == "maroon" ) {
      kibaNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < üsy.length; i++) {
    if (üsy[i].style.color == "maroon" ) {
      üsyNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < triküspitstenoz.length; i++) {
    if (triküspitstenoz[i].style.color == "maroon" ) {
      triküspitstenozNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < nefrotik.length; i++) {
    if (nefrotik[i].style.color == "maroon" ) {
      nefrotikNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < nefritik.length; i++) {
    if (nefritik[i].style.color == "maroon" ) {
      nefritikNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < obstrüktif.length; i++) {
    if (obstrüktif[i].style.color == "maroon" ) {
      obstrüktifNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < hipovolemik.length; i++) {
    if (hipovolemik[i].style.color == "maroon" ) {
      hipovolemikNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < kardiyojenik.length; i++) {
    if (kardiyojenik[i].style.color == "maroon" ) {
      kardiyojenikNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < anaf.length; i++) {
    if (anaf[i].style.color == "maroon" ) {
      anafNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < septik.length; i++) {
    if (septik[i].style.color == "maroon" ) {
      septikNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < nörojenik.length; i++) {
    if (nörojenik[i].style.color == "maroon" ) {
      nörojenikNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < febrilnötro.length; i++) {
    if (febrilnötro[i].style.color == "maroon" ) {
      febrilnötroNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < mitral.length; i++) {
    if (mitral[i].style.color == "maroon" ) {
      mitralNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < dkaX.length; i++) {
    if (dkaX[i].style.color == "maroon" ) {
      dkaXNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < hho.length; i++) {
    if (hho[i].style.color == "maroon" ) {
      hhoNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < pulmonerembo.length; i++) {
    if (pulmonerembo[i].style.color == "maroon" ) {
      pulmoneremboNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < pnömotora.length; i++) {
    if (pnömotora[i].style.color == "maroon" ) {
      pnömotoraNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < horne.length; i++) {
    if (horne[i].style.color == "maroon" ) {
      horneNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < dvtX.length; i++) {
    if (dvtX[i].style.color == "maroon" ) {
      dvtXNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < pahX.length; i++) {
    if (pahX[i].style.color == "maroon" ) {
      pahXNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < fel.length; i++) {
    if (fel[i].style.color == "maroon" ) {
      felNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < cushin.length; i++) {
    if (cushin[i].style.color == "maroon" ) {
      cushinNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < addis.length; i++) {
    if (addis[i].style.color == "maroon" ) {
      addisNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < kbyy.length; i++) {
    if (kbyy[i].style.color == "maroon" ) {
      kbyyNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < abyy.length; i++) {
    if (abyy[i].style.color == "maroon" ) {
      abyyNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < afa.length; i++) {
    if (afa[i].style.color == "maroon" ) {
      afaNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < hipotiroid.length; i++) {
    if (hipotiroid[i].style.color == "maroon" ) {
      hipotiroidNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < prolak.length; i++) {
    if (prolak[i].style.color == "maroon" ) {
      prolakNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < beh.length; i++) {
    if (beh[i].style.color == "maroon" ) {
      behNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < peptik.length; i++) {
    if (peptik[i].style.color == "maroon" ) {
      peptikNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < kronikti.length; i++) {
    if (kronikti[i].style.color == "maroon" ) {
      kroniktinNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < akutti.length; i++) {
    if (akutti[i].style.color == "maroon" ) {
      akuttinNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < insülin.length; i++) {
    if (insülin[i].style.color == "maroon" ) {
      insülinNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < pankreastüm.length; i++) {
    if (pankreastüm[i].style.color == "maroon" ) {
      pankreastümNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < hipoparat.length; i++) {
    if (hipoparat[i].style.color == "maroon" ) {
      hipoparatNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < hiperkalsemik.length; i++) {
    if (hiperkalsemik[i].style.color == "maroon" ) {
      hiperkalsemikNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < hiperparatirodizm.length; i++) {
    if (hiperparatirodizm[i].style.color == "maroon" ) {
      hiperparatirodizmNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < apandisit.length; i++) {
    if (apandisit[i].style.color == "maroon" ) {
      apandisitNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < cro.length; i++) {
    if (cro[i].style.color == "maroon" ) {
      croNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < ülseratif.length; i++) {
    if (ülseratif[i].style.color == "maroon" ) {
      ülseratifNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < sir.length; i++) {
    if (sir[i].style.color == "maroon" ) {
      sirNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < ra.length; i++) {
    if (ra[i].style.color == "maroon" ) {
      raNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < sif.length; i++) {
    if (sif[i].style.color == "maroon" ) {
      sifNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < tur.length; i++) {
    if (tur[i].style.color == "maroon" ) {
      turNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < sjög.length; i++) {
    if (sjög[i].style.color == "maroon" ) {
      sjögNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < lupus.length; i++) {
    if (lupus[i].style.color == "maroon" ) {
      lupusNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < talas.length; i++) {
    if (talas[i].style.color == "maroon" ) {
      talasNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < demir.length; i++) {
    if (demir[i].style.color == "maroon" ) {
      demirNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < hipoca.length; i++) {
    if (hipoca[i].style.color == "maroon" ) {
      hipocaNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < hiperka.length; i++) {
    if (hiperka[i].style.color == "maroon" ) {
      hiperkaNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < medfev.length; i++) {
    if (medfev[i].style.color == "maroon" ) {
      medfevNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < romato.length; i++) {
    if (romato[i].style.color == "maroon" ) {
      romatoNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < henoch.length; i++) {
    if (henoch[i].style.color == "maroon" ) {
      henochNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < ensef.length; i++) {
    if (ensef[i].style.color == "maroon" ) {
      ensefNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < ydmen.length; i++) {
    if (ydmen[i].style.color == "maroon" ) {
      ydmenNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < yetmen.length; i++) {
    if (yetmen[i].style.color == "maroon" ) {
      yetmenNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < kawa.length; i++) {
    if (kawa[i].style.color == "maroon" ) {
      kawaNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < temp.length; i++) {
    if (temp[i].style.color == "maroon" ) {
      tempNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < sklero.length; i++) {
    if(sklero[i].style.color == "maroon"){
      skleroNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < tüber.length; i++) {
    if(tüber[i].style.color == "maroon"){
      tüberNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < hiper.length; i++) {
    if(hiper[i].style.color == "maroon"){
      hiperNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < kalp.length; i++) {
    if(kalp[i].style.color == "maroon"){
      kalpNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < diya.length; i++) {
    if(diya[i].style.color == "maroon"){
      diyaNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < lenfo.length; i++) {
    if(lenfo[i].style.color == "maroon"){
      lenfoNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < mono.length; i++) {
    if(mono[i].style.color == "maroon"){
      monoNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < ref.length; i++) {
    if(ref[i].style.color == "maroon"){
      refNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < brus.length; i++) {
    if(brus[i].style.color == "maroon"){
      brusNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < weg.length; i++) {
    if(weg[i].style.color == "maroon"){
      wegNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < rta.length; i++) {
    if(rta[i].style.color == "maroon"){
      rtaNum ++ ;
    }
    else {
    }
  }
  for (var i = 0; i < hepa.length; i++) {
    if(hepa[i].style.color == "maroon"){
      hepaNum ++ ;
    }
    else {
    }
  }

var oralthrush,oralthrushList,oralthrushNum;
  oralthrush = document.getElementById("oralthrush");
oralthrushList = oralthrush.getElementsByTagName("li");
oralthrushNum = 0;
for (var i = 0; i < oralthrushList.length; i++) {
  if (oralthrushList[i].style.color == "maroon") {
    oralthrushNum++;
  }
}

var sıralama = [nörojenikNum,febrilnötroNum,mitralNum,dkaXNum,hhoNum,pulmoneremboNum,pnömotoraNum,horneNum,dvtXNum,pahXNum,felNum,cushinNum,addisNum,kbyyNum,abyyNum,afaNum,hipotiroidNum,prolakNum,behNum,peptikNum,kroniktinNum,akuttinNum,
  insülinNum,pankreastümNum,hipoparatNum,hiperkalsemikNum,hiperparatirodizmNum,apandisitNum,croNum,ülseratifNum,sirNum,raNum,sifNum,turNum,sjögNum,lupusNum,talasNum,demirNum,hipocaNum,hiperkaNum,medfevNum,romatoNum,henochNum,ensefNum,ydmenNum,
  yetmenNum,kawaNum, tempNum , skleroNum , tüberNum , hiperNum, kalpNum,diyaNum,lenfoNum,monoNum,refNum,brusNum,wegNum,rtaNum,hepaNum,kardiyojenikNum,anafNum,septikNum,hipovolemikNum,obstrüktifNum,nefritikNum,nefrotikNum,triküspitstenozNum,
  üsyNum,kibaNum,kalptamponNum,pkosNum,febrilkonNum,guttNum,çölyakkNum,kaudaNum,septikartNum,myelomNum,uyuzNum,başbitiNum,gövdebitNum,kasıkbitNum,böcekNum,kutanözNum,kızıllNum,faranjittNum,nekrotizanfasiittNum,koleraaNum,iyeeNum,eheccNum,
  shigellaaNum,böbrektaşıhastalıkkNum,gisşarbNum,acşarbNum,derişarbNum,pnömoniiNum,salNum,tifNum,kruppNum,bakteriyeltrakeittNum,epiglottitissNum,difteriiNum,boğmacaaNum,virallarenjittNum,laringomalaziiNum,subglottikstenozzNum,
  larengealwebbNum,laringosellNum,affNum,vffNum,kyyNum,myokardittNum,akutpankreatittNum,enterobiusvermicularissNum,epilepsiiNum, trichuristrichuraaNum,astımmNum,vajinozzNum,reyeeNum,kızamıkkNum,aammNum,infektifendokardittNum,
çinkoeksikliğiiNum,sıtmaaNum,akutrömatizmalateşNum,oralthrushNum,migrenNum,liddlesendromuNum,gordonsendromuNum,feokromositomaNum,barttersendromuNum,gitelmansendromuNum,glokomNum,ttpNum];


  sıralama.sort(function(a,b){return b - a});

  for (var i = 0; i < sıralama.length; i++) {
    if (sıralama[i] == ttpNum && ttpNum > 0) {
      ttp.style.display = "block";
      document.getElementById("mylist").appendChild(ttp);
    }
    if (ttpNum == 0) {
      ttp.style.display = "none";
    }
    if (sıralama[i] == glokomNum && glokomNum > 0) {
      glokom.style.display = "block";
      document.getElementById("mylist").appendChild(glokom);
    }
    if (glokomNum == 0) {
      glokom.style.display = "none";
    }
    if (sıralama[i] == gitelmansendromuNum && gitelmansendromuNum > 0) {
      gitelmansendromu.style.display = "block";
      document.getElementById("mylist").appendChild(gitelmansendromu);
    }
    if (gitelmansendromuNum == 0) {
      gitelmansendromu.style.display = "none";
    }
        if (sıralama[i] == barttersendromuNum && barttersendromuNum > 0) {
      barttersendromu.style.display = "block";
      document.getElementById("mylist").appendChild(barttersendromu);
    }
    if (barttersendromuNum == 0) {
      barttersendromu.style.display = "none";
    }
    if (sıralama[i] == liddlesendromuNum && liddlesendromuNum > 0) {
    liddlesendromu.style.display = "block";
    document.getElementById("mylist").appendChild(liddlesendromu);
    }
    if (liddlesendromuNum == 0) {
      liddlesendromu.style.display = "none";
    }
    if (sıralama[i] == gordonsendromuNum && gordonsendromuNum > 0) {
      gordonsendromu.style.display = "block";
      document.getElementById("mylist").appendChild(gordonsendromu);
    }
    if (gordonsendromuNum == 0) {
      gordonsendromu.style.display = "none";
    }
    if (sıralama[i] == feokromositomaNum && feokromositomaNum > 0) {
      feokromositoma.style.display = "block";
      document.getElementById("mylist").appendChild(feokromositoma);
    }
    if (feokromositomaNum == 0) {
      feokromositoma.style.display = "none";
    }
    if (sıralama[i] == migrenNum && migrenNum > 0) {
      migren.style.display = "block";
      document.getElementById("mylist").appendChild(migren);
    }
    if (migrenNum == 0) {
      migren.style.display = "none";
    }
    if (sıralama[i] == oralthrushNum && oralthrushNum > 0) {
      oralthrush.style.display = "block";
      document.getElementById("mylist").appendChild(oralthrush);
    }
    if (oralthrushNum == 0) {
      oralthrush.style.display = "none";
    }
    if (sıralama[i] == akutrömatizmalateşNum && akutrömatizmalateşNum > 0) {
      akutrömatizmalateş.style.display = "block";
      document.getElementById("mylist").appendChild(akutrömatizmalateş);
    }
    if (akutrömatizmalateşNum == 0) {
      akutrömatizmalateş.style.display = "none";
    }
    if (sıralama[i] == sıtmaaNum && sıtmaaNum > 0) {
      sıtma.style.display ="block";
      document.getElementById("mylist").appendChild(sıtma);
    }
    if (sıtmaaNum == 0) {
      sıtma.style.display ="none";
    }
    if (sıralama[i] == çinkoeksikliğiiNum && çinkoeksikliğiiNum > 0) {
      çinkoeksikliği.style.display ="block";
      document.getElementById("mylist").appendChild(çinkoeksikliği);
    }
    if (çinkoeksikliğiiNum == 0) {
      çinkoeksikliği.style.display ="none";
    }
    if (sıralama[i] == infektifendokardittNum && infektifendokardittNum > 0) {
      infektifendokardit.style.display ="block";
      document.getElementById("mylist").appendChild(infektifendokardit);
    }
    if (infektifendokardittNum == 0) {
      infektifendokardit.style.display ="none";
    }
    if (sıralama[i] == aammNum && aammNum > 0) {
      aam.style.display ="block";
      document.getElementById("mylist").appendChild(aam);
    }
    if (aammNum == 0) {
      aam.style.display ="none";
    }
    if (sıralama[i] == kızamıkkNum && kızamıkkNum > 0) {
      kızamık.style.display ="block";
      document.getElementById("mylist").appendChild(kızamık);
    }
    if (kızamıkkNum == 0) {
      kızamık.style.display ="none";
    }
    if (sıralama[i] == reyeeNum && reyeeNum > 0) {
      reye.style.display ="block";
      document.getElementById("mylist").appendChild(reye);
    }
    if (reyeeNum == 0) {
      reye.style.display ="none";
    }
    if (sıralama[i] == vajinozzNum && vajinozzNum > 0) {
      vajinoz.style.display ="block";
      document.getElementById("mylist").appendChild(vajinoz);
    }
    if (vajinozzNum == 0) {
      vajinoz.style.display ="none";
    }
    if (sıralama[i] == astımmNum && astımmNum > 0) {
      astım.style.display ="block";
      document.getElementById("mylist").appendChild(astım);
    }
    if (astımmNum == 0) {
      astım.style.display ="none";
    }
    if (sıralama[i] == trichuristrichuraaNum && trichuristrichuraaNum > 0) {
      trichuristrichura.style.display ="block";
      document.getElementById("mylist").appendChild(trichuristrichura);
    }
    if (trichuristrichuraaNum == 0) {
      trichuristrichura.style.display ="none";
    }
    if (sıralama[i] == epilepsiiNum && epilepsiiNum > 0) {
      epilepsi.style.display ="block";
      document.getElementById("mylist").appendChild(epilepsi);
    }
    if (epilepsiiNum == 0) {
      epilepsi.style.display ="none";
    }
    if (sıralama[i] == enterobiusvermicularissNum && enterobiusvermicularissNum > 0) {
      enterobiusvermicularis.style.display ="block";
      document.getElementById("mylist").appendChild(enterobiusvermicularis);
    }
    if (enterobiusvermicularissNum == 0) {
      enterobiusvermicularis.style.display ="none";
    }
    if (sıralama[i] == akutpankreatittNum && akutpankreatittNum > 0) {
      akutpankreatit.style.display ="block";
      document.getElementById("mylist").appendChild(akutpankreatit);
    }
    if (akutpankreatittNum == 0) {
      akutpankreatit.style.display ="none";
    }
    if (sıralama[i] == myokardittNum && myokardittNum > 0) {
      myokardit.style.display ="block";
      document.getElementById("mylist").appendChild(myokardit);
    }
    if (myokardittNum == 0) {
      myokardit.style.display ="none";
    }
    if (sıralama[i] == kyyNum && kyyNum > 0) {
      ky.style.display ="block";
      document.getElementById("mylist").appendChild(ky);
    }
    if (kyyNum == 0) {
      ky.style.display ="none";
    }
    if (sıralama[i] == vffNum && vffNum > 0) {
      vf.style.display ="block";
      document.getElementById("mylist").appendChild(vf);
    }
    if (vffNum == 0) {
      vf.style.display ="none";
    }
    if (sıralama[i] == affNum && affNum > 0) {
      af.style.display ="block";
      document.getElementById("mylist").appendChild(af);
    }
    if (affNum == 0) {
      af.style.display ="none";
    }
    if (sıralama[i] == laringosellNum && laringosellNum > 0) {
      laringosel.style.display ="block";
      document.getElementById("mylist").appendChild(laringosel);
    }
    if (laringosellNum == 0) {
      laringosel.style.display ="none";
    }
    if (sıralama[i] == larengealwebbNum && larengealwebbNum > 0) {
      larengealweb.style.display ="block";
      document.getElementById("mylist").appendChild(larengealweb);
    }
    if (larengealwebbNum == 0) {
      larengealweb.style.display ="none";
    }
    if (sıralama[i] == subglottikstenozzNum && subglottikstenozzNum > 0) {
      subglottikstenoz.style.display ="block";
      document.getElementById("mylist").appendChild(subglottikstenoz);
    }
    if (subglottikstenozzNum == 0) {
      subglottikstenoz.style.display ="none";
    }
    if (sıralama[i] == laringomalaziiNum && laringomalaziiNum > 0) {
      laringomalazi.style.display ="block";
      document.getElementById("mylist").appendChild(laringomalazi);
    }
    if (laringomalaziiNum == 0) {
      laringomalazi.style.display ="none";
    }
    if (sıralama[i] == virallarenjittNum && virallarenjittNum > 0) {
      virallarenjit.style.display ="block";
      document.getElementById("mylist").appendChild(virallarenjit);
    }
    if (virallarenjittNum == 0) {
      virallarenjit.style.display ="none";
    }
    if (sıralama[i] == boğmacaaNum && boğmacaaNum > 0) {
      boğmaca.style.display ="block";
      document.getElementById("mylist").appendChild(boğmaca);
    }
    if (boğmacaaNum == 0) {
      boğmaca.style.display ="none";
    }
    if (sıralama[i] == difteriiNum && difteriiNum > 0) {
      difteri.style.display ="block";
      document.getElementById("mylist").appendChild(difteri);
    }
    if (difteriiNum == 0) {
      difteri.style.display ="none";
    }
    if (sıralama[i] == epiglottitissNum && epiglottitissNum > 0) {
      epiglottitis.style.display ="block";
      document.getElementById("mylist").appendChild(epiglottitis);
    }
    if (epiglottitissNum == 0) {
      epiglottitis.style.display ="none";
    }
    if (sıralama[i] == bakteriyeltrakeittNum && bakteriyeltrakeittNum > 0) {
      bakteriyeltrakeit.style.display ="block";
      document.getElementById("mylist").appendChild(bakteriyeltrakeit);
    }
    if (bakteriyeltrakeittNum == 0) {
      bakteriyeltrakeit.style.display ="none";
    }
    if (sıralama[i] == kruppNum && kruppNum > 0) {
      krup.style.display ="block";
      document.getElementById("mylist").appendChild(krup);
    }
    if (kruppNum == 0) {
      krup.style.display ="none";
    }
    if (sıralama[i] == tifNum && tifNum > 0) {
      tifo.style.display ="block";
      document.getElementById("mylist").appendChild(tifo);
    }
    if (tifNum == 0) {
      tifo.style.display ="none";
    }
    if (sıralama[i] == salNum && salNum > 0) {
      salmonellagastroenteriti.style.display ="block";
      document.getElementById("mylist").appendChild(salmonellagastroenteriti);
    }
    if (salNum == 0) {
      salmonellagastroenteriti.style.display ="none";
    }
    if (sıralama[i] == pnömoniiNum && pnömoniiNum > 0) {
      pnömoni.style.display ="block";
      document.getElementById("mylist").appendChild(pnömoni);
    }
    if (pnömoniiNum == 0) {
      pnömoni.style.display ="none";
    }
    if (sıralama[i] == derişarbNum && derişarbNum > 0) {
      derişarbonu.style.display ="block";
      document.getElementById("mylist").appendChild(derişarbonu);
    }
    if (derişarbNum == 0) {
      derişarbonu.style.display ="none";
    }
    if (sıralama[i] == acşarbNum && acşarbNum > 0) {
      akciğerşarbonu.style.display ="block";
      document.getElementById("mylist").appendChild(akciğerşarbonu);
    }
    if (acşarbNum == 0) {
      akciğerşarbonu.style.display ="none";
    }
    if (sıralama[i] == gisşarbNum && gisşarbNum > 0) {
      gisşarbonu.style.display ="block";
      document.getElementById("mylist").appendChild(gisşarbonu);
    }
    if (gisşarbNum == 0) {
      gisşarbonu.style.display ="none";
    }
    if (sıralama[i] == böbrektaşıhastalıkkNum && böbrektaşıhastalıkkNum > 0) {
      böbrektaşıhastalık.style.display ="block";
      document.getElementById("mylist").appendChild(böbrektaşıhastalık);
    }
    if (böbrektaşıhastalıkkNum == 0) {
      böbrektaşıhastalık.style.display ="none";
    }
    if (sıralama[i] == shigellaaNum && shigellaaNum > 0) {
      shigella.style.display ="block";
      document.getElementById("mylist").appendChild(shigella);
    }
    if (shigellaaNum == 0) {
      shigella.style.display ="none";
    }
    if (sıralama[i] == eheccNum && eheccNum > 0) {
      ehec.style.display ="block";
      document.getElementById("mylist").appendChild(ehec);
    }
    if (eheccNum == 0) {
      ehec.style.display ="none";
    }
    if (sıralama[i] == iyeeNum && iyeeNum > 0) {
      iye.style.display ="block";
      document.getElementById("mylist").appendChild(iye);
    }
    if (iyeeNum == 0) {
      iye.style.display ="none";
    }
    if (sıralama[i] == koleraaNum && koleraaNum > 0) {
      kolera.style.display ="block";
      document.getElementById("mylist").appendChild(kolera);
    }
    if (koleraaNum == 0) {
      kolera.style.display ="none";
    }
    if (sıralama[i] == nekrotizanfasiittNum && nekrotizanfasiittNum > 0) {
      nekrotizanfasiit.style.display ="block";
      document.getElementById("mylist").appendChild(nekrotizanfasiit);
    }
    if (nekrotizanfasiittNum == 0) {
      nekrotizanfasiit.style.display ="none";
    }
    if (sıralama[i] == faranjittNum && faranjittNum > 0) {
      faranjit.style.display ="block";
      document.getElementById("mylist").appendChild(faranjit);
    }
    if (faranjittNum == 0) {
      faranjit.style.display ="none";
    }
    if (sıralama[i] == kızıllNum && kızıllNum > 0) {
      kızıl.style.display ="block";
      document.getElementById("mylist").appendChild(kızıl);
    }
    if (kızıllNum == 0) {
      kızıl.style.display ="none";
    }
    if (sıralama[i] == kutanözNum && kutanözNum > 0) {
      kutanözlanşmanyazis.style.display ="block";
      document.getElementById("mylist").appendChild(kutanözlanşmanyazis);
    }
    if (kutanözNum == 0) {
      kutanözlanşmanyazis.style.display ="none";
    }
    if (sıralama[i] == böcekNum && böcekNum > 0) {
      böcekısırması.style.display ="block";
      document.getElementById("mylist").appendChild(böcekısırması);
    }
    if (böcekNum == 0) {
      böcekısırması.style.display ="none";
    }
    if (sıralama[i] == kasıkbitNum && kasıkbitNum > 0) {
      kasıkbitlenmesi.style.display ="block";
      document.getElementById("mylist").appendChild(kasıkbitlenmesi);
    }
    if (kasıkbitNum == 0) {
      kasıkbitlenmesi.style.display ="none";
    }
    if (sıralama[i] == gövdebitNum && gövdebitNum > 0) {
      gövdebitlenmesi.style.display ="block";
      document.getElementById("mylist").appendChild(gövdebitlenmesi);
    }
    if (gövdebitNum == 0) {
      gövdebitlenmesi.style.display ="none";
    }
    if (sıralama[i] == başbitiNum && başbitiNum > 0) {
      başbitlenmesi.style.display ="block";
      document.getElementById("mylist").appendChild(başbitlenmesi);
    }
    if (başbitiNum == 0) {
      başbitlenmesi.style.display ="none";
    }
    if (sıralama[i] == uyuzNum && uyuzNum > 0) {
      uyuz.style.display ="block";
      document.getElementById("mylist").appendChild(uyuz);
    }
    if (uyuzNum == 0) {
      uyuz.style.display ="none";
    }
    if (sıralama[i] == myelomNum && myelomNum > 0) {
      multiplemyelom.style.display ="block";
      document.getElementById("mylist").appendChild(multiplemyelom);
    }
    if (myelomNum == 0) {
      multiplemyelom.style.display ="none";
    }
    if (sıralama[i] == septikartNum && septikartNum > 0) {
      septikartrit.style.display ="block";
      document.getElementById("mylist").appendChild(septikartrit);
    }
    if (septikartNum == 0) {
      septikartrit.style.display ="none";
    }
    if (sıralama[i] == kaudaNum && kaudaNum > 0) {
      kaudaequina.style.display ="block";
      document.getElementById("mylist").appendChild(kaudaequina);
    }
    if (kaudaNum == 0) {
      kaudaequina.style.display ="none";
    }
    if (sıralama[i] == çölyakkNum && çölyakkNum > 0) {
      çölyak.style.display ="block";
      document.getElementById("mylist").appendChild(çölyak);
    }
    if (çölyakkNum == 0) {
      çölyak.style.display ="none";
    }
    if (sıralama[i] == guttNum && guttNum > 0) {
      gut.style.display ="block";
      document.getElementById("mylist").appendChild(gut);
    }
    if (guttNum == 0) {
      gut.style.display ="none";
    }
    if (sıralama[i] == febrilkonNum && febrilkonNum > 0) {
      febrilkonvülzyon.style.display ="block";
      document.getElementById("mylist").appendChild(febrilkonvülzyon);
    }
    if (febrilkonNum == 0) {
      febrilkonvülzyon.style.display ="none";
    }
    if (sıralama[i] == pkosNum && pkosNum > 0) {
      polikistikoversendromu.style.display ="block";
      document.getElementById("mylist").appendChild(polikistikoversendromu);
    }
    if (pkosNum == 0) {
      polikistikoversendromu.style.display ="none";
    }
    if (sıralama[i] == kalptamponNum && kalptamponNum > 0) {
      kalptamponadı.style.display ="block";
      document.getElementById("mylist").appendChild(kalptamponadı);
    }
    if (kalptamponNum == 0) {
      kalptamponadı.style.display ="none";
    }
    if (sıralama[i] == kibaNum && kibaNum > 0) {
      kibas.style.display ="block";
      document.getElementById("mylist").appendChild(kibas);
    }
    if (kibaNum == 0) {
      kibas.style.display ="none";
    }
    if (sıralama[i] == üsyNum && üsyNum > 0) {
      üsye.style.display ="block";
      document.getElementById("mylist").appendChild(üsye);
    }
    if (üsyNum == 0) {
      üsye.style.display ="none";
    }
    if (sıralama[i] == triküspitstenozNum && triküspitstenozNum > 0) {
      triküspitstenozu.style.display ="block";
      document.getElementById("mylist").appendChild(triküspitstenozu);
    }
    if (triküspitstenozNum == 0) {
      triküspitstenozu.style.display ="none";
    }
    if (sıralama[i] == nefrotikNum && nefrotikNum > 0) {
      nefrotiksendrom.style.display ="block";
      document.getElementById("mylist").appendChild(nefrotiksendrom);
    }
    if (nefrotikNum == 0) {
      nefrotiksendrom.style.display ="none";
    }
    if (sıralama[i] == nefritikNum && nefritikNum > 0) {
      nefritiksendrom.style.display ="block";
      document.getElementById("mylist").appendChild(nefritiksendrom);
    }
    if (nefritikNum == 0) {
      nefritiksendrom.style.display ="none";
    }
    if (sıralama[i] == obstrüktifNum && obstrüktifNum > 0) {
      obstrüktifşok.style.display ="block";
      document.getElementById("mylist").appendChild(obstrüktifşok);
    }
    if (obstrüktifNum == 0) {
      obstrüktifşok.style.display ="none";
    }
    if (sıralama[i] == hipovolemikNum && hipovolemikNum > 0) {
      hipovolemikşok.style.display ="block";
      document.getElementById("mylist").appendChild(hipovolemikşok);
    }
    if (hipovolemikNum == 0) {
      hipovolemikşok.style.display ="none";
    }
    if (sıralama[i] == kardiyojenikNum && kardiyojenikNum > 0) {
      kardiyojenikşok.style.display ="block";
      document.getElementById("mylist").appendChild(kardiyojenikşok);
    }
    if (kardiyojenikNum == 0) {
      kardiyojenikşok.style.display ="none";
    }
    if (sıralama[i] == anafNum && anafNum > 0) {
      anaflaksi.style.display ="block";
      document.getElementById("mylist").appendChild(anaflaksi);
    }
    if (anafNum == 0) {
      anaflaksi.style.display ="none";
    }
    if (sıralama[i] == septikNum && septikNum > 0) {
      septikşok.style.display ="block";
      document.getElementById("mylist").appendChild(septikşok);
    }
    if (septikNum == 0) {
      septikşok.style.display ="none";
    }
    if (sıralama[i] == nörojenikNum && nörojenikNum > 0) {
      nörojenikşok.style.display ="block";
      document.getElementById("mylist").appendChild(nörojenikşok);
    }
    if (nörojenikNum == 0) {
      nörojenikşok.style.display ="none";
    }
    if (sıralama[i] == febrilnötroNum && febrilnötroNum > 0) {
      febrilnötropeni.style.display ="block";
      document.getElementById("mylist").appendChild(febrilnötropeni);
    }
    if (febrilnötroNum == 0) {
      febrilnötropeni.style.display ="none";
    }
    if (sıralama[i] == mitralNum && mitralNum > 0) {
      mitralstenoz.style.display ="block";
      document.getElementById("mylist").appendChild(mitralstenoz);
    }
    if (mitralNum == 0) {
      mitralstenoz.style.display ="none";
    }
    if (sıralama[i] == dkaXNum && dkaXNum > 0) {
      dka.style.display ="block";
      document.getElementById("mylist").appendChild(dka);
    }
    if (dkaXNum == 0) {
      dka.style.display ="none";
    }
    if (sıralama[i] == hhoNum && hhoNum > 0) {
      hhod.style.display ="block";
      document.getElementById("mylist").appendChild(hhod);
    }
    if (hhoNum == 0) {
      hhod.style.display ="none";
    }
    if (sıralama[i] == pulmoneremboNum && pulmoneremboNum > 0) {
      pulmoneremboli.style.display ="block";
      document.getElementById("mylist").appendChild(pulmoneremboli);
    }
    if (pulmoneremboNum == 0) {
      pulmoneremboli.style.display ="none";
    }
    if (sıralama[i] == pnömotoraNum && pnömotoraNum > 0) {
      pnömotorax.style.display ="block";
      document.getElementById("mylist").appendChild(pnömotorax);
    }
    if (pnömotoraNum == 0) {
      pnömotorax.style.display ="none";
    }
    if (sıralama[i] == horneNum && horneNum > 0) {
      horner.style.display ="block";
      document.getElementById("mylist").appendChild(horner);
    }
    if (horneNum == 0) {
      horner.style.display ="none";
    }
    if (sıralama[i] == dvtXNum && dvtXNum > 0) {
      dvthastalık.style.display ="block";
      document.getElementById("mylist").appendChild(dvthastalık);
    }
    if (dvtXNum == 0) {
      dvthastalık.style.display ="none";
    }
    if (sıralama[i] == pahXNum && pahXNum > 0) {
      pah.style.display ="block";
      document.getElementById("mylist").appendChild(pah);
    }
    if (pahXNum == 0) {
      pah.style.display ="none";
    }
    if (sıralama[i] == felNum && felNum > 0) {
      felç.style.display ="block";
      document.getElementById("mylist").appendChild(felç);
    }
    if (felNum == 0) {
      felç.style.display ="none";
    }
    if (sıralama[i] == cushinNum && cushinNum > 0) {
      cushing.style.display ="block";
      document.getElementById("mylist").appendChild(cushing);
    }
    if (cushinNum == 0) {
      cushing.style.display ="none";
    }
    if (sıralama[i] == addisNum && addisNum > 0) {
      addison.style.display ="block";
      document.getElementById("mylist").appendChild(addison);
    }
    if (addisNum == 0) {
      addison.style.display ="none";
    }
    if (sıralama[i] == kbyyNum && kbyyNum > 0) {
      kby.style.display ="block";
      document.getElementById("mylist").appendChild(kby);
    }
    if (kbyyNum == 0) {
      kby.style.display ="none";
    }
    if (sıralama[i] == abyyNum && abyyNum > 0) {
      aby.style.display ="block";
      document.getElementById("mylist").appendChild(aby);
    }
    if (abyyNum == 0) {
      aby.style.display ="none";
    }
    if (sıralama[i] == afaNum && afaNum > 0) {
      afas.style.display ="block";
      document.getElementById("mylist").appendChild(afas);
    }
    if (afaNum == 0) {
      afas.style.display ="none";
    }
    if (sıralama[i] == hipotiroidNum && hipotiroidNum > 0) {
      hipotiroidi.style.display ="block";
      document.getElementById("mylist").appendChild(hipotiroidi);
    }
    if (hipotiroidNum == 0) {
      hipotiroidi.style.display ="none";
    }
    if (sıralama[i] == prolakNum && prolakNum > 0) {
      prolaktinoma.style.display ="block";
      document.getElementById("mylist").appendChild(prolaktinoma);
    }
    if (prolakNum == 0) {
      prolaktinoma.style.display ="none";
    }
    if (sıralama[i] == behNum && behNum > 0) {
      behcet.style.display ="block";
      document.getElementById("mylist").appendChild(behcet);
    }
    if (behNum == 0) {
      behcet.style.display ="none";
    }
    if (sıralama[i] == peptikNum && peptikNum > 0) {
      peptikülser.style.display ="block";
      document.getElementById("mylist").appendChild(peptikülser);
    }
    if (peptikNum == 0) {
      peptikülser.style.display ="none";
    }
    if (sıralama[i] == kroniktinNum && kroniktinNum > 0) {
      kroniktin.style.display ="block";
      document.getElementById("mylist").appendChild(kroniktin);
    }
    if (kroniktinNum == 0) {
      kroniktin.style.display ="none";
    }
    if (sıralama[i] == akuttinNum && akuttinNum > 0) {
      akuttin.style.display ="block";
      document.getElementById("mylist").appendChild(akuttin);
    }
    if (akuttinNum == 0) {
      akuttin.style.display ="none";
    }
    if (sıralama[i] == insülinNum && insülinNum > 0) {
      insülinoma.style.display ="block";
      document.getElementById("mylist").appendChild(insülinoma);
    }
    if (insülinNum == 0) {
      insülinoma.style.display ="none";
    }
    if (sıralama[i] == pankreastümNum && pankreastümNum > 0) {
      pankreastümörleri.style.display ="block";
      document.getElementById("mylist").appendChild(pankreastümörleri);
    }
    if (pankreastümNum == 0) {
      pankreastümörleri.style.display ="none";
    }
    if (sıralama[i] == hipoparatNum && hipoparatNum > 0) {
      hipoparatiroidizm.style.display ="block";
      document.getElementById("mylist").appendChild(hipoparatiroidizm);
    }
    if (hipoparatNum == 0) {
      hipoparatiroidizm.style.display ="none";
    }
    if (sıralama[i] == hiperkalsemikNum && hiperkalsemikNum > 0) {
      hiperkalsemikkriz.style.display ="block";
      document.getElementById("mylist").appendChild(hiperkalsemikkriz);
    }
    if (hiperkalsemikNum == 0) {
      hiperkalsemikkriz.style.display ="none";
    }
    if (sıralama[i] == hiperparatirodizmNum && hiperparatirodizmNum > 0) {
      primerhiperparatiroidizm.style.display ="block";
      document.getElementById("mylist").appendChild(primerhiperparatiroidizm);
    }
    if (hiperparatirodizmNum == 0) {
      primerhiperparatiroidizm.style.display ="none";
    }
    if (sıralama[i] == apandisitNum && apandisitNum > 0) {
      akutapandisit.style.display ="block";
      document.getElementById("mylist").appendChild(akutapandisit);
    }
    if (apandisitNum == 0) {
      akutapandisit.style.display ="none";
    }
    if (sıralama[i] == croNum && croNum > 0) {
      crohn.style.display ="block";
      document.getElementById("mylist").appendChild(crohn);
    }
    if (croNum == 0) {
      crohn.style.display ="none";
    }
    if (sıralama[i] == ülseratifNum && ülseratifNum > 0) {
      ük.style.display ="block";
      document.getElementById("mylist").appendChild(ük);
    }
    if (ülseratifNum == 0) {
      ük.style.display ="none";
    }
    if (sıralama[i] == sirNum && sirNum > 0) {
      siroz.style.display ="block";
      document.getElementById("mylist").appendChild(siroz);
    }
    if (sirNum == 0) {
      siroz.style.display ="none";
    }
    if (sıralama[i] == raNum && raNum > 0) {
      ara.style.display ="block";
      document.getElementById("mylist").appendChild(ara);
    }
    if (raNum == 0) {
      ara.style.display ="none";
    }
    if (sıralama[i] == sifNum && sifNum > 0) {
      sifiliz.style.display ="block";
      document.getElementById("mylist").appendChild(sifiliz);
    }
    if (sifNum == 0) {
      sifiliz.style.display ="none";
    }
    if (sıralama[i] == turNum && turNum > 0) {
      turner.style.display ="block";
      document.getElementById("mylist").appendChild(turner);
    }
    if (turNum == 0) {
      turner.style.display ="none";
    }
    if (sıralama[i] == sjögNum && sjögNum > 0) {
      sjögren.style.display ="block";
      document.getElementById("mylist").appendChild(sjögren);
    }
    if (sjögNum == 0) {
      sjögren.style.display ="none";
    }
    if (sıralama[i] == lupusNum && lupusNum > 0) {
      sle.style.display ="block";
      document.getElementById("mylist").appendChild(sle);
    }
    if (lupusNum == 0) {
      sle.style.display ="none";
    }
    if (sıralama[i] == talasNum && talasNum > 0) {
      talasemi.style.display ="block";
      document.getElementById("mylist").appendChild(talasemi);
    }
    if (talasNum == 0) {
      talasemi.style.display ="none";
    }
    if (sıralama[i] == demirNum && demirNum > 0) {
      dea.style.display ="block";
      document.getElementById("mylist").appendChild(dea);
    }
    if (demirNum == 0) {
      dea.style.display ="none";
    }
    if (sıralama[i] == hipocaNum && hipocaNum > 0) {
      hipokalsemi.style.display ="block";
      document.getElementById("mylist").appendChild(hipokalsemi);
    }
    if (hipocaNum == 0) {
      hipokalsemi.style.display ="none";
    }
    if (sıralama[i] == hiperkaNum && hiperkaNum > 0) {
      hiperkalemi.style.display ="block";
      document.getElementById("mylist").appendChild(hiperkalemi);
    }
    if (hiperkaNum == 0) {
      hiperkalemi.style.display ="none";
    }
    if (sıralama[i] == medfevNum && medfevNum > 0) {
      fmf.style.display ="block";
      document.getElementById("mylist").appendChild(fmf);
    }
    if (medfevNum == 0) {
      fmf.style.display ="none";
    }
    if (sıralama[i] == romatoNum && romatoNum > 0) {
      romatoidartirit.style.display ="block";
      document.getElementById("mylist").appendChild(romatoidartirit);
    }
    if (romatoNum == 0) {
      romatoidartirit.style.display ="none";
    }
    if (sıralama[i] == henochNum && henochNum > 0) {
      hsp.style.display ="block";
      document.getElementById("mylist").appendChild(hsp);
    }
    if (henochNum == 0) {
      hsp.style.display ="none";
    }
    if (sıralama[i] == ensefNum && ensefNum > 0) {
      ensefalit.style.display ="block";
      document.getElementById("mylist").appendChild(ensefalit);
    }
    if (ensefNum == 0) {
      ensefalit.style.display ="none";
    }
    if (sıralama[i] == ydmenNum && ydmenNum > 0) {
      yenidoğanmenenjiti.style.display ="block";
      document.getElementById("mylist").appendChild(yenidoğanmenenjiti);
    }
    if (ydmenNum == 0) {
      yenidoğanmenenjiti.style.display ="none";
    }
    if (sıralama[i] == yetmenNum && yetmenNum > 0) {
      yetişkinmenenjiti.style.display ="block";
      document.getElementById("mylist").appendChild(yetişkinmenenjiti);
    }
    if (yetmenNum == 0) {
      yetişkinmenenjiti.style.display ="none";
    }
    if (sıralama[i] == kawaNum && kawaNum > 0) {
      kawasaki.style.display ="block";
      document.getElementById("mylist").appendChild(kawasaki);
    }
    if (kawaNum == 0) {
      kawasaki.style.display ="none";
    }
    if (sıralama[i] == tempNum && tempNum > 0) {
      temporalartirit.style.display ="block";
      document.getElementById("mylist").appendChild(temporalartirit);
    }
    if (tempNum == 0) {
      temporalartirit.style.display ="none";
    }
    if (sıralama[i] == skleroNum && skleroNum > 0) {
      skleroderma.style.display ="block";
      document.getElementById("mylist").appendChild(skleroderma);
    }
    if (skleroNum == 0) {
      skleroderma.style.display ="none";
    }
    if (sıralama[i] == tüberNum && tüberNum > 0) {
      tüberkülöz.style.display ="block";
      document.getElementById("mylist").appendChild(tüberkülöz);
    }
    if (tüberNum == 0) {
      tüberkülöz.style.display ="none";
    }
    if (sıralama[i] == hiperNum && hiperNum > 0) {
      hiperkalsemi.style.display ="block";
      document.getElementById("mylist").appendChild(hiperkalsemi);
    }
    if (hiperNum == 0) {
      hiperkalsemi.style.display ="none";
    }
    if (sıralama[i] == kalpNum && kalpNum > 0) {
      kalpkrizi.style.display ="block";
      document.getElementById("mylist").appendChild(kalpkrizi);
    }
    if (kalpNum == 0) {
      kalpkrizi.style.display ="none";
    }
    if (sıralama[i] == diyaNum && diyaNum > 0) {
      diyabet.style.display ="block";
      document.getElementById("mylist").appendChild(diyabet);
    }
    if (diyaNum == 0) {
      diyabet.style.display ="none";
    }
    if (sıralama[i] == lenfoNum && lenfoNum > 0) {
      lenfoma.style.display ="block";
      document.getElementById("mylist").appendChild(lenfoma);
    }
    if (lenfoNum == 0) {
      lenfoma.style.display ="none";
    }
    if (sıralama[i] == monoNum && monoNum > 0) {
      mononucleosis.style.display ="block";
      document.getElementById("mylist").appendChild(mononucleosis);
    }
    if (monoNum == 0) {
      mononucleosis.style.display ="none";
    }
    if (sıralama[i] == refNum && refNum > 0) {
      reflü.style.display ="block";
      document.getElementById("mylist").appendChild(reflü);
    }
    if (refNum == 0) {
      reflü.style.display ="none";
    }
    if (sıralama[i] == brusNum && brusNum > 0) {
      bruselloz.style.display ="block";
      document.getElementById("mylist").appendChild(bruselloz);
    }
    if (brusNum == 0) {
      bruselloz.style.display ="none";
    }
    if (sıralama[i] == wegNum && wegNum > 0) {
      wegener.style.display ="block";
      document.getElementById("mylist").appendChild(wegener);
    }
    if (wegNum == 0) {
      wegener.style.display ="none";
    }
    if (sıralama[i] == rtaNum && rtaNum > 0) {
      renaltübülerasidoz.style.display ="block";
      document.getElementById("mylist").appendChild(renaltübülerasidoz);
    }
    if (rtaNum == 0) {
      renaltübülerasidoz.style.display ="none";
    }
    if (sıralama[i] == hepaNum && hepaNum > 0) {
      hepatita.style.display ="block";
      document.getElementById("mylist").appendChild(hepatita);
    }
    if (hepaNum == 0) {
      hepatita.style.display ="none";
    }
  }

}
