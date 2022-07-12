window.onload = ()=>{
    const theme = localStorage.getItem('theme');
            
    if(theme == 'light'){
        document.querySelector('body').style['background-color'] = '#c3cad6';
        document.querySelector('nav').style['color'] = 'black';
        document.querySelector('.button-group').style['color'] = 'black';
    } else {
        document.querySelector('body').style['background-color'] = '#001d25';
        document.querySelector('body').style['color'] = 'white';
        document.querySelector('.button-group').style['color'] = '#fff';
    }
};