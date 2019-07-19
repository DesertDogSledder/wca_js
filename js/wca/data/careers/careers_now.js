var career_now_actor = {
    "name": "Actor",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "A star of screen or stage, you make your living pretending to be somebody else. Each time you take this career, roll 1d6. If you roll a 6, you win an award. Roll again: (1) BAFTA, (2) Emmy, (3) Tony, (4) Soap Opera Digest, (5) Razzie, (6) Oscar. An award gives you +1 REP.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 0,
        "intuition": 1,
        "logic": 1,
        "willpower": 0,
        "charisma": 1,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_archaeologist = {
    "name": "Archaeologist",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "As an archeologist, you explored dark caves, tracked down lost treasures, and dug a lot of holes.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 0,
        "intuition": 1,
        "logic": 1,
        "willpower": 1,
        "charisma": 0,
        "luck": 1,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_assassin = {
    "name": "Assassin",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "stealth, tracking, [combat]",
    "description": "A killer for hire, you mastered the skills of assassination.",
    "stats": {
        "strength": 1,
        "agility": 1,
        "endurance": 0,
        "intuition": 1,
        "logic": 0,
        "willpower": 0,
        "charisma": 0,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_astronaut = {
    "name": "Astronaut",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "[scientific] or piloting",
    "description": "You trained to become an astronaut and travelled into space, either into orbit or to the moon or a similar body.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 1,
        "intuition": 1,
        "logic": 1,
        "willpower": 0,
        "charisma": 0,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_athlete = {
    "name": "Athlete",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "[sport] or [physical]",
    "description": "You are a professional athlete, whether that be in a team sport or a track and field event.",
    "stats": {
        "strength": 1,
        "agility": 1,
        "endurance": 1,
        "intuition": 0,
        "logic": 0,
        "willpower": 0,
        "charisma": 0,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_bartender = {
    "name": "Bartender",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "Bartending is a great way to pay the bills. Some make a lifelong career of it.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 1,
        "intuition": 1,
        "logic": 0,
        "willpower": 0,
        "charisma": 1,
        "luck": 1,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_boot_camp = {
    "name": "Boot Camp",
    "career_time": "1",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "You joined the military and completed basic military training. Some programs send recruits to college to gain degrees before returning to cadet assignments.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 0,
        "intuition": 0,
        "logic": 1,
        "willpower": 1,
        "charisma": 1,
        "luck": 0,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_bouncer = {
    "name": "Bouncer",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "You stood guard at the door to a bar, club, or other private venue.",
    "stats": {
        "strength": 1,
        "agility": 0,
        "endurance": 1,
        "intuition": 1,
        "logic": 0,
        "willpower": 0,
        "charisma": 1,
        "luck": 0,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_bounty_hunter = {
    "name": "Bounty Hunter",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "As a bounty hunter you spent time tracking down and capturing wanted criminals.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 0,
        "intuition": 1,
        "logic": 1,
        "willpower": 0,
        "charisma": 0,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_boxer = {
    "name": "Boxer",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "boxing",
    "description": "The ring is your king. You have been in scores of fights (both sanctioned and otherwise), endured countless days and nights of strenuous physical training, and your body is a shrine to thousands of jabs, hooks, and hastily landed strikes.",
    "stats": {
        "strength": 1,
        "agility": 0,
        "endurance": 1,
        "intuition": 0,
        "logic": 0,
        "willpower": 1,
        "charisma": 0,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_burglar = {
    "name": "Burglar",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "stealth",
    "description": "You become a master thief, able to infiltrate the most secure of locations. Some cat burglars work for hire and conduct industrial espionage, while others prefer to steal valuable artifacts and jewels from museums and high security vaults.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 0,
        "intuition": 1,
        "logic": 0,
        "willpower": 0,
        "charisma": 0,
        "luck": 1,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_chef = {
    "name": "Chef",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "cooking",
    "description": "You know how to cook, to prepare amazing meals, and to run a kitchen.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 0,
        "intuition": 1,
        "logic": 1,
        "willpower": 0,
        "charisma": 0,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_college = {
    "name": "College",
    "career_time": "4",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "You attended a civilian college or university and gained formal qualifications in a chosen area of study. Choose a subject, which can be any skill, but is typically a [scientific], [technical], or [artistic] skill. You can restart this career at any time to gain degrees in additional subjects.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 0,
        "intuition": 0,
        "logic": 1,
        "willpower": 1,
        "charisma": 1,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_con_artist = {
    "name": "Con Artist",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "bluffing",
    "description": "You honed your skills and learned how to trick others out of their money with charm, lies, bluffs, disguise, and more. Many career criminals combine the craft of the con man with the skills of the burglar.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 0,
        "intuition": 1,
        "logic": 1,
        "willpower": 0,
        "charisma": 1,
        "luck": 1,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_craftsman = {
    "name": "Craftsman",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "[crafting] or [technical]",
    "description": "You made your living by practising your craft as a carpenter, electrician, mechanic, or other professional skilled worker.",
    "stats": {
        "strength": 1,
        "agility": 1,
        "endurance": 0,
        "intuition": 0,
        "logic": 1,
        "willpower": 0,
        "charisma": 1,
        "luck": 0,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_cultist = {
    "name": "Cultist",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "religion",
    "description": "You were either part of a cult, or you studied cults or the occult.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 0,
        "intuition": 1,
        "logic": 1,
        "willpower": 0,
        "charisma": 1,
        "luck": 0,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_dark_crusader = {
    "name": "Dark Crusader",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "stealth",
    "description": "You prowl the streets at night. More than just a vigilante, you are a symbol. You have learned how to instill fear into the hearts of criminals, and the very mention of your name is enough to make the most hardened of gangs look nervously over their shoulders.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 0,
        "intuition": 1,
        "logic": 0,
        "willpower": 1,
        "charisma": 0,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_detective = {
    "name": "Detective",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "You become a detective, expert at spotting clues and finding your man. Even if you leave the profession, you still retain enough contacts to call in favors and request information.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 0,
        "intuition": 2,
        "logic": 0,
        "willpower": 0,
        "charisma": 1,
        "luck": 0,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_diplomat = {
    "name": "Diplomat",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "[social]",
    "description": "You have represented your planet elsewhere.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 0,
        "intuition": 1,
        "logic": 0,
        "willpower": 0,
        "charisma": 2,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_diver = {
    "name": "Diver",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "swimming",
    "description": "Whether it was a commercial job, or for the military or police, you feel most at home in a wetsuit. You became a diver, able to explore the ocean depths.",
    "stats": {
        "strength": 1,
        "agility": 1,
        "endurance": 1,
        "intuition": 1,
        "logic": 0,
        "willpower": 0,
        "charisma": 0,
        "luck": 0,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_drifter = {
    "name": "Drifter",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "Somehow you lost your way. Drinking, gambling, with no clear objective, you drifted through the fringes of society. Perhaps you never fitted in; or perhaps you are a war veteran who found home was no longer home.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 1,
        "intuition": 1,
        "logic": 0,
        "willpower": 0,
        "charisma": 1,
        "luck": 1,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_driver = {
    "name": "Driver",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "driving",
    "description": "You became a driver. Either a racing driver, such as Formula 1 or NASCAR, or a getaway driver. You may even have been a military driver.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 0,
        "intuition": 1,
        "logic": 0,
        "willpower": 0,
        "charisma": 0,
        "luck": 1,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_engineer = {
    "name": "Engineer",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "engineering",
    "description": "You became an engineer, proficient at manipulating technology and repairing vehicles, devices and engines. ",
    "stats": {
        "strength": 1,
        "agility": 1,
        "endurance": 0,
        "intuition": 0,
        "logic": 1,
        "willpower": 0,
        "charisma": 0,
        "luck": 1,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_explosives_expert = {
    "name": "Explosives Expert",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "You were either a bomb disposal or a demolitions expert.You just love the smell of napalm in the morning. Something about the smell of explosives, or maybe the very loud boom they make, is very pleasing to you. Of course, you can&apos;t discount the whiz of shrapnel, oh, and the display, the coruscating fireballs...",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 0,
        "intuition": 1,
        "logic": 1,
        "willpower": 0,
        "charisma": 0,
        "luck": 1,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_firefighter = {
    "name": "Firefighter",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "Fighting fires is a noble calling, putting yourself at risk to help others.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 1,
        "intuition": 1,
        "logic": 0,
        "willpower": 0,
        "charisma": 0,
        "luck": 1,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_gambler = {
    "name": "Gambler",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "[gaming]",
    "description": "You became an expert gambler, proficient at games of skill and chance.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 0,
        "intuition": 1,
        "logic": 0,
        "willpower": 0,
        "charisma": 1,
        "luck": 1,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_gangster = {
    "name": "Gangster",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "intimidate",
    "description": "Eventually your life of crime led you to better things as you fell into a gang or crew.",
    "stats": {
        "strength": 1,
        "agility": 0,
        "endurance": 0,
        "intuition": 1,
        "logic": 0,
        "willpower": 0,
        "charisma": 1,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_guerrilla_fighter = {
    "name": "Guerrilla Fighter",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "survival",
    "description": "Either as a dangerous lone wolf or as part of an organized resistance, you&apos;re experienced with waging war on the go, mounting military strikes that melt away quickly afterward. After taking a grade in this career, roll 1d6; on a 2 or less, the next career you take must be Prison.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 1,
        "intuition": 1,
        "logic": 0,
        "willpower": 0,
        "charisma": 0,
        "luck": 1,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_hacker = {
    "name": "Hacker",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "computers",
    "description": "Hacking into computer systems to find information or manipulate events comes easily to you.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 0,
        "intuition": 1,
        "logic": 1,
        "willpower": 0,
        "charisma": 0,
        "luck": 1,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_heavy_gunner = {
    "name": "Heavy Gunner",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "heavy weapons.",
    "description": "A real weapon is the kind that requires a strap, and if it doesn&apos;t kick like a mule when you fire it, the gun just isn&apos;t for you. Whether a specialist for a security team or mercenary group, or party of a a heavy weapons team in the military, you&apos;ve spent plenty of time around big guns.",
    "stats": {
        "strength": 1,
        "agility": 0,
        "endurance": 1,
        "intuition": 1,
        "logic": 0,
        "willpower": 1,
        "charisma": 0,
        "luck": 0,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_infiltrator = {
    "name": "Infiltrator",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "stealth, [combat]",
    "description": "The pinnacle of special operations, either police, military or freelance, the infiltrator aptly describes the occupation of many men and women whose job it is to infiltrate enemy locations and accomplish dangerous missions. An infiltrator needs a range of skills beyond the mere ability to kill that is the hallmark of the assassin.",
    "stats": {
        "strength": 1,
        "agility": 1,
        "endurance": 1,
        "intuition": 1,
        "logic": 0,
        "willpower": 0,
        "charisma": 0,
        "luck": 0,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_laborer = {
    "name": "Laborer",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "You did a regular physical job, whether skilled or unskilled, performing manual work for a fair wage. You may have been in construction, a gravedigger, even a street-sweeper or cleaner; or perhaps a delivery person, baker, brewer or other worker.",
    "stats": {
        "strength": 1,
        "agility": 0,
        "endurance": 1,
        "intuition": 0,
        "logic": 0,
        "willpower": 0,
        "charisma": 1,
        "luck": 1,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_lawyer = {
    "name": "Lawyer",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "law",
    "description": "You became a lawyer, learning the complexities of the legal system, and how to get yourself and others out of (or into!) trouble.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 0,
        "intuition": 0,
        "logic": 1,
        "willpower": 1,
        "charisma": 1,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_medic = {
    "name": "Medic",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "medicine",
    "description": "You enter the medical profession. If you have gained a doctorate at college, you do so as a doctor; otherwise you are referred to as a nurse or medic.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 0,
        "intuition": 1,
        "logic": 1,
        "willpower": 0,
        "charisma": 1,
        "luck": 0,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_miner = {
    "name": "Miner",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "There&apos;s nothing like a few years spent down a coalmine to build character.",
    "stats": {
        "strength": 1,
        "agility": 0,
        "endurance": 1,
        "intuition": 0,
        "logic": 0,
        "willpower": 1,
        "charisma": 0,
        "luck": 1,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_ninja = {
    "name": "Ninja",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "martial arts",
    "description": "The skills and tactics of Japan&apos;s warriors of subterfuge, sabotage, and deception are known to you, either through a Ninja master that took you in as an apprentice, or by traveling to the ancestral homeland and earning the right to train among those who still practice ninjutsu.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 1,
        "intuition": 1,
        "logic": 0,
        "willpower": 0,
        "charisma": 0,
        "luck": 0,
        "reputation": 0,
        "magic": 0,
        "chi": 1,
        "psionics": 0
    }
};
var career_now_performer = {
    "name": "Performer",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "[performance]",
    "description": "You became a musician or other performer, and made your way working bars, clubs, and theaters.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 0,
        "intuition": 0,
        "logic": 0,
        "willpower": 0,
        "charisma": 2,
        "luck": 1,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_pilot = {
    "name": "Pilot",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "piloting",
    "description": "You became a pilot, learning to fly aircraft big or small.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 0,
        "intuition": 1,
        "logic": 1,
        "willpower": 0,
        "charisma": 0,
        "luck": 1,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_police_officer = {
    "name": "Police Officer",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "You join the police or other security force and begin a career as a uniformed officer.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 0,
        "intuition": 1,
        "logic": 1,
        "willpower": 0,
        "charisma": 0,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_politician = {
    "name": "Politician",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "local knowledge",
    "description": "You entered politics at a local level and started to rise through the ranks.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 0,
        "intuition": 0,
        "logic": 1,
        "willpower": 1,
        "charisma": 1,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_priest = {
    "name": "Priest",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "religion",
    "description": "You joined the clergy and practised religion, tending to your flock.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 0,
        "intuition": 1,
        "logic": 0,
        "willpower": 1,
        "charisma": 1,
        "luck": 1,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_prisoner = {
    "name": "Prisoner",
    "career_time": "2d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "Your life of crime ended you up in prison where you served time; or perhaps you were a political prisoner, a hostage, or a prisoner-of-war. It was a tough environment and you spent most of your time just trying to survive, although you did make one or two lifelong contacts.",
    "stats": {
        "strength": 1,
        "agility": 0,
        "endurance": 1,
        "intuition": 1,
        "logic": 0,
        "willpower": 0,
        "charisma": 0,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_private_eye = {
    "name": "Private Eye",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "You snoop, bribe, tail, and occasionally get socked a few times a month in order to pay the bills. You know all the shady spots in town.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 0,
        "intuition": 1,
        "logic": 0,
        "willpower": 0,
        "charisma": 1,
        "luck": 1,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_reporter = {
    "name": "Reporter",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "As an intrepid reporter, you are skilled at getting to the truth.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 0,
        "intuition": 1,
        "logic": 1,
        "willpower": 0,
        "charisma": 1,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_sailor = {
    "name": "Sailor",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "At home on the sea, you spent time aboard a ship mastering the art of sailing.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 1,
        "intuition": 1,
        "logic": 0,
        "willpower": 0,
        "charisma": 0,
        "luck": 1,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_scientist = {
    "name": "Scientist",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "one [scientific] skill",
    "description": "You take your science with you as investigate phenomena in strange locations. Field scientists are viewed by academia as adventurous types, and include archaeologists, meteorologists, zoologists, oceanographers, geologists, botanists, astrophysicists, and much more.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 0,
        "intuition": 1,
        "logic": 1,
        "willpower": 1,
        "charisma": 0,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_scout = {
    "name": "Scout",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "stealth, tracking",
    "description": "You became a scout \u2013 a specialized special forces soldier able to operate alone and perform reconnaissance.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 1,
        "intuition": 1,
        "logic": 0,
        "willpower": 1,
        "charisma": 0,
        "luck": 0,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_sensei_sifu = {
    "name": "Sensei/Sifu",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "martial arts 3 ranks",
    "description": "You run a dojo, wu kwan, or kwoon, teaching others the martial arts.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 0,
        "intuition": 1,
        "logic": 0,
        "willpower": 1,
        "charisma": 0,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_smuggler = {
    "name": "Smuggler",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "piloting or sailing",
    "description": "You spent time as a smuggler, moving stolen or illegal goods from one country to another.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 0,
        "intuition": 0,
        "logic": 0,
        "willpower": 0,
        "charisma": 1,
        "luck": 1,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_sniper = {
    "name": "Sniper",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "stealth, rifles",
    "description": "You mastered the art of lying very still for long periods of time and shooting people a long way away. Sniping is a job which requires great endurance, patience, and accuracy.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 1,
        "intuition": 1,
        "logic": 0,
        "willpower": 1,
        "charisma": 0,
        "luck": 1,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_socialite = {
    "name": "Socialite",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "[social]",
    "description": "You aim be famous for being famous, and mastered the art of networking.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 0,
        "intuition": 0,
        "logic": 0,
        "willpower": 0,
        "charisma": 2,
        "luck": 0,
        "reputation": 2,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_soldier = {
    "name": "Soldier",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "must have completed one year in Boot Camp",
    "description": "A tour of duty in the army means a deployment to a probably dangerous environment where you engaged enemy forces in infantry based ground battles. The army prides itself on their sense of duty and their courage. With each tour, roll 1d6. On a roll of 6, you gain a medal and a bonus +1 REP.",
    "stats": {
        "strength": 1,
        "agility": 0,
        "endurance": 1,
        "intuition": 0,
        "logic": 0,
        "willpower": 1,
        "charisma": 0,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_spy = {
    "name": "Spy",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "You&apos;re a spy. This may be MI6, CIA, KGB, or some other force. You have a wide remit, dealing with both domestic and external threats, and perform undercover investigations into military and civilian issues.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 0,
        "intuition": 1,
        "logic": 0,
        "willpower": 0,
        "charisma": 1,
        "luck": 1,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_street_thug = {
    "name": "Street Thug",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "You fell into the fringes of society and ended up as a thug on the street, committing petty crimes for small amounts of money.",
    "stats": {
        "strength": 1,
        "agility": 0,
        "endurance": 1,
        "intuition": 0,
        "logic": 0,
        "willpower": 0,
        "charisma": 1,
        "luck": 1,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_student = {
    "name": "Student",
    "career_time": "1",
    "career_time_unit": "years",
    "prerequisites": "18 years of age or under",
    "description": "High School, or its equivalent, is a place of learning... and sometimes of adventure!",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 0,
        "intuition": 1,
        "logic": 1,
        "willpower": 0,
        "charisma": 1,
        "luck": 1,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_stuntman = {
    "name": "Stuntman",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "You&apos;ve rolled cars, jumped off buildings, jumped open drawbridges, even set yourself on fire in the name of entertainment.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 1,
        "intuition": 0,
        "logic": 0,
        "willpower": 0,
        "charisma": 0,
        "luck": 1,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_survivalist = {
    "name": "Survivalist",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "any [outdoor] skill",
    "description": "Some choose to spend time in the wild, testing their mind and body against nature, living off the land, and existing with animals.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 1,
        "intuition": 1,
        "logic": 0,
        "willpower": 1,
        "charisma": 0,
        "luck": 1,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_teacher = {
    "name": "Teacher",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "any [academic], [artistic], [performance] or [scientific skill], or linguistics",
    "description": "Your calling is teaching others. You are a mentor figure, a font of learning, and a source of inspiration.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 0,
        "intuition": 1,
        "logic": 1,
        "willpower": 0,
        "charisma": 1,
        "luck": 1,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_trader = {
    "name": "Trader",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "Life as a trader can mean profit, but it can also bring ruin.",
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 0,
        "intuition": 1,
        "logic": 0,
        "willpower": 0,
        "charisma": 1,
        "luck": 1,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_vigilante = {
    "name": "Vigilante",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "none",
    "description": "Something about the world calls to you, asking\u2014no, demanding\u2014that you rise above the law to accomplish some task. You might battle crime, fight against a corrupt corporation, or work to clean the world of dirty politicians, but you are often at odds with the law, using measures they&apos;re unable to utilize to get the job done.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 1,
        "intuition": 1,
        "logic": 0,
        "willpower": 0,
        "charisma": 0,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var career_now_warrior_monk = {
    "name": "Warrior-Monk",
    "career_time": "1d6",
    "career_time_unit": "years",
    "prerequisites": "religion or martial arts",
    "description": "You became a member of a martial monastic order, and were trained in philosophy and martial arts. You should also take grades in a martial arts career.",
    "stats": {
        "strength": 0,
        "agility": 1,
        "endurance": 1,
        "intuition": 0,
        "logic": 0,
        "willpower": 1,
        "charisma": 0,
        "luck": 0,
        "reputation": 0,
        "magic": 0,
        "chi": 1,
        "psionics": 0
    }
};

var career_now_dict = {
    "career_now_actor": "career_now_actor",
    "career_now_archaeologist": "career_now_archaeologist",
    "career_now_assassin": "career_now_assassin",
    "career_now_astronaut": "career_now_astronaut",
    "career_now_athlete": "career_now_athlete",
    "career_now_bartender": "career_now_bartender",
    "career_now_boot_camp": "career_now_boot_camp",
    "career_now_bouncer": "career_now_bouncer",
    "career_now_bounty_hunter": "career_now_bounty_hunter",
    "career_now_boxer": "career_now_boxer",
    "career_now_burglar": "career_now_burglar",
    "career_now_chef": "career_now_chef",
    "career_now_college": "career_now_college",
    "career_now_con_artist": "career_now_con_artist",
    "career_now_craftsman": "career_now_craftsman",
    "career_now_cultist": "career_now_cultist",
    "career_now_dark_crusader": "career_now_dark_crusader",
    "career_now_detective": "career_now_detective",
    "career_now_diplomat": "career_now_diplomat",
    "career_now_diver": "career_now_diver",
    "career_now_drifter": "career_now_drifter",
    "career_now_driver": "career_now_driver",
    "career_now_engineer": "career_now_engineer",
    "career_now_explosives_expert": "career_now_explosives_expert",
    "career_now_firefighter": "career_now_firefighter",
    "career_now_gambler": "career_now_gambler",
    "career_now_gangster": "career_now_gangster",
    "career_now_guerrilla_fighter": "career_now_guerrilla_fighter",
    "career_now_hacker": "career_now_hacker",
    "career_now_heavy_gunner": "career_now_heavy_gunner",
    "career_now_infiltrator": "career_now_infiltrator",
    "career_now_laborer": "career_now_laborer",
    "career_now_lawyer": "career_now_lawyer",
    "career_now_medic": "career_now_medic",
    "career_now_miner": "career_now_miner",
    "career_now_ninja": "career_now_ninja",
    "career_now_performer": "career_now_performer",
    "career_now_pilot": "career_now_pilot",
    "career_now_police_officer": "career_now_police_officer",
    "career_now_politician": "career_now_politician",
    "career_now_priest": "career_now_priest",
    "career_now_prisoner": "career_now_prisoner",
    "career_now_private_eye": "career_now_private_eye",
    "career_now_reporter": "career_now_reporter",
    "career_now_sailor": "career_now_sailor",
    "career_now_scientist": "career_now_scientist",
    "career_now_scout": "career_now_scout",
    "career_now_sensei_sifu": "career_now_sensei_sifu",
    "career_now_smuggler": "career_now_smuggler",
    "career_now_sniper": "career_now_sniper",
    "career_now_socialite": "career_now_socialite",
    "career_now_soldier": "career_now_soldier",
    "career_now_spy": "career_now_spy",
    "career_now_street_thug": "career_now_street_thug",
    "career_now_student": "career_now_student",
    "career_now_stuntman": "career_now_stuntman",
    "career_now_survivalist": "career_now_survivalist",
    "career_now_teacher": "career_now_teacher",
    "career_now_trader": "career_now_trader",
    "career_now_vigilante": "career_now_vigilante",
    "career_now_warrior_monk": "career_now_warrior_monk"
}