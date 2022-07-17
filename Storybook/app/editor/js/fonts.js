const fonts = [
    "Courier Prime",
    "Roboto",
    "Edu NSW ACT Foundation",
    "Grand Hotel",
    "Chakra Petch"
];

function handleChangeFont(id){
    document.getElementById('editor-page').style.fontFamily = fonts[id];
    localStorage.setItem('font', fonts[id]);
}