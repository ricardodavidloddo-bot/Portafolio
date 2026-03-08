window.addEventListener("load", ()=>{

    let name = document.querySelector(".name")
    let name2 = document.querySelector(".name2")
    let loading = document.querySelector(".loading")

    let intro = document.querySelector(".intro-loader")

    let header = document.querySelector(".header")
    let img = document.querySelector(".hero_img")
    let texto = document.querySelector(".hero_text_content")

    setTimeout(()=>{
        header.style.opacity = "1"
        header.style.transform= "translateY(0%) translateX( 50%)"

        img.style.opacity = "1"
        img.style.transform= "translateY(0%)"

        texto.style.opacity = "1"
        texto.style.transform= "translateY(0%)"
    }, 3000)

    
    setTimeout(()=>{
        img.styles.animation = " 3000ms mov infinite"
    }, 6000)
    
    
    setTimeout(()=>{
        name.style.opacity = "1"
        name.style.transform= "translateY(0)"
        name2.style.opacity = "1"
        name2.style.transform= "translateY(0)"
        loading.style.opacity = "1"
        loading.style.transform= "translateY(0)"
    }, 300)



    setTimeout(()=>{
        intro.style.top = "-100%"
    }, 3000)
})