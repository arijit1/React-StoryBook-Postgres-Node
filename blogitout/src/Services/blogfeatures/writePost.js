import React from 'react';
import { postBlog_POST } from '../API/api';

class WritetPost extends React.Component {
   
    postblog = () => {
        let postTitle = document.getElementById("blogtitle").value;
        let newPostdata = document.getElementById("bloginputbody").value;
        let postId = Math.ceil(Math.random() * 10000);
        let data = {
            user_id: "853849",
            post_id: postId,
            post_name: postTitle,
            post_type: "hobby",
            post_data: newPostdata,
            userName: this.props.uname
        }
        console.log(data);
        postBlog_POST(data).then(() => { this.props.handleBack(); });
    }

    render() {
        return <>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8 type-blog">
                            <form name="registration">
                                <div className="form-group">
                                    <h3 >Write Your Blog</h3>
                                    <label htmlFor="blogtitle">Title :</label>
                                    <input type="text" placeholder="Title" data-testid="blogtitle" id="blogtitle" maxLength="20" required />
                                    <textarea type="text" className="form-control " data-testid="bloginputbody" id="bloginputbody" placeholder="Body..." rows="4" cols="50" required></textarea>
                                </div>
                            </form>
                            <button onClick={this.props.handleBack} className="btn btn-primary">Back</button>
                            <button onClick={this.postblog} className="btn btn-primary">Submit</button>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
            </div>
        </>
    }

}
export default WritetPost;