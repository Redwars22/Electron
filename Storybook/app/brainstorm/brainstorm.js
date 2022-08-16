function handleGoBack() {
    window.location.replace("../editor/editor.html");
}

window.onload = () => {
    if (localStorage.getItem("brainstorm") !== null) {
        document.getElementById("brainstorm-editor").innerText =
            localStorage.getItem("brainstorm");
    }

    setInterval(() => {
        const content = document.getElementById("brainstorm-editor").innerText;
        localStorage.setItem("brainstorm", content);
    }, 1500);
    
};

