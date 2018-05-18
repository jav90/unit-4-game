
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
    constructor(name, number, type1, type2, attacks, stats, alignment, source){
        this._name = name;
        this._number= number;
        this._type1 = type1;
        this._type2 = type2;
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

    get type1(){
        return this._type1;
    }

    get type2(){
        return this._type2;
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

    set type1(pkmnType){
        if(typeof(pkmnType) === 'string'){
            this._type1 = pkmnType;
            return true;
        } else {
            return "Invalid pokemon type";
        }
    }

    set type2(pkmnType){
        if(typeof(pkmnType) === 'string'){
            this._type2 = pkmnType;
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


//Creating a class for pokemon attacks
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


//Declaring pokemon attacks
// const aSeedBomb = new PokemonAttack("seed bomb", 80, "grass", false, 1);
// const aTackle = new PokemonAttack("tackle", 40, "normal",false,1);
// const aVineWhip = new PokemonAttack("vine whip", 50, "grass", true, 1);
// const aSludgeBomb = new PokemonAttack("sludge bomb", 90, "poison", true, 1);
// const aGrowl = new PokemonAttack("growl", 0, "normal", false, 1);
// const aScratch = new PokemonAttack("scratch", 40, "normal", false, 1);
// const aTailWhip = new PokemonAttack("tail whip", 0, "normal", false, 1);
// const aFlash = new PokemonAttack("flash", 0, "normal", false, 1);
// const aEmber = new PokemonAttack("ember", 40, "fire", true, 1);
// const aFlamethrower = new PokemonAttack("flamethrower", 90, "fire", true, 1);
// const aFirePunch = new PokemonAttack("fire punch", 70, "fire", false, .9);
// const aWaterGun = new PokemonAttack("water gun", 40, "water", true, 1);
// const aAquaTail = new PokemonAttack("aqua tail", 70, "water", false, 1);
// const aHydroPump = new PokemonAttack("hydro pump", 70, "water", false, 1);
// const aQuickAttack = new PokemonAttack("quick attack", 60, "normal", false, 1);
// const aThunderShock = new PokemonAttack("thunder shock", 40, "electric", true, 1);
// const aThunder = new PokemonAttack("thunder", 1, "electric", true, .8);
// const aPsyshock = new PokemonAttack("psyshock", 60, "psychic", true, 1);

const aWoodHammer = new PokemonAttack('Wood Hammer',120,'grass',false,1);
const aMegaDrain = new PokemonAttack('Mega Drain',40,'grass',true,1);
const aLeafBlade = new PokemonAttack('Leaf Blade',90,'grass',false,1);
const aFlareBlitz = new PokemonAttack('Flare Blitz',120,'fire',false,1);
const aBlazeKick = new PokemonAttack('Blaze Kick',85,'fire',false,0.9);
const aFlameWheel = new PokemonAttack('Flame Wheel',60,'fire',false,1);
const aSurf = new PokemonAttack('Surf',90,'water',true,1);
const aAquaTail = new PokemonAttack('Aqua Tail',90,'water',false,0.9);
const aWaterPulse = new PokemonAttack('Water Pulse',60,'water',true,1);
const aMegahorn = new PokemonAttack('Megahorn',120,'bug',false,0.85);
const aFellStinger = new PokemonAttack('Fell Stinger',50,'bug',false,1);
const aFirstImpression = new PokemonAttack('First Impression',90,'bug',false,1);
const aSilverWind = new PokemonAttack('Silver Wind',60,'bug',true,1);
const aSlam = new PokemonAttack('Slam',80,'normal',false,0.75);
const aBarrage = new PokemonAttack('Barrage',15,'normal',false,0.85);
const aMegaKick = new PokemonAttack('Mega Kick',120,'normal',false,0.75);
const aTailSlap = new PokemonAttack('Tail Slap',25,'normal',false,0.85);
const aPursuit = new PokemonAttack('Pursuit',40,'dark',false,1);
const aUproar = new PokemonAttack('Uproar',90,'normal',true,1);
const aWeatherBall = new PokemonAttack('Weather Ball',50,'normal',true,1);
const aViceGrip = new PokemonAttack('Vice Grip',55,'normal',false,1);
const aAcidSpray = new PokemonAttack('Acid Spray',40,'poison',true,1);
const aPoisonTail = new PokemonAttack('Poison Tail',50,'poison',false,1);
const aZapCannon = new PokemonAttack('Zap Cannon',120,'electric',true,0.5);
const aNuzzle = new PokemonAttack('Nuzzle',20,'electric',false,1);
const aParabolicCharge = new PokemonAttack('Parabolic Charge',65,'electric',true,1);
const aDig = new PokemonAttack('Dig',80,'ground',false,1);
const aFreeze_Dry = new PokemonAttack('Freeze-Dry',70,'ice',true,1);
const aThousandArrows = new PokemonAttack('Thousand Arrows',90,'ground',false,1);
const aIceFang = new PokemonAttack('Ice Fang',65,'ice',false,0.95);
const aPoisonSting = new PokemonAttack('Poison Sting',15,'poison',false,1);
const aPoisonFang = new PokemonAttack('Poison Fang',50,'poison',false,1);
const aSludge = new PokemonAttack('Sludge',65,'poison',true,1);
const aCrossPoison = new PokemonAttack('Cross Poison',70,'poison',false,1);
const aTripleKick = new PokemonAttack('Triple Kick',10,'fighting',false,0.9);
const aLightofRuin = new PokemonAttack('Light of Ruin',140,'fairy',true,0.9);
const aOverheat = new PokemonAttack('Overheat',130,'fire',true,0.9);
const aIcePunch = new PokemonAttack('Ice Punch',75,'ice',false,1);
const aConstrict = new PokemonAttack('Constrict',10,'normal',false,1);
const aWrap = new PokemonAttack('Wrap',15,'normal',false,0.9);
const aClearSmog = new PokemonAttack('Clear Smog',50,'poison',true,1.02);
const aGunkShot = new PokemonAttack('Gunk Shot',120,'poison',false,0.8);
const aGigaDrain = new PokemonAttack('Giga Drain',75,'grass',true,1);
const aSolarBeam = new PokemonAttack('Solar Beam',120,'grass',true,1);
const aInfestation = new PokemonAttack('Infestation',20,'bug',true,1);
const aDestinyBond = new PokemonAttack('Destiny Bond',0,'ghost',false,1.02);
const aLock_On = new PokemonAttack('Lock-On',0,'normal',false,1.02);
const aTrickRoom = new PokemonAttack('Trick Room',0,'psychic',false,1.02);
const aSpectralThief = new PokemonAttack('Spectral Thief',90,'ghost',false,1);
const aPunishment = new PokemonAttack('Punishment',0,'dark',false,1);
const aHoldHands = new PokemonAttack('Hold Hands',0,'normal',false,1.02);
const aSwagger = new PokemonAttack('Swagger',0,'normal',false,0.85);
const aSparklingAria = new PokemonAttack('Sparkling Aria',90,'water',true,1);
const aFlowerShield = new PokemonAttack('Flower Shield',0,'fairy',false,1.02);
const aHornDrill = new PokemonAttack('Horn Drill',0,'normal',false,1.02);
const aHurricane = new PokemonAttack('Hurricane',110,'flying',true,0.7);
const aWhirlpool = new PokemonAttack('Whirlpool',35,'water',true,0.85);
const aGlare = new PokemonAttack('Glare',0,'normal',false,1);
const aSearingShot = new PokemonAttack('Searing Shot',100,'fire',true,1);
const aPsychoShift = new PokemonAttack('Psycho Shift',0,'psychic',false,0.9);
const aCamouflage = new PokemonAttack('Camouflage',0,'normal',false,1.02);
const aSuckerPunch = new PokemonAttack('Sucker Punch',70,'dark',false,1);
const aFireLash = new PokemonAttack('Fire Lash',80,'fire',false,1);
const aPowerSplit = new PokemonAttack('Power Split',0,'psychic',false,1.02);
const aRevelationDance = new PokemonAttack('Revelation Dance',90,'normal',true,1);
const aFuryCutter = new PokemonAttack('Fury Cutter',40,'bug',false,0.95);
const aFireFang = new PokemonAttack('Fire Fang',65,'fire',false,0.95);
const aBubble = new PokemonAttack('Bubble',40,'water',true,1);
const aSpitUp = new PokemonAttack('Spit Up',0,'normal',true,1);
const aMirrorMove = new PokemonAttack('Mirror Move',0,'flying',false,1.02);
const aMetronome = new PokemonAttack('Metronome',0,'normal',false,1.02);
const aStormThrow = new PokemonAttack('Storm Throw',60,'fighting',false,1);
const aDragonBreath = new PokemonAttack('Dragon Breath',60,'dragon',true,1);
const aSpiritShackle = new PokemonAttack('Spirit Shackle',80,'ghost',false,1);
const aDevastatingDrake = new PokemonAttack('Devastating Drake',0,'dragon',false,1.02);
const aDynamicPunch = new PokemonAttack('Dynamic Punch',100,'fighting',false,0.5);
const aFacade = new PokemonAttack('Facade',70,'normal',false,1);
const aDreamEater = new PokemonAttack('Dream Eater',100,'psychic',true,1);
const aCoreEnforcer = new PokemonAttack('Core Enforcer',100,'dragon',true,1);
const aSweetScent = new PokemonAttack('Sweet Scent',0,'normal',false,1.02);
const aAstonish = new PokemonAttack('Astonish',30,'ghost',false,1);
const aCut = new PokemonAttack('Cut',50,'normal',false,0.95);
const aConversion2 = new PokemonAttack('Conversion 2',0,'normal',false,1.02);
const aTransform = new PokemonAttack('Transform',0,'normal',false,1.02);
const aSupersonic = new PokemonAttack('Supersonic',0,'normal',false,0.55);
const aFeatherDance = new PokemonAttack('Feather Dance',0,'flying',false,1);
const aElectroweb = new PokemonAttack('Electroweb',55,'electric',true,0.95);
const aEntrainment = new PokemonAttack('Entrainment',0,'normal',false,1);
const aBulletPunch = new PokemonAttack('Bullet Punch',40,'steel',false,1);
const aGlaciate = new PokemonAttack('Glaciate',65,'ice',true,0.95);
const aEnergyBall = new PokemonAttack('Energy Ball',90,'grass',true,1);
const aPowerTrip = new PokemonAttack('Power Trip',20,'dark',false,1);
const aIngrain = new PokemonAttack('Ingrain',0,'grass',false,1.02);
const aSleepPowder = new PokemonAttack('Sleep Powder',0,'grass',false,0.75);
const aLeechSeed = new PokemonAttack('Leech Seed',0,'grass',false,0.9);
const aDefog = new PokemonAttack('Defog',0,'flying',false,1.02);
const aSunnyDay = new PokemonAttack('Sunny Day',0,'fire',false,1.02);
const aInfernoOverdrive = new PokemonAttack('Inferno Overdrive',0,'fire',false,1.02);
const aWaterSport = new PokemonAttack('Water Sport',0,'water',false,1.02);
const aSoak = new PokemonAttack('Soak',0,'water',false,1);
const aAquaRing = new PokemonAttack('Aqua Ring',0,'water',false,1.02);
const aStringShot = new PokemonAttack('String Shot',0,'bug',false,0.95);
const aHealOrder = new PokemonAttack('Heal Order',0,'bug',false,1.02);
const aTailGlow = new PokemonAttack('Tail Glow',0,'bug',false,1.02);
const aQuiverDance = new PokemonAttack('Quiver Dance',0,'bug',false,1.02);
const aSonicBoom = new PokemonAttack('Sonic Boom',0,'normal',true,0.9);
const aDefenseCurl = new PokemonAttack('Defense Curl',0,'normal',false,1.02);
const aHelpingHand = new PokemonAttack('Helping Hand',0,'normal',false,1.02);
const aTeeterDance = new PokemonAttack('Teeter Dance',0,'normal',false,1);
const aGuillotine = new PokemonAttack('Guillotine',0,'normal',false,1.02);
const aPartingShot = new PokemonAttack('Parting Shot',0,'dark',false,1);
const aPlayNice = new PokemonAttack('Play Nice',0,'normal',false,1.02);
const aSleepTalk = new PokemonAttack('Sleep Talk',0,'normal',false,1.02);
const aPurify = new PokemonAttack('Purify',0,'poison',false,1.02);
const aBanefulBunker = new PokemonAttack('Baneful Bunker',0,'poison',false,1.02);
const aAromaticMist = new PokemonAttack('Aromatic Mist',0,'fairy',false,1.02);
const aThunderWave = new PokemonAttack('Thunder Wave',0,'electric',false,0.9);
const aElectroBall = new PokemonAttack('Electro Ball',0,'electric',true,1);
const aRototiller = new PokemonAttack('Rototiller',0,'ground',false,1.02);
const aMist = new PokemonAttack('Mist',0,'ice',false,1.02);
const aFissure = new PokemonAttack('Fissure',0,'ground',false,1.02);
const aVenomDrench = new PokemonAttack('Venom Drench',0,'poison',false,1);
const aAgility = new PokemonAttack('Agility',0,'psychic',false,1.02);
const aGastroAcid = new PokemonAttack('Gastro Acid',0,'poison',false,1);
const aToxicThread = new PokemonAttack('Toxic Thread',0,'poison',false,1);
const aNaturesMadness = new PokemonAttack('Natures Madness',0,'fairy',true,0.9);
const aSweetKiss = new PokemonAttack('Sweet Kiss',0,'fairy',false,0.75);
const aAcupressure = new PokemonAttack('Acupressure',0,'normal',false,1.02);
const aAcidDownpour = new PokemonAttack('Acid Downpour',0,'poison',false,1.02);
const aStunSpore = new PokemonAttack('Stun Spore',0,'grass',false,0.75);
const aSpore = new PokemonAttack('Spore',0,'grass',false,1);
const aGrassKnot = new PokemonAttack('Grass Knot',0,'grass',true,1);
const aSpiderWeb = new PokemonAttack('Spider Web',0,'bug',false,1.02);
const aBelch = new PokemonAttack('Belch',120,'poison',true,0.9);
const aDouble_Edge = new PokemonAttack('Double-Edge',120,'normal',false,1);
const aRapidSpin = new PokemonAttack('Rapid Spin',20,'normal',false,1);
const aAirSlash = new PokemonAttack('Air Slash',75,'flying',true,0.95);
const aCrushClaw = new PokemonAttack('Crush Claw',75,'normal',false,0.95);
const aBoomburst = new PokemonAttack('Boomburst',140,'normal',true,1);
const aRound = new PokemonAttack('Round',60,'normal',true,1);
const aSelf_Destruct = new PokemonAttack('Self-Destruct',200,'normal',false,1);
const aAcrobatics = new PokemonAttack('Acrobatics',55,'flying',false,1);
const aVenoshock = new PokemonAttack('Venoshock',65,'poison',true,1);
const aDrillPeck = new PokemonAttack('Drill Peck',80,'flying',false,1);
const aPluck = new PokemonAttack('Pluck',60,'flying',false,1);
const aPeck = new PokemonAttack('Peck',35,'flying',false,1);
const aSwift = new PokemonAttack('Swift',60,'normal',true,1.01);
const aTriAttack = new PokemonAttack('Tri Attack',80,'normal',true,1);
const aGigaImpact = new PokemonAttack('Giga Impact',150,'normal',false,0.9);
const aBind = new PokemonAttack('Bind',15,'normal',false,0.85);
const aGust = new PokemonAttack('Gust',40,'flying',true,1);
const aMegaPunch = new PokemonAttack('Mega Punch',80,'normal',false,0.85);
const aCovet = new PokemonAttack('Covet',60,'normal',false,1);
const aSkullBash = new PokemonAttack('Skull Bash',130,'normal',false,1);
const aPsystrike = new PokemonAttack('Psystrike',100,'psychic',true,1);
const aHeadCharge = new PokemonAttack('Head Charge',120,'normal',false,1);
const aSteelWing = new PokemonAttack('Steel Wing',70,'steel',false,0.9);
const aFlashCannon = new PokemonAttack('Flash Cannon',80,'steel',true,1);
const aEchoedVoice = new PokemonAttack('Echoed Voice',40,'normal',true,1);
const aSandTomb = new PokemonAttack('Sand Tomb',35,'ground',false,0.85);
const aLandsWrath = new PokemonAttack('Lands Wrath',90,'ground',false,1);
const aSpikeCannon = new PokemonAttack('Spike Cannon',20,'normal',false,1);
const aPayDay = new PokemonAttack('Pay Day',40,'normal',false,1);
const aFeint = new PokemonAttack('Feint',30,'normal',false,1);
const aFairyWind = new PokemonAttack('Fairy Wind',40,'fairy',true,1);
const aDisarmingVoice = new PokemonAttack('Disarming Voice',40,'fairy',true,1.01);
const aBraveBird = new PokemonAttack('Brave Bird',120,'flying',false,1);
const aWingAttack = new PokemonAttack('Wing Attack',60,'flying',false,1);
const aSludgeWave = new PokemonAttack('Sludge Wave',95,'poison',true,1);
const aSmog = new PokemonAttack('Smog',30,'poison',true,0.7);
const aTropKick = new PokemonAttack('Trop Kick',70,'grass',false,1);




//Declaring pokemons
/*
var pBulbasaur = new Pokemon("Bulbasaur",1,"Grass","",[aTackle, aSludgeBomb, aSeedBomb, aTailWhip],[60,54,54,70,70,50],true,'assets/images/1Bulbasaur.png');
var pIvysaur = new Pokemon("Ivysaur",2,"Grass","",[aTackle, aQuickAttack, aTailWhip, aVineWhip],[61,67,68,85,85,65],true,'assets/images/2Ivysaur.png');
var pVenusaur = new Pokemon("Venusaur",3,"Grass","Poison",[aScratch, aGrowl, aTailWhip, aVineWhip],[61,87,88,105,105,85],true, 'assets/images/3Venusaur.png');
var pCharmander= new Pokemon("Charmander",4,"Fire","",[aScratch, aFlash, aFlamethrower, aTailWhip ],[60,57,48,65,55,70],true,'assets/images/4Charmander.png');
var pCharmeleon= new Pokemon("Charmeleon",5,"Fire","",[aEmber, aScratch, aFirePunch, aFlash],[61,69,63,85,70,85],true,'assets/images/5Charmeleon.png');
var pCharizard= new Pokemon("Charizard",6,"Fire","Flying",[aEmber, aScratch, aFlash, aTailWhip],[61,89,83,114,90,105],true,'assets/images/6Charizard.png');
var pSquirtle= new Pokemon("Squirtle",7,"Water","",[aAquaTail, aHydroPump, aTackle, aTailWhip],[60,53,70,65,59,48],true,'assets/images/7Squirtle.png');
var pWartortle= new Pokemon("Wartortle",8,"Water","",[aAquaTail, aQuickAttack, aTailWhip, aGrowl],[61,68,85,70,85,63],true,'assets/images/8Wartortle.png');
var pBlastoise= new Pokemon("Blastoise",9,"Water","",[aWaterGun, aTackle, aTailWhip, aGrowl],[61,88,105,90,110,83],true,'assets/images/9Blastoise.png');
var pPikachu = new Pokemon("Pikachu",25,"Electric","",[aThunder, aThunderShock, aQuickAttack, aTailWhip],[60,60,35,55,45,95],true,'assets/images/25Pikachu.png');
var pRaichu= new Pokemon("Raichu",26,"Electric","",[aThunderShock, aQuickAttack, aScratch, aTailWhip],[61,95,60,95,85,105],true,'assets/images/26Raichu.png');
var pRaichu_alola= new Pokemon("Alolan Raichu",26,"Electric","Psychic",[aPsyshock, aThunderShock, aScratch, aTailWhip],[61,95,60,95,85,105],true,'assets/images/26Raichu_Alola.png');
*/
var pBulbasaur= new Pokemon('Bulbasaur',1,'Grass','Poison',[aWoodHammer,aPoisonFang,aIngrain,aDestinyBond],[45,49,49,65,65,45],true,'assets/images/1Bulbasaur.png');
var pIvysaur= new Pokemon('Ivysaur',2,'Grass','Poison',[aMegaDrain,aBelch,aSleepPowder,aAcidSpray],[60,62,63,80,80,60],true,'assets/images/2Ivysaur.png');
var pVenusaur= new Pokemon('Venusaur',3,'Grass','Poison',[aLeafBlade,aGunkShot,aLeechSeed,aLock_On],[80,82,83,100,100,80],true,'assets/images/3Venusaur.png');
var pCharmander= new Pokemon('Charmander',4,'Fire','',[aFlareBlitz,aDouble_Edge,aDefog,aTrickRoom],[39,52,43,60,50,65],true,'assets/images/4Charmander.png');
var pCharmeleon= new Pokemon('Charmeleon',5,'Fire','',[aBlazeKick,aRapidSpin,aSunnyDay,aSpectralThief],[58,64,58,80,65,80],true,'assets/images/5Charmeleon.png');
var pCharizard= new Pokemon('Charizard',6,'Fire','Flying',[aFlameWheel,aAirSlash,aInfernoOverdrive,aPunishment],[78,84,78,109,85,100],true,'assets/images/6Charizard.png');
var pSquirtle= new Pokemon('Squirtle',7,'Water','',[aSurf,aViceGrip,aWaterSport,aHoldHands],[44,48,65,60,54,43],true,'assets/images/7Squirtle.png');
var pWartortle= new Pokemon('Wartortle',8,'Water','',[aAquaTail,aCrushClaw,aSoak,aSwagger],[59,63,80,65,80,58],true,'assets/images/8Wartortle.png');
var pBlastoise= new Pokemon('Blastoise',9,'Water','',[aWaterPulse,aBoomburst,aAquaRing,aSparklingAria],[79,83,100,85,105,78],true,'assets/images/9Blastoise.png');
var pCaterpie= new Pokemon('Caterpie',10,'Bug','',[aMegahorn,aRound,aStringShot,aFlowerShield],[45,30,35,20,20,45],true,'assets/images/10Caterpie.png');
var pMetapod= new Pokemon('Metapod',11,'Bug','',[aFellStinger,aSelf_Destruct,aHealOrder,aHornDrill],[50,20,55,25,25,30],true,'assets/images/11Metapod.png');
var pButterfree= new Pokemon('Butterfree',12,'Bug','Flying',[aFirstImpression,aAcrobatics,aTailGlow,aHurricane],[60,45,50,80,80,70],true,'assets/images/12Butterfree.png');
var pWeedle= new Pokemon('Weedle',13,'Bug','Poison',[aFellStinger,aPoisonFang,aHealOrder,aWhirlpool],[40,35,30,20,20,50],true,'assets/images/13Weedle.png');
var pKakuna= new Pokemon('Kakuna',14,'Bug','Poison',[aFirstImpression,aVenoshock,aQuiverDance,aBlazeKick],[45,25,50,25,25,35],true,'assets/images/14Kakuna.png');
var pBeedrill= new Pokemon('Beedrill',15,'Bug','Poison',[aSilverWind,aCrossPoison,aHealOrder,aGlare],[65,80,40,40,80,75],true,'assets/images/15Beedrill.png');
var pPidgey= new Pokemon('Pidgey',16,'Normal','Flying',[aSlam,aDrillPeck,aSonicBoom,aSearingShot],[40,45,40,35,35,56],true,'assets/images/16Pidgey.png');
var pPidgeotto= new Pokemon('Pidgeotto',17,'Normal','Flying',[aBarrage,aPluck,aDefenseCurl,aPsychoShift],[63,60,55,50,50,71],true,'assets/images/17Pidgeotto.png');
var pPidgeot= new Pokemon('Pidgeot',18,'Normal','Flying',[aMegaKick,aPeck,aHelpingHand,aSilverWind],[83,80,75,70,70,91],true,'assets/images/18Pidgeot.png');
var pRattata= new Pokemon('Rattata',19,'Normal','',[aTailSlap,aSwift,aTeeterDance,aCamouflage],[30,56,35,25,35,72],true,'assets/images/19Rattata.png');
var pRattata_alola= new Pokemon('Rattata_alola',19,'Dark','Normal',[aPursuit,aTriAttack,aPunishment,aSuckerPunch],[30,56,35,25,35,72],true,'assets/images/19Rattata_alola.png');
var pRaticate= new Pokemon('Raticate',20,'Normal','',[aUproar,aGigaImpact,aGuillotine,aFireLash],[55,81,60,50,70,97],true,'assets/images/20Raticate.png');
var pRaticate_alola= new Pokemon('Raticate_alola',20,'Dark','Normal',[aPursuit,aBind,aPartingShot,aPowerSplit],[55,81,60,50,70,97],true,'assets/images/20Raticate_alola.png');
var pSpearow= new Pokemon('Spearow',21,'Normal','Flying',[aWeatherBall,aGust,aPlayNice,aRevelationDance],[40,60,30,31,31,70],true,'assets/images/21Spearow.png');
var pFearow= new Pokemon('Fearow',22,'Normal','Flying',[aViceGrip,aPeck,aSleepTalk,aFuryCutter],[65,90,65,61,61,100],true,'assets/images/22Fearow.png');
var pEkans= new Pokemon('Ekans',23,'Poison','',[aAcidSpray,aMegaPunch,aPurify,aFireFang],[30,60,44,40,54,55],true,'assets/images/23Ekans.png');
var pArbok= new Pokemon('Arbok',24,'Poison','',[aPoisonTail,aDouble_Edge,aBanefulBunker,aBubble],[60,85,69,65,79,80],true,'assets/images/24Arbok.png');
var pPikachu= new Pokemon('Pikachu',25,'Electric','',[aZapCannon,aCovet,aAromaticMist,aSpitUp],[35,55,30,50,40,90],true,'assets/images/25Pikachu.png');
var pRaichu= new Pokemon('Raichu',26,'Electric','',[aNuzzle,aSkullBash,aThunderWave,aTrickRoom],[60,90,55,90,80,100],true,'assets/images/26Raichu.png');
var pRaichu_alola= new Pokemon('Raichu_alola',26,'Electric','Psychic',[aParabolicCharge,aPsystrike,aElectroBall,aMirrorMove],[60,90,55,90,80,100],true,'assets/images/26Raichu_alola.png');
var pSandshrew= new Pokemon('Sandshrew',27,'Ground','',[aDig,aHeadCharge,aRototiller,aMetronome],[50,75,85,20,30,40],true,'assets/images/27Sandshrew.png');
var pSandshrew_alola= new Pokemon('Sandshrew_alola',27,'Ice','Steel',[aFreeze_Dry,aSteelWing,aMist,aStormThrow],[50,75,85,20,30,40],true,'assets/images/27Sandshrew_alola.png');
var pSandslash= new Pokemon('Sandslash',28,'Ground','',[aThousandArrows,aGigaImpact,aFissure,aDragonBreath],[75,100,110,45,55,65],true,'assets/images/28Sandslash.png');
var pSandslash_alola= new Pokemon('Sandslash_alola',28,'Ice','Steel',[aIceFang,aFlashCannon,aMist,aSpiritShackle],[75,100,110,45,55,65],true,'assets/images/28Sandslash_alola.png');
var pNidoran_f= new Pokemon('Nidoran_f',29,'Poison','',[aPoisonSting,aEchoedVoice,aPurify,aConstrict],[55,47,52,40,40,41],true,'assets/images/29Nidoran_f.png');
var pNidorina= new Pokemon('Nidorina',30,'Poison','',[aPoisonFang,aGigaImpact,aVenomDrench,aDevastatingDrake],[70,62,67,55,55,56],true,'assets/images/30Nidorina.png');
var pNidoqueen= new Pokemon('Nidoqueen',31,'Poison','Ground',[aSludge,aSandTomb,aAgility,aDynamicPunch],[90,82,87,75,85,76],true,'assets/images/31Nidoqueen.png');
var pNidoran_m= new Pokemon('Nidoran_m',32,'Poison','',[aAcidSpray,aGigaImpact,aBanefulBunker,aFacade],[46,57,40,40,40,50],true,'assets/images/32Nidoran_m.png');
var pNidorino= new Pokemon('Nidorino',33,'Poison','',[aSludge,aCovet,aGastroAcid,aDreamEater],[61,72,57,55,55,65],true,'assets/images/33Nidorino.png');
var pNidoking= new Pokemon('Nidoking',34,'Poison','Ground',[aCrossPoison,aLandsWrath,aToxicThread,aCoreEnforcer],[81,92,77,85,75,85],true,'assets/images/34Nidoking.png');
var pClefairy= new Pokemon('Clefairy',35,'Fairy','',[aTripleKick,aSpikeCannon,aNaturesMadness,aSweetScent],[70,45,48,60,65,35],true,'assets/images/35Clefairy.png');
var pClefable= new Pokemon('Clefable',36,'Fairy','',[aLightofRuin,aPayDay,aSweetKiss,aAstonish],[95,70,73,85,90,60],true,'assets/images/36Clefable.png');
var pVulpix= new Pokemon('Vulpix',37,'Fire','',[aOverheat,aFeint,aInfernoOverdrive,aCut],[38,41,40,50,65,65],true,'assets/images/37Vulpix.png');
var pVulpix_alola= new Pokemon('Vulpix_alola',37,'Ice','Fairy',[aIcePunch,aFairyWind,aMist,aConversion2],[38,41,40,50,65,65],true,'assets/images/37Vulpix_alola.png');
var pNinetales= new Pokemon('Ninetales',38,'Fire','',[aFlameWheel,aGigaImpact,aDefog,aTransform],[73,76,75,81,100,100],true,'assets/images/38Ninetales.png');
var pNinetales_alola= new Pokemon('Ninetales_alola',38,'Ice','Fairy',[aConstrict,aDisarmingVoice,aAcupressure,aCrossPoison],[73,76,75,81,100,100],true,'assets/images/38Ninetales_alola.png');
var pJigglypuff= new Pokemon('Jigglypuff',39,'Normal','Fairy',[aWrap,aTripleKick,aDefenseCurl,aSupersonic],[115,45,20,45,25,20],true,'assets/images/39Jigglypuff.png');
var pWigglytuff= new Pokemon('Wigglytuff',40,'Normal','Fairy',[aWeatherBall,aDisarmingVoice,aSwagger,aHoldHands],[140,70,45,75,50,45],true,'assets/images/40Wigglytuff.png');
var pZubat= new Pokemon('Zubat',41,'Poison','Flying',[aClearSmog,aBraveBird,aAcidDownpour,aFeatherDance],[40,45,35,30,40,55],true,'assets/images/41Zubat.png');
var pGolbat= new Pokemon('Golbat',42,'Poison','Flying',[aGunkShot,aWingAttack,aVenomDrench,aElectroweb],[75,80,70,65,75,90],true,'assets/images/42Golbat.png');
var pOddish= new Pokemon('Oddish',43,'Grass','Poison',[aGigaDrain,aSludgeWave,aStunSpore,aEntrainment],[45,50,55,75,65,30],true,'assets/images/43Oddish.png');
var pGloom= new Pokemon('Gloom',44,'Grass','Poison',[aLeafBlade,aSmog,aSpore,aBulletPunch],[60,65,70,85,75,40],true,'assets/images/44Gloom.png');
var pVileplume= new Pokemon('Vileplume',45,'Grass','Poison',[aSolarBeam,aAcidSpray,aGrassKnot,aGlaciate],[75,80,85,100,90,50],true,'assets/images/45Vileplume.png');
var pParas= new Pokemon('Paras',46,'Bug','Grass',[aFellStinger,aTropKick,aSpiderWeb,aEnergyBall],[35,70,55,45,55,25],true,'assets/images/46Paras.png');
var pParasect= new Pokemon('Parasect',47,'Bug','Grass',[aInfestation,aEnergyBall,aSpiderWeb,aPowerTrip],[60,95,80,60,80,30],true,'assets/images/47Parasect.png');


//Global variable
//Conatins the 4 pokemon options to be displayed
var hero_pokemon = [];
//Index with the pokemon currently chosen by the player
var hero_pokemon_index;
//Contains the 4 pokemon the player must battle
var opp_pokemon = [];
//Contains the pokemon the player is currently fighting
var opp_pokemon_index;

//Array with the available pokemon to choose from
var available_pokemon = [pBulbasaur,pIvysaur,pVenusaur,pCharmander,pCharmeleon,pCharizard,pSquirtle,pWartortle,pBlastoise,pCaterpie,pMetapod,pButterfree,pWeedle,pKakuna,pBeedrill,pPidgey,pPidgeotto,pPidgeot,pRattata,pRattata_alola,pRaticate,pRaticate_alola,pSpearow,pFearow,pEkans,pArbok,pPikachu,pRaichu,pRaichu_alola,pSandshrew,pSandshrew_alola,pSandslash,pSandslash_alola,pNidoran_f,pNidorina,pNidoqueen,pNidoran_m,pNidorino,pNidoking,pClefairy,pClefable,pVulpix,pVulpix_alola,pNinetales,pNinetales_alola,pJigglypuff,pWigglytuff,pZubat,pGolbat,pOddish,pGloom,pVileplume,pParas,pParasect];
//Variable that will be used to contain the sum of the HP of the opponent's pokemon. When this variable is 0 the game is over.
var winCondition;

//Program start
$( document ).ready(function() {
    
    //Selects 8 pokemon to display to the player
    assignCharacters();
    console.log("Assign hero");
    console.log(hero_pokemon);
    console.log(hero_pokemon[0]);
    console.log("Assign opp");
    console.log(opp_pokemon);
    //Will contain the ID of the div that holds the selected pokemon
    let divId;
    //Will hold the number of the pokemon selected. Goes from 1 to 4 and is related to the html ids of the divs the pokemon are in.
    let pkmnOptionNum;

    //When a pokemon for the player is chosen it activates this event
    $('.heroPkmn').on('click', function(event){
        //Makes sure the div is selected and not the image or the text
        if(event.target.nodeName==='DIV'){
            divId = event.target.id;
        } else {
            divId=$(event.target).parent().attr('id');
        }
        console.log("divID "+divId);
        console.log(divId.charAt(divId.length-1));
        //Saves the number from 1 to 4 of the pokemon chosen. Related to html ids.
        pkmnOptionNum = divId.charAt(divId.length-1);
        console.log(typeof(pkmnOptionNum));
        //Call function that updates stats
        statUpdate(pkmnOptionNum-1);
        //Saves the position inside the hero_pokemon array to be used throughout the program
        hero_pokemon_index = pkmnOptionNum-1;
        //Shows the section with the pokemon's stats and the button to select
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
        $('.hpButton').text("HP: " + hero_pokemon[hero_pokemon_index].stats[0]);
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

        var originalHP = hero_pokemon[hero_pokemon_index].stats[0];
        if(battleStatus === true){
            console.log("battle status true");
            if(hero_pokemon[hero_pokemon_index].stats[0] === 0){
                alert("You lose!");
                $('.heroPkmn').show();
                $('.attackButtonSection').hide();
                $('.oppPkmn').show();
                $('.oppStats').hide();
                $('.selectYourPlayer').show();
                $('.oppPkmn').removeClass('fainted');
                $('.oppPkmn').addClass('alive');
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
                hero_pokemon[hero_pokemon_index].stats[0] = originalHP;
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
        for(let j = 0; j<6;j++){
            console.log("stats before "+ hero_pokemon[i].stats[j]);
            hero_pokemon[i].stats[j] = ivAssign(j,hero_pokemon[i].stats[j]);
            console.log("stats after"+ hero_pokemon[i].stats[j]);
        }

        console.log(hero_pokemon);
        hero_pokemon[i].alignment = true;
        $('#heroPkmn'+(i+1)).find('img').attr('src',hero_pokemon[i].source);
        $('#heroPkmn'+(i+1)).find('span').text(hero_pokemon[i].name);

        console.log("hero pokemon "+hero_pokemon[i]);
        console.log("source "+hero_pokemon[i].source);

        randomIndexO = Math.floor(Math.random()*available_pokemon.length);
        opp_pokemon[i]=Object.create(available_pokemon[randomIndexO]);
        opp_pokemon[i].alignment = false;
        $('#oppPkmn'+(i+1)).find('img').attr('src',opp_pokemon[i].source);
        $('#oppPkmn'+(i+1)).find('span').text(opp_pokemon[i].name);
    }

}

function ivAssign(j,statToApply){
    let iv = (Math.floor(Math.random()*31)+1);
    if(j === 0){
        return (((((statToApply+iv)*2)+0)*50)/100)+50+10;
    } else {
        return (((((statToApply+iv)*2)+0)*50)/100)+5;
    }
    
}

function gameStart(){
    
    pBulbasaur.stats[0] = 60;
    pIvysaur.stats[0] = 61;
    pVenusaur.stats[0] = 61;
    pCharmander.stats[0] = 60;
    pCharmeleon.stats[0] = 61;
    pCharizard.stats[0] = 61;
    pSquirtle.stats[0] = 60;
    pWartortle.stats[0] = 61;
    pBlastoise.stats[0] = 61;
    pPikachu.stats[0] = 60;
    pRaichu.stats[0] = 61;
    pRaichu_alola.stats[0] = 61;
    

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