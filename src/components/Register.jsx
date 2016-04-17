'use strict';

var React = require('react');
import {Link} from 'react-router';

var Register = React.createClass({

    render: function(){
        return(
            <div className="register">
                <h1 className="heading">Ah, I'm sorry - your face looked familiar.</h1>
                <h3 className="sub-heading">So tell me about yourself...?</h3>
                <form className="login__form">
                    <input type="text"
                           name="username"
                           className="input__username"
                           value={this.username}
                           placeholder="username"
                           onChange={this.handleUserChange}
                    />
                    <input type="password"
                           name="password"
                           className="input__password"
                           placeholder="password"
                           onChange={this.handlePasswordChange}
                    />
                    <div className="actions-menu">
                        <button className="action-button blue" type="button" onClick={this.logIn}>Log In</button>
                        <Link className="action-button blue" to="/">Back</Link>
                    </div>
                </form>
            </div>
        )
    }

});

module.exports = Register;