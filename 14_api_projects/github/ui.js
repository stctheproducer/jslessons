/* eslint-disable indent */
class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Show profile data
  showProfile(user) {
    let account_created = new Date(user.created_at);
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img src="${
              user.avatar_url
            }" alt="User Avatar" class="img-fluid mb-2"/>
            <a href="${
              user.html_url
            }" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-light">Public Repos: ${
              user.public_repos
            }</span>
            <span class="badge badge-light">Public Gists: ${
              user.public_gists
            }</span>
            <span class="badge badge-light">Followers: ${user.followers}</span>
            <span class="badge badge-light">Following: ${user.following}</span>
            <br/><br/>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${account_created.toUTCString()}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show repos
  showRepos(repos) {
    let output = '';

    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6"><a href="${repo.html_url}">${
        repo.name
      }</a></div>
            <div class="col-md-6">
              <span class="badge badge-light">Stars: ${
                repo.stargazers_count
              }</span>
              <span class="badge badge-light">Watchers: ${
                repo.watchers_count
              }</span>
              <span class="badge badge-light">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output the repositories
    document.getElementById('repos').innerHTML = output;
  }

  // Show alert message
  showAlert(message, className) {
    // Clear remaining alerts
    this.clearAlert();
    // Create div
    const div = document.createElement('div');
    // Add class
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.searchContainer');
    // Get search box
    const search = document.querySelector('.search');
    // Insert alert
    container.insertBefore(div, search);
    // Remove alert after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
