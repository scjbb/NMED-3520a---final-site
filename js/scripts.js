
// Define the scenes and chat options
const scenes = [
    {
        id: 1,
        text: "GAME START:",
        background: "img/Start.PNG",
        options: [
            { text: "Next", nextScene: 2 },
            ,
        ],
    },
    {
        id: 2,
        text: "In a world where sentient robots and humans live in partial harmony, you find yourself  excitedly thinking about your new life in the bustling city of Calsel as you pull up to the parking lot of the hotel you'll be spending the night at.",
        background: "img/Start.PNG",

        options: [
            { text: "Next", nextScene: 3 },

        ],
    },
    {
        id: 3,
        text: "Growing up in a small primarily human town, you've always found it odd that people are still put off by the idea of humans and bots living together in harmony. You've always considered this ongoing feud and prejudice pointless, considering that in the end we’re all just sentient being with feelings and goals.",
        background: "img/Start.PNG",

        options: [
            { text: "Next", nextScene: 4 },

        ],
    },
    {
        id: 4,
        text: "Tired of your monotonous life within your narrow minded hometown, you practically pounced at the opportunity when you were offered a job as a professor at the  ever prestigious University of Calsel. The moving trucks come tomorrow, which gives you an excuse to spend the night at your favorite high class hotel.",
        background: "img/Start.PNG",

        options: [
            { text: "Next", nextScene: 5 },

        ],
    },

    {
        id: 5,
        text: "As soon as you enter the lounge, a small rabbit bot sitting at the bar catches your attention. Feeling especially brave, curiosity gets the best of you as you approach the bot.",
        background: "img/Start.PNG",

        options: [
            { text: "Open with a flirty line", nextScene: 6 },
            { text: "Introduce yourself", nextScene: 7 },
            { text: "Ask to sit next to him", nextScene: 9 },
        ],
    },
    {
        id: 6,
        text: "He looks at you disgusted before replying. ACE: Thats.. NOT okay.",
        background: "img/Annoyed.PNG",

        options: [
            { text: "Restart", nextScene: 1 },

        ],
    },
    {
        id: 7,
        text: "YOU: 'sorry for intruding, my name is MC the second. May I ask for your name?' He pauses before answering.",
        background: "img/Neutral1.PNG",

        options: [
            { text: "Next", nextScene: 8 },

        ],
    },
    {
        id: 8,
        text: "ACE: 'sure? My name is Ace Bunbun, nice to meet you.'",
        background: "img/Laugh.PNG",

        options: [
            { text: "Next", nextScene: 9 },

        ],
    },
    {
        id: 9,
        text: "ACE: 'sure? My name is Ace Bunbun, nice to meet you.'",
        background: "img/Laugh.PNG",

        options: [
            { text: "Ask what brings him here", nextScene: 10 },
            { text: "Make small talk", nextScene: 11 },
            { text: "Ask him if he knows who joe is", nextScene: 12 },

        ],
    },
    {
        id: 10,
        text: "YOU: 'so… what brings you here?'. He looks at you confused, before replying. ACE: 'Oh uhm, im the bar tender, Im just waiting for my shift to start. How about you?'",
        background: "img/Neutral2.PNG",

        options: [
            { text: "Next", nextScene: 13 },


        ],
    },
    {
        id: 11,
        text: "YOU: 'sorry if that was awkward, I just moved here and was hoping to make some friends'. Ace pauses before awkwardly trying to make conversation. ACE:'Its fine, so what made you decide to move?'",
        background: "img/Neutral2.PNG",

        options: [
            { text: "Next", nextScene: 13 },

        ],
    },
    {
        id: 12,
        text: "Ace: 'oh wow. How funny. Sorry, my shift starts soon.' Ace leaves before you can say anything else.",
        background: "img/Annoyed.PNG",

        options: [
            { text: "Restart", nextScene: 1 },

        ],
    },
    {
        id: 13,
        text: "You take a moment to think about what you want to say.",
        background: "img/Neutral2.PNG",

        options: [
            { text: "Thought it was cool", nextScene: 14 },
            { text: "Make small talk", nextScene: 15 },
            { text: "Ask him if he knows who joe is", nextScene: 16 },

        ],
    },
    {
        id: 14,
        text: "Ace: 'oh cool'. You sit in awkward silence you a few seconds before ace speaks again. Ace: 'Sorry, my shift starts soon.' Ace leaves you to sit in awkward silence at your lack of social skills.",
        background: "img/Neutral1.PNG",

        options: [
            { text: "Restart", nextScene: 1 },

        ],
    },
    {
        id: 15,
        text: "You: ‘I actually just got hired as a professor at Calsel University, The moving trucks will be here early tomorrow, so I decided to just make the trip tonight rather than rushing here tomorrow’. You seem to have peaked his interest. Ace: ‘A professor you say?? What subject?’. You reply: ‘music’",
        background: "img/Neutral2.PNG",

        options: [
            { text: "Next", nextScene: 17 },

        ],
    },
    {
        id: 16,
        text: "Oh I got a new job, just moved here actually. And you said you were a bartender here? What led you here?",
        background: "img/Neutral2.PNG",

        options: [
            { text: "Next", nextScene: 17 },

        ],
    },
    {
        id: 17,
        text: "Ace: 'music you say? so What specifically about music were you most interested in during school?'",
        background: "img/Neutral2.PNG",

        options: [
            { text: "Classical", nextScene: 18 },
            { text: "History and theory", nextScene: 19 },

        ],
    },
    {
        id: 18,
        text: "You: ‘Classical has always been my favorite. I know it's not everyone's favorite, but honestly I’ve always loved the intricacies of classical. A piano may be capable of setting the scene for a story of heartbreak, tragedy,and love on its own, however when paired with lets say a violin, it gives the piece a voice. It creates a whole new layer of emotion and beauty’. Ace smiles: ‘ Nice to know you’ve got good taste. With the way you spoke, I assume you’ve got a soft spot for violin then. Do you happen to play anything?’",
        background: "img/Neutral2.PNG",

        options: [
            { text: "Next", nextScene: 20 },

        ],
    },
    {
        id: 19,
        text: "You: ‘Honestly I loved learning about history and theory for music. It's always fascinated me how something as simple as  applying the right vocal technique can differentiate a sequence of notes placed together melodically to a heart wrenching retelling of another's life. I've always been star struck by that idea. Sorry I know you probably don't particularly care to listen to me ramble.’ Ace: ‘Nonsense, it's always interesting to hear people speak about the things they enjoy. Besides, it's nice to meet another being who is interested in musical theory, most beings around our age range aren't particularly interested in that kind of thing, so talking to you has been a breath of fresh air. Do you happen to play any instruments or is your specialization in mostly voice?",
        background: "img/Neutral2.PNG",

        options: [
            { text: "Next", nextScene: 20 },

        ],
    },
    {
        id: 20,
        text: "Ace: 'music you say? so What specifically about music were you most interested in during school?'",
        background: "img/Neutral2.PNG",

        options: [
            { text: "I play piano", nextScene: 21 },
            { text: "History and theory", nextScene: 21 },

        ],
    },
    {
        id: 21,
        text: "Ace: ‘I used to play violin, though I’ve never gotten the opportunity to perform a duet since I’ve never met someone who plays classical. My shift is about to start, just in case I don’t see you again, here.’ Ace passes you a paper with numbers scribbled on it, you look at it and smile before placing it back within your pocket. ACE: ‘Message me sometime, maybe we can perform sometime, see ya!’.",
        background: "img/Neutral2.PNG",

        options: [
            { text: "Next", nextScene: 22 },

        ],
    },
    {
        id: 22,
        text: "Ace walks away, For now, you've made a friend. Maybe later, you'll have made that friendship more, but either way you're content.",
        background: "img/Neutral2.PNG",

        options: [
            { text: "You win! Restart?", nextScene: 1 },

        ],
    },
    {
        id: 23,
        text: "Ace: ‘After highschool I took a 2 year program for culinary. I realized after the fact that I’m not as much of a fan of the industry as I had thought, so I'm actually saving up right now to go to Calsel University.’",
        background: "img/Neutral2.PNG",

        options: [
            { text: "What program", nextScene: 24 },
            { text: "Why Calsel?", nextScene: 25 },
            { text: "Why culinary?", nextScene: 26 },

        ],
    },
    {
        id: 24,
        text: "You: ‘sounds interesting, what programs were you looking into?’. Ace: ‘ music or history have always been an interest of mine’",
        background: "img/Neutral2.PNG",

        options: [
            { text: "Next", nextScene: 27 },

        ],
    },
    {
        id: 25,
        text: "You ask him a question: ‘Any reason Calsel university interests you?’. Ace pauses before replying: ‘Honestly it's mostly because I don't particularly care to move away, plus the programs they have here seem decent.You said you worked at the university, correct?’",
        background: "img/Awkward.PNG",

        options: [
            { text: "Next", nextScene: 27 },

        ],
    },
    {
        id: 26,
        text: "You consider your words before asking Ace a question: ‘If it doesn't interest you, why did you choose culinary?’.  Ace pauses before replying: ‘Honestly it's mostly because I wasn't sure what to do with my life, plus I received tons of scholarships, so it's not like I'm in a whole lot of debt because of it anymore. You said you worked at the university, correct?’",
        background: "img/Neutral2.PNG",

        options: [
            { text: "Next", nextScene: 27 },

        ],
    },
    {
        id: 27,
        text: "Ace: ‘You said you worked at the university, correct?’",
        background: "img/Neutral2.PNG",
        options: [
            { text: "Yes, music", nextScene: 1 },
            { text: "Are you trying to use me?", nextScene: 2 },
            { text: "Are you trying to use me?", nextScene: 2 },
        ],
    },
];

// Function to display the current scene and chat options
function displayScene(sceneId) {
    const currentScene = scenes.find((scene) => scene.id === sceneId);

    // Create HTML elements for scene text and options
    const sceneTextElement = document.createElement("p");
    sceneTextElement.textContent = currentScene.text;

    const optionsContainer = document.createElement("div");
    currentScene.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option.text;
        optionButton.addEventListener("click", () => {
            displayScene(option.nextScene);
        });
        optionsContainer.appendChild(optionButton);
    });

    // Clear the existing content
    const contentContainer = document.getElementById("content");
    contentContainer.innerHTML = "";

    // Create HTML elements for background and character sprite
    const backgroundElement = document.createElement("img");
    backgroundElement.src = currentScene.background;
    backgroundElement.style.display = "block";
    backgroundElement.style.margin = "0 auto";

    const characterElement = document.createElement("img");
    characterElement.src = currentScene.character;
    characterElement.style.display = "block";
    characterElement.style.margin = "0 auto";

    // Append the scene elements to the content container
    contentContainer.appendChild(backgroundElement);
    // contentContainer.appendChild(characterElement);
    contentContainer.appendChild(sceneTextElement);
    contentContainer.appendChild(optionsContainer);
}

// Example usage
displayScene(1); // Display the initial scene

