import React from 'react';
import SubSearchBar from './SubSearchBar';

const axios = require('axios');

class SubList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            subs: [],
            searchBarText: ''
        };

        this.fetchSubs = this.fetchSubs.bind(this);
    }

    componentDidMount() {
        fetchSubs('');
    }

    fetchSubs = (searchPhrase) => {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        };

        axios.get(SERVER_URL + '/sub' + (!!searchPhrase ? '?search=' + searchPhrase : ''), config)
            .then((res) => {
                this.setState({subs: res.data});
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
                            <SubSearchBar subListHook={this.fetchSubs}/>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.subs.map((d, idx) =>{
                            return (<SubItem key={d.id} data={d}/>)
                        })}
                    </tbody>
                </table>  
            </div>                
        );
    }
}

export default SubList;