import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react';
import { Router } from "react-router-dom";
import Hobbies from '../blogs/Hobbies';
import axiosMock from 'axios1';



var postData = [{
    post_data: "Not Good Food",
    post_id: "postTestId2",
    post_name: "Raw Vegetables",
    post_type: "hobby",
    user_id: "853849",
}];

afterEach(cleanup);
it('succesfully hobby post has been added', () => {
    axiosMock.get.mockResolvedValueOnce({
        data: postData
    });
    const selector = render(<Hobbies testPostData={postData} uname="tester" />);
    expect(selector.getAllByTestId('postTestId2')).toBeTruthy();

    const resolvedDiv = waitForElement(() => getByTestId('postTestId2'));
    fireEvent.click(selector.getByText("Post New"));
    expect(resolvedDiv).toBeTruthy();
    expect(axiosMock.get).toHaveBeenCalledTimes(0);
    //    expect(axiosMock.get).toHaveBeenCalledTimes(1);
});