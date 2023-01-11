//1
document.querySelector(".side-bar .crayons-card .crayons-subtitle-2").innerHTML = "iNeuron"
document.querySelector(".side-bar .crayons-card .color-base-70").innerHTML = "I Write Code"

//2
var arr2 = [];
document.querySelectorAll(".as-imagegrid-item-title").forEach((x) => (arr2.push(x.childNodes[0].textContent)));
console.log(arr2)

//3
nav = document.querySelector(".accordion-homepage")
section = document.createElement("section");
textNode = document.createTextNode("My New FAQ");
h3 = document.createElement("h3");
svg = document.createElement("svg");
h3.innerHTML = `<svg class="down" viewBox="0 0 24 24"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path></svg>`
h3.appendChild(textNode);
section.appendChild(h3);
section.className = "parent";
nav.appendChild(section)

//4
//https://service.oneplus.com/in/contact
document.querySelector(".contactUs--content .contactUs--inner .contactUs--item").href = "tel:+91 6366256689";
document.querySelector(".contactUs--content .contactUs--inner .contactUs--item .content-m .item--subtitle").innerText = "+91 6366256689"

//5
document.querySelector("#content div div div div")
    .lastElementChild.children[6]
    .querySelector("#smartphone-deals div div div")
    .children[1].textContent = "check out"

//6
var search = document.querySelector(".searchinput-wrapper___3YrvF form input");
search.addEventListener('mouseover', () => (search.style.backgroundColor = "red"))

//7
document.querySelector("#top-nav-search-form input").value = "CSS Selector";
document.querySelector("#top-nav-search-form").submit()

//8
let languageList = document.querySelector("#SIvCob");
for (i = 0; i <= languageList.children.length; i++) {
    languageList.children[i].remove()
}

//9
document.querySelector(".text-color-white").children[0].classList.remove("text-color-hero-gradient");
document.querySelector(".text-color-white").style.fontFamily = "monospace"

//10
let button = document.querySelector("div.row div a");
button.addEventListener("mouseover",()=>(button.querySelector(".login-btn-text").style.backgroundColor = "red"))

//11
document.querySelector("div.wrapper a span").style.backgroundImage = "url('https://ineuron.ai/images/ineuron-logo.png')"

//12
document.querySelector("#new_repository button").style.backgroundColor = "blue";

//13
// proper text is not available

//14
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize = "80px"

//15
document.querySelector("#d560822win9b .ps-top h3").style.textAlign = "right";

//16
document.querySelectorAll(".geist-wrapper")[1].querySelector("div div h4").innerHTML = "Start with Scratch"

//17
document.querySelector(".span4 .btn-container").innerHTML = Date()

//18
document.querySelector("footer").style.background = "orange"

//19
document.querySelector(".navbar-brand img").src

//20
document.querySelector(".productcard section .section-box h3.desc").style.color = "orange"