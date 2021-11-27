let icon = document.getElementById('icon');
let h1s = document.getElementById('locationsh1'); 
let h2s = document.getElementById('temperature-degree');
let desc = document.getElementById('temperature-description');
let button = document.getElementById('btn');
let button2 = document.getElementById('btn2');




button.addEventListener('click', () => {
    let lon;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=5814002cd41aedcc0accef0bafda4907`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    h1s.textContent = data.name;
                    h2s.textContent = data.main.temp;
                    const icons = data.weather[0].icon;
                    icon.innerHTML = `<img src="http://openweathermap.org/img/w/${icons}.png" alt="picture" />`
                    desc.innerHTML = `<h1>${data.weather[0].main}</h1>`;
                });
        })
    }
})


button2.addEventListener('click', () => {

    let input = document.getElementById('inp').value;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=5814002cd41aedcc0accef0bafda4907`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        h1s.textContent = data.name;
        h2s.textContent = data.main.temp;
        const icons = data.weather[0].icon;
        icon.innerHTML = `<img src="http://openweathermap.org/img/w/${icons}.png" alt="picture" />`
        desc.innerHTML = `<h1>${data.weather[0].main}</h1>`;
    });

})




