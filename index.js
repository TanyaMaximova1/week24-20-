// try {
//     console.log(parseInt("ыыыы"));
// }
// catch (error) {
//     console.log("Основание не в указанном диапазоне, либо первый символ не удалось преобразовать в число!");
// }
//что-то не совсем пойму, как правильно написать

// let user = undefined;
// try {
//     console.log(`Привет, ${user.name}`);
// }
// catch (error) {
//     console.log("Имя пользователя не заполненно");
// }

let input_text = myForm.elements.input_text;
let select = myForm.elements.select;


postButton.onclick = function (e) {
    e.preventDefault();

    if (select.value == 1) {
        //персонажи
        if (input_text.value == 1) {
            fetch('https://swapi.dev/api/people/1/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Имя: ${choice.name}</p><br/><p>День рождения: ${choice.birth_year}</p><br><p>Цвет глаз: ${choice.eye_color}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 2) {
            fetch('https://swapi.dev/api/people/2/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Имя: ${choice.name}</p><br/><p>День рождения: ${choice.birth_year}</p><br><p>Цвет глаз: ${choice.eye_color}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 3) {
            fetch('https://swapi.dev/api/people/3/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Имя: ${choice.name}</p><br/><p>День рождения: ${choice.birth_year}</p><br><p>Цвет глаз: ${choice.eye_color}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 4) {
            fetch('https://swapi.dev/api/people/4/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Имя: ${choice.name}</p><br/><p>День рождения: ${choice.birth_year}</p><br><p>Цвет глаз: ${choice.eye_color}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 5) {
            fetch('https://swapi.dev/api/people/5/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Имя: ${choice.name}</p><br/><p>День рождения: ${choice.birth_year}</p><br><p>Цвет глаз: ${choice.eye_color}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 6) {
            fetch('https://swapi.dev/api/people/6/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Имя: ${choice.name}</p><br/><p>День рождения: ${choice.birth_year}</p><br><p>Цвет глаз: ${choice.eye_color}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 7) {
            fetch('https://swapi.dev/api/people/7/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Имя: ${choice.name}</p><br/><p>День рождения: ${choice.birth_year}</p><br><p>Цвет глаз: ${choice.eye_color}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 8) {
            fetch('https://swapi.dev/api/people/8/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Имя: ${choice.name}</p><br/><p>День рождения: Нет</p><br><p>Цвет глаз: ${choice.eye_color}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 9) {
            fetch('https://swapi.dev/api/people/9/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Имя: ${choice.name}</p><br/><p>День рождения: ${choice.birth_year}</p><br><p>Цвет глаз: ${choice.eye_color}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 10) {
            fetch('https://swapi.dev/api/people/10/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Имя: ${choice.name}</p><br/><p>День рождения: ${choice.birth_year}</p><br><p>Цвет глаз: ${choice.eye_color}</p>`;
                })
                .catch(err => console.log(err));
        }
    }

    //планеты
    if (select.value == 2) {
        if (input_text.value == 1) {
            fetch('https://swapi.dev/api/planets/1/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Имя: ${choice.name}</p><br/><p>Модель: ${choice.diameter}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 2) {
            fetch('https://swapi.dev/api/planets/2/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Имя: ${choice.name}</p><br/><p>Модель: ${choice.diameter}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 3) {
            fetch('https://swapi.dev/api/planets/3/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Имя: ${choice.name}</p><br/><p>Модель: ${choice.diameter}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 4) {
            fetch('https://swapi.dev/api/planets/4/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Имя: ${choice.name}</p><br/><p>Модель: ${choice.diameter}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 5) {
            fetch('https://swapi.dev/api/planets/5/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Имя: ${choice.name}</p><br/><p>Модель: ${choice.diameter}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 6) {
            fetch('https://swapi.dev/api/planets/6/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Имя: ${choice.name}</p><br/><p>Модель: ${choice.diameter}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 7) {
            fetch('https://swapi.dev/api/planets/7/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Имя: ${choice.name}</p><br/><p>Модель: ${choice.diameter}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 8) {
            fetch('https://swapi.dev/api/planets/8/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Имя: ${choice.name}</p><br/><p>Модель: ${choice.diameter}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 9) {
            fetch('https://swapi.dev/api/planets/9/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Имя: ${choice.name}</p><br/><p>Модель: ${choice.diameter}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 10) {
            fetch('https://swapi.dev/api/planets/10/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Имя: ${choice.name}</p><br/><p>Модель: ${choice.diameter}</p>`;
                })
                .catch(err => console.log(err));
        }
    }

    //фильмы
    if (select.value == 2) {
        if (input_text.value == 1) {
            fetch('https://swapi.dev/api/films/1/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Название фильма: ${choice.title}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 2) {
            fetch('https://swapi.dev/api/films/2/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Название фильма: ${choice.title}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 3) {
            fetch('https://swapi.dev/api/films/3/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Название фильма: ${choice.title}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 4) {
            fetch('https://swapi.dev/api/films/4/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Название фильма: ${choice.title}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 5) {
            fetch('https://swapi.dev/api/films/5/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Название фильма: ${choice.title}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 6) {
            fetch('https://swapi.dev/api/films/6/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Название фильма: ${choice.title}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 7) {
            fetch('https://swapi.dev/api/films/7/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Название фильма: ${choice.title}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 8) {
            fetch('https://swapi.dev/api/films/8/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Название фильма: ${choice.title}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 9) {
            fetch('https://swapi.dev/api/films/9/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Название фильма: ${choice.title}</p>`;
                })
                .catch(err => console.log(err));
        } else if (input_text.value == 10) {
            fetch('https://swapi.dev/api/films/10/')
                .then(response => response.json())
                .then(choice => {
                    let div = document.getElementById("answer");
                    div.innerHTML = `<p>Название фильма: ${choice.title}</p>`;
                })
                .catch(err => console.log(err));
        }
    }
}
