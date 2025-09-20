const hacks = [
  // Productivity
  { text: "Use keyboard shortcuts to boost productivity.", category: "Productivity" },
  { text: "Set timers for focused work sessions.", category: "Productivity" },
  { text: "Break big tasks into smaller steps.", category: "Productivity" },
  { text: "Batch similar tasks together.", category: "Productivity" },
  { text: "Use the Pomodoro technique for time management.", category: "Productivity" },
  { text: "Prioritize tasks using the Eisenhower Matrix.", category: "Productivity" },
  { text: "Declutter your workspace for better focus.", category: "Productivity" },
  { text: "Automate repetitive tasks with scripts.", category: "Productivity" },
  { text: "Schedule breaks to avoid burnout.", category: "Productivity" },
  { text: "Use templates for recurring emails.", category: "Productivity" },
  { text: "Keep a daily to-do list.", category: "Productivity" },
  { text: "Review your goals weekly.", category: "Productivity" },
  { text: "Limit multitasking to stay efficient.", category: "Productivity" },
  { text: "Use sticky notes for quick reminders.", category: "Productivity" },
  { text: "Set deadlines for yourself.", category: "Productivity" },
  { text: "Use cloud storage for easy access.", category: "Productivity" },
  { text: "Turn off notifications during deep work.", category: "Productivity" },
  { text: "Delegate tasks when possible.", category: "Productivity" },
  { text: "Use voice memos for quick ideas.", category: "Productivity" },
  { text: "Reflect on your day to improve tomorrow.", category: "Productivity" },
  { text: "Multitasking can reduce productivity by up to 40%. Focus on one task at a time for best results.", category: "Productivity" },
  { text: "Use the 2-minute rule: If a task takes less than 2 minutes, do it immediately.", category: "Productivity" },
  { text: "Writing goals down increases achievement by 42%.", category: "Productivity" },
  { text: "Automate email sorting with filters to save hours each month.", category: "Productivity" },

  // Health
  { text: "Drink a glass of water first thing in the morning.", category: "Health" },
  { text: "Take short walks to refresh your mind.", category: "Health" },
  { text: "Stretch for five minutes every morning.", category: "Health" },
  { text: "Eat slowly to aid digestion.", category: "Health" },
  { text: "Get sunlight for vitamin D.", category: "Health" },
  { text: "Practice deep breathing to reduce stress.", category: "Health" },
  { text: "Limit screen time before bed.", category: "Health" },
  { text: "Wash your hands regularly.", category: "Health" },
  { text: "Keep healthy snacks nearby.", category: "Health" },
  { text: "Take the stairs instead of the elevator.", category: "Health" },
  { text: "Do a quick workout during TV commercials.", category: "Health" },
  { text: "Sleep at least 7 hours a night.", category: "Health" },
  { text: "Replace sugary drinks with water.", category: "Health" },
  { text: "Meditate for 10 minutes daily.", category: "Health" },
  { text: "Keep a gratitude journal.", category: "Health" },
  { text: "Eat more fruits and vegetables.", category: "Health" },
  { text: "Limit processed foods.", category: "Health" },
  { text: "Take regular breaks from sitting.", category: "Health" },
  { text: "Practice good posture.", category: "Health" },
  { text: "Laugh often—it’s good for your health.", category: "Health" },
  { text: "Laughing boosts your immune system and burns calories.", category: "Health" },
  { text: "Cold showers can improve circulation and alertness.", category: "Health" },
  { text: "Just 20 minutes in nature can lower stress hormones.", category: "Health" },
  { text: "Standing desks can reduce back pain and increase energy.", category: "Health" },

  // Home
  { text: "Use vinegar to clean glass surfaces.", category: "Home" },
  { text: "Use baking soda to remove odors from your fridge.", category: "Home" },
  { text: "Put a bowl of rice in damp areas to absorb moisture.", category: "Home" },
  { text: "Use lemon to remove stains from cutting boards.", category: "Home" },
  { text: "Clean microwave with a bowl of water and lemon.", category: "Home" },
  { text: "Use old newspapers to clean windows.", category: "Home" },
  { text: "Organize cables with bread clips.", category: "Home" },
  { text: "Hang clothes to dry to save energy.", category: "Home" },
  { text: "Use ice cubes to remove carpet dents.", category: "Home" },
  { text: "Store sheets inside pillowcases.", category: "Home" },
  { text: "Use a squeegee to remove pet hair from carpets.", category: "Home" },
  { text: "Keep shoes fresh with baking soda.", category: "Home" },
  { text: "Use a rubber band to open stubborn jars.", category: "Home" },
  { text: "Clean shower heads with vinegar.", category: "Home" },
  { text: "Use command hooks for extra storage.", category: "Home" },
  { text: "Repurpose glass jars for storage.", category: "Home" },
  { text: "Use dryer sheets to freshen drawers.", category: "Home" },
  { text: "Label cables to avoid confusion.", category: "Home" },
  { text: "Use a lint roller to clean lampshades.", category: "Home" },
  { text: "Keep a donation box for unused items.", category: "Home" },
  { text: "Baking soda neutralizes odors by changing pH levels.", category: "Home" },
  { text: "Use a bowl of coffee grounds to absorb fridge smells.", category: "Home" },
  { text: "Houseplants can remove up to 87% of air toxins in 24 hours.", category: "Home" },
  { text: "Use aluminum foil to sharpen scissors—just cut through it several times.", category: "Home" },

  // Tech
  { text: "Restart your router to fix most internet issues.", category: "Tech" },
  { text: "Use incognito mode for private browsing.", category: "Tech" },
  { text: "Charge your phone faster by enabling airplane mode.", category: "Tech" },
  { text: "Use Ctrl+F to quickly find text.", category: "Tech" },
  { text: "Take screenshots for quick notes.", category: "Tech" },
  { text: "Update software regularly for security.", category: "Tech" },
  { text: "Use strong, unique passwords.", category: "Tech" },
  { text: "Back up important files to the cloud.", category: "Tech" },
  { text: "Use two-factor authentication.", category: "Tech" },
  { text: "Organize desktop icons for efficiency.", category: "Tech" },
  { text: "Mute notifications during meetings.", category: "Tech" },
  { text: "Use browser extensions for productivity.", category: "Tech" },
  { text: "Clear cache to speed up your browser.", category: "Tech" },
  { text: "Use dark mode to reduce eye strain.", category: "Tech" },
  { text: "Unsubscribe from unwanted emails.", category: "Tech" },
  { text: "Use Google Keep for quick notes.", category: "Tech" },
  { text: "Scan documents with your phone.", category: "Tech" },
  { text: "Use Bluetooth to share files quickly.", category: "Tech" },
  { text: "Learn basic keyboard shortcuts.", category: "Tech" },
  { text: "Use a password manager.", category: "Tech" },
  { text: "The average person spends 2 years of their life on social media. Use app timers to reclaim your time.", category: "Tech" },
  { text: "Use virtual desktops to organize work and personal tasks.", category: "Tech" },
  { text: "Strong passwords are at least 12 characters and use symbols, numbers, and letters.", category: "Tech" },
  { text: "Use reverse image search to verify photos and spot fake news.", category: "Tech" },

  // Food
  { text: "Freeze grapes for a healthy snack.", category: "Food" },
  { text: "Add lemon to water for a vitamin boost.", category: "Food" },
  { text: "Use an ice cube tray to freeze herbs in olive oil.", category: "Food" },
  { text: "Peel ginger with a spoon.", category: "Food" },
  { text: "Store apples with potatoes to keep them fresh.", category: "Food" },
  { text: "Use a muffin tin for meal prep.", category: "Food" },
  { text: "Ripen bananas faster in a paper bag.", category: "Food" },
  { text: "Use dental floss to cut soft cakes.", category: "Food" },
  { text: "Soak onions in water to reduce tears.", category: "Food" },
  { text: "Keep lettuce fresh with a paper towel.", category: "Food" },
  { text: "Use a pizza cutter for pancakes.", category: "Food" },
  { text: "Make ice cream sandwiches with cookies.", category: "Food" },
  { text: "Use a slow cooker for easy meals.", category: "Food" },
  { text: "Freeze leftover coffee for iced drinks.", category: "Food" },
  { text: "Use a grater for garlic.", category: "Food" },
  { text: "Make smoothie packs for quick breakfasts.", category: "Food" },
  { text: "Store nuts in the freezer to keep them fresh.", category: "Food" },
  { text: "Use parchment paper for easy baking cleanup.", category: "Food" },
  { text: "Add a pinch of salt to sweet recipes to enhance flavor.", category: "Food" },
  { text: "Use a spoon to hull strawberries.", category: "Food" },
  { text: "Freezing bread slows mold growth, keeping it fresh for months.", category: "Food" },
  { text: "Add a dash of vinegar to boiling eggs for easier peeling.", category: "Food" },
  { text: "Chilling onions before cutting reduces tears by slowing the release of sulfur.", category: "Food" },
  { text: "Use a microwave with a cup of water to reheat pizza and keep the crust soft.", category: "Food" },

  // Photography
  { text: "Use natural light for softer portraits.", category: "Photography" },
  { text: "Clean your lens regularly for sharper images.", category: "Photography" },
  { text: "Use the rule of thirds for balanced composition.", category: "Photography" },
  { text: "Shoot during golden hour for warm tones.", category: "Photography" },
  { text: "Try different angles for creative shots.", category: "Photography" },
  { text: "Use burst mode for action shots.", category: "Photography" },
  { text: "Edit photos to enhance colors and contrast.", category: "Photography" },
  { text: "Use leading lines to draw attention.", category: "Photography" },
  { text: "Keep your camera steady for clear images.", category: "Photography" },
  { text: "Experiment with black and white photography.", category: "Photography" },
  { text: "The golden hour lasts about 1 hour after sunrise and before sunset, giving photos a magical glow.", category: "Photography" },
  { text: "Use a polarized filter to reduce glare and enhance colors.", category: "Photography" },
  { text: "Leading lines in composition guide the viewer’s eye and create depth.", category: "Photography" },
  { text: "Shoot in RAW format for maximum editing flexibility.", category: "Photography" },

  // Videography
  { text: "Use a tripod for stable video.", category: "Videography" },
  { text: "Record audio separately for better quality.", category: "Videography" },
  { text: "Plan your shots with a storyboard.", category: "Videography" },
  { text: "Use natural light for better video quality.", category: "Videography" },
  { text: "Keep clips short for engaging edits.", category: "Videography" },
  { text: "Use transitions to smooth out cuts.", category: "Videography" },
  { text: "Check your background before filming.", category: "Videography" },
  { text: "Use manual focus for precise control.", category: "Videography" },
  { text: "Edit out unnecessary footage.", category: "Videography" },
  { text: "Add subtitles for accessibility.", category: "Videography" },
  { text: "24 frames per second is the cinematic standard for smooth video.", category: "Videography" },
  { text: "Use color grading to set the mood and tone of your video.", category: "Videography" },
  { text: "Good audio is more important than video quality for viewer retention.", category: "Videography" },
  { text: "Use B-roll footage to make your edits more dynamic.", category: "Videography" },

  // College
  { text: "Take organized notes for easier studying.", category: "College" },
  { text: "Use flashcards to memorize key concepts.", category: "College" },
  { text: "Join study groups for collaborative learning.", category: "College" },
  { text: "Record lectures for later review.", category: "College" },
  { text: "Use campus resources like libraries and labs.", category: "College" },
  { text: "Set a regular study schedule.", category: "College" },
  { text: "Break study sessions into manageable chunks.", category: "College" },
  { text: "Ask professors for clarification when needed.", category: "College" },
  { text: "Keep a planner for assignments and deadlines.", category: "College" },
  { text: "Review material regularly, not just before exams.", category: "College" },
  { text: "Spaced repetition is proven to boost long-term memory retention.", category: "College" },
  { text: "Use the Feynman technique: Teach a concept to someone else to master it.", category: "College" },
  { text: "Studying in multiple locations improves recall by creating varied memory cues.", category: "College" },
  { text: "Record yourself explaining tough topics and play it back for review.", category: "College" }
];

function getFilteredHacks(category) {
  if (category === "all") return hacks;
  return hacks.filter(hack => hack.category === category);
}

function getRandomHack(category) {
  const filtered = getFilteredHacks(category);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

const hackDisplay = document.getElementById('hack-display');
const hackBtn = document.getElementById('hack-btn');
const copyBtn = document.getElementById('copy-btn');
const filterDropdown = document.getElementById('category-filter');

let currentHack = null;

function showHack() {
  const category = filterDropdown.value;
  const hack = getRandomHack(category);
  currentHack = hack;
  hackDisplay.textContent = hack ? hack.text : "No hacks found for this category.";
}

hackBtn.addEventListener('click', showHack);

copyBtn.addEventListener('click', () => {
  if (currentHack) {
    navigator.clipboard.writeText(currentHack.text)
      .then(() => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => copyBtn.textContent = "Copy", 1200);
      });
  }
});

filterDropdown.addEventListener('change', showHack);

// Show a hack on load
showHack();

