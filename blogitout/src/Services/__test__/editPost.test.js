import React from 'react';
import { render, fireEvent, cleanup,waitForElement } from '@testing-library/react';
import { Router } from "react-router-dom";
import EditPost from '../blogfeatures/editPost';
import axiosMock from 'axios1';
const axios = require('axios');
jest.mock('axios');

var postData = [{
    post_data: "Not Good Food",
    post_id: "postTestId2",
    post_name: "Vegetables are not good",
    post_type: "hobby",
    user_id: "853849",
}];

var updatedData = [{
    post_data: "Not Good Food",
    post_id: "postTestId2",
    post_name: "fruits are also good",
    post_type: "hobby",
    user_id: "853849"
}];

var updatedPostdata = {post_name:"fruits are also good"};

beforeAll(cleanup);
it('deleting a post', () => {
    axios.get.mockResolvedValue({
        data:postData
    });
    const deleteClick = jest.fn(() => {
        console.log("deletion test successfull");
    });
    const selector = render(<EditPost userId="1234" postid="postTestId2" posts={postData} handleBack={deleteClick}/>);
    fireEvent.click(selector.getByText(/delete/i));
});
afterEach(() => {
    jest.resetAllMocks();
  });
it('updating a post', () => {
    axios.put.mockResolvedValue({
        data:updatedData
    });
    
    const deleteClick = jest.fn(() => {
        console.log("deleted");
    });
    const selector = render(<EditPost userId="1234" postid="postTestId2" posts={postData} handleBack={deleteClick}/>);
    const postdata = selector.getByTestId('viewPostBody');
    postdata.value = updatedPostdata.post_name;
    fireEvent.click(selector.getByText(/edit/i));
});


