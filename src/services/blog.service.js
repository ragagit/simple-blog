import axios from 'axios';

const AxBlogService = {
    axget: (url) => axios.get(url, { headers: { 'Content-Type': 'application/json; charset=UTF-8' } }),
    axpost: (url, blog) => axios.post(url, JSON.stringify(blog), { headers: { 'Content-Type': 'application/json; charset=UTF-8' } }),
    API_URL: 'https://jsonplaceholder.typicode.com/posts'
}

export default AxBlogService;
