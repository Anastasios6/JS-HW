const titleElement = document.getElementById("title")
titleElement.style = "color:darkslategray";
titleElement.style.fontFamily = "Georgia";

console.log(titleElement);

const contentElements = document.getElementById("content")

contentElements.style = "color:Orange";
contentElements.style.fontFamily = "Georgia";

// site p elementi menuvanje fontFamily preku style svojstvoto

const paragraphElements = document.querySelectorAll(".paragraphs");
paragraphElements.forEach(paragraph => {
    paragraph.style.fontFamily = "Georgia";
});

// Event Listeners ("click", "mouseover", "mouseleave") create alert() popup

const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
    btn.style.color = "green";
    
    btn.addEventListener("click", () => {
        console.log("Clicked");
    })
    btn.addEventListener("mouseover", () => {
        console.log("MouseOver");

    })
    btn.addEventListener ("mouseleave", () => {
        console.log("MouseLeave");
        
    })
})

const darkMode = document.getElementById("dark-mode");

darkMode.addEventListener("click", () => {
    const userConfirmed = confirm("Are you sure you want to toggle Dark Mode?");
    if (userConfirmed) {
        document.body.classList.toggle("dark-mode");
        darkMode.classList.toggle("dark-toggle");
    }

});
// Input pole preku koe mozam da kreiram todo so svojstva: "title" i "completed"




// fetch + DOM rendering na lista na objekti (public API)
// Error handling so catch
// setTimeout + setInterval