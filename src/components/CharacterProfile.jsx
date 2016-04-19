var React = require('react');

var CharacterProfile = React.createClass({

    render: function(){

        return(

            <div>
                <p>Class: <span>{this.props.classTitle.Title}</span></p>
                <p>HP: <span>{this.props.attributes.HP}</span></p>
                <p>Strength: <span>{this.props.attributes.Strength}</span></p>
                <p>Speed: <span>{this.props.attributes.Speed}</span></p>
                <p>Magic: <span>{this.props.attributes.Magic}</span></p>
                <p>Knowledge: <span>{this.props.attributes.Knowledge}</span></p>
            </div>

        )

    }

});

module.exports = CharacterProfile;