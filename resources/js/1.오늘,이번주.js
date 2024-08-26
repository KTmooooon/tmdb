
function f_todayPopData() {
    let v_url = 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=ko-KR&sort_by=popularity.desc&page='
    let v_query = pageNo;
    let v_tbBottom = document.querySelector('.tb-bottom')
    v_tbBottom.innerHTML = ""

    const settings = {
        async: true,
        crossDomain: true,
        url: v_url + v_query,
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDQ2ZmNiZjNhYjhjNmFkMzcyNWE0NmRiOGFhYjg2OCIsIm5iZiI6MTcyNDAzOTAxNC4wNDg3MDQsInN1YiI6IjY2YzJiNzUxYTk5MWIxZGE3NWRhMGVkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VRpFNmnB0zQEoJi4R5E_iDXZcWd53wwyDAHqvtbd5i4'
        }
    };

    $.ajax(settings).done(function (response) {

        for (let i = 0; i < 10; i++) {
            let v_alpha = '<div class="tb-movie"><img id="movieImg" src="'
            v_alpha += 'http://image.tmdb.org/t/p/w500'
            v_alpha += response['results'][i]['poster_path']
            v_alpha += '" alt=""><p id="movieTitle">'
            v_alpha += response['results'][i]['title']
            v_alpha += '</p><p id="movieDate">'
            v_alpha += response['results'][i]['release_date']
            v_alpha += '</p><div class="movie-vote">'
            v_alpha += Math.floor(response['results'][i]['vote_average'] * 10)
            v_alpha += '</div></div>'
            v_tbBottom.innerHTML += v_alpha
            id_array[i] = response['results'][i]['id']
        }
        localStorage.setItem('movieId', "[" + id_array + "]")
        for (let i = 0; i < 10; i++) {
            document.getElementsByClassName('tb-movie')[i].addEventListener('click', () => {
                location.href = 'http://127.0.0.1:5500/movie-detail.html' + '?id=' + response['results'][i]['id'];
            })
        }
        
    });
}

function f_weekPopData() {
    let v_url = 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=ko-KR&primary_release_year=2024&sort_by=popularity.desc&sort_by=revenue.desc&page='
    let v_query = pageNo;
    let v_tbBottom = document.querySelector('.tb-bottom')
    v_tbBottom.innerHTML = ""
    
    const settings = {
        async: true,
        crossDomain: true,
        url: v_url + v_query,
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDQ2ZmNiZjNhYjhjNmFkMzcyNWE0NmRiOGFhYjg2OCIsIm5iZiI6MTcyNDAzOTAxNC4wNDg3MDQsInN1YiI6IjY2YzJiNzUxYTk5MWIxZGE3NWRhMGVkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VRpFNmnB0zQEoJi4R5E_iDXZcWd53wwyDAHqvtbd5i4'
        }
    };
    
    $.ajax(settings).done(function (response) {
        for (let i = 0; i < 10; i++) {
            let v_alpha = '<div class="tb-movie"><img id="movieImg" src="'
            v_alpha += 'http://image.tmdb.org/t/p/w500'
            v_alpha += response['results'][i]['poster_path']
            v_alpha += '" alt=""><p id="movieTitle">'
            v_alpha += response['results'][i]['title']
            v_alpha += '</p><p id="movieDate">'
            v_alpha += response['results'][i]['release_date']
            v_alpha += '</p><div class="movie-vote">'
            v_alpha += Math.floor(response['results'][i]['vote_average'] * 10)
            v_alpha += '</div></div>'
            v_tbBottom.innerHTML += v_alpha
            id_array[i] = response['results'][i]['id']
        }
        localStorage.setItem('movieId', "[" + id_array + "]")
        for (let i = 0; i < 10; i++) {
            document.getElementsByClassName('tb-movie')[i].addEventListener('click', () => {
                location.href = 'http://127.0.0.1:5500/movie-detail.html' + '?id=' + response['results'][i]['id'];
            })
        }
    });
}