import React from 'react';
import { SERVER_URL } from '../static/config.js';
import { Link } from "react-router-dom";

class Login extends React.Component {

    render() {
        return (
            <>
                <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" value={this.state.username} onChange={this.onChangeUsername} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" value={this.state.password} onChange={this.onChangePassword} className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Login" className="btn btn-submit" />
                        </div>
                </form>
                <Link to="/signin">No account?</Link>
            </>
        );
    }
}

export default Login;