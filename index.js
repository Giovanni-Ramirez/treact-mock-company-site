function openMenu() {
    document.body.classList += "menu--open"
    console.log('Opened')
}

function closeMenu() {
    document.body.classList.remove('menu--open')
    console.log('Closed')
}