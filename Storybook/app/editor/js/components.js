// @ts-check

class Component {
    getNarrationComponent(text) {
        return `</br><div class='narration-container'><p>📣️ <em>${text}</em></p></div></br>`
    }

    getCommentsComponent(comment) {
        return `<div class='comment-container'><p>(<em>${comment}</em>)</p></div></br>`
    }

    getSceneComponent(number, title) {
        return `<div class='scene-container'><p>🎬 CENA ${number} - ${title.toUpperCase()}</p></div></br>`
    }

    getEffectsComponent(description) {
        return `<div class='effects-container'><p>🏃‍♂️ <u>${description.toUpperCase()}</u></p></div></br>`
    }

    getContextComponent(date, place, time) {
        return `<div class='context-container'><u>📅️ ${date.toUpperCase()}, 🗺️ ${place.toUpperCase()}, ℹ️ ${time.toUpperCase()}<u/></div>`
    }

    getDialogueComponent(character, dialogue) {
        return `<div class='dialogue-container'><strong>${character.toUpperCase()}: </strong> ${dialogue}</div>`
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

    const { value: description } = await Swal.fire({
        input: 'text',
        inputLabel: 'Insira uma ação, transição, mudanças climáticas, etc.',
        inputPlaceholder: 'Ex: João corre em direção a Maria, O tempo começou a ficar estranho...',
        inputAttributes: {
            'aria-label': ''
        },
        showCancelButton: true
    });

    if (description) {
        const currentContent = document.getElementById('editor-page').innerHTML;
        document.getElementById('editor-page').innerHTML = currentContent + component.getEffectsComponent(description);
    }
}

async function handleDialogues() {
    const component = new Component();

    const { value: character } = await Swal.fire({
        input: 'text',
        inputLabel: 'Insira o nome do personagem',
        inputPlaceholder: 'Insira o nome do personagem...',
        inputAttributes: {
            'aria-label': 'Insira o nome do personagem'
        },
        showCancelButton: true
    });

    if (character) {
        const { value: dialogue } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Insira a fala do personagem',
            inputPlaceholder: 'Insira a fala do personagem...',
            inputAttributes: {
                'aria-label': 'Insira a fala do personagem'
            },
            showCancelButton: true
        })

        if (dialogue) {
            const currentContent = document.getElementById('editor-page').innerHTML;
            document.getElementById('editor-page').innerHTML = currentContent + component.getDialogueComponent(character, dialogue);
        }
    }

}

async function handleContext() {
    const component = new Component();

    const { value: date } = await Swal.fire({
        input: 'text',
        inputLabel: 'Insira a data',
        inputPlaceholder: 'Data...',
        inputAttributes: {
            'aria-label': 'Data'
        },
        showCancelButton: true
    });

    if (date) {
        const { value: place } = await Swal.fire({
            input: 'text',
            inputLabel: 'Insira o lugar',
            inputPlaceholder: 'Insira o lugar...',
            inputAttributes: {
                'aria-label': 'Insira o lugar'
            },
            showCancelButton: true
        })

        if (place) {
            const { value: time } = await Swal.fire({
                input: 'text',
                inputLabel: 'Insira a hora',
                inputPlaceholder: 'Insira a hora...',
                inputAttributes: {
                    'aria-label': 'Insira a hora'
                },
                showCancelButton: true
            });

            if (time) {
                const currentContent = document.getElementById('editor-page').innerHTML;
                document.getElementById('editor-page').innerHTML = currentContent + component.getContextComponent(date, place, time);
            }
        }
    }
    const currentContent = document.getElementById('editor-page').innerHTML;
    document.getElementById('editor-page').innerHTML = currentContent + component.getContextComponent();
}