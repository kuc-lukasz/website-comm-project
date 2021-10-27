const partnerBtn = document.querySelector('.nav-link-farmy')
const investorBtn = document.querySelector('.nav-link-investor')
const innovationBtn = document.querySelector('.nav-link-innovation')
const missionBtn = document.querySelector('.nav-link-mission')

const partnerZone = document.querySelector('.partner-zone')
const mainCont = document.querySelector('.main-container')
const invZone = document.querySelector(".inv-zone")
const innovZone = document.querySelector('.innov-zone')
const missionZone = document.querySelector('.mission-zone')


partnerBtn.addEventListener('click', () => {
    partnerZone.classList.add('view')
    partnerZone.classList.remove('left')
    mainCont.classList.add('left')
    invZone.classList.add('left')
    innovZone.classList.add('left')
    missionZone.classList.add('left')
    missionZone.classList.remove('view')
})

investorBtn.addEventListener('click', ()=> {
    mainCont.classList.add('left')
    partnerZone.classList.add('left')
    partnerZone.classList.remove('view')
    invZone.classList.remove('left')
    invZone.classList.add('view')
    innovZone.classList.add('left')
    missionZone.classList.add('left')
    missionZone.classList.remove('view')
})

innovationBtn.addEventListener('click', ()=> {
    mainCont.classList.add('left')
    partnerZone.classList.add('left')
    partnerZone.classList.remove('view')
    invZone.classList.remove('view')
    invZone.classList.add('left')
    innovZone.classList.remove('left')
    innovZone.classList.add('view')
    missionZone.classList.add('left')
    missionZone.classList.remove('view')
})

missionBtn.addEventListener('click', ()=>{
    mainCont.classList.add('left')
    partnerZone.classList.add('left')
    partnerZone.classList.remove('view')
    invZone.classList.add('left')
    invZone.classList.remove('view')
    innovZone.classList.add('left')
    innovZone.classList.remove('view')
    missionZone.classList.remove('left')
    missionZone.classList.add('view')
})

