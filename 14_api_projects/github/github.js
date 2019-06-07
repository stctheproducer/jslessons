class GitHub {
  constructor() {
    this.client_id = '9d8c458ec09bf3fb6ff8';
    this.client_secret = 'ee4ca3dfc672545d08455503c41c36ece1542525';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`,
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`,
    );

    const profileData = await profileResponse.json();

    const reposData = await reposResponse.json();

    return {
      profile: profileData,
      repos: reposData,
    };
  }
}
