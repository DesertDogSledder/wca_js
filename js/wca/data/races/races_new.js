// NEW races
var race_new_android = new Race({
    name: 'Android',
    description: "Androids aren't technically a species, and can vary greatly in appearance.  Frequently, however, " +
         "they look like humans.  While many philosophers will debate whether or not Androids have true " +
         "consciousness, they have passed every test imaginable and are legally considered to be alive, with all the " +
         "rights and responsibilities that entails.  Stronger and tougher than humans, with processors which can " +
         "outpace the human mind, Androids aren't always the most popular in the room.\n\nAndroids make excellent " +
         "scientists, engineers, and doctors.\n\nTypical names: KX-159, D.A.T.A., SL1A, TikTok, G.O.L.E.M., Watson, " +
         "Jeeves, C.H.I.P., Robby, A.L.P.H.A., Mk XIV, B.R.A.I.N.",
    size: 'small, medium, or large',
    strength: 2, logic: 2, psionics: -99,
    available_skills: ['computers', 'engineering', 'running', 'linguistics', '[technical]'],
    exploits: [{name: 'Mindless',
               desc: "Androids are immune to any attacks which target MENTAL DEFENSE."},
              {name: 'Deterministic',
               desc: "An Android's PSI attribute can never rise above zero, and an Android cannot spend LUC dice to " +
                       "gain bonus dice when making attributes."},
              {name: 'Electronic vulnerability',
               desc: "As mechanoids, Androids are vulnerable (1d6) to electricity damage, vulnerable (2d6) to ion " +
                       "damage."},
              {name: 'Automaton',
               desc: "Androids do not need to eat, sleep, or breathe, and weigh 150% normal."},
              {name: 'Bonus modification exploit',
               desc: "Choose an android modification exploit."}]});

var race_new_borian = new Race({
    name: 'Borian',
    description: "Borians are welcome in most places. Standing at about 4' in height, with bright red or blue skin (depending " +
         "on clan) and spiky, bony heads, they have a reputation for good cheer and friendliness. This, coupled with " +
         "their naturally robust constitution, also makes them renowned drinkers, and it has been said that Borians " +
         "make the most common bartender race in the universe.\n\nBorians are good with their hands, " +
         "and enjoy tinkering and building. They make excellent engineers and craftsmen.\n\nTypical names (male and " +
         "female): Dobur, Thrari, Kirin, Borin, Boli, Filin, Gimnor, Thrarin, Dwain, Dolo, Kibur.",
    size: 'small',
    endurance: 1, intuition: 1, charisma: 1, reputation: 1,
    available_skills: ['carousing', 'hardy', '[crafting]', 'engineering', 'appraisal'],
    exploits: [{name: 'Darksight',
               desc: "Borians can see in the dark to a distance of 10' per point of INT."},
              {name: 'Iron constitution',
               desc: "Borians are not affected by poisons, including alcohol. They are also immune to radiation " +
                       "damage and radiation sickness."},
              {name: 'Tinkerer',
               desc: "Borians may designate one item of equipment which they own. That item permanently gains one " +
                       "bonus quality level. If the item is lost or destroyed, the Borian may designate a new item " +
                       "after 24 hours."},
              {name: 'Long-lived',
               desc: "When creating a Borian character, multiply their career lengths by 3."},
              {name: 'Personable',
               desc: "Borians are noted for their cheerful demeanour and likability. When taking a new career, " +
                       "a Borian may optionally exchange one of the listed four attribute increases for CHA, " +
                       "as long as it doesn’t result in a duplicate attribute advancement."}]});

var race_new_canid = new Race({
    name: 'Canid',
    description: "Uplifted dogs, Canids are loyal and friendly. With keen senses of smell and hearing, it’s hard to surprise " +
         "a Canid. Canids vary in size from 5’ to nearly 7’. They tend to be leaner and sturdier than humans, " +
         "and are covered with thick fur which ranges in colour.\n\nCanids have a weakness for alcohol. Even a small " +
         "amount will intoxicate them, and large amounts can be very dangerous to their health. Even so, they easily " +
         "become addicted to the substance.\n\nCanids make excellent trackers and bounty hunters. They are adept at " +
         "reading the emotions and body language of others, possibly due to their pack-based past.",
    size: 'medium',
    agility: 1, intuition: 2, endurance: 1, charisma: 1,
    available_skills: ['perception', 'scent', 'insight', 'tracking', 'running', '[social]'],
    exploits: [{name: 'Pack-bonding',
               desc: "A Canid can designate one person per point of CHA as a member of its “pack”. It can, at-will, " +
                       "donate its LUC dice to its pack members, which must be used immediately."},
              {name: 'Fur coat',
               desc: "The Canid’s fur coat keeps it warm in cold climes. It gains natural SOAK 5 (cold)."},
              {name: 'Chasers',
               desc: "A heritage of chasing gives the Canid +1 to its SPEED score."},
              {name: 'Scent',
               desc: "Canids have incredible senses of smell. They gain 3 ranks (2d6) in scent, which works like " +
                       "perception but only where smell is involved."},
              {name: 'Alcohol weakness',
               desc: "Canids treat alcohol as a poison. Even a small amount renders them lubricated, and larger " +
                       "amounts cause them 1d6 poison damage."}]});

var race_new_corax = new Race({
    name: 'Corax',
    description: "These delicate, winged folk are considered “flighty” (no pun intended) by most for good reason. They have a " +
         "fairly short attention span, and lack concentration.\n\nCorax tend to look crow-like, although other " +
         "variations exist. About five feet tall, they are weaker than humans, and have small black eyes. The wings " +
         "on a Corax allow it to glide and hop short distances, but are not powerful enough for actual flight. Their " +
         "beaks are strong, and can inflict considerable damage in a brawl.\n\nCorax language is filled with staccato " +
         "“k” sounds, and this sound frequently carries over to their use of other languages. Corax are masters of " +
         "subterfuge; robed Corax assassins are to be feared.",
    size: 'small',
    agility: 2, intuition: 2, luck: 1, psionics: 1, endurance: -1,
    available_skills: ['acrobatics', 'perception', 'stealth', 'knives', 'bluffing', 'disguise'],
    exploits: [{name: 'Hollow-boned',
               desc: "A Corax’s bones are hollow, making it vulnerable (1d6) to blunt damage. They weigh half the " +
                       "normal weight of a creature of their size."},
              {name: 'Wings',
               desc: "The Corax’s small wings grant it +10’ JUMP distances (both horizontal and vertical) and " +
                       "allows it to take no damage from falling as long as the fall is greater than 10’."},
              {name: 'Beak',
               desc: "The Corax’s powerful beak increases natural damage by +1d6 and changes it to piercing damage."},
              {name: 'Mimicry',
               desc: "Corax are able to mimic any voice nearly perfectly."}]});

var race_new_felan = new Race({
    name: 'Felan',
    description: "Felans, unimaginatively named by the first human explorers to encounter them, are a cat-like species. Like " +
         "their four-legged namesake, Felans are often beautiful to the eye, and move with a graceful, " +
         "acrobatic purpose. Easily able to jump and climb, felans like to make use of their environment, and tend to " +
         "sleep in precarious locations high above the ground.\n\nFelans have a deserved reputation for being easily " +
         "distracted, and often flit from career to career, unable to settle.\n\nTypical names (male and female): " +
         "Arhel, Infin, Elenrik, Makil, Crihel, Talik, Gimlek, Amaduil, Idthit, Ciraire.",
    size: 'medium',
    agility: 2, intuition: 1, charisma: 1, luck: 1,
    available_skills: ['acrobatics', 'climbing', 'jumping', '[unarmed fighting]', 'reactions',
                      'appraisal', 'bluffing', 'stealth', 'negotiating'],
    exploits: [{name: 'Fast',
               desc: "Felans are fast and nimble, adding 2 to their SPEED."},
              {name: 'Jumper',
               desc: "Felans are adept at jumping, adding 5' to both horizontal and vertical jump distances."},
              {name: 'Land on your feet',
               desc: "When falling, a Felan reduces the effective distance by 10'."},
              {name: 'Claws',
               desc: "Accurately slashing with their sharp claws, a Felan's unarmed damage is 2d6 slashing damage."},
              {name: 'Agile',
               desc: "Felans are noted for their dexterity. When taking a new career, a Felan may optionally " +
                       "exchange one of the listed four attribute increases for AGI, as long as it doesn’t result in " +
                       "a duplicate attribute advancement."}]});

var race_new_houseki = new Race({
    name: 'Houseki',
    description: "It’s hard to find a bad-natured Houseki. The Houseki are a crystalline race. Humanoid in shape, " +
         "Houseki grow constantly throughout their lives, getting larger and larger as the years pass. Their joints " +
         "tinkle and grind as they move; they speak slowly, and their voices have a very deep bass timbre to them. A " +
         "Houseki often very much typifies the strong-but-silent type.",
    size: 'varies',
    strength: 2, logic: 1, agility: -1, willpower: 1, psionics: 1,
    available_skills: ['[technical]', 'brawling', 'zero-g', 'carousing', 'mining', 'hardy'],
    exploits: [{name: 'Crystalline',
               desc: "As crystalline creatures, Houseki can be tough to damage. They gain a natural 5 SOAK, " +
                       "but are vulnerable (1d6) to sonic damage and take double damage from falling, due to their " +
                       "more brittle nature. Houseki are immune to the Bleeding condition."},
              {name: 'Always growing',
               desc: "A Houseki’s size category depends on its age category. Young Houseki are small, adult Houseki " +
                       "are medium, and old Houseki are large. In theory, Houseki can continue to grow forever, " +
                       "barring an accident."},
              {name: 'Crystal healing',
               desc: "A Houseki’s crystalline body repairs itself at a rapid rate. Houseki gain 1 HEALTH every hour " +
                       "(up to their maximum HEALTH). This repair can be visibly seen as new crystals form and grow " +
                       "on the Houseki’s body."},
              {name: 'Jagged crystal',
               desc: "The jagged protrusions all over a Houseki’s body mean that their natural damage type is " +
                       "piercing."},
              {name: 'Slow & careful',
               desc: "Houseki are naturally slow; they suffer -1d6 INITIATIVE (to a minimum of 1d6), and -1 SPEED."},
              {name: 'Non-breather',
               desc: "Houseki can exist comfortably in a vacuum. They do not need to breathe, and their crystalline " +
                       "structure means that pressure differences do not cause them damage."},
              {name: 'Implacable',
               desc: "Houseki are noted for their implacability. When taking a new career, a Houseki may optionally " +
                       "exchange one of the listed four attribute increases for WIL, as long as it doesn’t result in " +
                       "a duplicate attribute advancement."}]});

var race_new_human = new Race({
    name: 'Human',
    description: "There's a reasonably strong chance that you, the reader, are Human. You might be a little extra-human, " +
         "with mechanical improvements (glasses, a hearing aid, maybe some genuine replacement parts) but when things " +
         "boil down, you are a homo sapiens. This isn’t to say that Humans are not diverse—there is a wide range of " +
         "cultures and peoples across the worlds of O.L.D., N.O.W., and N.E.W. —but all of them have 10 toes, two " +
         "eyes, and so on. Where you are from and who raised you influence your outlook on life more than anything " +
         "else.\n\n" +
         "Human adventurers are extremely varied, from private eyes to blackhats, from knights to starship captains, " +
         "from martial artists to doctors, from wizards to space marines — the world, indeed the universe, is at " +
         "your fingertips!",
    size: 'medium',
    luck: 2,
    available_skills: ['any'],
    exploits: [{name: 'Varied',
               desc: "Humans boast more variation within their species than most. Add 2 to any attribute, " +
                       "and add a further +1 to one other attribute (noted above)."},
              {name: 'Explorers',
               desc: "Driven by an inquisitive, exploratory nature, Humans recharge their LUC pool every time they " +
                       "stand on a planet new to them."},
              {name: 'Enduring',
               desc: "Humans may not be the fastest or the strongest, but they are known for their resilience. " +
                       "Humans get +1 to their 1d6 die roll to shake off a temporary condition."}]});

var race_new_human_belter = new Race({
    name: 'Human Belter',
    description: "Belters live on asteroids and low gravity worlds; some communities even exist in outer space, " +
         "living on starships for generation after generation. Tall and spindly, they have adapted to move in zero-g, " +
         "and are more flexible than those from Earth and similar planets.",
    size: 'medium',
    agility: 2, intuition: 2, luck: 1,
    available_skills: ['acrobatics', 'low-g', 'zero-g', 'jumping', 'astronomy', 'carousing', 'appraisal', 'mining',
                      'engineering', 'zero-g sports', 'gambling'],
    exploits: [{name: 'Frail form',
               desc: "Belters are tall and spindly. Their STRENGTH attributes can never exceed 6."},
              {name: 'Flexible',
               desc: "Belters can contort themselves into unusual positions and fit into the smallest spaces. When " +
                       "restrained by somebody not trained in Belter restraint techniques, they can escape in one " +
                       "minute. If the captor is aware of this they can make an opposed LOG v AGI check to nullify " +
                       "this ability."},
              {name: 'Hard-to-hit',
               desc: "Belters often have to dodge flying debris and rocks. They gain +2 RANGED DEFENSE."},
              {name: 'Hold breath',
               desc: "A Belter can hold their breath for 10 minutes before having to form any kind of suffocation " +
                       "dice pool. This enables them to move in vacuums and ignore noxious fumes."}]});

var race_new_human_clone = new Race({
    name: 'Human Clone',
    description: "Genetic engineering is easy in the far future and many babies are grown artificially. There’s not much " +
         "stigma to this, although the fact that those humans tend to be slightly better at most things than others " +
         "can inspire occasional jealousy. Most clones, grown in tanks, emerge into the world with the body and mind " +
         "of a five-year old.",
    size: 'medium',
    strength: 1, endurance: 1, agility: 1, intuition: 1, logic: 1, willpower: 1,
    available_skills: ['[developmental]', '[physical]'],
    exploits: [{name: 'Ingrained skill package',
               desc: "Clones come into being with existing skills and abilities. Choose one category from the " +
                       "following: [combat], [physical], [academic]. The character gains four skills at one rank from " +
                       "your chosen category. This does not increase a skill to higher than one rank."},
              {name: 'Slow aging',
               desc: "Clones age at half the speed of regular humans."},
              {name: 'Fast healing',
               desc: "Clones heal an extra 1d6 HEALTH each day."}]});

var race_new_human_jovian = new Race({
    name: 'Human Jovian',
    description: "The diametric opposite of Belters, Jovians are powerful, short humans from high gravity worlds. They were " +
         "named after the highest gravity planet in the Sol system, despite no human ever having lived on Jupiter " +
         "itself. Rarely exceeding 5’ in height, Jovians are known for their strength and endurance. Serious and slow " +
         "to laugh, they regard Belters as spindly, weak cowards. Jovians feel at home in high-g environments, " +
         "and struggle in low and zero-g spaces.",
    size: 'medium',
    strength: 1, endurance: 2, willpower: 1,
    available_skills: ['hardy', 'carrying', 'mining', 'high-g', '[technical]'],
    exploits: [{name: 'Sturdy frame',
               desc: "Jovians are short and powerful. They gain +2d6 HEALTH and natural SOAK 3."},
              {name: 'Crushing environments',
               desc: "Jovians gain high-g as a natural movement rates, gaining that speed equal to their regular " +
                       "SPEED."},
              {name: 'Set in their ways',
               desc: "Jovians are serious, almost dour, and hard to change. Something about high gravity results in " +
                       "inflexibility of mind in humans, and Jovians display this in abundance. Jovians gain +2 " +
                       "MENTAL DEFENSE."},
              {name: 'Hard to move',
               desc: "When a Jovian would normally suffer forced movement (from a push, knockback, or similar " +
                       "attack), they can spend a LUC die to remain in place."},
              {name: 'Inexhaustible',
               desc: "Jovians are immune to the Fatigued condition."}]});

var race_new_human_warped = new Race({
    name: 'Human Warped',
    description: "There’s something strange about black holes, and those who come from planets orbiting these mysterious " +
         "bodies are always a little bit different. Visitors to those planets often report hallucinations and " +
         "nightmares, but those who evolved there have adapted to these phenomena.\n\nThe Warped are generally " +
         "regarded as freaks. They talk funny, and have staring, violet eyes which tend to make people feel " +
         "uncomfortabke. Those who do not know them assume that they are on some kind of recreational drug - their " +
         "mannerisms are sudden, often seemingly random, and they tend to twitch in an unnerving manner and suddenly " +
         "address people who aren’t there.",
    size: 'medium',
    intuition: 2, psionics: 4, charisma: -1,
    available_skills: ['[psionic]', 'perception', 'insight', 'foresight', 'astrogation'],
    exploits: [{name: 'Crazed minds',
               desc: "The Warped really are a bit different. They think differently, and act strangely. They gain " +
                       "+2 MENTAL DEFENSE."},
              {name: 'Warped psionics',
               desc: "Warped begin play with two clairsentience or clairvoyance psionic powers."},
              {name: 'See ghosts',
               desc: "Warped claim to be able to see ghosts. Whether these are hallucinations or some strange " +
                       "artifact of the black holes they grown up near, these ghosts are able to impart information. " +
                       "Once per day, a Warped can spend a LUC die and ask one yes/no question which the GM will " +
                       "answer truthfully."}]});

var race_new_jamila = new Race({
    name: 'Jamila',
    description: "The Jamila are the perfect, idealized humanoid form and are shockingly beautiful to other humanoid races. " +
         "Not known for their skills in technology or their strength of body, these androgynous beings are some of " +
         "best diplomats, manipulators, and con artists in the galaxy. They also have a gland which constantly " +
         "excretes a mist of pheromones that can make other creatures more pliable to their wishes.",
    size: 'medium',
    intuition: 2, charisma: 2, psionics: 1,
    available_skills: ['[social]', '[subterfuge]', '[artistic]'],
    exploits: [{name: 'Pheromones',
               desc: "Jamila are surrounded by a cloud of pheromones which extends 5’ around their body. Once per " +
                       "day, using two actions, the Jamila is able to manipulate one target within the cloud with a " +
                       "CHA-based mental attack; the target gains the Charmed condition. The target is thereafter " +
                       "immune to the effect for one day. Targets always know when a Jamila attempts to do this, " +
                       "and will almost always resent it."},
              {name: 'Draining life force',
               desc: "Jamila are able to make a melee attack against a target; on a successful attack, they drain " +
                       "their victim’s life force (HEALTH) by 1d6 psychic damage, and gain the same HEALTH back " +
                       "themselves. The experience is intensely pleasurable for the victim. A victim reduced to zero " +
                       "HEALTH in this manner does not form a death dice pool. Any given target can only be affected " +
                       "by this attack once per day. The 1d6 damage cannot be increased beyond a flat 1d6."},
              {name: 'Diplomats',
               desc: "Jamila are noted for their charm. When taking a new career, a Jamila may optionally exchange " +
                       "one of the listed four attribute increases for CHA, as long as it doesn’t result in a " +
                       "duplicate attribute advancement."}]});

var race_new_ogron = new Race({
    name: 'Ogron',
    description: "Ogrons stand 7' tall.  Towering masses of muscle, accompanied by green skin and bestial tusks, they so much " +
         "resemble the ogres of fairytale and lore than humankind named them after the mythical creatures. Ogrons " +
         "have a reputation for stupidity.  While it's certainly true that most of humankind outstrips the Ogron " +
         "species in terms of intelligence and education, ogrons aren't quite as stupid as many expect – they, " +
         "as a species, do manage to operate and build starships, after all.\n\nOgron adventurers tend to be " +
         "mercenaries and soldiers.\n\nTypical names (male and female): Lúrbag, Lugog, Gorrat, Ugbug, Bolglúk, " +
         "Maudush, Radhur, Ugdush, Grishog.",
    size: 'large',
    strength: 2, endurance: 2,
    available_skills: ['carrying', 'hardy', 'bravery', 'intimidate'],
    exploits: [{name: 'Dull-witted',
               desc: "Although slow-witted, ogron minds are hard to penetrate. They gain a +4 bonus to MENTAL " +
                       "DEFENSE."},
              {name: 'Smelly',
               desc: "No matter what they do, Ogrons smell bad. They take a permanent -1d6 penalty to any attempts " +
                       "at stealth."},
              {name: 'Brawny',
               desc: "Ogrons increase their carrying capacity by 50%."},
              {name: 'Stronger with age',
               desc: "Unlike most species, Ogrons can continue to increase their STR attribute into old age. " +
                       "Ancient Ogrons are incredibly strong."},
              {name: 'Strong',
               desc: "Ogrons are noted for their strength. When taking a new career, an Ogron may optionally " +
                       "exchange one of the listed four attribute increases for STR, as long as it doesn’t result in " +
                       "a duplicate attribute advancement."}]});

var race_new_pajak = new Race({
    name: 'Pajak',
    description: "With compound eyes and segmented bodies, humanity originally believed the Pajak were similar to other " +
         "insectoid races they’d met— hive minded and generally unpleasant. They were only half right. Pajak are a " +
         "species that is incredibly individualistic and materialistic, taking greed and avarice to new " +
         "levels.\n\nThe Pajak are unable to pronounce the letter “s”; any “s” in a word comes out as a prolonged " +
         "“zzzz” — “Yezzzz, I think zzzo.” All Pajak names begin with “Zz”. An unscrupulous race as a whole, " +
         "many Pajak are thieves and bandits. Individualistic, they don’t band together well; for this reason, " +
         "Pajak tend to be lower on the socio-economic scales than many races.\n\nPajak have shorter lives, " +
         "on average, than humans, and tend to have very large families.",
    size: 'medium',
    agility: 2, endurance: -1, intuition: 2, charisma: -1,
    available_skills: ['[subterfuge]', '[scientific]', 'bureaucracy', 'hypnotism'],
    exploits: [{name: 'Insectoid',
               desc: "As insectoids, climbing is a natural movement rate for the Pajak; they gain a CLIMB speed " +
                       "equal to their regular SPEED. Pajak can move across walls and ceilings with ease."},
              {name: 'Compound eyes',
               desc: "The compound eyes of a Pajak give it +1d6 to perception checks and all-around sight, " +
                       "making it immune to flanks and crossfires. Additionally, Pajaks are noted for their " +
                       "perceptivness. When taking a new career, a Pajak may optionally exchange one of the listed " +
                       "four attribute increases for INT, as long as it doesn’t result in a duplicate attribute " +
                       "advancement."},
              {name: 'Thin bones',
               desc: "A Pajak is light (weighing half what a creature its size normally would) and thin. Its " +
                       "carrying capacity is half normal. However, they are double-jointed, and any attempt to escape " +
                       "a physically restrictive situation gains a +1d6 bonus."},
              {name: 'Bite',
               desc: "Pajak have a bite attack which does 2d6 piercing/poison damage."}]});

var race_new_roden = new Race({
    name: 'Roden',
    description: "Roden, descended from rats, look as sly and shifty as their namesakes would suggest. Twitchy and " +
         "nervous-looking, Roden have a fast metabolism and are rarely found not gnawing on something. Rodens tend to " +
         "be scavengers and thieves.",
    size: 'small',
    agility: 2, luck: 2, charisma: 1,
    available_skills: ['[subterfuge]', 'appraisal', 'perception'],
    exploits: [{name: 'Gnaw away',
               desc: "A Roden can gnaw though anything, given time. Most constantly gnaw on things all day. The " +
                       "Roden’s bite does double damage to inanimate objects."},
              {name: 'Tail',
               desc: "A Roden’s long tail can be used for balancing. Any time the Roden would normally fall or be " +
                       "rendered prone, it can spend one LUC die to remain standing."},
              {name: 'Light sensitivity',
               desc: "Roden’s suffer -1d6 to all checks when in bright light. However, they do have darksight to a " +
                       "distance of 5’ per point of INT."},
              {name: 'Navigators',
               desc: "Perhaps the species spent time in mazes in the past; Rodens start play with 3 ranks (2d6) in " +
                       "either navigation or astrogation and can always sense direction."}]});

var race_new_simp = new Race({
    name: 'Simp',
    description: "Simps are uplifted chimpanzees. Agile and strong, they can climb and jump with ease. In space, " +
         "they make excellent engineers, able to move easily in zero-g. Simps are shorter than humans, but stronger. " +
         "Typically, a Simp stands about 4-5’ in height, with long arms, and is covered with black or brown fur. They " +
         "can walk upright or they can walk on their knuckles when running. Simps are only one of many varieties of " +
         "uplifted monkeys and apes.\n\nSimps sometimes have a bit of a chip on their shoulder regarding their " +
         "ancestry. Their relationship with humankind has not been one of equals and, truth to tell, humankind still " +
         "does not treat Simps as equals. This is compounded by the Simps’ natural tendency towards social " +
         "hierarchies.",
    size: 'medium',
    strength: 2, agility: 2, logic: 1, psionics: 1,
    available_skills: ['jumping', 'climbing', 'acrobatics', 'dodging', 'throwing', 'zero-g', 'engineering'],
    exploits: [{name: 'Natural climbers',
               desc: "Simps gain climbing as a natural movement mode, able to climb at their full speed with no " +
                       "checks needed."},
              {name: 'Great leap',
               desc: " Simps gain +5’ to both horizontal and vertical jump distances, and are able to use their " +
                       "full jump distances from a standing start."},
              {name: 'Throwers',
               desc: "Simps are great at throwing things. They double the range increment of thrown items and do " +
                       "+1d6 damage with thrown weapons."},
              {name: 'Agile',
               desc: "Simps are noted for their dexterity. When taking a new career, a Simp may optionally exchange " +
                       "one of the listed four attribute increases for AGI, as long as it doesn’t result in a " +
                       "duplicate attribute advancement."}]});

var race_new_solurial = new Race({
    name: 'Solurial',
    description: "Solurials are large, plant-based creatures, able to convert solar energy directly thorugh the process of " +
         "photosynthesis. They regard the devouring of animals and plants to be abhorrent and barabric. Patient, " +
         "and slow to act, they are known for their artistic natures.",
    size: 'large',
    strength: 2, endurance: 1, agility: -1, willpower: 1,
    available_skills: ['[outdoor]', '[artistic]'],
    exploits: [{name: 'Plant',
               desc: "Solurials have the plant cretaure type. They are vulnerable (1d6) to fire, but have 10 " +
                       "natural SOAK. They are immune to the Bleeing and Fatigued conditions, and ignore natural " +
                       "difficult terrain."},
              {name: 'Lashing vines',
               desc: "A Solurial has a melee reach of 3 squares (15'), as they lash out with long limbs and vines."},
              {name: 'Ponderous',
               desc: "Solurials suffer a -2 SPEED penalty (this cannot reduce SPEED to less than 3), and -1d6 to " +
                       "INITIATIVE (to a minimum of 1d6)."},
              {name: 'Photosynthesis',
               desc: "Solurials do not eat animal or vegebtable matter. Instead, they absorb sunlight directly. A " +
                       "Solurial's requirement for sunlight is simialr to a human's requirement for food - it can go " +
                       "a few days without but if left too long the Solurial will grow weak before withering to " +
                       "death. On starships, they will have special chambers or lamps."},
              {name: 'Extended families',
               desc: "Solurials have extended families in the hundreds or thousands, and can remember every single " +
                       "name. Solurials never forget information they have learned."}]});

var race_new_spartan = new Race({
    name: 'Spartan',
    description: "Spartans were named after the mythological human legends because of their warrior-based culture. " +
         "Aggressive, violent, quick to anger and easy to offend, a group of Spartans can empty a bar in minutes. Add " +
         "in their love of heavy drinking and the sheer joy they get from combat, it's easy to see why Spartans are " +
         "not the most popular of species. However, they do get frequently misunderstood – they are rarely bullies (" +
         "indeed, they'd see it as cowardly to attack someone weaker).\n\nSpartans excel as soldiers and other " +
         "warriors. They abhor indirect conflict, and will tend to avoid careers which involve subterfuge or " +
         "deception.\n\nTypical names (male and female): Kevak, Deshe, Bra-el, G'Vera, Dracla, K'Ehleyr, Kellein, " +
         "Kargan, Kalan, Adjur.",
    size: 'medium',
    strength: 1, agility: 1, endurance: 1,
    available_skills: ['[combat]', 'intimidate', 'carousing'],
    exploits: [{name: 'Berserker',
               desc: "Spartans can enter a berserker rage by tasting their own blood when they are below half " +
                       "HEALTH. This grants them a +1d6 bonus to all attack rolls. The rage only ends when all foes " +
                       "are dead, or the Spartan is rendered unconscious or restored to above half HEALTH."},
              {name: 'Redundant organs',
               desc: "Spartans have a number of redundant organs and heal fairly rapidly. They can spend five " +
                       "minutes to heal 2d6 HEALTH once per day."},
              {name: 'Warlike',
               desc: "Spartans gain one bonus [combat] skill."}]});

var race_new_synthetic = new Race({
    name: 'Synthetic',
    description: "Synthetics are Androids. They look much like Humans (the earliest models were unconvincing, but today’s " +
         "models are almost indistinguishable). Designed to be non-threatening, Synthetics have a calm, " +
         "passive demeanor. However, every Synthetic is different, with its own personality quirks. Synthetic are " +
         "self-aware, but generally subservient to Humans.",
    size: 'medium',
    strength: 3, logic: 2, agility: 1, psionics: -99,
    available_skills: ['computers', 'engineering', 'medicine', 'piloting', '[artistic]', '[academic]', '[scientific]'],
    exploits: [{name: 'Mindless',
               desc: "Synthetics are immune to any attacks which target MENTAL DEFENSE."},
              {name: 'Deterministic',
               desc: "A Synthetic’s PSI attribute can never rise above zero, and an android can never spend LUC " +
                       "dice."},
              {name: 'Electronic vulnerability',
               desc: "As mechanoids, Synthetics are vulnerable (1d6) to electricity damage, vulnerable (2d6) to ion " +
                       "damage."},
              {name: 'Automaton',
               desc: "Synthetics do not need to eat, sleep, or breathe, and are immune to the Pain and Fatigued " +
                       "conditions."},
              {name: 'Skill package',
               desc: "Synthetics are built with a purpose in mind. They begin play with three bonus skills at rank " +
                       "3 (2d6). These skills must be from the Synthetic’s race skill choices."},
              {name: 'Factory specs',
               desc: "Synthetics do not take an origin career; they come fully formed from the factory and enter " +
                       "their first full career immediately."}]});

var race_new_trantor = new Race({
    name: 'Trantor',
    description: "Descended from elephants, these sturdy beings feature trunks and tusks. Trantors are a very social, " +
         "open people, who eat vast amounts and have extra-ordinary memories.\n\nTrantors are herbivores, and mainly " +
         "consume vegetation. Generally cheerful, they are large humanoids, heavyset, and not known for their feats " +
         "of dexterity.",
    size: 'large',
    strength: 2, logic: 2, charisma: 1, agility: -1,
    available_skills: ['hardy', 'carrying', 'concentration', 'history', 'negotiation', 'insight'],
    exploits: [{name: 'Tusks',
               desc: "A Trantor’s tusks increase its natural damage by +1d6 and change it to piercing damage."},
              {name: 'Trunk',
               desc: "The Trantor’s trunk can be used to perform a third action each round, although it cannot be " +
                       "used to attack or move."},
              {name: 'Never forget',
               desc: "Trantors have photographic memories and never forget anything. They gain one bonus [" +
                       "scientific] or [artistic] skill. They are noted for their memories. When taking a new career, " +
                       "a Trantor may optionally exchange one of the listed four attribute increases for LOG, " +
                       "as long as it doesn’t result in a duplicate attribute advancement."}]});

var race_new_venetian = new Race({
    name: 'Venetian',
    description: "Venetians are a slim, hairless species, standing at roughly the same height as humans. They tend towards " +
         "the ascetic, and, indeed, have a society which highly favors the monastic orders to which so many belong. " +
         "The Venetian style of self-discipline and avoidance of indulgence gives the species a somewhat aloof " +
         "demeanor which can be off-putting. Venetians are naturally psionic.\n\nMany of the Venetian monastic " +
         "orders, of which there are thousands, focus on the martial arts and self-discipline. For this reason, " +
         "Venetians – while being pacifistic in nature – are often very skilled combatants.\n\nVenetian adventurers " +
         "tend to be priests, healers, and scientists.\n\nTypical names (male and female): Ashonn, Branmer, Kozain, " +
         "Kalier, Tereval, Rathell, Sinehan, Nerrat, Dukhon, Deerenn, Delon, Mayen.",
    size: 'medium',
    agility: 1, logic: 2, luck: -2, psionics: 3,
    available_skills: ['reactions', 'acrobatics', 'perception', 'concentration', 'religion',
                      '[scientific]'],
    exploits: [{name: 'Naturally psionic',
               desc: "A society which integrates psionics from childhood, Venetians start play with one free " +
                       "psionic exploit."},
              {name: 'Acute hearing',
               desc: "Venetians have excellent hearing, and gain a +1d6 bonus to perception checks when sound is " +
                       "relevant."},
              {name: 'Learned',
               desc: "Venetians start with four species skills rather than three. The bonus (fourth) skill must be " +
                       "a [scientific] skill."},
              {name: 'Disciplined',
               desc: "The mental discipline of a venetian is such that they are completely immune to the Fatigued " +
                       "condition as long as they get 8 hours sleep per week. This is not a preferred situation, " +
                       "however."},
              {name: 'Long-lived',
               desc: "When creating a Venetian character, multiply their career lengths by 5."},
              {name: 'Logical',
               desc: "Venetians are noted for their intelligence and logic. When taking a new career, a Venetian " +
                       "may optionally exchange one of the listed four attribute increases for LOG, as long as it " +
                       "doesn’t result in a duplicate attribute advancement."}]});

var race_new_list = [race_new_android, race_new_borian, race_new_canid, race_new_corax, race_new_felan, race_new_houseki,
                 race_new_human, race_new_human_belter, race_new_human_clone, race_new_human_jovian,
                 race_new_human_warped, race_new_jamila, race_new_ogron, race_new_pajak, race_new_roden,
                 race_new_simp, race_new_solurial, race_new_spartan, race_new_synthetic, race_new_trantor,
                 race_new_venetian];