function handleGoBack(){
    window.location.replace('../editor/editor.html')
}

function handleChangeSettings(){
    const theme = document.querySelector('#theme-selector').value;
    localStorage.setItem('theme', theme);
}