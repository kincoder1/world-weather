//* INFO
/*
    En este archivo estan las funciones 
    que brindan informaciona la 
    pagina sin necesidad de
    interactuar con el cliente.
*/

//* functions
let buenos_aires = async () => {
    let get_location = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=buenos%20aires&appid=${api_key}`);
    let data = await get_location.json();

    let city = document.getElementById('buenos-aires');
    city.innerHTML = `
            <div class="card-header">
                <div class="card-header-city">${data.name}</div>
                <div class="card-header-country">${data.sys.country}</div>
            </div>

            <div class="card-body">
                <p class="card-body-txt">
                    El dia de hoy va a tener un "${data.weather[0].description}"    
                </p>
                <p class="card-body-txt">
                    La temperatura promedio para el dia de hoy es de ${data.main.temp} , con
                    una minima de ${data.main.temp_min} y una maxima de ${data.main.temp_max} y habra
                    una humedad del %${data.main.humidity}.
                </p>
            </div>
    `;
}

let miami = async () => {
    let get_location = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=miami&appid=${api_key}`);
    let data = await get_location.json();

    let city = document.getElementById('miami');
    city.innerHTML = `
            <div class="card-header">
                <div class="card-header-city">${data.name}</div>
                <div class="card-header-country">${data.sys.country}</div>
            </div>

            <div class="card-body">
                <p class="card-body-txt">
                    El dia de hoy va a tener un "${data.weather[0].description}"    
                </p>
                <p class="card-body-txt">
                    La temperatura promedio para el dia de hoy es de ${data.main.temp} , con
                    una minima de ${data.main.temp_min} y una maxima de ${data.main.temp_max} y habra
                    una humedad del %${data.main.humidity}.
                </p>
            </div>
    `;
}

let wellington = async () => {
    let get_location = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=wellington&appid=${api_key}`);
    let data = await get_location.json();

    let city = document.getElementById('wellington');
    city.innerHTML = `
            <div class="card-header">
                <div class="card-header-city">${data.name}</div>
                <div class="card-header-country">${data.sys.country}</div>
            </div>

            <div class="card-body">
                <p class="card-body-txt">
                    El dia de hoy va a tener un "${data.weather[0].description}"    
                </p>
                <p class="card-body-txt">
                    La temperatura promedio para el dia de hoy es de ${data.main.temp} , con
                    una minima de ${data.main.temp_min} y una maxima de ${data.main.temp_max} y habra
                    una humedad del %${data.main.humidity}.
                </p>
            </div>
    `;
}

let canberra = async () => {
    let get_location = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=canberra&appid=${api_key}`);
    let data = await get_location.json();

    let city = document.getElementById('canberra');
    city.innerHTML = `
            <div class="card-header">
                <div class="card-header-city">${data.name}</div>
                <div class="card-header-country">${data.sys.country}</div>
            </div>

            <div class="card-body">
                <p class="card-body-txt">
                    El dia de hoy va a tener un "${data.weather[0].description}"    
                </p>
                <p class="card-body-txt">
                    La temperatura promedio para el dia de hoy es de ${data.main.temp} , con
                    una minima de ${data.main.temp_min} y una maxima de ${data.main.temp_max} y habra
                    una humedad del %${data.main.humidity}.
                </p>
            </div>
    `;
}

let ottawa = async () => {
    let get_location = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=ottawa&appid=${api_key}`);
    let data = await get_location.json();

    let city = document.getElementById('ottawa');
    city.innerHTML = `
            <div class="card-header">
                <div class="card-header-city">${data.name}</div>
                <div class="card-header-country">${data.sys.country}</div>
            </div>

            <div class="card-body">
                <p class="card-body-txt">
                    El dia de hoy va a tener un "${data.weather[0].description}"    
                </p>
                <p class="card-body-txt">
                    La temperatura promedio para el dia de hoy es de ${data.main.temp} , con
                    una minima de ${data.main.temp_min} y una maxima de ${data.main.temp_max} y habra
                    una humedad del %${data.main.humidity}.
                </p>
            </div>
    `;
}

let berlin = async () => {
    let get_location = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${api_key}`);
    let data = await get_location.json();

    let city = document.getElementById('berlin');
    city.innerHTML = `
            <div class="card-header">
                <div class="card-header-city">${data.name}</div>
                <div class="card-header-country">${data.sys.country}</div>
            </div>

            <div class="card-body">
                <p class="card-body-txt">
                    El dia de hoy va a tener un "${data.weather[0].description}"    
                </p>
                <p class="card-body-txt">
                    La temperatura promedio para el dia de hoy es de ${data.main.temp} , con
                    una minima de ${data.main.temp_min} y una maxima de ${data.main.temp_max} y habra
                    una humedad del %${data.main.humidity}.
                </p>
            </div>
    `;
}

let bruselas = async () => {
    let get_location = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=bruselas&appid=${api_key}`);
    let data = await get_location.json();

    let city = document.getElementById('bruselas');
    city.innerHTML = `
            <div class="card-header">
                <div class="card-header-city">${data.name}</div>
                <div class="card-header-country">${data.sys.country}</div>
            </div>

            <div class="card-body">
                <p class="card-body-txt">
                    El dia de hoy va a tener un "${data.weather[0].description}"    
                </p>
                <p class="card-body-txt">
                    La temperatura promedio para el dia de hoy es de ${data.main.temp} , con
                    una minima de ${data.main.temp_min} y una maxima de ${data.main.temp_max} y habra
                    una humedad del %${data.main.humidity}.
                </p>
            </div>
    `;
}

let paris = async () => {
    let get_location = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${api_key}`);
    let data = await get_location.json();

    let city = document.getElementById('paris');
    city.innerHTML = `
            <div class="card-header">
                <div class="card-header-city">${data.name}</div>
                <div class="card-header-country">${data.sys.country}</div>
            </div>

            <div class="card-body">
                <p class="card-body-txt">
                    El dia de hoy va a tener un "${data.weather[0].description}"    
                </p>
                <p class="card-body-txt">
                    La temperatura promedio para el dia de hoy es de ${data.main.temp} , con
                    una minima de ${data.main.temp_min} y una maxima de ${data.main.temp_max} y habra
                    una humedad del %${data.main.humidity}.
                </p>
            </div>
    `;
}