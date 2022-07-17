class Component {

    getNarrationComponent(text) {
        return `</br><div class='narration-container'><p>📣️ <em>${text}</em></p></div></br>`
    }

    getCommentsComponent(comment) {
        return `<div class='comment-container'><p>(<em>${comment}</em>)</p></div></br>`
    }

    getSceneComponent(number, title) {
        return `<div class='scene-container'><p>🎬 CENA ${number} - ${title}</p></div></br>`
    }

    getEffectsComponent() {
        return "<div class='effects-container'>" +
            "<p>🏃‍♂️ <u>????</u></p></div></br>"
    }

    getContextComponent() {
        return "<div class='context-container'><u>29 DE FEVEREIRO DE 2022, COLÉGIO REGENTE, ÀS 22:15<u/></div>"
    }

    getDialogueComponent() {
        return "<div class='dialogue-container'><strong>PERSONAGEM: </strong> fala do personagem!</div>"
    }
}

async function handleNarration() {
    const component = new Component();

    const { value: text } = await Swal.fire({
        input: 'textarea',
        inputLabel: 'Insira a narração',
        inputPlaceholder: 'Digite o texto aqui...',
        inputAttributes: {
            'aria-label': 'Digite o texto aqui'
        },
        showCancelButton: true
    })

    if (text) {
        const currentContent = document.getElementById('editor-page').innerHTML;
        document.getElementById('editor-page').innerHTML = currentContent + component.getNarrationComponent(text);
    }
}

async function handleComment() {
    const component = new Component();

    const { value: comment } = await Swal.fire({
        input: 'textarea',
        inputLabel: 'Insira um comentário',
        inputPlaceholder: 'Digite o comentário...',
        inputAttributes: {
            'aria-label': 'Digite o comentário'
        },
        showCancelButton: true
    })

    if (comment) {
        const currentContent = document.getElementById('editor-page').innerHTML;
        document.getElementById('editor-page').innerHTML = currentContent + component.getCommentsComponent(comment);
    }
}

async function handleScene() {
    const component = new Component();

    const { value: number } = await Swal.fire({
        input: 'text',
        inputLabel: 'Insira o número da cena',
        inputPlaceholder: 'Número da cena...',
        inputAttributes: {
            'aria-label': 'Número da cena'
        },
        showCancelButton: true
    });

    if (number) {
        const { value: title } = await Swal.fire({
            input: 'text',
            inputLabel: 'Insira o título da cena',
            inputPlaceholder: 'Insira o título da cena...',
            inputAttributes: {
                'aria-label': 'Insira o título da cena'
            },
            showCancelButton: true
        })

        if (title) {
            const currentContent = document.getElementById('editor-page').innerHTML;
            document.getElementById('editor-page').innerHTML = currentContent + component.getSceneComponent(number, title);
        }
    }

}

async function handleEffects() {
    const component = new Component();

    const currentContent = document.getElementById('editor-page').innerHTML;
    document.getElementById('editor-page').innerHTML = currentContent + component.getEffectsComponent();
}

async function handleDialogues() {
    const component = new Component();

    const currentContent = document.getElementById('editor-page').innerHTML;
    document.getElementById('editor-page').innerHTML = currentContent + component.getDialogueComponent();
}

async function handleContext() {
    const component = new Component();

    const currentContent = document.getElementById('editor-page').innerHTML;
    document.getElementById('editor-page').innerHTML = currentContent + component.getContextComponent();
}