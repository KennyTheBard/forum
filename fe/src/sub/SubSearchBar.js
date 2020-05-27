import React from 'react';

class SubSearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            subListHook: props.subListHook,
            searchBarText: ''
        };
    }

    onChangeSearchBar = (e) => {
        this.setState({ searchBarText: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!!this.state.searchBarText) {
            return;
        }

        this.state.subListHook(this.state.searchBarText);
    }

    render() {
        return (
            <>
                <form onSubmit={this.onSubmit}>
                    <input  type="text"
                            value={this.state.searchBarText}
                            onChange={this.onChangeSearchBar}
                            className="search-bar" />
                </form>
            </>
        );
    }
}

export default SubSearchBar;