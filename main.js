const partnerBtn = document.querySelector(".nav-link-farmy");
const investorBtn = document.querySelector(".nav-link-investor");
const innovationBtn = document.querySelector(".nav-link-innovation");
const missionBtn = document.querySelector(".nav-link-mission");

const partnerZone = document.querySelector(".partner-zone");
const mainCont = document.querySelector(".main-container");
const invZone = document.querySelector(".investor-zone");
const innovZone = document.querySelector(".innov-zone");
const missionZone = document.querySelector(".mission-zone");

const hamburgerBtn = document.querySelector("#hamburger");
const navMenu = document.querySelector(".navigation");

partnerBtn.addEventListener("click", () => {
  partnerZone.classList.remove("left");

  mainCont.classList.add("left");
  invZone.classList.add("left");
  innovZone.classList.add("left");
  missionZone.classList.add("left");

  partnerZone.classList.add("view");

  mobile();
});

investorBtn.addEventListener("click", () => {
  invZone.classList.remove("left");

  mainCont.classList.add("left");
  partnerZone.classList.add("left");
  innovZone.classList.add("left");
  missionZone.classList.add("left");

  invZone.classList.add("view");

  navMenu.classList.remove("active");
});

innovationBtn.addEventListener("click", () => {
  innovZone.classList.remove("left");

  mainCont.classList.add("left");
  partnerZone.classList.add("left");
  invZone.classList.add("left");
  missionZone.classList.add("left");

  innovZone.classList.add("view");

  navMenu.classList.remove("active");
});

missionBtn.addEventListener("click", () => {
  missionZone.classList.remove("left");

  mainCont.classList.add("left");
  partnerZone.classList.add("left");
  invZone.classList.add("left");
  innovZone.classList.add("left");

  missionZone.classList.add("view");

  navMenu.classList.remove("active");
});

function mobile() {
  hamburgerBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
}

hamburgerBtn.addEventListener("click", mobile);


const optymalneZaprojektowanie = document.querySelector(".opt-zap");
const rentownoscProjektu = document.querySelector(".rent-proj");
const finansowanie = document.querySelector(".finansowanie");
const aukcjeOze = document.querySelector(".aukcje-oze");
const zarzadzanieBudowa = document.querySelector(".zarz-bud");
const sprzedazEneIKonc = document.querySelector(".sprz-en-i-konc");

const optymalneZaprojektowanieDescribe = document.querySelector(".opt-zap-describe");
const rentownoscProjektuDescribe = document.querySelector(".rent-proj-describe");
const finansowanieDescribe = document.querySelector(".finansowanie-describe");
const aukcjeOzeDescribe = document.querySelector(".aukcje-oze-describe");
const zarzadzanieBudowaDescribe = document.querySelector(".zarz-bud-describe");
const sprzedazEneIKoncDescribe = document.querySelector(".sprz-en-i-konc-describe");

optymalneZaprojektowanie.addEventListener("click", () => {
    optymalneZaprojektowanie.style.color = "rgb(202, 173, 5)"
    
    rentownoscProjektu.style.color = "white"
    finansowanie.style.color = "white"
    aukcjeOze.style.color = "white"
    zarzadzanieBudowa.style.color = "white"
    sprzedazEneIKonc.style.color = "white"
    

  optymalneZaprojektowanieDescribe.classList.add("show");
  optymalneZaprojektowanieDescribe.classList.remove("hide");

  rentownoscProjektuDescribe.classList.add("hide");
  finansowanieDescribe.classList.add("hide");
  aukcjeOzeDescribe.classList.add("hide");
  zarzadzanieBudowaDescribe.classList.add("hide");
  sprzedazEneIKoncDescribe.classList.add("hide");

  rentownoscProjektuDescribe.classList.remove("show");
  finansowanieDescribe.classList.remove("show");
  aukcjeOzeDescribe.classList.remove("show");
  zarzadzanieBudowaDescribe.classList.remove("show");
  sprzedazEneIKoncDescribe.classList.remove("show");
});

rentownoscProjektu.addEventListener("click", () => {
    rentownoscProjektu.style.color = "rgb(202, 173, 5)"
    optymalneZaprojektowanie.style.color = "white"
    finansowanie.style.color = "white"
    aukcjeOze.style.color = "white"
    zarzadzanieBudowa.style.color = "white"
    sprzedazEneIKonc.style.color = "white"

  rentownoscProjektuDescribe.classList.add("show");
  rentownoscProjektuDescribe.classList.remove("hide");

  optymalneZaprojektowanieDescribe.classList.add("hide");
  finansowanieDescribe.classList.add("hide");
  aukcjeOzeDescribe.classList.add("hide");
  zarzadzanieBudowaDescribe.classList.add("hide");
  sprzedazEneIKoncDescribe.classList.add("hide");
  
  optymalneZaprojektowanieDescribe.classList.remove("show");
    finansowanieDescribe.classList.remove("show");
    aukcjeOzeDescribe.classList.remove("show");
    zarzadzanieBudowaDescribe.classList.remove("show");
    sprzedazEneIKoncDescribe.classList.remove("show");
});

finansowanie.addEventListener('click', () => {
    finansowanie.style.color = "rgb(202, 173, 5)"
    optymalneZaprojektowanie.style.color = "white"
    rentownoscProjektu.style.color = "white"
    aukcjeOze.style.color = "white"
    zarzadzanieBudowa.style.color = "white"
    sprzedazEneIKonc.style.color = "white"


    finansowanieDescribe.classList.add("show");
    finansowanieDescribe.classList.remove("hide");

optymalneZaprojektowanieDescribe.classList.add("hide");
rentownoscProjektuDescribe.classList.add("hide");
aukcjeOzeDescribe.classList.add("hide");
zarzadzanieBudowaDescribe.classList.add("hide");
sprzedazEneIKoncDescribe.classList.add("hide");

optymalneZaprojektowanieDescribe.classList.remove("show");
  rentownoscProjektuDescribe.classList.remove("show");
  aukcjeOzeDescribe.classList.remove("show");
  zarzadzanieBudowaDescribe.classList.remove("show");
  sprzedazEneIKoncDescribe.classList.remove("show");

})

aukcjeOze.addEventListener('click', () => {
    aukcjeOze.style.color = "rgb(202, 173, 5)"
    optymalneZaprojektowanie.style.color = "white"
    rentownoscProjektu.style.color = "white"
    finansowanie.style.color = "white"
    zarzadzanieBudowa.style.color = "white"
    sprzedazEneIKonc.style.color = "white"

    aukcjeOzeDescribe.classList.add("show");
    aukcjeOzeDescribe.classList.remove("hide")

    optymalneZaprojektowanieDescribe.classList.add("hide");
rentownoscProjektuDescribe.classList.add("hide");
finansowanieDescribe.classList.add("hide");
zarzadzanieBudowaDescribe.classList.add("hide");
sprzedazEneIKoncDescribe.classList.add("hide");

optymalneZaprojektowanieDescribe.classList.remove("show");
  rentownoscProjektuDescribe.classList.remove("show");
  finansowanieDescribe.classList.remove("show");
  zarzadzanieBudowaDescribe.classList.remove("show");
  sprzedazEneIKoncDescribe.classList.remove("show");

})

zarzadzanieBudowa.addEventListener('click', () => {

    zarzadzanieBudowa.style.color = "rgb(202, 173, 5)"
    optymalneZaprojektowanie.style.color = "white"
    rentownoscProjektu.style.color = "white"
    finansowanie.style.color = "white"
    aukcjeOze.style.color = "white"
    sprzedazEneIKonc.style.color = "white"

    zarzadzanieBudowaDescribe.classList.add("show");
    zarzadzanieBudowaDescribe.classList.remove("hide")


    optymalneZaprojektowanieDescribe.classList.add("hide");
    rentownoscProjektuDescribe.classList.add("hide");
    finansowanieDescribe.classList.add("hide");
    aukcjeOzeDescribe.classList.add("hide");
    sprzedazEneIKoncDescribe.classList.add("hide");
    
    optymalneZaprojektowanieDescribe.classList.remove("show");
      rentownoscProjektuDescribe.classList.remove("show");
      finansowanieDescribe.classList.remove("show");
      aukcjeOzeDescribe.classList.remove("show");
      sprzedazEneIKoncDescribe.classList.remove("show");

})

sprzedazEneIKonc.addEventListener('click', () => {
    sprzedazEneIKonc.style.color = "rgb(202, 173, 5)"
    optymalneZaprojektowanie.style.color = "white"
    rentownoscProjektu.style.color = "white"
    finansowanie.style.color = "white"
    aukcjeOze.style.color = "white"
    zarzadzanieBudowa.style.color = "white"

    sprzedazEneIKoncDescribe.classList.add("show");
    sprzedazEneIKoncDescribe.classList.remove("hide")

    optymalneZaprojektowanieDescribe.classList.add("hide");
rentownoscProjektuDescribe.classList.add("hide");
finansowanieDescribe.classList.add("hide");
aukcjeOzeDescribe.classList.add("hide");
zarzadzanieBudowaDescribe.classList.add("hide");

optymalneZaprojektowanieDescribe.classList.remove("show");
  rentownoscProjektuDescribe.classList.remove("show");
  finansowanieDescribe.classList.remove("show");
  aukcjeOzeDescribe.classList.remove("show");
  zarzadzanieBudowaDescribe.classList.remove("show");

})


