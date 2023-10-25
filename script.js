const body = document.querySelector('body')
const tabs = document.querySelector('.tabs')
const drop = document.querySelector('.drop-down')
const btns = document.querySelectorAll('.btn')
const main = document.querySelector('main')
const title = document.querySelectorAll('.title')
const mobileNav = document.querySelector('.mobile-nav')
const install = document.querySelectorAll('#install')

let OperatingSystem = "Unknown Device"


title.forEach(tt => {
    tt.addEventListener("click", () => {
        // remember this
        const icon = tt.querySelector('i')

        if (icon.classList.contains("fa-chevron-down")) {
            icon.classList.replace("fa-chevron-down", "fa-chevron-up")
            console.log("if");
        } else {
            icon.classList.replace("fa-chevron-up", "fa-chevron-down")
            console.log("else");
    
        }

        tt.nextElementSibling.classList.toggle("toggle")
    })
})

// drop dowm menu

drop.classList.add("toggle")
tabs.addEventListener("click", () => {
    drop.classList.toggle("toggle")
})

main.addEventListener("click", () => {
    drop.classList.add("toggle")
})

// MOBILE NAV 

body.addEventListener("wheel", (e) => {
    if (e.deltaY < 0) {
        // console.log(e.deltaY)
        mobileNav.classList.remove("hide")
        mobileNav.classList.remove("slide-down")

    } else if (e.deltaY > 0) {
        // console.log(e.deltaY)
        mobileNav.classList.add("slide-down")

        setTimeout(() => {
            mobileNav.classList.add("hide")
        }, 490);
    }
})

let startY;

window.addEventListener('touchstart', function (e) {
    startY = e.touches[0].clientY
});

window.addEventListener('touchmove', function (e) {
    let currentY = e.touches[0].clientY

    if (currentY < startY) {
        mobileNav.classList.add("slide-down")

        setTimeout(() => {
            mobileNav.classList.add("hide")
        }, 490);

    } else if (currentY > startY) {
        mobileNav.classList.remove("hide")
        mobileNav.classList.remove("slide-down")

    }
})

// DEVICE DETECTION

if (navigator.userAgent.indexOf("Android") !== -1) {
    OperatingSystem = "Android"
} else if (navigator.userAgent.indexOf("iPhone") !== -1 || navigator.userAgent.indexOf("iPad" !== -1)) {
    OperatingSystem = "iOS"
}


if (OperatingSystem === "Android") {
    install.forEach(data => {
        data.href = "https://play.google.com/store/apps/details?id=com.snapchat.android&hl=en&gl=US&pli=1";
        console.log(data);
    })
} else {

    install.forEach(data => {
        data.href = "https://apps.apple.com/us/app/snapchat/id447188370";
        console.log(data);
    })
}

console.log("os: " + OperatingSystem)

// HEADER STICK DUMP

// const header = document.querySelector('header')
// const fixNav = ()=> {
//     if(window.scrollY > header.offsetHeight){
//         window.scrollY > header.offsetHeight + 150
//         header.classList.add('active')
//     } else {
//         header.classList.remove('active')
//     }
//     nav.classList.add('active')

// }
// window.addEventListener("scroll", fixNav)


