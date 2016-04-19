
var attributes = [
    'HP',
    'Strength',
    'Speed',
    'Magic',
    'Knowledge'
];

var attributeMin = 5;

var attributeMax = 10;

var characterClasses = {
    'Knight': {
        'Title': 'Knight',
        'baseAttributes': {
            'HP': 15,
            'Strength': 5,
            'Speed': 3,
            'Magic': 3,
            'Knowledge': 4
        }
    },
    'Dwarf': {
        'Title': 'Dwarf',
        'baseAttributes': {
            'HP': 16,
            'Strength': 4,
            'Speed': 2,
            'Magic': 4,
            'Knowledge': 5
        }
    },
    'Wizard': {
        'Title': 'Wizard',
        'baseAttributes': {
            'HP': 15,
            'Strength': 2,
            'Speed': 3,
            'Magic': 6,
            'Knowledge': 5
        }
    },
    'Barbarian': {
        'Title': 'Barbarian',
        'baseAttributes': {
            'HP': 20,
            'Strength': 7,
            'Speed': 2,
            'Magic': 2,
            'Knowledge': 1
        }
    }
};


var config = {

    getAttributeMin: function(){
        return attributeMin
    },

    getAttributeMax: function(){
        return attributeMax
    },

    getClasses: function(){

        return Object.keys(characterClasses);

    },

    getClass: function(classType){

        return characterClasses[classType]

    },

    getAttributes: function(){

        return attributes;
    }

};

module.exports = config;