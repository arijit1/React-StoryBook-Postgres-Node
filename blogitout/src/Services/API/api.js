import axios from 'axios';

export const hobby_GET = async (blogtype) => {
    console.log("calling hobby get api");
    let response_ = [];
    // await axios.get('http://localhost:5001/getblog/' + blogtype).then(resp => {
    //     response_ = resp.data
    // });
    const resp = await axios.get('http://localhost:5001/getblog/' + blogtype);
    response_ = resp.data;
    console.log(response_);
    return response_;
}

export const postBlog_POST = async (data) => {
    console.log("here");

    await axios.post('http://localhost:5001/postblog', data).then(res => {
        console.log("send post data " + res);
    }).catch(err => { console.log(err) });
}

export const updatePost_PUT = async (data, id, name, user_id) => {
    // await axios.put('http://localhost:5001/updateblog/' + id + '/' + name + '/' + user_id, data).then(res => {
    //     console.log("send post data " + res);
    // }).catch(err => { console.log(err) });

    await axios.put('http://localhost:5001/updateblog/' + id + '/' + name + '/' + user_id, data);
}

export const deletePost_DELETE = async (id, name) => {
    //     axios.delete('http://localhost:5001/deleteblog/' + id + '/' + name).then(res => {
    //     }).catch(err => { console.log(err) });
    //     console.log("deleted "+id);}

    axios.delete('http://localhost:5001/deleteblog/' + id + '/' + name);
    console.log("deleted " + id);


}

export const login_GET = async (authenticate) => {
    await axios.get('http://localhost:5001/loggedin/' + authenticate).then(resp => {

    }).catch((err => { console.log(err) }));
}

export const logout_GET = async (authenticate) => {
    await axios.get('http://localhost:5001/logout/' + authenticate).then(resp => {
    }).catch(err => { console.log(err) });
}