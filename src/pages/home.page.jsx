import React from 'react';
import BlogService from '../services/blog.service';

export default class HomePage extends React.Component{
//class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            infoMessage: '',
            errorMessage: '',
        };
    }

    componentDidMount(){
        // BlogService.getLatestPosts()
        //     .then( res => this.setState({posts: res}))
        //     .catch( error => this.setState({errorMessage: error}))
        this.getLatestPosts()
    }

    getLatestPosts(){
        const NUMBER_LATEST_POSTS = -20;
        this.setState({
            posts : { loading: true }
        });
        BlogService.getPosts()
            .then( posts => {
                this.setState({ posts: posts.data.slice(NUMBER_LATEST_POSTS) });
            }, error => {
                    this.setState({ errorMessage: 'Unexpected error occurred' });
            });
            // .catch( error => {
            //     this.setState( { errorMessage: error} )
            // });
    }

    render(){
        const { posts, infoMessage, errorMessage } = this.state;
        return(
            <div className="col-md-12">
                {infoMessage &&
                    <div className="alert alert-success">
                        <strong>Successfull! </strong>{infoMessage}
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                }
                {errorMessage &&
                    <div className="alert alert-danger">
                        <strong>Error! </strong>{errorMessage}
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                }
                {posts.loading && <em> Loading posts...</em>}
                {posts.length &&
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">User</th>
                                <th scope="col">Title</th>
                                <th scope="col">Body</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post, index) =>
                                <tr key={post.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{post.userId}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                    {/* <td>
                                        <button className="btn btn-info" onClick={() => this.detail(course)}>Detail</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-success" onClick={() => this.enroll(course)}>Enroll</button>
                                    </td> */}
                                </tr>
                            )}
                        </tbody>
                    </table>
                }
            </div>  
        );
    }
}

//export default new HomePage();