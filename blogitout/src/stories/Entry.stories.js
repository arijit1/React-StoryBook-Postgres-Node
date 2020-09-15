import React from 'react';
import Entry from './Entry';

export default {
    title: 'ENTRY',
    component: Entry
}

const Template = (args) => <Entry {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant:'primary',
  children:'Primary'
};

//export const Primary =()=><Entry props={}></Entry>

export const Secondary = Template.bind({});
Secondary.args = {
  variant:'secondary',
  children:'Secondary'
};

export const Success = Template.bind({});
Success.args = {
  variant:'success',
  children:'Success'
};

export const Danger = Template.bind({});
Danger.args = {
  variant:'danger',
  children:'Danger'
};
