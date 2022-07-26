// @ts-check

class Character {
    name;
    age;
    personality;
    weight;
    birthContinent;
    height;
    bloodType;
    birthDate;

    personalityArray;
    bloodTypesArray;

    getCharacters(){}

    getCharacterInfo(){
        return 'aaaa';
    }

    generateCharacter(){}

    async getRandomCharacter(){
        this.generateCharacter();

        const { value: name } = await Swal.fire({
            input: 'text',
            inputLabel: 'Insira o nome do personagem',
            inputPlaceholder: 'Insira o nome...',
            inputAttributes: {
                'aria-label': 'Insira o nome'
            },
            showCancelButton: true,
        })

        if(name){
            this.name = name;

            Swal.fire({
                title: this.name,
                text: this.getCharacterInfo(),
                confirmButtonText: 'Adicionar à lista',
                showCancelButton: true,
                cancelButtonText: 'Cancelar'
            })
        }
    }

    deleteAllCharacters(){}
}

const character = new Character();

function handleNewCharacter(){
    character.getRandomCharacter();
}

function handleDeleteCharacters(){}

function handleGoBack(){
    window.location.replace("../editor/editor.html");
}