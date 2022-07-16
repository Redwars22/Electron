window.onload = ()=>{
    const theme = localStorage.getItem('theme');
            
    if(theme == 'light'){
        document.querySelector('body').style['background-color'] = '#f5f5f7';
        document.querySelector('nav').style['color'] = 'black';
        document.querySelector('.button-group').style['color'] = 'black';
    } else if(theme == "dark") {
        document.querySelector('body').style['background-color'] = '#001d25';
        document.querySelector('body').style['color'] = 'white';
        document.querySelector('.button-group').style['color'] = '#fff';
    } else if(theme == "red"){
        document.querySelector('body').style['background-color'] = '#eb4034';
        document.querySelector('body').style['color'] = '#fff';
        document.querySelector('.menu-button').style['background-color'] = "#ad1d4c";
    } else if(theme == "blue"){
        document.querySelector('body').style['background-color'] = '#0071e3';
        document.querySelector('body').style['color'] = '#fff';
        document.querySelector('.menu-button').style['background-color'] = "#ad1d4c";
    } else {
        document.querySelector('body').style['background-color'] = '#001d25';
        document.querySelector('body').style['color'] = 'white';
        document.querySelector('.button-group').style['color'] = '#fff';
    }
};