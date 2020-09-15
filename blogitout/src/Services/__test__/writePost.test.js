import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react';
import { Router } from "react-router-dom";
import WritetPost from '../blogfeatures/writePost';
import axiosMock from 'axios1';
const axios = require('axios');
jest.mock('axios');
let data = { postTitle: "carrom", newPostdata: "Playing Chess", postId: "0009" ,uname:"tester"}

it('testing input fields of write a post', () => {

    const deleteClick = jest.fn(() => {
        console.log("Back");
    });

    const selector = render(<WritetPost handleBack={deleteClick} />);
    const postTitle = selector.getByTestId('blogtitle');
    postTitle.value = data.postTitle;
    expect(postTitle.value).toBe('carrom');

    const newPostdata = selector.getByTestId('bloginputbody');
    newPostdata.value = data.newPostdata;
    expect(newPostdata.value).toBe('Playing Chess');


});

it('testting submit button on write a post',async () => {

    axios.post.mockResolvedValue({
        
        data:
            [{
                user_id: "853849",
                post_id: data.postId,
                post_name: data.postTitle,
                post_type: "hobby",
                post_data: data.newPostdata,
                userName: data.uname
            }]
    });

    const deleteClick = jest.fn(() => {
        console.log("Back");
    });

    const selector = render(<WritetPost uname={data.uname} handleBack={deleteClick} />);
    const postTitle = selector.getByTestId('blogtitle');
    postTitle.value = data.postTitle;
    //expect(postTitle.value).toBe('Hobby');

    const newPostdata = selector.getByTestId('bloginputbody');
    newPostdata.value = data.newPostdata;
    //expect(newPostdata.value).toBe('Playing Chess');

    fireEvent.click(selector.getByText(/submit/i));
});


