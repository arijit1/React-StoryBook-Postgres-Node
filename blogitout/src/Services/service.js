import React from 'react';
import {  useRouteMatch, withRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Hobbies } from './blogs/blogindex';
import '../CSS/service.css';

const Service = (props) => {
    //const routematch = useRouteMatch();
    console.log("check");
    console.log(props);
    const { path, url } = useRouteMatch();
  

    return <>
        <div className="blogNavBar">
            <NavLink className="blogNavBar_blog" to={`${url}/hobby-type`}>HOBBY</NavLink>
        </div>


        <Switch>
            <Route path={`${path}/hobby-type`}>
                <Hobbies testPostData={[]} uname={props.bloggername}/>
            </Route>
        </Switch>
    </>
}

export default withRouter(Service);