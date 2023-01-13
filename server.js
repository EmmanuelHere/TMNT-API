const express = require('express');
const app = express();
const PORT = 8000;

const characters = {
    'raphael': {
        'species': 'Mutant Turtle',
        'weapons': 'Sais',
        'bio': `Raphael is one of the four teenage Mutant Ninja Turtles and a fierce fighter. He wears a red bandana and wields two Sai swords. He is strong, brave and a natural leader who loves to protect the people he cares about. He is often the first to enter a battle and is not afraid of any challenge. He is headstrong and can be impulsive, making him a wild card in any situation. He is loyal to his brothers and will do whatever it takes to defend them. He can also be a bit of a jokester and loves to crack wise.`
    },
    'leonardo': {
        'species': 'Mutant Turtle',
        'weapons': 'Katanas',
        'bio': `Leonardo is a brave and heroic leader of the Teenage Mutant Ninja Turtles. His strong sense of justice, loyalty, and discipline help him lead his family and protect the city from danger. He wields two katana swords and is an exceptional martial artist. He is the most serious of the Turtles and always takes his responsibilities seriously. He is also the most spiritual and meditates to keep his mind and body in balance. His courage and determination keeps him going, no matter how tough the situation.`
    },
    'michelangelo': {
        'species': 'Mutant Turtle',
        'weapons': 'Nunchuks',
        'bio': `Michelangelo is a fun-loving, free-spirited, and often mischievous teenage mutant Ninja Turtle. He loves to eat pizza and is an avid skateboarder. He is the youngest of the four turtles and is often seen as the most lighthearted and carefree of the group. His weapons of choice are two nunchucks and is known for being an incredibly talented artist. He has a strong bond with his brothers and often provides comic relief. He is a loyal friend and a powerful ally, never shying away from a fight.`
    },
    'donatello': {
        'species': 'Mutant Turtle',
        'weapons': 'Bo Staff',
        'bio': `Donatello is a brilliant, analytical and tech-savvy turtle of the Teenage Mutant Ninja Turtles. He is the most intelligent and inventive of the four turtles, using his knowledge to create amazing gadgets and machines. Donatello's passion for science and technology makes him an invaluable asset in the fight against evil, while his dry wit and sarcastic humor bring a lightheartedness to the team. His bo staff is his weapon of choice and his intelligence and skill make him a formidable fighter. Donatello is a loyal friend and a leader, always willing to help those in need.`
    },
    'casey': {
        'species': 'Human',
        'weapons': 'Wooden Hockey Stick',
        'bio': `Casey Jones is a vigilante and ally of the Teenage Mutant Ninja Turtles. He is known for his hockey mask, his love of hockey, and his dark sense of humor. He is often seen using sports equipment as weapons. He is a loner and tends to act before he thinks. He is loyal and brave and will risk his own safety to protect his friends. He has a strong moral code and will not hesitate to fight for what is right. He is a great ally to the Turtles and helps them in their fight against evil.`
    },
    'splinter': {
        'species': 'Mutant Rat',
        'weapons': 'Cane',
        'bio': `Master Splinter is the wise and beloved mentor of the Teenage Mutant Ninja Turtles. He is a mutated rat and a martial arts master, teaching the Turtles the art of ninjutsu. He is compassionate and understanding, offering guidance and wisdom to his students. He is brave and loyal, willing to go to any lengths to protect his family and the world. He is a loving father figure to the Turtles, and they look up to him with great respect and admiration.`
    },
    "april": {
        'species': 'Human',
        'weapons': 'Tessen',
        'bio': `April O'Neil is the human companion of the Teenage Mutant Ninja Turtles. A strong and independent woman, she is a passionate journalist who works for Channel 6 News. She is incredibly brave and often risks her own safety to save the Turtles. April provides the Turtles with moral support and is always eager to help them in whatever way she can. She is also a skilled fighter, using her martial arts and combat skills to help the Turtles in their battles. April O'Neil is a close friend and confidante to the Turtles, and a beloved member of their family.`
    },
    "shredder": {
        'species': 'Human',
        'weapons': 'Steel Claws',
        'bio': `The Shredder is a supervillain from the Teenage Mutant Ninja Turtles franchise. He is the leader of the Foot Clan, a criminal organization that is the Turtles' main enemy. He is a master martial artist and a highly skilled weapons master. His goal is to conquer the world and rule with an iron fist. He is a ruthless, cunning and dangerous enemy, and his schemes often involve the use of advanced technology and mutant allies. He is a formidable foe who will stop at nothing to achieve his goals.`
    },
    "hun": {
        'species': 'Human',
        'weapons': 'Fists',
        'bio': `Hun is the secondary antagonist in the 2003 Teenage Mutant Ninja Turtles series. He is the leader of the Purple Dragons street gang and is a powerful, fast martial artist. He has an intense rivalry with Casey Jones due to the Purple Dragons being responsible for killing Casey's father. He serves as The Shredder's right hand man and despises all four Turtles.`
    },
    "foot ninja": {
        'species': 'Human',
        'weapons': 'Katana',
        'bio': `Foot Ninja (or in some cases, Foot Soldiers) are a band of Ninjutsu-trained thugs that are in the employ of The Foot Clan, often under the command of The Shredder or Karai. While in most incarnations they are human, some versions depict them as robots.`
    },
    "al gordon": {
        'species': 'Human',
        'weapons': 'Cape',
        'bio': `(You've reached this page because the character you're looking for does not exist in our database, you mispelled the character's name, or you somehow knew who this character was. If the last applies, congrats on being a total nerd!) The Green Mantle, Al Gordon, is a superhero who fought crime in the 1960s. He is now a member of the current Justice Force. He is similar to the DC Comics superhero Green Lantern (Hal Jordan).`
    },
}
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/api/:characterName', (request, response) => {
    const charactersName = request.params.characterName.toLowerCase();
    if(characters[charactersName]){
        response.json(characters[charactersName]);
    } else{
        response.json(characters['al gordon']);
    }
});

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}! You better go catch it!`);
});