function contactMe() {
    window.location.href = "mailto:kraniket.480@gmail.com";
   // window.location.href = "tel:7209547420";
}


document.addEventListener('DOMContentLoaded', function() {
    var coll = document.getElementsByClassName("collapsible");
    
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});
function downloadCV() {
    // Path to your CV file (update the path as needed)
    const cvFilePath = "MY RESUME.pdf"; 
    
    // Create an invisible anchor element
    const anchor = document.createElement("a");
    anchor.href = cvFilePath;
    anchor.download = "MY RESUME.pdf"; // Name of the downloaded file
    
    // Append to body, trigger click, then remove
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}



