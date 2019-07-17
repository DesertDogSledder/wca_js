var race_now_augmented = {
    "name": "Augmented",
    "description": "Maybe there were complications in your infancy, or tragedy struck during your childhood; either way you&apos;ve received parts (organic or inorganic) that are an improvement over what you had before. No matter how it is exactly that you came to be this way, you&apos;re stronger for it and have an advantage over those regular humans, period. Whether or not you&apos;re enlightened by this gift or malignant about it, however, depends much more on how exactly you&apos;re different, and how that colored your upbringing.",
    "size": "medium",
    "available_skills": [
        "[crafting]",
        "[gaming]",
        "[scientific]",
        "[technical]",
        "[trivia]",
        "hardy",
        "perception",
        "reactions"
    ],
    "exploits": [
        {
            "Name": "Adaptive",
            "Desc": "When incorporating new cybernetic alterations, augmented never need to make a check to see if the upgrade takes hold. Additionally, they can incorporate an unlimited number of alterations beyond the normal limit of their END attribute."
        },
        {
            "Name": "Alteration",
            "Desc": "Augmented begin play with two minor or one major cybernetic alteration."
        },
        {
            "Name": "Inert",
            "Desc": "Augmented embrace technology over matters of spirit. They may never have a Chi score above zero."
        }
    ],
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 2,
        "intuition": 0,
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
var race_now_chosen = {
    "name": "Chosen",
    "description": "Something about you is better. Maybe you are the result of a sublime genetic match, perhaps your genome was manipulated from before conception. How it is you came to be different is hardly important\u2014how you are different is everything. Some designed are much more likeable or beautiful than the average human, others possess an evolved mental acuity, and some are sterling models of what biomechanics can achieve.\n\nYou might be characterized by prophecy and legend, and are often surrounded by stories or myths. Whether you are part of a hereditary line, the touch of destiny graced upon you in the womb, you simply meet the criteria listed in an old prophecy, or whether actual mysticism or magic is involved, you are special.",
    "size": "medium",
    "available_skills": [
        "[crafting]",
        "[gaming]",
        "[scientific]",
        "[trivia]",
        "negotiating",
        "tactics"
    ],
    "exploits": [
        {
            "Name": "Destiny",
            "Desc": "Once, when you ordinarily die, you do not die. Instead, you remain at 0 Health until healed. When you have used your extra &quot;life&quot; you cannot use it again."
        },
        {
            "Name": "Fast-Healing",
            "Desc": "Chosen heal faster than most people. You may roll an extra 2d6 when determining how much you naturally heal each day."
        },
        {
            "Name": "Skill Focus",
            "Desc": "You start play with two bonus skills of your choice at 3 ranks (2d6)."
        }
    ],
    "stats": {
        "strength": 1,
        "agility": 0,
        "endurance": 0,
        "intuition": 0,
        "logic": 0,
        "willpower": 0,
        "charisma": 1,
        "luck": 0,
        "reputation": 2,
        "magic": 0,
        "chi": 3,
        "psionics": 0
    }
};
var race_now_human = {
    "name": "Human",
    "description": "There&apos;s a reasonably strong chance that you, the reader, are Human. You might be a little extra-human, with mechanical improvements (glasses, a hearing aid, maybe some genuine replacement parts) but when things boil down, you are a homo sapiens. This isn&apos;t to say that Humans are not diverse\u2014there is a wide range of cultures and peoples across the worlds of O.L.D., N.O.W., and N.E.W. \u2014but all of them have 10 toes, two eyes, and so on. Where you are from and who raised you influence your outlook on life more than anything else.\n\nHuman adventurers are extremely varied, from private eyes to blackhats, from knights to starship captains, from martial artists to doctors, from wizards to space marines \u2014 the world, indeed the universe, is at your fingertips!",
    "size": "medium",
    "available_skills": [
        "any"
    ],
    "exploits": [
        {
            "Name": "Enduring",
            "Desc": "Humans may not be the fastest or the strongest, but they are known for their resilience. Humans get +1 to their 1d6 die roll to shake off a temporary condition."
        },
        {
            "Name": "Explorers",
            "Desc": "Driven by an inquisitive, exploratory nature, Humans recharge their LUC pool every time they go to a country new to them."
        },
        {
            "Name": "Varied",
            "Desc": "Humans boast more variation within their species than most. Add 2 to any attribute, and add a further +1 to one other attribute (noted above)."
        }
    ],
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 0,
        "intuition": 0,
        "logic": 0,
        "willpower": 0,
        "charisma": 0,
        "luck": 2,
        "reputation": 0,
        "magic": 0,
        "chi": 0,
        "psionics": 0
    }
};
var race_now_mutant = {
    "name": "Mutant",
    "description": "You are different, your genetics a variation from the norm. This might be blatantly obvious with physical deformities like albino skin, unnatural growths, discolored eyes, or asymmetrical features, or it may not be immediately noticeable\u2014regardless of the exact nature of your deviant genetics doesn&apos;t matter, but you must always take some action to hide it from society at large. Maybe you wear sunglasses to hide your entirely black eyes, cover yourself in makeup and wear flesh-colored tights to conceal your horrific skin, or wear extraneous clothing that hides your true nature.\n\nMutants can be excellent users of CHI, exploring their power to great effect (whether for combat, exploration, or otherwise). They don&apos;t often do well as social characters, faced with the adversity of prejudice for being visibly different.\n\nExamples in popular culture include Killer Croc, Johnny Alpha, and many X-Men.",
    "size": "small, medium, or large",
    "available_skills": [
        "[crafting]",
        "[gaming]",
        "[trivia]",
        "disguise",
        "hardy",
        "intimidate",
        "resistance",
        "survival"
    ],
    "exploits": [
        {
            "Name": "Mutation",
            "Desc": "Mutants have one or more mutations. Select one major or two minor mutations. You may select any number of cosmetic mutations, but you must choose at least one."
        }
    ],
    "stats": {
        "strength": 0,
        "agility": 0,
        "endurance": 2,
        "intuition": 0,
        "logic": 0,
        "willpower": 1,
        "charisma": 0,
        "luck": 0,
        "reputation": 1,
        "magic": 0,
        "chi": 1,
        "psionics": 0
    }
};

var race_now_dict = {
    "race_now_augmented": race_now_augmented,
    "race_now_chosen": race_now_chosen,
    "race_now_human": race_now_human,
    "race_now_mutant": race_now_mutant,
}