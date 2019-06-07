// Init GitHub
const github = new GitHub();
// Init UI
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make HTTP call
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);

        // Badge on hover
        const badges = document.querySelectorAll('.badge.badge-light');

        badges.forEach((badge) => {
          badge.addEventListener('mouseover', (e) => {
            e.target.classList.remove('badge-light');
            e.target.classList.add('badge-primary');
          });
          badge.addEventListener('mouseleave', (e) => {
            e.target.classList.remove('badge-primary');
            e.target.classList.add('badge-light');
          });
        });
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
