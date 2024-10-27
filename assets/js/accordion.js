const acc = document.getElementsByClassName("accordion");
let i;

let responsivePadding;


const setResponsivePadding = () => {
    if (window.innerWidth >= 750) {
        responsivePadding = 32
    } else {
        responsivePadding = 14
    }
    
}
setResponsivePadding()
window.addEventListener("resize", setResponsivePadding)


for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        // Get the parent accordionItem and toggle the 'active' class
        const accordionItem = this.parentElement;
        accordionItem.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + responsivePadding + "px";
        }
    });
}