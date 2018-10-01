class Github {
    constructor() {
        this.client_id = '17398919f514334c5fc3';
        this.client_secret = 'b41dab55fbd5d7a6221e5ffa74497f29519233ad';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}