class TextFormat {
    textEditor = document.getElementById('editor-page');

    fontSize = 12;
    foreground = "#fff";
    
    setFontSize(size){
        this.fontSize = size.toString() + 'px';
        document.getElementById('editor-page').style['font-size'] = this.fontSize;
    }

    setForeground(color){
        this.foreground = color;
        document.getElementById('editor-page').style['color'] = this.foreground;
    }
}

class File {
    saveFile(){
        const content = document.querySelector("#editor-page").innerHTML;
        localStorage.setItem("data", content);
    }

    retrieveFile(){
        const content = localStorage.getItem("data");
        document.querySelector("#editor-page").innerHTML = content;
    }

    setDocumentTitle(){
        const title = document.querySelector("#doc-title-field").value;
        localStorage.setItem("doc-title", title);
    }
}

const text = new TextFormat();
const file = new File();

function handleChangeFontSize(){
    const fontSize = document.getElementById('font-size-field').value;
    text.setFontSize(fontSize);
}

function handleChangeForeground(){
    const foreground = document.getElementById('foreground-field').value;
    text.setForeground(foreground);
}

file.retrieveFile();

setInterval(()=>{
    file.saveFile();
}, 5000)

function handleOpenAboutModal(){
    swal.fire({
        icon: 'info',
        title: 'AAA',
        text: 'bbb'
    });
}