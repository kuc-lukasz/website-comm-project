const partnerBtn = document.querySelector('.nav-link-farmy')
const investorBtn = document.querySelector('.nav-link-investor')
const innovationBtn = document.querySelector('.nav-link-innovation')
const missionBtn = document.querySelector('.nav-link-mission')

const partnerZone = document.querySelector('.partner-zone')
const mainCont = document.querySelector('.main-container')
const invZone = document.querySelector(".investor-zone")
const innovZone = document.querySelector('.innov-zone')
const missionZone = document.querySelector('.mission-zone')

const hamburgerBtn = document.querySelector("#hamburger");
const navMenu = document.querySelector(".navigation");

partnerBtn.addEventListener('click', () => {
    partnerZone.classList.remove('left')

        mainCont.classList.add('left')
        invZone.classList.add('left')
        innovZone.classList.add('left')
        missionZone.classList.add('left')

        partnerZone.classList.add('view')

        mobile()
        
})

investorBtn.addEventListener('click', ()=> {
    invZone.classList.remove('left')

    mainCont.classList.add('left')
    partnerZone.classList.add('left')
    innovZone.classList.add('left')
    missionZone.classList.add('left')

    invZone.classList.add('view')
    
    navMenu.classList.remove("active");

})

innovationBtn.addEventListener('click', ()=> {
    innovZone.classList.remove('left')

        mainCont.classList.add('left')
        partnerZone.classList.add('left')
        invZone.classList.add('left')
        missionZone.classList.add('left')

        innovZone.classList.add('view')

        navMenu.classList.remove("active");

})

missionBtn.addEventListener('click', ()=>{
    missionZone.classList.remove('left')

        mainCont.classList.add('left')
        partnerZone.classList.add('left')
        invZone.classList.add('left')
        innovZone.classList.add('left')

        missionZone.classList.add('view')

        navMenu.classList.remove("active");
})

function mobile() {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
  }
  
  hamburgerBtn.addEventListener("click", mobile);
