import React from 'react';

const axios = require('axios');

class SubPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sub: null,
            posts: [],
            searchBarText: ''
        };
    }

    componentDidMount() {
        (async () => {
            const config = {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            };
    
            await axios.get(SERVER_URL + '/sub', config)
                .then((res) => {
                    this.setState({posts: res.data});
                }).catch((error) => {
                    console.log(error.response.data.error);
                });
            
            fetchPosts();
        })();
    }

    fetchPosts() {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        };

        axios.get(SERVER_URL + '/sub', config)
            .then((res) => {
                this.setState({posts: res.data});
            }).catch((error) => {
                console.log(error.response.data.error);
            });
    }
 
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <div>
                                {!!this.state.sub ? this.state.sub.name : ''}
                            </div>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((d, idx) =>{
                            return (<PostItem key={d.id} data={d}/>)
                        })}
                    </tbody>
                </table>  
            </div>
        );
    }
}

export default SubPage;