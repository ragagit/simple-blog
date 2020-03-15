import HomePage from './home.page';
import { create } from "react-test-renderer";
import React from 'react'
import { render, wait, mount } from '@testing-library/react'
//import BlogService from '../services/blog.service'
import { getLatestPosts } from './home.page';
//import 'jest-dom/extend-expect'



describe("HomePage component", () => {
    jest.mock('./home.page');
    test("Loading data", () => {
        const component = create(<HomePage/>)
        const instance = component.getInstance();
        expect(instance.state.posts.loading).toBeTruthy();
    })
    test("No error message", () => {
        const component = create(<HomePage/>)
        const instance = component.getInstance();
        expect(instance.state.errorMessage).toBe("");
    })
    test("Showing a list of post", async () => {
        const posts = [{ id: 1, userId: 1, title: "My post", body: "Some comments" }];
        //const getLatestPosts = jest.fn().mockResolvedValueOnce(posts);
        const getLatestPosts = jest.fn(() => Promise.resolve(posts));
        //const component = create(<HomePage/>)
        const { getByText } = render(<HomePage/>);
        expect(getByText("Loading posts...")).toBeInTheDocument();
        //await getLatestPosts();
        
        //expect(getLatestPosts).toHaveBeenCalledTimes(1);
        // expect(getLatestPosts).toHaveBeenCalledWith();
        //await wait(() => expect(getByText("My Posts")).toBeInTheDocument());
        
        //expect(getByText("My Post")).toBeInTheDocument();
        //posts.forEach(post => expect(getByText(post.title)).toBeInTheDocument());
    })


})
// test("Getting posts", async () => {
//     const res = await HomePage.getLatestPosts();
//     expect(Object.keys(res.data).length).toBe(20);
// })