'use strict';

var React = require('react');
var config = require('../config/config');
var PlayerActions = require('../actions/PlayerActions');
var PlayerStore = require('../stores/PlayerStore');

var CharacterProfile = require('./CharacterProfile.jsx');
import {Link} from 'react-router';

var Register = React.createClass({

    getInitialState: function(){
        return {
            characterClasses: config.getClasses(),
            attributes: config.getAttributes(),
            characterClass: null,
            characterAttributes: {}
        }
    },

    componentDidMount: function(){
        PlayerStore.addChangeListener(this.registered);
    },

    randomizeAttribute: function(attributeBase, min, max){
        var random = Math.floor(Math.random() * (max - min + 1)) + min;

        return random + attributeBase;
    },

    generateAttributes: function(e){
        var attributes = this.state.attributes;
        var characterClass = config.getClass(e.target.value);
        var characterAttributes = {};

        if(characterClass) {
            attributes.forEach( (attribute) => {
                characterAttributes[attribute] = this.randomizeAttribute(characterClass.baseAttributes[attribute],
                    config.getAttributeMin(), config.getAttributeMax())
            });

            this.setState({
                characterAttributes: characterAttributes,
                characterClass: characterClass
            })
        }
    },

    register: function(){

        var data = {
            'username': this.state.username,
            'password': this.state.password,
            'class': this.state.characterClass,
            'attributes': this.state.characterAttributes,
            'items': [],
            'level': 1,
            'toNextLevel': 30
        };

        PlayerActions.registerPlayer(data);

    },

    registered: function(){

        StateActions.togglePlayerStateModal();

    },

    render: function(){

        var getClassOptions = () => {

            var classes = this.state.characterClasses;

            return classes.map(function(classType){
                return <option key={classType} value={classType}>{classType}</option>
            })

        };

        var getCharacterProfile = () => {

            if(this.state.characterClass && this.state.characterAttributes) {
                return (
                    <div className="character-profile">
                        <CharacterProfile classTitle={this.state.characterClass}
                                          attributes={this.state.characterAttributes}/>
                    </div>
                )
            }

        };


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
                    <div className="class-select">
                        <select onChange={this.generateAttributes}>
                            {getClassOptions()}
                        </select>
                    </div>
                    {getCharacterProfile()}
                    <div className="actions-menu">
                        <button className="action-button blue" type="button" onClick={this.register}>Register</button>
                        <Link className="action-button blue" to="/">Back</Link>
                    </div>
                </form>
            </div>
        )
    }

});

module.exports = Register;