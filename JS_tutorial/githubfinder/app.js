//init github
const github = new Github;
//init UI class
const ui = new UI;

//search input
const searchUser  = document.getElementById('searchUser');

//search input EL
searchUser.addEventListener('keydown', (e) => {
    //get input text
    const userText = e.target.value;

    if(userText != ''){
        //make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                //Show alert (todo)
                ui.showAlert('User Not Found', 'alert alert-danger');
            } else {
                //show profile (todo)
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        //clear profile (todo)
        ui.clearProfile();
    }
});