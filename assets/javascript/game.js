
//Assign characters
//click a character
//show stats
//disappear rest of characters
//click an enemy
//show stats
//disappear rest of enemies
//start fight
//show attacks
//click attack
//register attack
//calculate damage
//substract health
//check if enemy is dead
//if enemy is dead exit game loop
//change turn


//Declaring class Pokemon
class Pokemon{
    //setting the constructor
    constructor(name, number, type, attacks, stats, alignment, source){
        this._name = name;
        this._number= number;
        this._type = type;
        this._attacks = attacks;
        this._stats = stats;
        this._alignment = alignment;
        this._source = source;
    }

    //GETTERS

    get name(){
        return this._name;
    }

    get number(){
        return this._number;
    }

    get type(){
        return this._type;
    }

    get attacks(){
        return this._attacks;
    }

    get stats(){
        return this._stats;
    }

    get alignment(){
        return this._alignment;
    }

    get source(){
        return this._source;
    }
    //END OF GETTERS


    //SETTERS

    set name(pkmnName){
        if(typeof(pkmnName)==='string'){
            this._name = pkmnName;
            return true;
        } else {
            return "Invalid name type";
        }
    }

    set number(pkmnNumber){
        if(typeof(pkmnNumber)==='number'){
            this._number = pkmnNumber;
            return true;
        } else {
            return "Invalid number type";
        }
    }

    set type(pkmnType){
        if(typeof(pkmnType) === 'string'){
            this._type = pkmnType;
            return true;
        } else {
            return "Invalid pokemon type";
        }
    }

    set attacks(pkmnAttack){
        this._attacks.push(pkmnAttack);
        return true;
    }

    set stats(statChange){
        if(typeof(statChange[0]) === 'number' && typeof(statChange[1]) === 'number'){
            this._stats[statChange[0]] += statChange[1];
            return true;
        } else {
            return "Invalid stat change";
        }
    }

    set alignment(newAlignment){
        if(typeof(newAlignment) === "boolean"){
            this._alignment = newAlignment;
            return true;
        } else {
            return false;
        }
    }

    set source(newSource){
        return this._source
    }

    fainted(){
        if(this._stats[0]===0){
            return true;
        } else {
            return false;
        }
    }
}

class PokemonAttack{
    constructor(name, attackPower, type, special, accuracy){
        this._name = name;
        this._attackPower = attackPower;
        this._type = type;
        this._special = special;
        this._accuracy = accuracy;
    }

    //GETTERS
    get name(){
        return this._name;
    }

    get attackPower(){
        return this._attackPower;
    }

    get type(){
        return this._type;
    }

    get special(){
        return this._special;
    }

    get accuracy(){
        return this._accuracy;
    }

    //SETTERS
    set name(attkName) {
        this._name = attkName;
    }

    set attackPower(attkPower) {
        if(typeof(attkPower) === 'number'){
            this._attackPower = attkPower;
            return true;
        } else {
            return "Invalid data type"
        }
    }

    set type(attkType) {
        this._type = attkType;
    }

    set special(attkSpecial) {
        this._special = attkSpecial;
    }

    set name(attkAccuracy) {
        this._accuracy = attkAccuracy;
    }
}

const aSeedBomb = new PokemonAttack("seed bomb", 80, "grass", false, 1);
const aTackle = new PokemonAttack("tackle", 40, "normal",false,1);
const aVineWhip = new PokemonAttack("vine whip", 50, "grass", true, 1);
const aSludgeBomb = new PokemonAttack("sludge bomb", 90, "poison", true, 1);
const aGrowl = new PokemonAttack("growl", 0, "normal", false, 1);
const aScratch = new PokemonAttack("scratch", 40, "normal", false, 1);
const aTailWhip = new PokemonAttack("tail whip", 0, "normal", false, 1);
const aFlash = new PokemonAttack("flash", 0, "normal", false, 1);
const aEmber = new PokemonAttack("ember", 40, "fire", true, 1);
const aFlamethrower = new PokemonAttack("flamethrower", 90, "fire", true, 1);
const aFirePunch = new PokemonAttack("fire punch", 70, "fire", false, .9);
const aWaterGun = new PokemonAttack("water gun", 40, "water", true, 1);
const aAquaTail = new PokemonAttack("aqua tail", 70, "water", false, 1);
const aHydroPump = new PokemonAttack("hydro pump", 70, "water", false, 1);
const aQuickAttack = new PokemonAttack("quick attack", 60, "normal", false, 1);
const aThunderShock = new PokemonAttack("thunder shock", 40, "electric", true, 1);
const aThunder = new PokemonAttack("thunder", 100, "electric", true, .8);
const aPsyshock = new PokemonAttack("psyshock", 60, "psychic", true, 1);

var pBulbasaur = new Pokemon("Bulbasaur",1,"Grass",[aTackle, aSludgeBomb, aSeedBomb, aTailWhip],[60,54,54,70,70,50],true,'assets/images/001-Bulbasaur375px.png');
var pIvysaur = new Pokemon("Ivysaur",2,"Grass",[aTackle, aQuickAttack, aTailWhip, aVineWhip],[61,67,68,85,85,65],true,'assets/images/002Ivysaur-375px.png');
var pVenusaur = new Pokemon("Venusaur",3,"Grass",[aScratch, aGrowl, aTailWhip, aVineWhip],[61,87,88,105,105,85],true, 'assets/images/003Venusaur-375px.png');
var pCharmander= new Pokemon("Charmander",4,"Fire",[aScratch, aFlash, aFlamethrower, aTailWhip ],[60,57,48,65,55,70],true,'assets/images/004-Charmander375px.png');
var pCharmeleon= new Pokemon("Charmeleon",5,"Fire",[aEmber, aScratch, aFirePunch, aFlash],[61,69,63,85,70,85],true,'assets/images/005-Charmeleon375px.png');
var pCharizard= new Pokemon("Charizard",6,"Fire",[aEmber, aScratch, aFlash, aTailWhip],[61,89,83,114,90,105],true,'assets/images/006-Charizard375px.png');
var pSquirtle= new Pokemon("Squirtle",7,"Water",[aAquaTail, aHydroPump, aTackle, aTailWhip],[60,53,70,65,59,48],true,'assets/images/007Squirtle-375px.png');
var pWartortle= new Pokemon("Wartortle",8,"Water",[aAquaTail, aQuickAttack, aTailWhip, aGrowl],[61,68,85,70,85,63],true,'assets/images/008Wartortle-375px.png');
var pBlastoise= new Pokemon("Blastoise",9,"Water",[aWaterGun, aTackle, aTailWhip, aGrowl],[61,88,105,90,110,83],true,'assets/images/009Blastoise-375px.png');
var pPikachu = new Pokemon("Pikachu",25,"Electric",[aThunder, aThunderShock, aQuickAttack, aTailWhip],[60,60,35,55,45,95],true,'assets/images/025Pikachu-375px.png');
var pRaichu= new Pokemon("Raichu",26,"Electric",[aThunderShock, aQuickAttack, aScratch, aTailWhip],[61,95,60,95,85,105],true,'assets/images/026Raichu-375px.png');
var pRaichu_alola= new Pokemon("Alolan Raichu",26,"Electric",[aPsyshock, aThunderShock, aScratch, aTailWhip],[61,95,60,95,85,105],true,'assets/images/026Raichu-Alola-165px.png');

var hero_pokemon = [];
var hero_pokemon_index;
var opp_pokemon = [];
var opp_pokemon_index;
var pokemon1;
var pokemon2;
var pokemon3;
var pokemon4;
var pokemon5;
var pokemon6;
var pokemon7;
var pokemon8;


var available_pokemon = [pBulbasaur, pIvysaur, pVenusaur, pCharmander, pCharmeleon, pCharizard, pSquirtle, pWartortle, pBlastoise, pPikachu, pRaichu, pRaichu_alola];
var winCondition;
$( document ).ready(function() {
    
    assignCharacters();
    console.log("Assign hero");
    console.log(hero_pokemon);
    console.log(hero_pokemon[0]);
    console.log("Assign opp");
    console.log(opp_pokemon);
    let divId;
    let pkmnOptionNum;

    $('.heroPkmn').on('click', function(event){
        if(event.target.nodeName==='DIV'){
            divId = event.target.id;
        } else {
            divId=$(event.target).parent().attr('id');
        }
        console.log("divID "+divId);
        console.log(divId.charAt(divId.length-1));
        pkmnOptionNum = divId.charAt(divId.length-1);
        console.log(typeof(pkmnOptionNum));
        //Call function that updates stats
        statUpdate(pkmnOptionNum-1);
        hero_pokemon_index = pkmnOptionNum-1;
        $('.infoSectionH').toggle();   
    });
    
    //function that hides the img of the pokemon that were not selected
    $('.selectYourPlayer').on('click',function(event){
        for(let i = 1; i<5;i++){
            console.log(pkmnOptionNum +" = "+i);
            if(i != pkmnOptionNum){
                $('#heroPkmn'+i).hide();
                console.log('#heroPkmn'+i);
            } else {
                $('#heroPkmn'+i).addClass('selected');
            }
        }

        
        $('.selectYourPlayer').hide();
        $('.infoSectionH').toggle(); 
        $('.oppPkmn').addClass('clickable');
        
        $('.hpButton').text("HP: " + hero_pokemon[hero_pokemon_index].stats[0]);
        for(let j = 1; j<5;j++){
            if(hero_pokemon[hero_pokemon_index].attacks[(j-1)].name !== ""){
                $('#attackButton'+j).text(hero_pokemon[hero_pokemon_index].attacks[(j-1)].name);
            } else {
                $('#attackButton'+j).hide();
            }
        }
    });
    
    prevDivId = "";
    //Has to listen to the document because the class is added dynamically
    $(document).on('click','.clickable', function(event){
        if(event.target.nodeName==='DIV'){
            divId = event.target.id;
        } else {
            divId=$(event.target).parent().attr('id');
        }
        console.log("divID "+divId);
        console.log(divId.charAt(divId.length-1));
        pkmnOptionNum = divId.charAt(divId.length-1);
        console.log(typeof(pkmnOptionNum));
        
        for(let i = 1; i<5; i++){
            if(pkmnOptionNum == i){
                $('#'+divId).toggleClass('selected');
            }else{
                $('#oppPkmn'+i).removeClass('selected');
            }
        }

        if((divId === prevDivId)||(prevDivId === "")){
            $('.infoSectionO').toggle();
        }else{
            $('.infoSectionO').show();
        }
        prevDivId = divId;
    });

    $('.selectYourOpponent').click(function(){
        $('.oppPkmn').toggleClass('clickable');

        for(let i = 1; i<5;i++){
            console.log(pkmnOptionNum +" = "+i);
            if(i != pkmnOptionNum){
                $('#oppPkmn'+i).hide();
                console.log('#oppPkmn'+i);
            }
        }
        $('.infoSectionO').hide();
        $('.attackButtonSection').show();
        $('.oppStats').show();
        opp_pokemon_index = pkmnOptionNum-1;
        console.log("opp pkmn index "+opp_pokemon_index);
        $('.oppHPButton').text("HP: "+opp_pokemon[opp_pokemon_index].stats[0]);
    });

    var battleStatus;
    var winCondition;
    $('.attackButton').click(function(event){
        var attkId = event.target.id;
        console.log("Attk id "+attkId);
        for(let i=1; i<5;i++){
            console.log("attackButton" +(i));
            if(attkId.charAt(attkId.length-1)==i){
                battleStatus = battle(i-1);
                console.log("battle status" +battleStatus);
            }
        }
        $('.hpButton').text("HP: " + hero_pokemon[hero_pokemon_index].stats[0]);
        $('.oppHPButton').text("HP: " + opp_pokemon[opp_pokemon_index].stats[0]);
        
        winCondition = opp_pokemon[0].stats[0]+opp_pokemon[1].stats[0]+opp_pokemon[2].stats[0]+opp_pokemon[3].stats[0];
        console.log("win condition " + winCondition);
        if(winCondition <= 0 && hero_pokemon[hero_pokemon_index].stats[0] !== 0){
            $('.mainSection').hide();
            $('.winSection').show();
        }

        if(battleStatus === true){
            console.log("battle status true");
            if(hero_pokemon[hero_pokemon_index].stats[0] === 0){
                alert("You lose!");
                $('.heroPkmn').show();
                $('.attackButtonSection').hide();
                $('.oppPkmn').show();
                $('.oppStats').hide();
                $('.selectYourPlayer').show();
                gameStart();
                assignCharacters();
            } else {    
                console.log('#oppPkmn'+(opp_pokemon_index+1));
                $('#oppPkmn'+(opp_pokemon_index+1)).addClass('fainted');
                $('#oppPkmn'+(opp_pokemon_index+1)).removeClass('alive');
                $('.alive').show();
                $('.oppStats').hide();
                $('.oppPkmn').toggleClass('clickable');
                $('#oppPkmn').removeClass('selected');
                battleStatus = false;
                hero_pokemon[hero_pokemon_index].stats[0] = pCharmeleon.stats[0];
            }
        }
    });
});

function assignCharacters(){
    console.log("Assign characters")
    let randomIndexH;
    for(let i = 0; i<4; i++){
        randomIndexH = Math.floor(Math.random()*available_pokemon.length);
        hero_pokemon[i]= Object.create(available_pokemon[randomIndexH]);
        
        console.log(hero_pokemon[i] === available_pokemon[randomIndexH]);
        console.log(hero_pokemon);
        hero_pokemon[i].alignment = true;
        $('#heroPkmn'+(i+1)).find('img').attr('src',hero_pokemon[i].source);
        $('#heroPkmn'+(i+1)).find('span').text(hero_pokemon[i].name);

        console.log("hero pokemon "+hero_pokemon[i]);
        console.log("source "+hero_pokemon[i].source);

        randomIndexO = Math.floor(Math.random()*available_pokemon.length);
        opp_pokemon[i]=new Pokemon(available_pokemon[randomIndexO].name,available_pokemon[randomIndexO].number, available_pokemon[randomIndexO].type, available_pokemon[randomIndexO].attacks, available_pokemon[randomIndexO].stats , available_pokemon[randomIndexO].alignment, available_pokemon[randomIndexO].source);
        opp_pokemon[i].alignment = false;
        $('#oppPkmn'+(i+1)).find('img').attr('src',opp_pokemon[i].source);
        $('#oppPkmn'+(i+1)).find('span').text(opp_pokemon[i].name);
    }

}

function gameStart(){
    pBulbasaur = ("Bulbasaur",1,"Grass",[aTackle, aSludgeBomb, aSeedBomb, aTailWhip],[60,54,54,70,70,50],true,'assets/images/001-Bulbasaur375px.png');
    pIvysaur = ("Ivysaur",2,"Grass",[aTackle, aQuickAttack, aTailWhip, aVineWhip],[61,67,68,85,85,65],true,'assets/images/002Ivysaur-375px.png');
    pVenusaur = ("Venusaur",3,"Grass",[aScratch, aGrowl, aTailWhip, aVineWhip],[61,87,88,105,105,85],true, 'assets/images/003Venusaur-375px.png');
    pCharmander= ("Charmander",4,"Fire",[aScratch, aFlash, aFlamethrower, aTailWhip ],[60,57,48,65,55,70],true,'assets/images/004-Charmander375px.png');
    pCharmeleon= ("Charmeleon",5,"Fire",[aEmber, aScratch, aFirePunch, aFlash],[61,69,63,85,70,85],true,'assets/images/005-Charmeleon375px.png');
    pCharizard= ("Charizard",6,"Fire",[aEmber, aScratch, aFlash, aTailWhip],[61,89,83,114,90,105],true,'assets/images/006-Charizard375px.png');
    pSquirtle= ("Squirtle",7,"Water",[aAquaTail, aHydroPump, aTackle, aTailWhip],[60,53,70,65,59,48],true,'assets/images/007Squirtle-375px.png');
    pWartortle= ("Wartortle",8,"Water",[aAquaTail, aQuickAttack, aTailWhip, aGrowl],[61,68,85,70,85,63],true,'assets/images/008Wartortle-375px.png');
    pBlastoise= ("Blastoise",9,"Water",[aWaterGun, aTackle, aTailWhip, aGrowl],[61,88,105,90,110,83],true,'assets/images/009Blastoise-375px.png');
    pPikachu = ("Pikachu",25,"Electric",[aThunder, aThunderShock, aQuickAttack, aTailWhip],[60,60,35,55,45,95],true,'assets/images/025Pikachu-375px.png');
    pRaichu= ("Raichu",26,"Electric",[aThunderShock, aQuickAttack, aScratch, aTailWhip],[61,95,60,95,85,105],true,'assets/images/026Raichu-375px.png');
    pRaichu_alola= ("Alolan Raichu",26,"Electric",[aPsyshock, aThunderShock, aScratch, aTailWhip],[61,95,60,95,85,105],true,'assets/images/026Raichu-Alola-165px.png');
}

function statUpdate(number){
    $('.heroName').text(hero_pokemon[number].name);
    $('.heroNumber').text("#"+hero_pokemon[number].number);
    $('.heroType').text(hero_pokemon[number].type);
    $('.HP').text("HP:     "+hero_pokemon[number].stats[0]);
    $('.attack').text("Atk:    "+hero_pokemon[number].stats[1]);
    $('.defense').text("Def:    "+hero_pokemon[number].stats[2]);
    $('.SpAtk').text("SpAtk:  "+hero_pokemon[number].stats[3]);
    $('.SpDef').text("SpDef:  "+hero_pokemon[number].stats[4]);
    $('.Speed').text("Spd:    "+hero_pokemon[number].stats[5]);
    $('.attack1').text(hero_pokemon[number].attacks[0].name);
    $('.attack2').text(hero_pokemon[number].attacks[1].name);
    $('.attack3').text(hero_pokemon[number].attacks[2].name);
    $('.attack4').text(hero_pokemon[number].attacks[3].name);
}

function battle(attack_number){
    
    let selectedAttk = hero_pokemon[hero_pokemon_index].attacks[attack_number].attackPower;
    let selectedAttkSpecial = hero_pokemon[hero_pokemon_index].attacks[attack_number].special;
    let heroAttk = hero_pokemon[hero_pokemon_index].stats[1];
    let heroDef = hero_pokemon[hero_pokemon_index].stats[2];
    let heroSpAttk = hero_pokemon[hero_pokemon_index].stats[3];
    let heroSpDef = hero_pokemon[hero_pokemon_index].stats[4];

    console.log("en medio de hero y opp");

    let oppAttackIndex = Math.floor(Math.random()*4+1)-1;
    console.log("opp atk index"+oppAttackIndex);
    console.log(opp_pokemon[opp_pokemon_index]);
    console.log("opp atack "+opp_pokemon[opp_pokemon_index].attacks[oppAttackIndex].name);
    console.log("opp atack power "+opp_pokemon[opp_pokemon_index].attacks[oppAttackIndex].attackPower);
    let oppSelectedAttack = opp_pokemon[opp_pokemon_index].attacks[oppAttackIndex].attackPower;
    let oppSelectedAttackSpecial = opp_pokemon[opp_pokemon_index].attacks[oppAttackIndex].special;
    let oppAttk = opp_pokemon[opp_pokemon_index].stats[1];
    let oppDef = opp_pokemon[opp_pokemon_index].stats[2];
    let oppSpAttk = opp_pokemon[opp_pokemon_index].stats[3];
    let oppSpDef = opp_pokemon[opp_pokemon_index].stats[4];
    let damage;

    if(opp_pokemon[opp_pokemon_index].stats[0] <= 0 || hero_pokemon[hero_pokemon_index].stats[0] <= 0){
        return true;
    }
    
    if(selectedAttkSpecial === true){
        console.log("hero atk "+hero_pokemon[hero_pokemon_index].attacks[attack_number].name);
        damage = Math.floor((((((2*50)/5)+2)*selectedAttk*(heroAttk/oppDef))/50)+2);
    }else {
        console.log("hero sp atk "+hero_pokemon[hero_pokemon_index].attacks[attack_number].name);
        damage = Math.floor((((((2*50)/5)+2)*selectedAttk*(heroSpAttk/heroSpDef))/50)+2);
    }
    opp_pokemon[opp_pokemon_index].stats[0] -= damage;
    console.log(opp_pokemon[opp_pokemon_index].stats[0] === hero_pokemon[hero_pokemon_index].stats[0]);
    console.log("damage to opp "+damage);
    console.log(opp_pokemon[opp_pokemon_index].stats[0])
    console.log("damage to hero "+damage);
    console.log(hero_pokemon[hero_pokemon_index].stats[0]);
    
    damage = 0;

    if(opp_pokemon[opp_pokemon_index].stats[0] <= 0){
        opp_pokemon[opp_pokemon_index].stats[0] = 0;
        return true;
    }
    
    if(oppSelectedAttackSpecial === true){
        console.log("opp atk "+opp_pokemon[opp_pokemon_index].attacks[oppAttackIndex].name);
        damage = Math.floor((((((2*50)/5)+2)*oppSelectedAttack*(oppAttk/heroDef))/50)+2);
    }else {
        console.log("opp sp atk "+opp_pokemon[opp_pokemon_index].attacks[oppAttackIndex].name);
        damage = Math.floor((((((2*50)/5)+2)*oppSelectedAttack*(oppSpAttk/heroSpDef))/50)+2);
    }
    hero_pokemon[hero_pokemon_index].stats[0] -= damage;
    console.log("damage to hero "+damage);
    console.log(hero_pokemon[hero_pokemon_index].stats[0]);

    if(hero_pokemon[hero_pokemon_index].stats[0] <= 0){
        hero_pokemon[hero_pokemon_index].stats[0] = 0
        return true;
    }
    return false;
    
}

// ((2A/5+2)*B*C)/D)/50)+2)*X)*Y/10)*Z)/255
// A = attacker's Level
// B = attacker's Attack or Special
// C = attack Power
// D = defender's Defense or Special
// X = same-Type attack bonus (1 or 1.5)
// Y = Type modifiers (40, 20, 10, 5, 2.5, or 0)
// Z = a random number between 217 and 255 