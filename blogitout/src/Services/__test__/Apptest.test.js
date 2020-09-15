import React from 'react';
import ReactDOM from 'react-dom';
import Apptest from "../Apptest";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { shallow } from 'enzyme';

describe('App', () => {
  describe('when the button is clicked', () => {
    const spy = jest.spyOn(Apptest.prototype, 'getData');
    const app = shallow(<Apptest />);

    it('calls the `getData` function', () => {
      app.find('.btn').simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });
});


describe('when the button is clicked and get request is initiated', () => {

  //const spy = jest.spyOn(Apptest.prototype, 'getData_GETREQUEST');
  const app = shallow(<Apptest />);

  const mockData = { bank: { inr: { rate: 5 } } };

  beforeEach(() => {
    console.log("before each");
    app.find('.get_btn').simulate('click');
    const mock = new MockAdapter(axios);
     mock
      .onGet("https://www.google.com")
      .replyOnce(200, mockData);
    //console.log("res",res);

    axios.get("https://www.google.com").then(function (response) {
      console.log(response.data);
    });

  });

  // beforeEach=() => {
  //   console.log("before each");
  //   const mock = new MockAdapter(axios);
  //   mock
  //    .onGet("https://www.google.com")
  //    .reply(200, mockData);

  //   app.find('.get_btn').simulate('click');
  // }



  it('sets the `state.rate` to rate ,sending from GET', async () => {
    expect.hasAssertions();
    //expect.assertions(2);
    try {
      await expect(app.state().rate).toEqual(mockData.bank.inr.rate);
    } 
    catch (err) {
      expect(err).toEqual(new Error());
    }
  });

});
