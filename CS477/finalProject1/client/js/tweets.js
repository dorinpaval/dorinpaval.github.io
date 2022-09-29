"use strict";


/*eslint-disable */

let pageNo = 0;
function tryFunc() {
    let container = document.getElementById('tweetsPage');
    //console.log(container.scrollTop, container.scrollHeight, container.offsetHeight)
    if (container.offsetHeight > container.scrollHeight - container.scrollTop - 1) {
        createTweets();
    }
}


window.onload = function () {
    fetchTweets();
    document.getElementById('logoutBtn').onclick = logout;
    document.getElementById('searchBtn').onclick = searchUser;
    document.getElementById('saveTweet').onclick = saveTw;
}



async function deleteTw(obj) {
    let id = obj.getAttribute('data-delete');
    console.log("the id is  ", id)
    await fetch('http://localhost:3000/twitter/tweets', {
        method: "DELETE",
        body: JSON.stringify({
            userId: JSON.parse(sessionStorage.permission).id,
            postId: id
        }),
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        }
    });
    location.reload();
}




async function saveTw(event) {
    event.preventDefault();
    const userid = JSON.parse(sessionStorage.permission).id;
    let content = document.getElementById('tweetContent').value;
    let youtube = '';
    if (content.includes('youtube.com')) {
        let copy = content.split(" ");
        for (let i = 0; i < copy.length; i++) {
            if (copy[i].includes('youtube.com')) {
                youtube = copy[i].replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/");
                content = content.replace(copy[i], ' ')
            }
        }
    }
    const timePosted = new Date(Date.now());
    await fetch('http://localhost:3000/twitter/tweets', {
        method: 'POST',
        body: JSON.stringify({
            content: content,
            user: userid,
            timePosted: timePosted,
            youtube: youtube
        }),
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        }
    });
    document.getElementById('tweetContent').value = " ";
    location.reload();
}


async function fetchTweets() {
    const response = await fetch(`http://localhost:3000/twitter/authenticate`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        }
    });
    const result = await response.json()

    if (result.error) {
        window.location = 'twitter';
    } else {
        document.getElementById('userName').innerHTML = result.data.username;
        sessionStorage.setItem('permission', JSON.stringify(result.data));
        createTweets();
    }
};

async function createTweets() {
    let userId = JSON.parse(sessionStorage.permission).id;
    const tweetPromise = await fetch(`http://localhost:3000/twitter/tweets/${userId}/${pageNo}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    pageNo++;
    const tweets = await tweetPromise.json();
    if (tweets.length > 0) {
        let html = '';
        //let html= document.getElementById("tweets").innerHTML;
        for(let element of tweets) {
            let deleteBtn = `<button data-delete="${element._id}" class="btn btn-outline-light" onclick="deleteTw(this)" >Delete</button>`;
            let time = element.timePosted;
            let postedAt = moment(time).fromNow();
            if (element.youtube) {
                html += `<div class="post">
                <div class="post_profile-image">
        <img src="/images/profilePic.jpeg" alt="java-logo">

    </div>

    <div class="post_body">
        <div class="post_header">
            <div class="post_header-text">
                <h3>${element.user.username}
                    <span class="header-icon-section">
                        <span class="material-icons post_badge">verified</span>${postedAt}
                    </span>
                </h3>

            </div>

            <div class="post_header-discription">
                <p style="width:78%">${element.content}</p>
                <br>
                <iframe width="560" height="315" src="${element.youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </div>

        <div class="post_footer" style="width:78%" >

            <span class="material-icons">chat</span>
            <span class="material-icons">repeat</span>
            <span class="material-icons">favorite_border</span>
            <div name="forDelete"></div>


        </div>
        </div>
    </div>`}
            else {
                html += `<div class="post">
                <div class="post_profile-image">
        <img src="/images/profilePic.jpeg" alt="java-logo">

    </div>

    <div class="post_body">
        <div class="post_header">
            <div class="post_header-text">
                <h3>${element.user.username}
                    <span class="header-icon-section">
                        <span class="material-icons post_badge">verified</span>${postedAt}
                    </span>
                </h3>

            </div>

            <div class="post_header-discription">
                <p style="width:78%">${element.content}</p>
                <br>
            </div>

        </div>

        <div class="post_footer" style="width:78%">

            <span class="material-icons">chat</span>
            <span class="material-icons">repeat</span>
            <span class="material-icons">favorite_border 123</span>
            <div name="forDelete"></div>


        </div>
        </div>
    </div>`

            }
            console.log(userId, element.user._id);
            if (userId === element.user._id) {
                
                html = html.replace('<div name="forDelete"></div>', deleteBtn)
            }
        };
        let loading = '<div id="theEnd" style="color:white; text-align:center; padding:3%">Loading more...</div>'
        let oldContent = document.getElementById("tweets").innerHTML;
        if (oldContent.includes(loading)) {
            oldContent = oldContent.replace(loading, " ")
        }
    
        document.getElementById("tweets").innerHTML = ''
        document.getElementById("tweets").innerHTML = oldContent + html + loading;

    }
    else {
        document.getElementById("theEnd").innerHTML = '<p class="alert alert-primary">Sorry &#128543  No more tweets to load. Please follow more Twitter users.</p>'
        document.getElementById("tweetsPage").removeAttribute("onscroll");

    }
}



function logout() {
    sessionStorage.removeItem('permission');
    sessionStorage.removeItem('accessToken');
    window.location = '/twitter';
}

async function searchUser() {
    let usrname = document.getElementById('searchInput').value;
    const response = await fetch(`http://localhost:3000/twitter/user/search`, {
        method: "POST",
        body: JSON.stringify({
            username: usrname
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const users = await response.json();
    alert(JSON.stringify(users));
}
