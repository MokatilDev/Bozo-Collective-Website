const Section_ArtWork = document.querySelector(".Section_ArtWork")
const Button_Artwork = document.querySelector(".Button_Artwork")
const Section_Home = document.querySelector(".Section_Home")

Button_Artwork.addEventListener("click", () => {
    Section_Readmap.classList.remove("active")
    Section_Mint_Info.classList.remove("active")

    Section_DaoHub.classList.remove("active")

    Section_ArtWork.classList.add("active")
    Section_Home.classList.add("active")
    Button_Artwork.style.color = `#575757`
    Button_Home.style.color = ""
    Button_Readmap.style.color = ""

    Button_DaoHub.style.color = ""
})

const Button_Home = document.querySelector(".Button_Home")

Button_Home.addEventListener("click", () => {
    Section_Readmap.classList.remove("active")

    Section_Mint_Info.classList.remove("active")
    Section_DaoHub.classList.remove("active")

    Section_ArtWork.classList.remove("active")
    Section_Home.classList.remove("active")
    Button_Home.style.color = `#575757`
    Button_Artwork.style.color = ""
    Button_Readmap.style.color = ""

    Button_DaoHub.style.color = ""

})

const Button_DaoHub = document.querySelector(".Button_DaoHub")
const Section_DaoHub = document.querySelector(".Section_DaoHub")


Button_DaoHub.addEventListener("click", () => {
    Section_Readmap.classList.remove("active")
    Section_DaoHub.classList.add("active")
    Section_ArtWork.classList.remove("active")
    Section_Mint_Info.classList.remove("active")
    Section_Home.classList.add("active")

    Button_DaoHub.style.color = `#575757`
    Button_Artwork.style.color = ""
    Button_Home.style.color = ""
    Button_Readmap.style.color = ""
})

const Section_Readmap = document.querySelector(".Section_Readmap")
const Button_Readmap = document.querySelector(".Button_Readmap")

Button_Readmap.addEventListener("click", () => {
    Section_Readmap.classList.add("active")
    Section_Mint_Info.classList.remove("active")

    Section_DaoHub.classList.remove("active")
    Section_ArtWork.classList.remove("active")
    Section_Home.classList.add("active")

    Button_Readmap.style.color = `#575757`
    Button_Artwork.style.color = ""
    Button_Home.style.color = ""
    Button_DaoHub.style.color = ""

})

const Button_Mint_Info = document.querySelector(".Button_Mint_Info")
const Section_Mint_Info = document.querySelector(".Mint_Info")
const Back = document.querySelector(".Back")

Button_Mint_Info.addEventListener("click", () => {
    Section_Mint_Info.classList.toggle("active")
    Section_Home.classList.add("active")
    Button_Home.style.color = ""
})

Back.addEventListener("click",()=>{
    Section_Mint_Info.classList.remove("active")
    Section_Home.classList.remove("active")
    Button_Home.style.color = `#575757`

})