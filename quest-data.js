const citizen = {
    id: 'citizen',
    title: 'Find the Missing Citizen',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'citizen.jpeg.webp',
    description: `You enter your village and someone comes running for help!
    Their father was taken in the night by a mysterious creature. You follow a blood trail
    until you reach a cave and to see a group of Vampires! What do you do?`,

    choices: [{
        id: 'hide',
        description: 'Hide and Find Citizen',
        result: `You sneak around and hide until you find the missing citizen tied up. 
        You help him up and untie him, and come up with a plan to sneak back out. 
        You find a way out through the back that leads you into the forest and back home to
        your village. You both let the village know of the vampires and you have to destroy them.
         The missing citizen gives you 50 gold for saving his life.`,
        hp: 0,
        gold: 50
    }, { 
        id: 'fight',
        description: 'Fight the group of Vampires!',
        result: `Pulling your sword out, you charge at the Vampires and kill one from behind. They
    didn't know you were there! But there's 5 of them and one of you. They all corner
    you and attack you and kill you!!!!`,
        hp: -100,
        gold: 0
    }, { 
        id: 'join',
        description: 'Join the Vampires',
        result: `You know you don't stand a chance against a group of Vampires.
        You make the decision to become one of them instead of dying.
        You are now immortal unless killed with a special relic for Vampires. 
        +100 HP for being immortal!`,
        hp: +100,
        gold: 0
    }]
};

const relic = {
    id: 'relic',
    title: 'Find the Lost Relic',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'Ancestor-Glade.jpeg.webp',
    description: `You journey across the realm to find a place that is only heard about in legends.
    Following all the clues you find a hidden stairwell in the mountains. It leads you to a beautiful
    underground glade. There you find a chest where the relic is suppose to be. 
    Making your way down to the chest you hear a low growl. There's a werewolf who resides here!
    What fo you do?`,
    choices: [{
        id: 'hurry',
        description: 'Grab the Relic and Escape',
        result: `You run to the chest and see 70 pieces of gold and a glowing dagger.
        This has to be the relic! You grab it and run back up the stairs! You have a bow and arrow
        shooting arrows hoping the wolf will slow down.
        He takes a swipe at you and you barley escape outside and the wolf backs down.
        You took 35 hp damage from the wold but now have 70 pieces of gold.`,
        hp: -35,
        gold: 50
    }, { 
        id: 'fight',
        description: 'Fight the Wolf!',
        result: `Before opening the chest, you pull out your sword to take care of the wolf.
        He circles you and you stand for battle! You go back and forth until he claws you, as he gets
        close enough to claw you, you stab him through the neck and he's dead. 
        You run to the chest and grab the glowing dagger and 70 pieces of gold. You took -60 HP damage though.`,
        hp: -60,
        gold: 70
    }, { 
        id: 'help',
        description: 'Come back with Help',
        result: `You go to a nearby village and ask for help against the wolf and agree to
split the gold with whoever helps. You two head back to the underground glade and
team up against the werewolf. You both are successful and you find the glowing dagger
and 70 pieces of gold! You give your help 35 pieces of gold and head for your next quest.`,
        hp: 0,
        gold: +35
    }]
};

const boss = {
    id: 'boss',
    title: 'Kill the Vampire Leader',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'harkon.jpeg',
    description: `Your village travels to the Vampire's lair where a huge battle takes place.
    You head up the castle to find the vampire leader named Lord Harkon. He demands the relic
    and says if you give it to him he will spare you and turn you into a powerful vampire.
    What do you do?`,
    choices: [{
        id: 'give',
        description: 'Give him the Relic',
        result: `You throw him the relic and agree to become on of his kind. As you bow down
        to accept your fate and prepare for the change, Lord Harkon stabs you through the heart.`,
        hp: -100,
        gold: 0
    }, { 
        id: 'fight',
        description: 'Turn into a Vampire',
        result: `You agree to give him the relic ONLY if he changes you first to guarantee your life.
    It is a painful transition and you turn and suddenly want blood. You give him the relic and
    start battling against your village. This is you life now. Lord Harkon gives you 200 pieces
    of gold and you are now immortal.`,
        hp: +100,
        gold: 200
    }, { 
        id: 'kill',
        description: 'Kill Lord Harkon',
        result: `You pull out the relic which is the glowing dagger. It has magical powers in
        it and releases posion in the blood for vampires and sets them on fire. You battle Lord Harkon
        and he hits you with some spells but you catch him off guard and stab him in his chest. He
        sets fire and cries out in pain turning into ash. You have won and found a chest with 500   
        gold pieces. You also too 70 HP of damage but your village helps you recover!`,
        hp: -70,
        gold: +500
    }]
};

const quests = [
    citizen,
    relic,
    boss,
];

export default quests;