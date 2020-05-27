import React from 'react';

const axios = require('axios');

class SubPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            post: null,
            replies: [],
            searchBarText: ''
        };
    }

    componentDidMount() {
        (async () => {
            const config = {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            };
    
            await axios.get(SERVER_URL + '/post', config)
                .then((res) => {
                    this.setState({post: res.data});
                }).catch((error) => {
                    console.log(error.response.data.error);
                });
            
            fetchReplies();
        })();
    }

    // fetchReplies() {
    //     const config = {
    //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    //     };

    //     axios.get(SERVER_URL + '/reply', config)
    //         .then((res) => {
    //             this.setState({replies: res.data});
    //         }).catch((error) => {
    //             console.log(error.response.data.error);
    //         });
    // }
 
    render() {
        return (
            <>
                <div>
                    {!!this.state.post ?
                    (<>
                        <div>
                            {this.state.post.title}
                        </div>
                        <div>
                            {this.state.post.content}
                        </div>
                    </>) : ''}   
                </div>
                <div>
                    <table>
                        <tbody>
                            {this.state.posts.map((d, idx) =>{
                                return (<PostItem key={d.id} data={d}/>)
                            })}
                        </tbody>
                    </table>  
                </div>
            </>
        );
    }
}

export default SubPage;