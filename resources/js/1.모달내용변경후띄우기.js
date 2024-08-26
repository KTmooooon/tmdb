function f_modal(id) {
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
        for (let i = 0; i < 20; i++) {




            let vv_url = 'https://api.themoviedb.org/3/movie/' + id + '/videos?language=ko-KR&include_adult=true&include_video=false&primary_release_year=2024&sort_by=popularity.desc&page=1&with_genres='

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

                let v_modal = document.getElementsByClassName('modal')[0];
                let v_modalBox = document.getElementsByClassName('modal-box');

                let beta = '<div class="modal-box"><div class="video-detail"><span id="vd-1">'
                beta += response['results'][i]['title']
                beta += '</span><span id="vd-2"> X </span></div><iframe id="youTube" src="https://www.youtube.com/embed/'
                beta += res['results'][0]['key']
                beta += '" frameborder="0" allowfullscreen></iframe></div>'
                v_modal.innerHTML = beta


                v_modalBox[0].style.display = "block"
                document.getElementsByClassName('container')[0].style.filter = "grayscale(100%)"
                document.getElementsByClassName('container')[0].style.backgroundColor = "#7F7F7F"

                document.getElementById('vd-2').addEventListener('click', () => {
                    v_modalBox[0].style.display = "none"
                    document.getElementsByClassName('container')[0].style.filter = "none"
                    document.getElementsByClassName('container')[0].style.backgroundColor = "white"
                    f_videoPop(genre);
                })

            });
        }
    });

}
