import React from 'react';
import Hobbies from '../blogs/Hobbies';

export default {
    title: 'HOBBY',
    component: Hobbies
}

const Template = (args) => <Hobbies {...args} />;

export const Arijit = Template.bind({});
Arijit.args = {
    testPostData:[{
        post_data: "Not Good Food",
        post_id: "postTestId2",
        post_name: "Raw Vegetables",
        post_type: "hobby",
        user_id: "853849",
    },{
        post_data: "Burger",
        post_id: "postTestId2",
        post_name: "Junk Food",
        post_type: "hobby",
        user_id: "853849",
    }],
    uname:"Arijit"
};
export const Consumer = Template.bind({});
Consumer.args = {
    testPostData:[{
        post_data: "Multi Cuisine",
        post_id: "postTestId3",
        post_name: "Cooking",
        post_type: "hobby",
        user_id: "853849",
    },{
        post_data: "Hip-Hop",
        post_id: "postTestId3",
        post_name: "Dancing",
        post_type: "hobby",
        user_id: "853849",
    }],
    uname:"Consumer"
};
