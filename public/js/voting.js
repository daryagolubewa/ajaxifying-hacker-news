document.addEventListener('DOMContentLoaded', () => {


        document.addEventListener('click', async (e) => {
            if (e.target && e.target.classList.contains("upvote-button")) {
                const upvoteBtn = e.target.parentNode.parentNode.querySelector('.upvote-button');
                event.preventDefault();
                let response = await fetch(`/posts/${e.target.dataset.id}/vote`, {
                    method: 'post',
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    }
                });
                // response = await response;
                if (response.status === 200) {
                    e.target.style.color = 'red';
                    currentPost = await response.json();
                    votesNumber = currentPost.votes.length;
                    points = e.target.parentNode.parentNode.querySelector('.points');
                    points.innerText = votesNumber;
                }
            }
        });

});
