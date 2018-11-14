document.addEventListener('DOMContentLoaded', () => {
    const upvoteBtn = document.querySelector('.upvote-button');
    const postId = document.querySelector('.post');

    upvoteBtn.addEventListener('click', async() => {
        event.preventDefault();
        let response = await fetch('/posts/`${postId}`/vote', {
            method: 'post',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }

        })
    })


})


// let response = await fetch('/horse/add', {
//     method: 'post',
//     headers: {
//         "Content-Type": "application/json; charset=utf-8",
//     },
//     body: JSON.stringify({name: horseName, breed: horseBreed, age: horseAge})
// });
// response = await response;
// if(response.status === 200) {
//     let horse = await response.json();
//     let templateString = document.getElementById('horseTemplate').innerHTML;
//     let template = Handlebars.compile(templateString);
//     let html = template(horse);
//     list[0].insertAdjacentHTML( 'beforeend', html);
//
//     form.style.display = 'none';
//     btnSbm.style.display = 'none';
//     btnAdd.style.display = 'block';
//
// }