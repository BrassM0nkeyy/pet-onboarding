const posts = [
        {title: 'Post One', body: 'this is post one'},
        {title: 'Post two', body: 'this is post two'}
];

//syncro
// function createPost() {
//     setTimeout(function() {
//         post.push(post);
//     }, 2000);
// }

// function getPost() {
//     setTimeout(function() {
//         let output = '';
//         post.forEach(function(post) {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'post 3', body: 'this is post 3'});

// getPost();

//asyncro
function createPost(post, callback) {
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 2000);
}

function getPost() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'post 3', body: 'this is post 3'} , getPost);