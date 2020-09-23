import React from 'react';
import Service from './service.js';
import {BrowserRouter as Router,  useRouteMatch, withRouter, Switch, Route, NavLink } from 'react-router-dom';

export default {
    title: 'Service',
    component: Service
}

const Template = (args) => <Router><Service {...args} /></Router>;


export const serviceBlog = Template.bind({});
serviceBlog.args = {
    bloggername: "Arijit"
};