
//* listener functions

// variables
let search_var_btn = document.getElementById('input-search-btn').onclick = async (e) => {
    e.preventDefault();

    let input = document.getElementById('input-search-txt').value;

    if (input == '') {
        Toastify(
            {
                text: 'ingrese una ciudad',
                className: "input-reponse-card",
                position: "center",
                gravity: "center",
                duration: 2000,
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }
        ).showToast();
    } else {
        let get_location = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}`);
        let data = await get_location.json();

        Toastify(
            {
                text: `En ${data.name} hacen ${data.main.temp}°C`,
                className: "input-reponse-card",
                position: "center",
                gravity: "center",
                duration: 2000,
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }
        ).showToast();
    }
}