function f_videoPop(genre) {

    let v_url = 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=ko-KR&primary_release_year=2024&sort_by=popularity.desc&page=1&with_genres='
    let v_query = genre;
    document.querySelector('.recent-bottom').innerHTML = "";

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
        console.log(response)
        for (let i = 0; i < 20; i++) {


            let vv_url = 'https://api.themoviedb.org/3/movie/' + response['results'][i]['id'] + '/videos?language=ko-KR&include_adult=true&include_video=false&primary_release_year=2024&sort_by=popularity.desc&page=1&with_genres='

            const settings = {
                async: true,
                crossDomain: true,
                url: vv_url + v_query,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDQ2ZmNiZjNhYjhjNmFkMzcyNWE0NmRiOGFhYjg2OCIsIm5iZiI6MTcyNDAzOTAxNC4wNDg3MDQsInN1YiI6IjY2YzJiNzUxYTk5MWIxZGE3NWRhMGVkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VRpFNmnB0zQEoJi4R5E_iDXZcWd53wwyDAHqvtbd5i4'
                }
            };

            $.ajax(settings).done(function (res) {


                if (res['results'].length > 0) {
                    let v_alpha = '<div class="rc-video"><div class="movieVideo" onclick="f_modal(' + response['results'][i]['id'] + ')"><img id="videoImg" src="';
                    v_alpha += 'http://image.tmdb.org/t/p/w500';
                    v_alpha += response['results'][i]['backdrop_path'];
                    v_alpha += '" alt=""><img id="playImg" src="./resources/images/play.png" alt=""></div><p id="videoTitle">'
                    v_alpha += response['results'][i]['title']
                    v_alpha += '</p><p id="videoDetail">'
                    v_alpha += res['results'][0]['name'] + '</p></div>'

                    document.querySelector('.recent-bottom').innerHTML += v_alpha;

                }

            });
        }
    });

}
