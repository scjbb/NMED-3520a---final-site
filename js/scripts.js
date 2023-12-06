
// Define the scenes and chat options
const scenes = [
    {
        id: 1,
        text: "GAME START:",

        options: [
            { text: "Next", nextScene: 2 },
            ,
        ],
    },
    {
        id: 2,
        text: "In a world where sentient robots and humans live in partial harmony, you find yourself  excitedly thinking about your new life in the bustling city of Calsel as you pull up to the parking lot of the hotel you'll be spending the night at.",
        options: [
            { text: "Next", nextScene: 3 },

        ],
    },
    {
        id: 3,
        text: "Growing up in a small primarily human town, you've always found it odd that people are still put off by the idea of humans and bots living together in harmony. You've always considered this ongoing feud and prejudice pointless, considering that in the end we’re all just sentient being with feelings and goals.",
        options: [
            { text: "Next", nextScene: 4 },

        ],
    },
    {
        id: 4,
        text: "Tired of your monotonous life within your narrow minded hometown, you practically pounced at the opportunity when you were offered a job as a professor at the  ever prestigious University of Calsel. The moving trucks come tomorrow, which gives you an excuse to spend the night at your favorite high class hotel.",
        options: [
            { text: "Next", nextScene: 5 },

        ],
    },

    {
        id: 5,
        text: "As soon as you enter the lounge, a small rabbit bot sitting at the bar catches your attention. Feeling especially brave, curiosity gets the best of you as you approach the bot.Scene 3: You chose Option 2.",
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
        background: "img/Annoyed.png",

        options: [
            { text: "Restart", nextScene: 1 },

        ],
    },
    {
        id: 7,
        text: "sorry for intruding, my name is MC the second. May I ask for your name? He pauses before answering.",
        background: "img/Neutral1.PNG",

        options: [
            { text: "Next", nextScene: 8 },

        ],
    },
    {
        id: 8,
        text: "ACE: sure? My name is Ace Bunbun, nice to meet you.",
        background: "img/Laugh.PNG",

        options: [
            { text: "Ask what brings him here", nextScene: 9 },
            { text: "Ask what brings him here", nextScene: 9 },
            { text: "Ask what brings him here", nextScene: 9 },

        ],
    },
    {
        id: 9,
        text: "ACE: sure? My name is Ace Bunbun, nice to meet you.",
        background: "img/Start.PNG",

        options: [
            { text: "Next", nextScene: 8 },

        ],
    },
    {
        id: 4,
        text: "Scene 3: You chose Option 2.",
        background: "scene3.jpg",
        character: "character3.png",
        options: [
            { text: "Option 2.1", nextScene: 1 },
            { text: "Option 2.2", nextScene: 2 },
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
    contentContainer.appendChild(characterElement);
    contentContainer.appendChild(sceneTextElement);
    contentContainer.appendChild(optionsContainer);
}

// Example usage
displayScene(1); // Display the initial scene

