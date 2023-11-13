// TYPING ANIMATION

/*var typed = new Typed("typing", {
    strings:["Web Designer", "Web Developer", "Graphic Designer", "UI Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
*/
// BUTTON RIPPLE EFFECT

const nav =document.querySelector("nav");
const navlist = document.querySelectorAll("li");
const totalNavList = navlist.length;
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;

for(let i = 0; i < totalNavList; i++) {
        const a = navlist[i].querySelector("a")
        
        a.addEventListener("click", function() {

            for(let i = 0; i < totalSection; i++){
                allSection[i].classList.remove("back-section")
            }

            for(let j = 0; j < totalNavList; j++) {
                if (navlist[j].querySelector("a").classList.contains("active")) {
                    allSection[j].classList.add("back-section");
                }
                navlist[j].querySelector("a").classList.remove("active");
            }

            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200) {
                asideSectionTogglerBtn();
            }
        })

    }

    function showSection(element) {
        for (let i = 0; i < totalSection; i++){
            allSection[i].classList.remove("active")
        }

        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }

    const navTogglerBtn = document.querySelector(".nav-togller");
    const aside = document.querySelector("header");

    navTogglerBtn.addEventListener("click", () => {
        asideSectionTogglerBtn();
    })

    function asideSectionTogglerBtn() {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");

        for (let i = 0; i < totalSection; i++){
            allSection[i].classList.toggle("open");
        }
    }



