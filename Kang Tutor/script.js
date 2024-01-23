function toggleHighlight() {
    var headerNav = document.getElementById("nav")
    if (!headerNav.classList.contains("open")) {
        headerNav.classList.add("open");
        
    } else {
        headerNav.classList.remove("open");
    }
}