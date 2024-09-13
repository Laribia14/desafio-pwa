document.getElementById('get-location').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            document.getElementById('location').innerHTML =
                `Latitude: ${latitude} <br> Longitude: ${longitude}`;
        }, (error) => {
            document.getElementById('location').innerHTML = `Erro: ${error.message}`;
        });
    } else {
        document.getElementById('location').innerHTML = 'Geolocalização não é suportada pelo seu navegador.';
    }
});
