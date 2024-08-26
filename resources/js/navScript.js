document.getElementById('navLogo').addEventListener('click', () => {
    location.href = 'http://127.0.0.1:5500/index.html'
})

document.getElementsByClassName('nav-person')[0].addEventListener('click', () => {
    location.href = 'http://127.0.0.1:5500/personDB.html'
})

document.getElementsByClassName('nav-movie')[0].addEventListener('click', () => {
    location.href = 'http://127.0.0.1:5500/movieDB.html'
})
