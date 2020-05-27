import React from 'react';

function Account() {
    return (
        <div className="form-container">
            <fieldset>
                <Route path="/login" component={() => {
                    <>
                        <legend>Log in</legend>
                        <Login/>
                    </>
                }}/>
                <Route path="/register" component={() => {
                    <>
                        <legend>Register</legend>
                        <Login/>
                    </>
                }}/>        
            </fieldset>
        </div>
    );
}

export default Account;