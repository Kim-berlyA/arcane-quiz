export let characters = [
  {name: "Jinx", score: 0, descriptionTitle: "Jinx — Unpredictable and Creative",
    description: "You are unpredictable and creative, thriving in the chaos of life and turning challenges into opportunities to express yourself. Your ideas come fast and free, and you often act on impulse or instinct rather than overthinking, which makes you exciting and sometimes surprising to those around you. While your spontaneity can sometimes cause trouble, it also shows your fearless and bold nature. For the people you trust deeply, your loyalty is fierce, even if you express it in ways that others might find unusual or hard to read",
    image: '<img src="img/aJinx.jpg" alt="arcane picture" class="image">'
  },
  {name: "Vi", score: 0, descriptionTitle: "Vi — Determined and Protective",
    description: "When it comes to facing obstacles, you’re determined and protective, ready to stand up for the people you care about without hesitation. You’re someone who prefers action over endless deliberation—if something needs doing, you dive right in. That decisiveness can sometimes push you toward riskier choices when emotions run high, but you always carry a strong sense of responsibility for those who depend on you",
    image: '<img src="img/aVi.jpg" alt="arcane picture" class="image">'
  },
  {name: "Viktor", score: 0, descriptionTitle: "Viktor — Vision-driven and Analytical",
    description: "You have a vision-driven and analytical side. You’re motivated by growth and progress, always looking for ways to improve yourself and your surroundings. Your mind works methodically, breaking down problems to find smart, practical solutions. Sometimes, your focus on goals can make you overlook emotional nuances, but your commitment to making meaningful, lasting changes is clear and steady.",
    image: '<img src="img/aViktor.jpg" alt="arcane picture" class="image">'
  },
  {name: "Jayce", score: 0, descriptionTitle: "Jayce — Ambituous and Persuasive",
    description: "Ambition fuels you, you’re confident in your ideas and willing to take risks to bring them to life. You blend creativity with persuasion, inspiring others with your passion and drive. At times, your confidence might tip into overconfidence, but challenges excite you and bring out your best when it comes to bold decisions.",
    image: '<img src="img/aJayce.jpg" alt="arcane picture" class="image">'
  },
  {name: "Caitlyn", score: 0, descriptionTitle: "Caitlyn — Strategic and Composed",
    description: "Strategic and composed, you tend to approach important decisions with care and precision. You prefer to weigh your options fully before acting, and your calm presence often reassures those around you. While this carefulness might slow you down sometimes, it guarantees that when you do move forward, you do so with clarity and purpose.",
    image: '<img src="img/aCaitlyn.jpg" alt="arcane picture" class="image">'
  },
  {name: "Ekko", score: 0, descriptionTitle: "Ekko — Resourceful and Adaptive", 
    description: "You’re resourceful and adaptive. When things don’t go according to plan, you adjust quickly and find new paths forward. Your inventive mindset helps you make the most of whatever resources you have, often uncovering solutions others miss. A deep sense of responsibility drives you, and you’re willing to take bold steps to protect and uplift your community—even if that means stepping into tough or risky situations.",
    image: '<img src="img/aEkko.jpg" alt="arcane picture" class="image">'
  }
]

export const questions = [
{
  question : "When you're faced with a problem, you...",
  options : [
    {text: "Do something unexpected and see what happens.", characters: ["Jinx"]},
    {text: "Tackle it head-on, no hesitation.", characters: ["Vi"]},
    {text: "Look at the facts and find the cleanest solution.", characters: ["Caitlyn"]},
    {text: "Take a moment, rewind, and think it through.", characters: ["Ekko"]}
  ]
},
{
  question : "Your ideal day involves...",
  options : [
    {text: "Building something that could change everything.", characters: ["Jayce"]},
    {text: "Exploring the city and helping where you can.", characters: ["Ekko"]},
    {text: "Spending the day with people who matter, doing something that feels real.", characters: ["Vi"]},
    {text: "Quietly observing and planning your next move.", characters: ["Viktor"]}
  ]
},
{
  question: "When working toward a deadline, what's your approach?",
  options: [
    { text: "I stay organized and stick closely to the plan.", characters: ["Caitlyn"] },
    { text: "I work steadily and adjust the plan if needed.", characters: ["Jayce"] },
    { text: "I put in a burst of energy and get it done with no plan.", characters: ["Jinx"] },
    { text: "I focus on perfecting the details before beginning.", characters: ["Viktor"] }
  ]
}
,
{
  question: "When someone disagrees with you, how do you respond?",
  options: [
    { text: "I listen, adapt if it makes sense, or refine my own approach.", characters: ["Viktor"] },
    { text: "I hold my ground, but I’m open to honest conversation.", characters: ["Vi"] },
    { text: "I challenge them to see things from a different angle.", characters: ["Ekko"] },
    { text: "I explain my vision clearly and rally people behind it.", characters: ["Jayce"] }
  ]
},
{
  question : "Which setting feels most like home?",
  options : [
    {text: "A quiet lab, humming with energy.", characters: ["Viktor"]},
    {text: "The busy streets full of people and stories.", characters: ["Ekko"]},
    {text: "A rooftop overlooking the city at night.", characters: ["Caitlyn"]},
    {text: "An abandoned warehouse with your own personal touch.", characters: ["Jinx"]}
  ]
},
{
  question : "What's your vibe in a group?",
  options : [
    {text: "The one who keeps everyone moving forward.", characters: ["Jayce"]},
    {text: "The one who sparks ideas and keeps things fresh.", characters: ["Ekko"]},
    {text: "The silent observer, always calculating.", characters: ["Viktor"]},
    {text: "The one who throws the first punch when needed.", characters: ["Vi"]}
  ]
},
{
  question : "Choose your favorite kind of power:",
  options : [
    {text: "The kind that reshapes reality.", characters: ["Viktor"]},
    {text: "The strength to protect others.", characters: ["Vi"]},
    {text: "The influence to change minds.", characters: ["Caitlyn"]},
    {text: "The power to control time.", characters: ["Ekko"]}
  ]
},
{
  question : "When you fail at something important, you...",
  options : [
    {text: "Laugh it off and try again, differently.", characters: ["Jinx"]},
    {text: "Review every step until you understand it.", characters: ["Caitlyn"]},
    {text: "Get up and power through.", characters: ["Jayce"]},
    {text: "Retreat, reflect, then come back stronger.", characters: ["Ekko"]}
  ]
},
{
  question : "What do others often misunderstand about you?",
  options : [
    {text: "They think you don't care—when you really do.", characters: ["Viktor"]},
    {text: "They assume you're all about control.", characters: ["Caitlyn"]},
    {text: "They miss your softer side.", characters: ["Vi"]},
    {text: "They think you're reckless, but you're calculated.", characters: ["Jinx"]}
  ]
},
{
  question: "How do you spend a free afternoon?",
  options: [
    { text: "I take a quiet walk and keep an eye out for anything unusual.", characters: ["Caitlyn"] },
    { text: "I meet up with friends and find a little trouble to keep us sharp.", characters: ["Vi"] },
    { text: "I dive into a messy project just to see where it goes.", characters: ["Jinx"] },
    { text: "I tinker with a new invention or polish up an old one.", characters: ["Jayce"] }
  ]
},
{
  question : "How do you define freedom?",
  options : [
    {text: "Having the space to choose your own direction, without anyone pulling the strings.", characters: ["Vi"]},
    {text: "The ability to pursue your ideas fully.", characters: ["Jayce"]},
    {text: "Justice without compromise.", characters: ["Caitlyn"]},
    {text: "Carving your own path, even if it's messy.", characters: ["Ekko"]}
  ]
},
{
  question : "What draws people to you?",
  options : [
    {text: "Your intensity and drive.", characters: ["Jayce"]},
    {text: "Your wild charm.", characters: ["Jinx"]},
    {text: "Your clear logic and calm presence.", characters: ["Caitlyn"]},
    {text: "Your energy and belief in a better future.", characters: ["Ekko"]}
  ]
},
{
  question: "How do you handle a difficult problem?",
  options: [
    { text: "I break it down into steps and tackle it head-on.", characters: ["Jayce"] },
    { text: "I look for a bold, unconventional way around it.", characters: ["Jinx"] },
    { text: "I take a step back, think it through, and try again.", characters: ["Ekko"] },
    { text: "I analyze it fully before making my move.", characters: ["Viktor"] }
  ]
},
{
  question : "What do you value most in yourself?",
  options : [
    {text: "Your strength to face things others can't.", characters: ["Vi"]},
    {text: "Your creativity and love of building.", characters: ["Jayce"]},
    {text: "Your independence and unpredictability.", characters: ["Jinx"]},
    {text: "Your insight and vision for what's ahead.", characters: ["Viktor"]}
  ]
},
{
  question : "If you had a secret, you'd…",
  options : [
    {text: "Encode it into a design no one notices.", characters: ["Viktor"]},
    {text: "Tell no one, ever.", characters: ["Caitlyn"]},
    {text: "Drop hints just to see who's paying attention.", characters: ["Jinx"]},
    {text: "Only share it with someone who's earned your trust.", characters: ["Vi"]}
  ]
}
];

