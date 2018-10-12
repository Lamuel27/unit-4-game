//Global variables
$(document).ready(function() {

    //audio clips
    let audio = new Audio('assets/audio/Jab.mp3');
    let force = new Audio('assets/audio/Punch.mp3');
    let blaster = new Audio('assets/audio/Grunt.mp3');
    let jediKnow = new Audio('assets/audio/Gut.mp3');
    let lightsaber = new Audio('assets/audio/Whack.mp3');
    let rtwoo = new Audio('assets/audio/Computer.mp3');
    
    //Array of Playable Characters
    let characters = {
        'Green Arrow': {
            name: 'Green Arrow',
            health: 120,
            attack: 8,
            imageUrl: "assets/images/Arrow.png",
            enemyAttackBack: 15
        }, 
        'Batman': {
            name: 'Batman',
            health: 130,
            attack: 14,
            imageUrl: "assets/images/Bat2.png",
            enemyAttackBack: 5
        }, 
        'The Flash': {
            name: 'The Flash',
            health: 150,
            attack: 8,
            imageUrl: "assets/images/Flash.png",
            enemyAttackBack: 20
        }, 
        'Aqua Man': {
          name: 'Aqua Man',
          health: 200,
          attack: 8,
          imageUrl: "assets/images/Aqua.png",
          enemyAttackBack: 20
      }, 
        // 'Darkseid': {
        //     name: 'Darkseid',
        //     health: 180,
        //     attack: 7,
        //     imageUrl: "assets/images/Dark.png",
        //     enemyAttackBack: 20
        // }
    };

    var currSelectedCharacter;
    var currDefender;
    var combatants = [];
    var indexofSelChar;
    var attackResult;
    var turnCounter = 1;
    var killCount = 0;

    var renderOne = function(character, renderArea, makeChar) {
    //character: obj, renderArea: class/id, makeChar: string
    var charDiv = $("<div class='character' data-name='" + character.name + "'>");
    var charName = $("<div class='character-name'>").text(character.name);
    var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
    var charHealth = $("<div class='character-health'>").text(character.health);
    charDiv.append(charName).append(charImage).append(charHealth);
    $(renderArea).append(charDiv);
    //Capitalizes the first letter in characters name
    // $('.character').css('textTransform', 'capitalize');
    // conditional render
    if (makeChar == 'enemy') {
      $(charDiv).addClass('enemy');
    } else if (makeChar == 'defender') {
      currDefender = character;
      $(charDiv).addClass('target-enemy');
    }
  };
});