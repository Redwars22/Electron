class Text {
    textEditor = document.getElementById('editor-page');
    fontSize = 12;
    foreground = "#fff";
    fonts = [
        "Courier Prime",
        "Roboto",
        "Edu NSW ACT Foundation",
        "Grand Hotel",
        "Chakra Petch",
        "Cormorant SC"
    ];
    textAlign;
    
    setFontFamily(id){
        document.getElementById('editor-page').style.fontFamily = this.fonts[id];
        localStorage.setItem('font', this.fonts[id]);
    }

    setFontSize(size) {
        this.fontSize = size.toString() + 'px';
        document.getElementById('editor-page').style['font-size'] = this.fontSize;
    }

    setForeground(color) {
        this.foreground = color;
        document.getElementById('editor-page').style['color'] = this.foreground;
    }

    setTextAlign(position){
        this.textAlign = position;
        document.getElementById('editor-page').style['text-align'] = this.textAlign;
    }
}

class File {
    saveFile() {
        const content = document.querySelector("#editor-page").innerHTML;
        localStorage.setItem("data", content);
    }

    retrieveFile() {
        const content = localStorage.getItem("data");
        document.querySelector("#editor-page").innerHTML = content;
    }

    handleDeleteEverything() {
        swal.fire({
            title: 'Espera aí!',
            text: 'Tem certeza de que deseja deletar todo o conteúdo, incluindo rascunhos salvos e configurações? OBS: É irreversível!',
            icon: 'warning',
            confirmButtonText: 'Sim, deletar!',
            showCancelButton: true,
            cancelButtonText: 'Não, cancelar!',
        }).then((result) => {
            if (result.isConfirmed) { 
                localStorage.clear(); 
                window.location.reload() 
            };
        });
    }
}

const text = new Text();
const file = new File();

function handleChangeFontSize() {
    const fontSize = document.getElementById('font-size-field').value;
    text.setFontSize(fontSize);
}

function handleChangeForeground() {
    const foreground = document.getElementById('foreground-field').value;
    text.setForeground(foreground);
}

file.retrieveFile();

setInterval(() => {
    file.saveFile();
}, 1500)

function handleOpenAboutModal() {
    swal.fire({
        icon: 'info',
        title: 'Storybook RELEASE CANDIDATE 2022',
        text: 'Desenvolvido por André Pereira(@Redwars22) para a disciplina de Modelagem de Software'
    });
}

function handleChangeFont(id){
    text.setFontFamily(id);
}

function handleTextAlign(position){
    text.setTextAlign(position);
}