import BlogService from './blog.service'

test("Fetch data status", async () => {
    const res = await BlogService.getPosts();
    expect(res.status).toBe(200);
})

//JSONPlaceHolder returns 100 posts
test("Fetch data count", () => {
    return BlogService.getPosts()
        .then( res => {
            expect(Object.keys(res.data).length).toBe(100);
        })
})