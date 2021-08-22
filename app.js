const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo=document.querySelector('#navbar__logo')
//display mobile menu
const mobileMenu = () =>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    menuLinks.classList.toggle('bar')

}

menu.addEventListener('click',mobileMenu);

//show active menu when scrolling
const highLightMenu = () =>{
    const elem = document.querySelector('.highLight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const achievementsMenu= document.querySelector('#achievements-page')
    let scrollPos=window.scrollY
    console.log(scrollPos)

    //adds 'highlights' class to my menu items
    if(window.innerWidth>960 && scrollPos<600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }else if(window.innerWidth>960 && scrollPos<1400){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        achievementsMenu.classList.remove('highlight')
        return
    }else if(window.innerWidth>960 && scrollPos<2345){
        achievementsMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
}

if((elem && window.innerWidth <960 && scrollPos <600) || elem){
elem.classList.remove('highlight')
}
}
window.addEventListener('scroll',highlightMenu)
window.addEventListener('click',highlightMenu)
