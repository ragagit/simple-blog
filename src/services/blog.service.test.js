//import BlogService from './blog.service'
import AxBlogService from './blog.service'
//import API_URL from './blog.service'
import axios from 'axios';

describe("BlogService tests", () => {
    test("Fetch data status", () => {
        // const res = await axios.get(API_URL, { headers: { 'Content-Type': 'application/json; charset=UTF-8' } });
        //axios.get(API_URL, { headers: { 'Content-Type': 'application/json; charset=UTF-8' } })
        AxBlogService.axget(AxBlogService.API_URL)
        .then(res => expect(res.status).toBe(200));
    })

    //JSONPlaceHolder returns 100 posts
    test("Fetch data count", () => {
        //return BlogService.getPosts()
        AxBlogService.axget(AxBlogService.API_URL)
            .then(res => {
                expect(Object.keys(res.data).length).toBe(100);
            })
    })

    test("Post a blog", () => {
        //return BlogService.sendPost({ userId: 9, title: "MyTitle", body: "My Message" })
        AxBlogService.axpost(AxBlogService.API_URL, { userId: 9, title: "MyTitle", body: "My Message" })
            .then(res => {
                expect(res.status).toBe(201);
            })
    })
});