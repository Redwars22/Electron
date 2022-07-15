class Component {

    getNarrationComponent(){
        return "<div class='narration-container'>" +
        "<p>📣️ <em>Lorem ipsum dolor sit amet</em></p></div></br><p></p>"
/*       <div class="narration-container">
        <p>🎬 CENA 1 - TÍTULO</p>
      </div>

      <div class="comment-container">
        <p>(<em>Isto é um comentário!</em>)</p>
      </div>"); */
    }

    getCommentsComponent(){
        return "<div class='comment-container'>" +
        "<p>(<em>Isto é um comentário!</em>)</p></div></br>"
    }

    getSceneComponent(){
        return "<div class='scene-container'>" +
        "<p>🎬 CENA 1 - TÍTULO</p></div></br>"
    }
}

function handleNarration(){
    const component = new Component();

    const currentContent = document.getElementById('editor-page').innerHTML;
    document.getElementById('editor-page').innerHTML = currentContent + component.getNarrationComponent();
}

function handleComment(){
    const component = new Component();

    const currentContent = document.getElementById('editor-page').innerHTML;
    document.getElementById('editor-page').innerHTML = currentContent + component.getCommentsComponent();
}

function handleScene(){
    const component = new Component();

    const currentContent = document.getElementById('editor-page').innerHTML;
    document.getElementById('editor-page').innerHTML = currentContent + component.getSceneComponent();
}