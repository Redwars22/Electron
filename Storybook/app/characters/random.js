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

    getAge() {
        const randomAge = Math.floor(Math.random() * (100 + 1));
        return (randomAge == 0 ? 1 : randomAge);
    }

    getRandomValue(min, max) {
        const value = Math.random() * (max + 1);
        return (value < min ? value + 1.0 : value).toFixed(2);
    }

    getBloodType() {
        return this.bloodTypesArray[Math.floor(Math.random() * this.bloodTypesArray.length)];
    }

    getBirthMonth() {
        return this.monthsArray[Math.floor(Math.random() * this.monthsArray.length)];
    }

    getBirthPlace() {
        return null;
    }

    getPersonality() {
        return this.personalityArray[Math.floor(Math.random() * this.personalityArray.length)];
    }

    getCharacterInfo() {
        const personalInfo = `IDADE: ${this.getAge()} \nTIPO SANGUÍNEO: ${this.getBloodType()} \nPERSONALIDADE: ${this.getPersonality()}`
        const size = `\nALTURA: ${this.getRandomValue(1.25, 2.10)} \nPESO: ${this.getRandomValue(48.0, 123.0)}`;
        const birthInfo = `\nMÊS DE NASCIMENTO: ${this.getBirthMonth()}`
        return personalInfo + size + birthInfo;
    }

    async getRandomCharacter() {
        const { value: name } = await Swal.fire({
            input: 'text',
            inputLabel: 'Insira o nome do personagem',
            inputPlaceholder: 'Insira o nome...',
            inputAttributes: {
                'aria-label': 'Insira o nome'
            },
            showCancelButton: true,
        })

        if (name) {
            this.name = name;
            const character = this.getCharacterInfo();
            Swal.fire({
                title: this.name,
                html: character,
                confirmButtonText: 'Adicionar à lista',
                showCancelButton: true,
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    if (localStorage.getItem("characters") === null) {
                        document.querySelector('.characters-list').innerHTML = `<div class="character-container" contenteditable><h1 class="character-name">${this.name}</h1>${character}</div>`;
                    } else
                        document.querySelector('.characters-list').innerHTML += `<div class="character-container" contenteditable><h1 class="character-name">${this.name}</h1>${character}</div>`;
                }
            });
        }
    }

    getCharacters() {
        if (localStorage.getItem('characters') !== null) {
            document.getElementById('characters-list').innerHTML = "";
            document.getElementById('characters-list').innerHTML = localStorage.getItem('characters');
            return;
        }

        document.getElementById('characters-list').innerHTML = "<h3>⚠️ NÃO HÁ NADA AQUI!</h3><br/><span>Comece adicionando personagens para salvá-los aqui.</span>";
    }

    deleteAllCharacters() {
        localStorage.removeItem('characters');
        window.location.reload();
    }

    saveAllCharacters() {
        try {
            const list = document.getElementById('characters-list').innerHTML;
            localStorage.setItem('characters', list);

            Swal.fire({
                title: 'Salvando personagens!',
                timer: 1000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                }
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })

        } catch (err) {
            console.log(err);
        }
    }
}

const character = new Character();

function handleNewCharacter() {
    character.getRandomCharacter();
}

function handleDeleteCharacters() {
    character.deleteAllCharacters();
}

function handleSaveCharacters() {
    character.saveAllCharacters();
}

function handleGoBack() {
    window.location.replace("../editor/editor.html");
}

window.onload = () => {
    const characters = new Character();
    characters.getCharacters();
}