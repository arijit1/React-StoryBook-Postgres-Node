import React from 'react';
import EditPost from './editPost.js';
import {BrowserRouter as Router,  useRouteMatch, withRouter, Switch, Route, NavLink } from 'react-router-dom';

export default {
    title: 'EditPost',
    component: EditPost
}

const Template = (args) => <Router><EditPost {...args} /></Router>;
//userId={this.state.user_id} postid={this.state.currentPostID} posts={this.state.posts} handleBack={this.back}

export const serviceBlog = Template.bind({});
serviceBlog.args = {
    userId:"853849",
    postid:"1212",
    posts:[{
        post_data: "Not Good Food",
        post_id: "postTestId2",
        post_name: "Raw Vegetables",
        post_type: "hobby",
        user_id: "853849",
    }],
    handleBack:function(){}

};