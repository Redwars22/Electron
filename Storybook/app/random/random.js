// @ts-check

class Character {
    name;
    personalityArray = [
    'ESTJ',
    'ENTJ',
    'ESFJ',
    'ENFJ',
    'ISTJ',
    'INFJ',
    'INTJ',
    'INFJ',
    'ESTP',
    'ESFP',
    'ENTP',
    'ENFP',
    'ISTP',
    'ISFP',
    'INTP',
    'INFP',
    ];
    bloodTypesArray = ['A+', 'A-', 'B+', 'B-', 'AB', 'O+', 'O-'];
    monthsArray = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]

    getAge(){
        const randomAge = Math.floor(Math.random() * (100 + 1));
        return (randomAge == 0 ? 1 : randomAge);
    }

    getRandomValue(min, max){
        const value = Math.random() * (max + 1);
        return (value < min ? value + 1.0 : value).toFixed(2);
    }

    getBloodType(){
        return this.bloodTypesArray[Math.floor(Math.random() * this.bloodTypesArray.length)];
    }

    getBirthMonth(){
        return this.monthsArray[Math.floor(Math.random() * this.monthsArray.length)];
    }

    getBirthPlace(){
        return null;
    }

    getPersonality(){
        return this.personalityArray[Math.floor(Math.random() * this.personalityArray.length)];
    }

    getCharacterInfo(){
        /*return {
            age: this.getAge(),
            bloodType: this.getBloodType(),
            personality: this.getPersonality(),
            height: this.getRandomValue(1.25, 2.10),
            weight: this.getRandomValue(48.0, 123.0),
            birthMonth: this.getBirthMonth(),
            birthPlace: this.getBirthPlace()
        }*/

        const personalInfo = `IDADE: ${this.getAge()} \nTIPO SANGUÍNEO: ${this.getBloodType()} \nPERSONALIDADE: ${this.getPersonality()}`
        const size = `\nALTURA: ${this.getRandomValue(1.25, 2.10)} \nPESO: ${this.getRandomValue(48.0, 123.0)}`;
        const birthInfo = `\nMÊS DE NASCIMENTO: ${this.getBirthMonth()}\nCONTINENTE EM QUE NASCEU: `
        return personalInfo + size + birthInfo;
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
            const character = this.getCharacterInfo();
            Swal.fire({
                title: this.name,
                text: character,
                confirmButtonText: 'Adicionar à lista',
                showCancelButton: true,
                cancelButtonText: 'Cancelar'
            }).then((result)=> {
                if(result.isConfirmed){
                    document.querySelector('.characters-list').innerHTML += `<div class="character-container" contenteditable><h1 class="character-name">${this.name}</h1>${character}</div>`;
                }
            });
        }
    }

    getCharacters(){}

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