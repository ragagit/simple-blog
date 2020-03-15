import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts'
class BlogService{
    getPosts() {
        return axios.get(API_URL,
            { headers: { 'Content-Type': 'application/json; charset=UTF-8' } });
    }

    // getLatestPosts() {
    //     const NUMBER_LATEST_POSTS = -20;
    //     BlogService.getPosts()
    //         .then(posts => posts.data.slice(NUMBER_LATEST_POSTS))
    //         .catch(error => error );
    // }
}

export default new BlogService();