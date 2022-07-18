function handleGoBack() {
    window.location.replace('../editor/editor.html')
}

function handleChangeSettings() {
    const theme = document.querySelector('#theme-selector').value;
    localStorage.setItem('theme', theme);
    setTimeout(() => {
        window.location.replace('../editor/editor.html')
    }, 500);
}

function handleDeleteEverything() {
    swal.fire({
        title: 'Espera aí!',
        text: 'Tem certeza de que deseja deletar todo o conteúdo, incluindo rascunhos salvos e configurações? OBS: É irreversível!',
        icon: 'warning',
        confirmButtonText: 'Sim, deletar!',
        showCancelButton: true,
        cancelButtonText: 'Não, cancelar!',
    }).then((result) => {
        if (result.isConfirmed) localStorage.clear();

    });
}