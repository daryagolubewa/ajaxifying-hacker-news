document.addEventListener('DOMContentLoaded', () => {


    document.addEventListener('click', async (e) => {
        if (e.target && e.target.classList.contains("delete")) {
            const upvoteBtn = e.target.parentNode.parentNode.querySelector('.upvote-button');
            event.preventDefault();
            let response = await fetch(`/posts/${e.target.dataset.id}`, {
                method: 'post',
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            });

            if (response.status === 200) {
               postDelete = e.target.querySelector('.delete');
               postDelete.parentNode.removeChild(postDelete);


                points = e.target.parentNode.parentNode.querySelector('.points');
                points.innerText = votesNumber;
            }
        }
    });

});


// <article id="{{this._id}}" class="post">
//     <div  class="inline">
//     <button data-id="{{this._id}}" type="submit" name="submit_param" value="submit_value" class="fa fa-sort-desc vote-button upvote-button"></button>
//     </div>
//     <h2><a href='/posts/{{this._id}}'>{{this.title}}</a></h2>
// <p>
// <span class='points'>{{this.points}}</span>
// <span class='username'>{{this.username}}</span>
// <span class='timestamp'>{{this.timeSinceCreation}}</span>
// <span class='comment-count'>{{ this.commentCount}}</span>
// <a class="delete" href='/posts/{{this.id}}'></a>
//     </p>
//     </article>