const panels = document.querySelectorAll(".panel")
panels.forEach((panel) => {
    console.log(panel);
    panel.addEventListener("click", () =>{
        removeActiveClasses();
        panel.classList.add("active");
        panel.querySelector("span").removeAttribute("hidden");
    })
}
)
function removeActiveClasses(){
    panels.forEach((panel)=>{
        if (panel.classList.contains("active")){
            panel.classList.remove("active");
            panel.querySelector("span").setAttribute("hidden","hidden");
        }
    })
}