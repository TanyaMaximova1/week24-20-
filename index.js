let input_text = myForm.elements.input_text;
let select = myForm.elements.select;

postButton.onclick = function (e) {
    e.preventDefault();
    if (select.value == 1) {
        //персонажи
        try {
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
            if (input_text.value >= 11) {
                throw new SyntaxError("Значение вне диапазона!"); // (*)
            }
        }
        catch (error) {
            let div = document.getElementById("answer");
            div.innerHTML = `<p><font color="red">${error.message}</font></p>`;
        }
    }

    //планеты
    if (select.value == 2) {
        try {
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
            if (input_text.value >= 11) {
                throw new SyntaxError("Значение вне диапазона!"); // (*)
            }
        }
        catch (error) {
            let div = document.getElementById("answer");
            div.innerHTML = `<p><font color="red">${error.message}</font></p>`;
        }
    }

    //фильмы
    if (select.value == 3) {
        try {
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
            if (input_text.value >= 11) {
                throw new SyntaxError("Значение вне диапазона!"); // (*)
            }
        }
        catch (error) {
            let div = document.getElementById("answer");
            div.innerHTML = `<p><font color="red">${error.message}</font></p>`;
        }
    }
}
