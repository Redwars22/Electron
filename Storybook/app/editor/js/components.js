class Component {

    getNarrationComponent() {
        return "</br><div class='narration-container'>" +
            "<p>📣️ <em>Lorem ipsum dolor sit amet</em></p></div></br>"
    }

    getCommentsComponent() {
        return "<div class='comment-container'>" +
            "<p>(<em>Isto é um comentário!</em>)</p></div></br>"
    }

    getSceneComponent() {
        return "<div class='scene-container'>" +
            "<p>🎬 CENA 1 - TÍTULO</p></div></br>"
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

function handleNarration() {
    const component = new Component();

    const currentContent = document.getElementById('editor-page').innerHTML;
    document.getElementById('editor-page').innerHTML = currentContent + component.getNarrationComponent();
}

function handleComment() {
    const component = new Component();

    const currentContent = document.getElementById('editor-page').innerHTML;
    document.getElementById('editor-page').innerHTML = currentContent + component.getCommentsComponent();
}

function handleScene() {
    const component = new Component();

    const currentContent = document.getElementById('editor-page').innerHTML;
    document.getElementById('editor-page').innerHTML = currentContent + component.getSceneComponent();
}

function handleEffects() {
    const component = new Component();

    const currentContent = document.getElementById('editor-page').innerHTML;
    document.getElementById('editor-page').innerHTML = currentContent + component.getEffectsComponent();
}

function handleDialogues() {
    const component = new Component();

    const currentContent = document.getElementById('editor-page').innerHTML;
    document.getElementById('editor-page').innerHTML = currentContent + component.getDialogueComponent();
}

function handleContext() {
    const component = new Component();

    const currentContent = document.getElementById('editor-page').innerHTML;
    document.getElementById('editor-page').innerHTML = currentContent + component.getContextComponent();
}