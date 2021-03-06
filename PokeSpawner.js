//THE DATA

//pokemon object constructor
let Pokemon = function (name, rarity, fem_chance, type1, type2, type_evolved,
                        abilities, egg_moves) {
    this.name = name;
    this.rarity = rarity;
    this.fem_chance = fem_chance;
    this.type1 = type1;
    this.type2 = type2;
    this.type_evolved = type_evolved;
    this.abilities = abilities;
    this.egg_moves = egg_moves;
};

let Pokemon_array = [
    //rarity 0 error
    [
        new Pokemon("Error", 0, 0.5, "ERROR", "ERROR", "ERROR",
            ["ERROR"],
            ["Error"])
    ],
    //rarity 1 overpopulated
    [
        new Pokemon("Rattata", 1, 0.5,"NORMAL","NONE","NONE",
            ["HUSTLE","GUTS","RUN AWAY"],
            ["Bite","Counter","Screech","Fury Swipes","Flame Wheel","Reversal","Uproar","Revenge","Me First","Last Resort","Final Gambit"]),
        new Pokemon("Zubat", 1, 0.5,"FLYING","POISON","NONE",
            ["INFILTRATOR","INNER FOCUS"],
            ["Gust","Whirlwind","Hypnosis","Quick Attack","Curse","Feint Attack","Giga Drain","Steel Wing","Pursuit","Brave Bird","Nasty Plot","Zen Headbutt","Defog","Venom Drench"]),
        new Pokemon("Sentret", 1, 0.5,"NORMAL","NONE","NONE",
            ["FRISK","KEEN EYE","RUN AWAY"],
            ["Double Edge","Focus Energy","Slash","Reversal","Charm","Pursuit","Iron Tail","Trick","Assist","Covet","Natural Gift","Last Resort","Captivate"]),
        new Pokemon("Ledyba", 1, 0.5,"FLYING","BUG","NONE",
            ["RATTLED","EARLY BIRD","SWARM"],
            ["Psybeam","Screech","Bide","Dizzy Punch","Encore","Focus Punch","Knock Off","Silver Wind","Tailwind","Bug Buzz","Drain Punch","Bug Bite"]),
        new Pokemon("Hoppip", 1, 0.5,"FLYING","GRASS","NONE",
            ["INFILTRATOR","LEAF GUARD","CHLOROPHYLL"],
            ["Double Edge","Confusion","Amnesia","Endure","Encore","Helping Hand","Aromatherapy","Worry Seed","Seed Bomb","Cotton Guard","Grassy Terrain"]),
        new Pokemon("Dunsparce", 1, 0.5,"NORMAL","NONE","NONE",
            ["RATTLED","RUN AWAY","SERENE GRACE"],
            ["Headbutt","Bite","Agility","Bide","Snore","Curse","Sleep Talk","Ancient Power","Magic Coat","Secret Power","Astonish","Trump Card","Hex"]),
        new Pokemon("Zigzagoon", 1, 0.5,"NORMAL","NONE","NONE",
            ["QUICK FEET","GLUTTONY","PICKUP"],
            ["Mud Slap","Charm","Sleep Talk","Pursuit","Helping Hand","Trick","Tickle","Rock Climb","Simple Beam"]),
        new Pokemon("Wurmple", 1, 0.5,"BUG","NONE","FLYING",
            ["RUN AWAY","SHIELD DUST"],
            ["No Egg Moves"]),
        new Pokemon("Wingull", 1, 0.5,"FLYING","WATER","NONE",
            ["RAIN DISH","HYDRATION","KEEN EYE"],
            ["Gust","Mist","Agility","Twister","Knock Off","Water Sport","Roost","Brine","Aqua Ring","Wide Guard","Soak"]),
        new Pokemon("Starly", 1, 0.5,"FLYING","NORMAL","NONE",
            ["RECKLESS","KEEN EYE"],
            ["Sand Attack","Fury Attack","Double Edge","Mirror Move","Foresight","Detect","Steel Wing","Pursuit","Uproar","Revenge","Feather Dance","Astonish","Roost"]),
        new Pokemon("Bidoof", 1, 0.5,"NORMAL","NONE","WATER",
            ["MOODY","UNAWARE","SIMPLE"],
            ["Double Edge","Quick Attack","Defense Curl","Skull Bash","Fury Swipes","Endure","Rollout","Sleep Talk","Odor Sleuth","Water Sport","Aqua Tail","Rock Climb"]),
        new Pokemon("Kricketot", 1, 0.5,"BUG","NONE","NONE",
            ["RUN AWAY","SHED SKIN"],
            ["No Egg Moves"]),
        new Pokemon("Burmy", 1, 0.5,"BUG","NONE","NONE",
            ["OVERCOAT","SHED SKIN"],
            ["No Egg Moves"]),
        new Pokemon("Buneary", 1, 0.5,"NORMAL","NONE","NONE",
            ["LIMBER","KLUTZ","RUN AWAY"],
            ["Fire Punch","Ice Punch","Thunder Punch","Low Kick","Flail","Sweet Kiss","Encore","Fake Out","Focus Punch","Teeter Dance","Mud Sport","Fake Tears","Cosmic Power","Sky Uppercut","Copycat","Switcheroo","Double Hit","Circle Throw"]),
        new Pokemon("Pidove", 1, 0.5,"FLYING","NORMAL","NONE",
            ["RIVALRY","SUPER LUCK","BIG PECKS"],
            ["Hypnosis","Steel Wing","Morning Sun","Uproar","Wish","Lucky Chant","Night Slash","Bestow"]),
        new Pokemon("Foongus", 1, 0.5,"POISON","GRASS","NONE",
            ["REGENERATOR","EFFECT SPORE"],
            ["Body Slam","Growth","Poison Powder","Stun Spore","Defense Curl","Endure","Rollout","Gastro Acid"]),
        new Pokemon("Durant", 1, 0.5,"STEEL","BUG","NONE",
            ["TRUANT","HUSTLE","SWARM"],
            ["Screech","Feint Attack","Endure","Baton Pass","Thunder Fang","Rock Climb"]),
        new Pokemon("Bunnelby", 1, 0.5,"NORMAL","NONE","GROUND",
            ["HUGE POWER","CHEEK POUCH","PICKUP"],
            ["Defense Curl","Spikes","Rollout"]),
        new Pokemon("Scatterbug", 1, 0.5,"BUG","NONE","FLYING",
            ["FRIEND GUARD","COMPOUND EYES","SHIELD DUST"],
            ["Poison Powder","Stun Spore","Rage Powder"]),
        new Pokemon("Binacle", 1, 0.5,"WATER","ROCK","NONE",
            ["PICKPOCKET","SNIPER","TOUGH CLAWS"],
            ["Helping Hand","Tickle","Water Sport","Switcheroo"]),
        new Pokemon("Pikipek", 1, 0.5,"FLYING","NORMAL","NONE",
            ["PICKUP","SKILL LINK","KEEN EYE"],
            ["Mirror Move","Uproar","Tailwind","Brave Bird","Boomburst"]),
        new Pokemon("Wishiwashi", 1, 0.5,"WATER","NONE","NONE",
            ["SCHOOLING"],
            ["Mist","Muddy Water","Water Sport","Water Pulse"])
    ],
    //rarity 2 common
    [
        new Pokemon("Rattata (Alolan)", 2, 0.5, "DARK", "NORMAL", "NONE",
            ["GLUTTONY", "HUSTLE", "THICK FAT"],
            ["Counter","Final Gambit","Fury Swipes","Me First","Revenge","Reversal","Snatch","Stockpile","Swallow","Switcheroo","Uproar"]),

      new Pokemon("Caterpie", 2, 0.5,"BUG","NONE","FLYING",
            ["RUN AWAY","SHIELD DUST"],
            ["No Egg Moves"]),
        new Pokemon("Weedle", 2, 0.5,"POISON","BUG","NONE",
            ["RUN AWAY","SHIELD DUST"],
            ["No Egg Moves"]),
        new Pokemon("Pidgey", 2, 0.5,"FLYING","NORMAL","NONE",
            ["BIG PECKS","TANGLED FEET","KEEN EYE"],
            ["Feint Attack","Foresight","Steel Wing","Pursuit","Uproar","Air Cutter","Air Slash","Brave Bird","Defog"]),
        new Pokemon("Spearow", 2, 0.5,"FLYING","NORMAL","NONE",
            ["SNIPER","KEEN EYE"],
            ["Razor Wind","Whirlwind","Quick Attack","Sky Attack","Tri Attack","Scary Face","Feint Attack","Steel Wing","Uproar","Feather Dance","Astonish"]),
        new Pokemon("Ekans", 2, 0.5,"POISON","NONE","NONE",
            ["UNNERVE","SHED SKIN","INTIMIDATE"],
            ["Slam","Disable","Spite","Scary Face","Pursuit","Iron Tail","Beat Up","Snatch","Poison Fang","Poison Tail","Sucker Punch","Switcheroo"]),
        new Pokemon("Sandshrew", 2, 0.5,"GROUND","NONE","NONE",
            ["SAND RUSH","SAND VEIL"],
            ["Counter","Flail","Endure","Rapid Spin","Metal Claw","Crush Claw","Mud Shot","Night Slash","Rock Climb","Chip Away","Rototiller"]),
        new Pokemon("Oddish", 2, 0.5,"POISON","GRASS","NONE",
            ["RUN AWAY","CHLOROPHYLL"],
            ["Razor Leaf","Flail","Charm","Synthesis","Nature Power","Ingrain","Secret Power","Teeter Dance","Tickle","After You"]),
        new Pokemon("Diglett", 2, 0.5,"GROUND","NONE","NONE",
            ["SAND FORCE","ARENA TRAP","SAND VEIL"],
            ["Headbutt","Screech","Reversal","Feint Attack","Endure","Pursuit","Ancient Power","Beat Up","Uproar","Memento","Astonish","Mud Bomb","Final Gambit"]),
        new Pokemon("Mankey", 2, 0.5,"FIGHTING","NONE","NONE",
            ["DEFIANT","ANGER POINT","VITAL SPIRIT"],
            ["Counter","Meditate","Reversal","Foresight","Sleep Talk","Encore","Beat Up","Focus Punch","Smelling Salts","Revenge","Close Combat","Night Slash","Power Trip"]),
        new Pokemon("Poliwag", 2, 0.5,"WATER","NONE","FIGHTING",
            ["SWIFT SWIM","DAMP","WATER ABSORB"],
            ["Mist","Bubble Beam","Haze","Splash","Mind Reader","Endure","Encore","Endeavor","Refresh","Ice Ball","Mud Shot","Water Sport","Water Pulse"]),
        new Pokemon("Bellsprout", 2, 0.5,"POISON","GRASS","NONE",
            ["GLUTTONY","CHLOROPHYLL"],
            ["Leech Life","Giga Drain","Encore","Synthesis","Ingrain","Weather Ball","Tickle","Bullet Seed","Magical Leaf","Natural Gift","Worry Seed","Power Whip","Acid Spray","Clear Smog","Belch"]),
        new Pokemon("Geodude", 2, 0.5,"GROUND","ROCK","NONE",
            ["SAND VEIL","STURDY","ROCK HEAD"],
            ["Mega Punch","Curse","Flail","Endure","Focus Punch","Block","Hammer Arm","Rock Climb","Wide Guard","Autotomize"]),
        new Pokemon("Shellder", 2, 0.5,"WATER","NONE","ICE",
            ["OVERCOAT","SKILL LINK","SHELL ARMOR"],
            ["Take Down","Twineedle","Bubble Beam","Screech","Barrier","Rapid Spin","Icicle Spear","Mud Shot","Rock Blast","Water Pulse","Aqua Ring","Avalanche"]),
        new Pokemon("Krabby", 2, 0.5,"WATER","NONE","NONE",
            ["SHEER FORCE","SHELL ARMOR","HYPER CUTTER"],
            ["Slam","Agility","Haze","Bide","Amnesia","Flail","Endure","Ancient Power","Knock Off","Tickle","Chip Away","Ally Switch"]),
        new Pokemon("Goldeen", 2, 0.5,"WATER","NONE","NONE",
            ["LIGHTNING ROD","WATER VEIL","SWIFT SWIM"],
            ["Body Slam","Hydro Pump","Psybeam","Haze","Skull Bash","Mud Slap","Sleep Talk","Mud Sport","Signal Beam","Mud Shot","Aqua Tail"]),
        new Pokemon("Spinarak", 2, 0.5,"POISON","BUG","NONE",
            ["SNIPER","INSOMNIA","SWARM"],
            ["Twineedle","Sonic Boom","Disable","Psybeam","Megahorn","Baton Pass","Pursuit","Signal Beam","Toxic Spikes","Night Slash","Rage Powder","Electroweb"]),
        new Pokemon("Mareep", 2, 0.5,"ELECTRIC","NONE","NONE",
            ["PLUS","STATIC"],
            ["Sand Attack","Body Slam","Take Down","Agility","Screech","Iron Tail","Flatter","Charge","Odor Sleuth","After You","Eerie Impulse","Electric Terrain"]),
        new Pokemon("Aipom", 2, 0.5,"NORMAL","NONE","NONE",
            ["SKILL LINK","PICKUP","RUN AWAY"],
            ["Double Slap","Slam","Counter","Agility","Screech","Spite","Pursuit","Beat Up","Fake Out","Revenge","Bounce","Covet","Switcheroo","Quick Guard"]),
        new Pokemon("Wooper", 2, 0.5,"GROUND","WATER","NONE",
            ["UNAWARE","WATER ABSORB","DAMP"],
            ["Double Kick","Body Slam","Counter","Recover","Curse","Sleep Talk","Encore","Ancient Power","Stockpile","Spit Up","Swallow","Mud Sport","Guard Swap","Acid Spray","After You","Eerie Impulse"]),
        new Pokemon("Snubbull", 2, 0.75,"FAIRY","NONE","NONE",
            ["RATTLED","RUN AWAY","INTIMIDATE"],
            ["Double Edge","Mimic","Metronome","Snore","Feint Attack","Heal Bell","Present","Crunch","Focus Punch","Smelling Salts","Fake Tears","Close Combat","Thunder Fang","Ice Fang","Fire Fang"]),
        new Pokemon("Corsola", 2, 0.75,"ROCK","WATER","NONE",
            ["REGENERATOR","NATURAL CURE","HUSTLE"],
            ["Mist","Screech","Confuse Ray","Barrier","Bide","Amnesia","Curse","Nature Power","Ingrain","Camouflage","Icicle Spear","Water Pulse","Aqua Ring","Head Smash","Liquidation"]),
        new Pokemon("Miltank", 2, 1.0,"NORMAL","NONE","NONE",
            ["SAP SIPPER","SCRAPPY","THICK FAT"],
            ["Double Edge","Seismic Toss","Dizzy Punch","Curse","Reversal","Endure","Sleep Talk","Present","Helping Hand","Hammer Arm","Natural Gift","Punishment","Heart Stamp","Belch"]),
        new Pokemon("Poochyena", 2, 0.5,"DARK","NONE","NONE",
            ["RATTLED","QUICK FEET","RUN AWAY"],
            ["Leer","Sleep Talk","Yawn","Snatch","Poison Fang","Astonish","Covet","Me First","Sucker Punch","Thunder Fang","Ice Fang","Fire Fang","Play Rough"]),
        new Pokemon("Lotad", 2, 0.5,"GRASS","WATER","NONE",
            ["OWN TEMPO","RAIN DISH","SWIFT SWIM"],
            ["Water Gun","Counter","Leech Seed","Razor Leaf","Flail","Giga Drain","Sweet Scent","Synthesis","Teeter Dance","Tickle"]),
        new Pokemon("Taillow", 2, 0.5,"FLYING","NORMAL","NONE",
            ["SCRAPPY","GUTS"],
            ["Whirlwind","Supersonic","Rage","Mirror Move","Sky Attack","Steel Wing","Pursuit","Refresh","Roost","Brave Bird","Defog","Hurricane","Boomburst"]),
        new Pokemon("Surskit", 2, 0.5,"WATER","BUG","NONE",
            ["RAIN DISH","SWIFT SWIM"],
            ["Hydro Pump","Psybeam","Mind Reader","Foresight","Endure","Signal Beam","Mud Shot","Bug Bite","Aqua Jet","Power Split","Fell Stinger","Lunge"]),
        new Pokemon("Shroomish", 2, 0.5,"GRASS","NONE","FIGHTING",
            ["QUICK FEET","POISON HEAL","EFFECT SPORE"],
            ["Charm","Focus Punch","Helping Hand","Fake Tears","Bullet Seed","Wake Up Slap","Natural Gift","Worry Seed","Seed Bomb","Drain Punch"]),
        new Pokemon("Slakoth", 2, 0.5,"NORMAL","NONE","NONE",
            ["TRUANT"],
            ["Body Slam","Slash","Snore","Curse","Sleep Talk","Pursuit","Crush Claw","Tickle","Hammer Arm","Night Slash","After You"]),
        new Pokemon("Nincada", 2, 0.5,"GROUND","BUG","FLYING",
            ["RUN AWAY","COMPOUND EYES"],
            ["Gust","Feint Attack","Endure","Silver Wind","Night Slash","Bug Buzz","Bug Bite","Final Gambit"]),
        new Pokemon("Whismur", 2, 0.5,"NORMAL","NONE","NONE",
            ["RATTLED","SOUNDPROOF"],
            ["Take Down","Smokescreen","Snore","Smelling Salts","Endeavor","Fake Tears","Extrasensory","Hammer Arm","Circle Throw","Disarming Voice"]),
        new Pokemon("Azurill", 2, 0.75,"FAIRY","NORMAL","WATER",
            ["SAP SIPPER","HUGE POWER","THICK FAT"],
            ["Slam","Body Slam","Sing","Encore","Refresh","Camouflage","Fake Tears","Tickle","Muddy Water","Water Sport","Copycat","Soak"]),
        new Pokemon("Skitty", 2, 0.75,"NORMAL","NONE","NONE",
            ["WONDER SKIN","NORMALIZE","CUTE CHARM"],
            ["Baton Pass","Fake Out","Uproar","Helping Hand","Wish","Fake Tears","Tickle","Cosmic Power","Last Resort","Sucker Punch","Mud Bomb","Zen Headbutt","Captivate","Simple Beam"]),
        new Pokemon("Plusle", 2, 0.5,"ELECTRIC","NONE","NONE",
            ["LIGHTNING ROD","PLUS"],
            ["Sing","Sweet Kiss","Charm","Wish","Fake Tears","Lucky Chant","Discharge","Tearful Look"]),
        new Pokemon("Minun", 2, 0.5,"ELECTRIC","NONE","NONE",
            ["VOLT ABSORB","MINUS"],
            ["Sing","Sweet Kiss","Charm","Wish","Fake Tears","Lucky Chant","Discharge","Tearful Look"]),
        new Pokemon("Volbeat", 2, 0.0,"BUG","NONE","NONE",
            ["PRANKSTER","SWARM","ILLUMINATE"],
            ["Seismic Toss","Dizzy Punch","Baton Pass","Encore","Trick","Silver Wind","Bug Buzz"]),
        new Pokemon("Illumise", 2, 1.0,"BUG","NONE","NONE",
            ["PRANKSTER","TINTED LENS","OBLIVIOUS"],
            ["Growth","Confuse Ray","Baton Pass","Encore","Fake Tears","Silver Wind","Bug Buzz","Captivate"]),
        new Pokemon("Gulpin", 2, 0.5,"POISON","NONE","NONE",
            ["GLUTTONY","STICKY HOLD","LIQUID OOZE"],
            ["Smog","Acid Armor","Curse","Mud Slap","Destiny Bond","Pain Split","Gunk Shot","Venom Drench"]),
        new Pokemon("Numel", 2, 0.5,"GROUND","FIRE","NONE",
            ["OWN TEMPO","SIMPLE","OBLIVIOUS"],
            ["Stomp","Body Slam","Growth","Defense Curl","Scary Face","Endure","Rollout","Ancient Power","Stockpile","Spit Up","Swallow","Heat Wave","Yawn","Howl","Mud Bomb","Iron Head"]),
        new Pokemon("Luvdisc", 2, 0.75,"WATER","NONE","NONE",
            ["HYDRATION","SWIFT SWIM"],
            ["Supersonic","Splash","Mud Sport","Water Sport","Brine","Aqua Ring","Captivate","Aqua Jet","Entrainment","Heal Pulse"]),
        new Pokemon("Budew", 2, 0.5,"POISON","GRASS","NONE",
            ["LEAF GUARD","POISON POINT","NATURAL CURE"],
            ["Pin Missile","Razor Leaf","Sleep Powder","Mind Reader","Cotton Spore","Spikes","Giga Drain","Synthesis","Grass Whistle","Extrasensory","Natural Gift","Seed Bomb","Leaf Storm"]),
        new Pokemon("Combee", 2, 0.125,"FLYING","BUG","NONE",
            ["HUSTLE","HONEY GATHER"],
            ["No Egg Moves"]),
        new Pokemon("Pachirisu", 2, 0.5,"ELECTRIC","NONE","NONE",
            ["VOLT ABSORB","PICKUP","RUN AWAY"],
            ["Tail Whip","Bite","Defense Curl","Flail","Rollout","Iron Tail","Flatter","Follow Me","Charge","Fake Tears","Covet","Bestow","Ion Deluge"]),
        new Pokemon("Buizel", 2, 0.5,"WATER","NONE","NONE",
            ["WATER VEIL","SWIFT SWIM"],
            ["Double Slap","Headbutt","Fury Swipes","Slash","Mud Slap","Fury Cutter","Baton Pass","Odor Sleuth","Me First","Aqua Ring","Aqua Tail","Switcheroo","Soak","Tail Slap"]),
        new Pokemon("Cherubi", 2, 0.5,"GRASS","NONE","NONE",
            ["CHLOROPHYLL"],
            ["Razor Leaf","Defense Curl","Rollout","Sweet Scent","Nature Power","Weather Ball","Aromatherapy","Grass Whistle","Tickle","Healing Wish","Natural Gift","Seed Bomb","Heal Pulse","Flower Shield"]),
        new Pokemon("Shellos", 2, 0.5,"WATER","NONE","GROUND",
            ["SAND FORCE","STORM DRAIN","STICKY HOLD"],
            ["Mist","Counter","Fissure","Sludge","Amnesia","Acid Armor","Curse","Mirror Coat","Stockpile","Spit Up","Swallow","Memento","Yawn","Brine","Trump Card","Clear Smog"]),
        new Pokemon("Glameow", 2, 0.75,"NORMAL","NONE","NONE",
            ["KEEN EYE","OWN TEMPO","LIMBER"],
            ["Sand Attack","Tail Whip","Bite","Quick Attack","Flail","Snatch","Fake Tears","Wake Up Slap","Assurance","Last Resort"]),
        new Pokemon("Stunky", 2, 0.5,"DARK","POISON","NONE",
            ["KEEN EYE","AFTERMATH","STENCH"],
            ["Double Edge","Leer","Haze","Smog","Scary Face","Pursuit","Iron Tail","Crunch","Astonish","Punishment","Flame Burst","Foul Play","Play Rough"]),
        new Pokemon("Croagunk", 2, 0.5,"FIGHTING","POISON","NONE",
            ["POISON TOUCH","DRY SKIN","ANTICIPATION"],
            ["Headbutt","Counter","Meditate","Dynamic Punch","Cross Chop","Fake Out","Smelling Salts","Wake Up Slap","Feint","Acupressure","Me First","Drain Punch","Vacuum Wave","Bullet Punch","Quick Guard"]),
        new Pokemon("Finneon", 2, 0.5,"WATER","NONE","NONE",
            ["WATER VEIL","STORM DRAIN","SWIFT SWIM"],
            ["Psybeam","Aurora Beam","Agility","Splash","Flail","Sweet Kiss","Charm","Tickle","Signal Beam","Brine","Aqua Tail"]),
        new Pokemon("Patrat", 2, 0.5,"NORMAL","NONE","NONE",
            ["ANALYTIC","KEEN EYE","RUN AWAY"],
            ["Screech","Flail","Foresight","Pursuit","Iron Tail","Revenge","Assurance"]),
        new Pokemon("Lillipup", 2, 0.5,"NORMAL","NONE","NONE",
            ["RUN AWAY","PICKUP","VITAL SPIRIT"],
            ["Sand Attack","Lick","Mud Slap","Endure","Charm","Pursuit","Yawn","Howl","Thunder Fang","Ice Fang","Fire Fang","After You","Psychic Fangs"]),
        new Pokemon("Purrloin", 2, 0.5,"DARK","NONE","NONE",
            ["PRANKSTER","UNBURDEN","LIMBER"],
            ["Pay Day","Feint Attack","Charm","Encore","Yawn","Fake Tears","Covet","Copycat","Foul Play"]),
        new Pokemon("Pansage", 2, 0.125,"GRASS","NONE","NONE",
            ["OVERGROW","GLUTTONY"],
            ["Low Kick","Role Play","Astonish","Grass Whistle","Tickle","Bullet Seed","Covet","Magical Leaf","Nasty Plot","Leaf Storm","Disarming Voice"]),
        new Pokemon("Pansear", 2, 0.125,"FIRE","NONE","NONE",
            ["BLAZE","GLUTTONY"],
            ["Fire Punch","Low Kick","Fire Spin","Sleep Talk","Heat Wave","Role Play","Astonish","Tickle","Covet","Nasty Plot","Disarming Voice"]),
        new Pokemon("Panpour", 2, 0.125,"WATER","NONE","NONE",
            ["TORRENT","GLUTTONY"],
            ["Hydro Pump","Low Kick","Role Play","Mud Sport","Astonish","Tickle","Covet","Aqua Ring","Aqua Tail","Nasty Plot","Disarming Voice"]),
        new Pokemon("Drilbur", 2, 0.5, "GROUND", "NONE", "STEEL",
            ["SAND RUSH", "SAND FORCE", "MOLD BREAKER"],
            ["Crush Claw", "Earth Power", "Iron Defense", "Metal Sound", "Rapid Spin", "Rock Climb", "Skull Bash", "Submission"]),
        new Pokemon("Timburr", 2, 0.25,"FIGHTING","NONE","NONE",
            ["IRON FIST","SHEER FORCE","GUTS"],
            ["Comet Punch","Counter","Reversal","Mach Punch","Foresight","Detect","Endure","Smelling Salts","Force Palm","Drain Punch","Wide Guard"]),
        new Pokemon("Tympole", 2, 0.5,"WATER","NONE","GROUND",
            ["WATER ABSORB","HYDRATION","SWIFT SWIM"],
            ["Mist","Snore","Sleep Talk","Refresh","Mud Sport","Water Pulse","Earth Power","Mud Bomb","After You"]),
        new Pokemon("Cottonee", 2, 0.5,"FAIRY","GRASS","NONE",
            ["CHLOROPHYLL","INFILTRATOR","PRANKSTER"],
            ["Encore","Beat Up","Memento","Fake Tears","Grass Whistle","Tickle","Natural Gift","Worry Seed","Switcheroo","Captivate"]),
        new Pokemon("Basculin", 2, 0.5,"WATER","NONE","NONE",
            ["MOLD BREAKER","ADAPTABILITY","RECKLESS/ROCK HEAD"],
            ["Bubble Beam","Agility","Rage","Swift","Whirlpool","Revenge","Muddy Water","Mud Shot","Brine"]),
        new Pokemon("Minccino", 2, 0.75,"NORMAL","NONE","NONE",
            ["SKILL LINK","TECHNICIAN","CUTE CHARM"],
            ["Tail Whip","Flail","Mud Slap","Endure","Sleep Talk","Iron Tail","Knock Off","Fake Tears","Aqua Tail"]),
        new Pokemon("Ducklett", 2, 0.5,"FLYING","WATER","NONE",
            ["HYDRATION","BIG PECKS","KEEN EYE"],
            ["Gust","Mirror Move","Steel Wing","Mud Sport","Air Cutter","Brine","Lucky Chant","Me First"]),
        new Pokemon("Vanillite", 2, 0.5,"ICE","NONE","NONE",
            ["WEAK ARMOR","SNOW CLOAK","ICE BODY"],
            ["Powder Snow","Imprison","Iron Defense","Water Pulse","Natural Gift","Magnet Rise","Ice Shard","Autotomize"]),
        new Pokemon("Deerling", 2, 0.5,"GRASS","NORMAL","NONE",
            ["SERENE GRACE","SAP SIPPER","CHLOROPHYLL"],
            ["Agility","Sleep Talk","Baton Pass","Synthesis","Fake Tears","Odor Sleuth","Grass Whistle","Natural Gift","Worry Seed"]),
        new Pokemon("Emolga", 2, 0.5,"FLYING","ELECTRIC","NONE",
            ["MOTOR DRIVE","STATIC"],
            ["Charm","Baton Pass","Iron Tail","Astonish","Tickle","Covet","Shock Wave","Roost","Air Slash","Ion Deluge","Speed Swap"]),
        new Pokemon("Alomomola", 2, 0.5,"WATER","NONE","NONE",
            ["REGENERATOR","HYDRATION","HEALER"],
            ["Mist","Endure","Pain Split","Mirror Coat","Refresh","Tickle"]),
        new Pokemon("Stunfisk", 2, 0.5,"ELECTRIC","GROUND","NONE",
            ["SAND VEIL","LIMBER","STATIC"],
            ["Curse","Spite","Spark","Sleep Talk","Pain Split","Yawn","Astonish","Shock Wave","Me First","Earth Power","Reflect Type","Eerie Impulse"]),
        new Pokemon("Mienfoo", 2, 0.5,"FIGHTING","NONE","NONE",
            ["RECKLESS","REGENERATOR","INNER FOCUS"],
            ["Low Kick","Endure","Baton Pass","Vital Throw","Smelling Salts","Knock Off","Feint","Me First","Ally Switch"]),
        new Pokemon("Fletchling", 2, 0.5,"FLYING","NORMAL","FIRE",
            ["GALE WINGS","BIG PECKS"],
            ["Snatch","Tailwind","Quick Guard"]),
        new Pokemon("Litleo", 2, 0.875,"NORMAL","FIRE","NONE",
            ["MOXIE","UNNERVE","RIVALRY"],
            ["Fire Spin","Yawn","Snatch","Flare Blitz","Entrainment"]),
        new Pokemon("Skiddo", 2, 0.5,"GRASS","NONE","NONE",
            ["GRASS PELT","SAP SIPPER"],
            ["Defense Curl","Rollout","Milk Drink"]),
        new Pokemon("Phantump", 2, 0.5,"GRASS","GHOST","NONE",
            ["HARVEST","FRISK","NATURAL CURE"],
            ["Imprison","Grudge","Bestow","Venom Drench"]),
        new Pokemon("Pumpkaboo", 2, 0.5,"GRASS","GHOST","NONE",
            ["INSOMNIA","FRISK","PICKUP"],
            ["Disable","Destiny Bond","Bestow"]),
        new Pokemon("Yungoos", 2, 0.5,"NORMAL","NONE","NONE",
            ["ADAPTABILITY","STRONG JAW","STAKEOUT"],
            ["Revenge","Last Resort"]),
        new Pokemon("Crabrawler", 2, 0.5,"FIGHTING","NONE","ICE",
            ["ANGER POINT","IRON FIST","HYPER CUTTER"],
            ["Amnesia","Superpower","Endeavor","Wide Guard"]),
        new Pokemon("Mareanie", 2, 0.5,"WATER","POISON","NONE",
            ["REGENERATOR","LIMBER","MERCILESS"],
            ["Haze","Stockpile","Spit Up","Swallow"]),
        new Pokemon("Dewpider", 2, 0.5,"BUG","WATER","NONE",
            ["WATER ABSORB","WATER BUBBLE"],
            ["Aurora Beam","Stockpile","Spit Up","Power Split"]),
        new Pokemon("Fomantis", 2, 0.5,"GRASS","NONE","NONE",
            ["CONTRARY","LEAF GUARD"],
            ["Giga Drain","Weather Ball","Aromatherapy","Defog","Leaf Storm"]),
        new Pokemon("Pyukumuku", 2, 0.5,"WATER","NONE","NONE",
            ["UNAWARE","INNARDS OUT"],
            ["Endure","Tickle","Bestow","Venom Drench"])
    ],
    //rarity 3: uncommon
    [
        new Pokemon("Nidoran (M)", 3, 0.0, "POISON", "NONE", "GROUND",
            ["POISON POINT", "RIVALRY", "HUSTLE"],
            ["Amnesia","Beat Up","Chip Away","Confusion","Counter","Disable","Endure","Head Smash","Iron Tail","Poison Tail","Sucker Punch","Supersonic","Take Down","Venom Drench"]),
        new Pokemon("Nidoran (F)", 3, 1.0, "POISON", "NONE", "GROUND",
            ["POISON POINT", "RIVALRY", "HUSTLE"],
            ["Beat Up", "Charm", "Chip Away", "Counter", "Disable", "Endure", "Focus Energy","Iron Tail","Poison Tail","Pursuit","Skull Bash","Supersonic","Take Down","Venom Drench"]),
        new Pokemon("Sandshrew (Alolan)", 3, 0.5, "ICE", "STEEL", "NONE",
            ["SNOW CLOAK", "SLUSH RUSH"],
            ["Amnesia","Chip Away","Counter","Crush Claw","Curse","Endure","Flail","Hone Claws","Icicle Crash","Icicle Spear","Metal Claw","Night Slash"]),
        new Pokemon("Diglett (Alolan)", 3, 0.5, "GROUND", "STEEL", "NONE",
            ["SAND VEIL", "TANGLING HAIR", "SAND FORCE"],
            ["Ancient Power","Beat Up","Endure","Feint Attack","Final Gambit","Headbutt","Memento","Metal Sound","Pursuit","Reversal","Thrash"]),
        new Pokemon("Geodude (Alolan)", 3, 0.5, "ROCK", "ELECTRIC", "NONE",
            ["MAGNET PULL", "STURDY", "GALVANIZE"],
            ["Autotomize","Block","Counter","Curse","Endure","Flail","Magnet Rise","Rock Climb","Screech","Wide Guard"]),
        new Pokemon("Farfetchd", 3, 0.5, "NORMAL", "FLYING", "NONE",
            ["KEEN EYE", "INNER FOCUS", "DEFIANT"],
            ["Covet", "Curse", "Feather Dance","Final Gambit","First Impression","Flail","Foresight","Gust","Leaf Blade","Mirror Move","Mud-Slap","Night Slash","Quick Attack","Revenge","Roost","Simple Beam","Steel Wing","Trump Card"]),
        new Pokemon("Misdreavus", 3, 0.5, "GHOST", "NONE", "NONE",
            ["LEVITATE"],
            ["Curse", "Destiny Bond","Imprison","Me First","Memento","Nasty Plot","Ominous Wind","Screech","Shadow Sneak","Skill Swap","Spite","Sucker Punch","Wonder Room"]),
        new Pokemon("Cryogonal", 3, 0.5, "ICE", "NONE", "NONE",
            ["LEVITATE"],
            ["No Egg Moves"]),

        new Pokemon("Squirtle", 3, 0.125,"WATER","NONE","NONE",
            ["RAIN DISH","TORRENT"],
            ["Mist","Haze","Flail","Foresight","Mirror Coat","Fake Out","Yawn","Refresh","Mud Sport","Water Spout","Muddy Water","Brine","Aqua Ring","Aura Sphere","Dragon Pulse","Aqua Jet"]),
        new Pokemon("Paras", 3, 0.5,"GRASS","BUG","NONE",
            ["DAMP","DRY SKIN","EFFECT SPORE"],
            ["Psybeam","Counter","Leech Seed","Agility","Screech","Flail","Endure","Pursuit","Sweet Scent","Metal Claw","Natural Gift","Cross Poison","Bug Bite","Wide Guard","Rototiller","Fell Stinger"]),
        new Pokemon("Venonat", 3, 0.5,"POISON","BUG","NONE",
            ["RUN AWAY","TINTED LENS","COMPOUND EYES"],
            ["Agility","Screech","Giga Drain","Baton Pass","Morning Sun","Skill Swap","Secret Power","Signal Beam","Toxic Spikes","Bug Bite","Rage Powder"]),
        new Pokemon("Meowth", 3, 0.5,"NORMAL","NONE","NONE",
            ["UNNERVE","TECHNICIAN","PICKUP"],
            ["Tail Whip","Hypnosis","Amnesia","Flail","Spite","Charm","Iron Tail","Assist","Snatch","Odor Sleuth","Punishment","Last Resort","Foul Play"]),
        new Pokemon("Psyduck", 3, 0.5,"WATER","NONE","NONE",
            ["SWIFT SWIM","CLOUD NINE","DAMP"],
            ["Psybeam","Hypnosis","Confuse Ray","Foresight","Sleep Talk","Encore","Cross Chop","Future Sight","Yawn","Refresh","Secret Power","Mud Bomb","Synchronoise","Simple Beam","Clear Smog"]),
        new Pokemon("Machop", 3, 0.25,"FIGHTING","NONE","NONE",
            ["STEADFAST","NO GUARD","GUTS"],
            ["Fire Punch","Ice Punch","Thunder Punch","Rolling Kick","Counter","Meditate","Encore","Smelling Salts","Knock Off","Tickle","Close Combat","Power Trick","Bullet Punch","Heavy Slam","Quick Guard"]),
        new Pokemon("Tentacool", 3, 0.5,"POISON","WATER","NONE",
            ["RAIN DISH","LIQUID OOZE","CLEAR BODY"],
            ["Aurora Beam","Confuse Ray","Haze","Bubble","Rapid Spin","Mirror Coat","Knock Off","Tickle","Muddy Water","Acupressure","Aqua Ring"]),
        new Pokemon("Slowpoke", 3, 0.5,"PSYCHIC","WATER","NONE",
            ["REGENERATOR","OWN TEMPO","OBLIVIOUS"],
            ["Stomp","Snore","Belly Drum","Sleep Talk","Future Sight","Mud Sport","Block","Me First","Zen Headbutt","Wonder Room","Belch"]),
        new Pokemon("Seel", 3, 0.5,"WATER","NONE","ICE",
            ["ICE BODY","HYDRATION","THICK FAT"],
            ["Slam","Horn Drill","Disable","Lick","Perish Song","Sleep Talk","Encore","Iron Tail","Fake Out","Stockpile","Spit Up","Swallow","Signal Beam","Icicle Spear","Water Pulse","Entrainment","Belch"]),
        new Pokemon("Gastly", 3, 0.5,"POISON","GHOST","NONE",
            ["LEVITATE"],
            ["Fire Punch","Ice Punch","Thunder Punch","Disable","Haze","Smog","Psywave","Scary Face","Perish Song","Grudge","Astonish","Clear Smog","Reflect Type"]),
        new Pokemon("Cubone", 3, 0.5,"GROUND","NONE","NONE",
            ["BATTLE ARMOR","LIGHTNING ROD","ROCK HEAD"],
            ["Double Kick","Screech","Skull Bash","Belly Drum","Perish Song","Detect","Endure","Ancient Power","Iron Head","Chip Away"]),
        new Pokemon("Lickitung", 3, 0.5,"NORMAL","NONE","NONE",
            ["CLOUD NINE","OBLIVIOUS","OWN TEMPO"],
            ["Body Slam","Amnesia","Snore","Curse","Belly Drum","Sleep Talk","Magnitude","Smelling Salts","Muddy Water","Hammer Arm","Zen Headbutt","Belch"]),
        new Pokemon("Rhyhorn", 3, 0.5,"ROCK","GROUND","NONE",
            ["RECKLESS","ROCK HEAD","LIGHTNING ROD"],
            ["Counter","Skull Bash","Curse","Reversal","Magnitude","Iron Tail","Crunch","Crush Claw","Metal Burst","Dragon Rush","Thunder Fang","Ice Fang","Fire Fang","Rock Climb","Guard Split","Rototiller"]),
        new Pokemon("Tangela", 3, 0.5,"GRASS","NONE","NONE",
            ["REGENERATOR","LEAF GUARD","CHLOROPHYLL"],
            ["Mega Drain","Leech Seed","Confusion","Amnesia","Flail","Giga Drain","Nature Power","Endeavor","Natural Gift","Power Swap","Leaf Storm","Rage Powder"]),
        new Pokemon("Staryu", 3, 0.5,"WATER","NONE","PSYCHIC",
            ["ANALYTIC","NATURAL CURE","ILLUMINATE"],
            ["No Egg Moves"]),
        new Pokemon("Magikarp", 3, 0.5,"WATER","NONE","FLYING",
            ["RATTLED","SWIFT SWIM"],
            ["No Egg Moves"]),
        new Pokemon("Eevee", 3, 0.125,"NORMAL","NONE","NONE",
            ["ANTICIPATION","ADAPTABILITY","RUN AWAY"],
            ["Curse","Flail","Detect","Endure","Charm","Wish","Yawn","Fake Tears","Tickle","Covet","Natural Gift","Captivate","Synchronoise","Stored Power"]),
        new Pokemon("Totodile", 3, 0.125,"WATER","NONE","NONE",
            ["SHEER FORCE","TORRENT"],
            ["Ice Punch","Thrash","Hydro Pump","Metal Claw","Crunch","Ancient Power","Flatter","Mud Sport","Fake Tears","Block","Water Sport","Dragon Dance","Water Pulse","Aqua Jet"]),
        new Pokemon("Hoothoot", 3, 0.5,"FLYING","NORMAL","NONE",
            ["TINTED LENS","KEEN EYE","INSOMNIA"],
            ["Wing Attack","Whirlwind","Supersonic","Agility","Night Shade","Mirror Move","Sky Attack","Feint Attack","Feather Dance","Defog"]),
        new Pokemon("Chinchou", 3, 0.5,"ELECTRIC","WATER","NONE",
            ["WATER ABSORB","ILLUMINATE","VOLT ABSORB"],
            ["Mist","Psybeam","Agility","Screech","Amnesia","Flail","Whirlpool","Shock Wave","Water Pulse","Brine","Soak"]),
        new Pokemon("Igglybuff", 3, 0.75,"FAIRY","NORMAL","NONE",
            ["FRIEND GUARD","COMPETITIVE","CUTE CHARM"],
            ["Feint Attack","Perish Song","Sleep Talk","Present","Wish","Fake Tears","Covet","Gravity","Punishment","Last Resort","Captivate","Heal Pulse","Misty Terrain"]),
        new Pokemon("Sunkern", 3, 0.5,"GRASS","NONE","NONE",
            ["EARLY BIRD","SOLAR POWER","CHLOROPHYLL"],
            ["Leech Seed","Bide","Curse","Endure","Encore","Sweet Scent","Morning Sun","Nature Power","Helping Hand","Ingrain","Grass Whistle","Natural Gift","Grassy Terrain"]),
        new Pokemon("Yanma", 3, 0.5,"FLYING","BUG","NONE",
            ["FRISK","COMPOUND EYES","SPEED BOOST"],
            ["Whirlwind","Double Edge","Leech Life","Reversal","Feint Attack","Pursuit","Secret Power","Silver Wind","Signal Beam","Feint"]),
        new Pokemon("Murkrow", 3, 0.5,"FLYING","DARK","NONE",
            ["PRANKSTER","SUPER LUCK","INSOMNIA"],
            ["Wing Attack","Whirlwind","Drill Peck","Screech","Confuse Ray","Mirror Move","Sky Attack","Feint Attack","Perish Song","Flatter","Feather Dance","Roost","Assurance","Psycho Shift","Brave Bird"]),
        new Pokemon("Pineco", 3, 0.5,"BUG","NONE","STEEL",
            ["OVERCOAT","STURDY"],
            ["Double Edge","Pin Missile","Counter","Swift","Flail","Endure","Revenge","Sand Tomb","Power Trick","Toxic Spikes","Stealth Rock"]),
        new Pokemon("Gligar", 3, 0.5,"FLYING","GROUND","NONE",
            ["IMMUNITY","SAND VEIL","HYPER CUTTER"],
            ["Razor Wind","Wing Attack","Double Edge","Counter","Agility","Baton Pass","Metal Claw","Sand Tomb","Poison Tail","Feint","Power Trick","Night Slash","Rock Climb","Cross Poison"]),
        new Pokemon("Qwilfish", 3, 0.5,"POISON","WATER","NONE",
            ["INTIMIDATE","SWIFT SWIM","POISON POINT"],
            ["Supersonic","Bubble Beam","Haze","Flail","Astonish","Signal Beam","Water Pulse","Brine","Aqua Jet","Acid Spray"]),
        new Pokemon("Shuckle", 3, 0.5,"ROCK","BUG","NONE",
            ["CONTRARY","GLUTTONY","STURDY"],
            ["Acid","Mud Slap","Sweet Scent","Helping Hand","Knock Off","Sand Tomb","Rock Blast","Acupressure","Final Gambit"]),
        new Pokemon("Sneasel", 3, 0.5,"ICE","DARK","NONE",
            ["PICKPOCKET","KEEN EYE","INNER FOCUS"],
            ["Ice Punch","Bite","Counter","Spite","Foresight","Pursuit","Fake Out","Assist","Crush Claw","Feint","Punishment","Avalanche","Ice Shard","Double Hit","Icicle Crash","Throat Chop"]),
        new Pokemon("Teddiursa", 3, 0.5,"NORMAL","NONE","NONE",
            ["HONEY GATHER","QUICK FEET","PICKUP"],
            ["Take Down","Double Edge","Counter","Seismic Toss","Belly Drum","Sleep Talk","Metal Claw","Cross Chop","Crunch","Yawn","Fake Tears","Close Combat","Night Slash","Chip Away","Play Rough"]),
        new Pokemon("Slugma", 3, 0.5,"FIRE","NONE","ROCK",
            ["WEAK ARMOR","FLAME BODY","MAGMA ARMOR"],
            ["Smokescreen","Acid Armor","Curse","Rollout","Stockpile","Spit Up","Swallow","Heat Wave","Memento","Guard Swap","Earth Power","Inferno"]),
        new Pokemon("Remoraid", 3, 0.5,"WATER","NONE","NONE",
            ["MOODY","SNIPER","HUSTLE"],
            ["Supersonic","Aurora Beam","Screech","Haze","Swift","Snore","Flail","Octazooka","Water Spout","Mud Shot","Rock Blast","Water Pulse","Acid Spray","Entrainment"]),
        new Pokemon("Delibird", 3, 0.5,"FLYING","ICE","NONE",
            ["INSOMNIA","HUSTLE","VITAL SPIRIT"],
            ["Ice Punch","Aurora Beam","Quick Attack","Splash","Spikes","Destiny Bond","Icy Wind","Rapid Spin","Future Sight","Fake Out","Ice Ball","Ice Shard","Bestow","Freeze Dry"]),
        new Pokemon("Houndour", 3, 0.5,"FIRE","DARK","NONE",
            ["UNNERVE","FLASH FIRE","EARLY BIRD"],
            ["Counter","Fire Spin","Rage","Reversal","Spite","Destiny Bond","Pursuit","Beat Up","Feint","Punishment","Sucker Punch","Nasty Plot","Thunder Fang","Fire Fang"]),
        new Pokemon("Stantler", 3, 0.5,"NORMAL","NONE","NONE",
            ["SAP SIPPER","FRISK","INTIMIDATE"],
            ["Double Kick","Thrash","Bite","Disable","Rage","Spite","Megahorn","Mud Sport","Extrasensory","Me First","Zen Headbutt"]),
        new Pokemon("Smeargle", 3, 0.5,"NORMAL","NONE","NONE",
            ["MOODY","TECHNICIAN","OWN TEMPO"],
            ["No Egg Moves"]),
        new Pokemon("Magby", 3, 0.25,"FIRE","NONE","NONE",
            ["VITAL SPIRIT","FLAME BODY"],
            ["Karate Chop","Mega Punch","Thunder Punch","Screech","Barrier","Focus Energy","Mach Punch","Belly Drum","Dynamic Punch","Iron Tail","Cross Chop","Power Swap","Flare Blitz","Belch"]),
        new Pokemon("Torchic", 3, 0.125,"FIRE","NONE","FIGHTING",
            ["SPEED BOOST","BLAZE"],
            ["Low Kick","Counter","Agility","Curse","Reversal","Endure","Baton Pass","Smelling Salts","Feather Dance","Crush Claw","Feint","Last Resort","Night Slash","Flame Burst"]),
        new Pokemon("Mudkip", 3, 0.125,"WATER","NONE","GROUND",
            ["DAMP","TORRENT"],
            ["Stomp","Double Edge","Bite","Counter","Barrier","Sludge","Curse","Mirror Coat","Ancient Power","Whirlpool","Uproar","Yawn","Refresh","Ice Ball","Avalanche","Mud Bomb","Wide Guard"]),
        new Pokemon("Seedot", 3, 0.5,"GRASS","NONE","DARK",
            ["PICKPOCKET","EARLY BIRD","CHLOROPHYLL"],
            ["Razor Wind","Take Down","Leech Seed","Quick Attack","Amnesia","Beat Up","Bullet Seed","Power Swap","Worry Seed","Nasty Plot","Defog","Foul Play","Grassy Terrain"]),
        new Pokemon("Makuhita", 3, 0.25,"FIGHTING","NONE","NONE",
            ["SHEER FORCE","GUTS","THICK FAT"],
            ["Counter","Feint Attack","Foresight","Detect","Dynamic Punch","Cross Chop","Focus Punch","Helping Hand","Revenge","Wake Up Slap","Feint","Bullet Punch","Wide Guard","Chip Away"]),
        new Pokemon("Nosepass", 3, 0.5,"ROCK","NONE","STEEL",
            ["SAND FORCE","MAGNET PULL","STURDY"],
            ["Double Edge","Endure","Rollout","Magnitude","Block","Stealth Rock","Wide Guard"]),
        new Pokemon("Sableye", 3, 0.5,"GHOST","DARK","NONE",
            ["PRANKSTER","STALL","KEEN EYE"],
            ["Recover","Mean Look","Moonlight","Flatter","Trick","Imprison","Feint","Metal Burst","Sucker Punch","Nasty Plot","Captivate"]),
        new Pokemon("Mawile", 3, 0.5,"FAIRY","STEEL","NONE",
            ["SHEER FORCE","INTIMIDATE","HYPER CUTTER"],
            ["Slam","Seismic Toss","Ancient Power","Poison Fang","Tickle","Metal Burst","Guard Swap","Punishment","Sucker Punch","Thunder Fang","Ice Fang","Fire Fang","Captivate","Misty Terrain"]),
        new Pokemon("Electrike", 3, 0.5,"ELECTRIC","NONE","NONE",
            ["MINUS","LIGHTNING ROD","STATIC"],
            ["Headbutt","Swift","Curse","Crunch","Uproar","Shock Wave","Switcheroo","Thunder Fang","Ice Fang","Fire Fang","Discharge","Flame Burst","Electro Ball","Eerie Impulse"]),
        new Pokemon("Carvanha", 3, 0.5,"DARK","WATER","NONE",
            ["SPEED BOOST","ROUGH SKIN"],
            ["Thrash","Double Edge","Hydro Pump","Swift","Destiny Bond","Ancient Power","Brine","Psychic Fangs"]),
        new Pokemon("Torkoal", 3, 0.5,"FIRE","NONE","NONE",
            ["SHELL ARMOR","DROUGHT","WHITE SMOKE"],
            ["Fissure","Skull Bash","Endure","Sleep Talk","Superpower","Yawn","Eruption","Flame Burst","Clear Smog"]),
        new Pokemon("Spinda", 3, 0.5,"NORMAL","NONE","NONE",
            ["CONTRARY","TANGLED FEET","OWN TEMPO"],
            ["Disable","Icy Wind","Baton Pass","Encore","Rapid Spin","Fake Out","Smelling Salts","Trick","Role Play","Wish","Assist","Fake Tears","Water Pulse","Psycho Shift","Psycho Cut","Guard Split","Spotlight"]),
        new Pokemon("Cacnea", 3, 0.5,"GRASS","NONE","DARK",
            ["WATER ABSORB","SAND VEIL"],
            ["Disable","Acid","Low Kick","Counter","Dynamic Punch","Smelling Salts","Teeter Dance","Grass Whistle","Block","Magical Leaf","Worry Seed","Seed Bomb","Switcheroo","Nasty Plot","Belch","Rototiller","Fell Stinger"]),
        new Pokemon("Zangoose", 3, 0.5,"NORMAL","NONE","NONE",
            ["TOXIC BOOST","IMMUNITY"],
            ["Razor Wind","Double Kick","Disable","Counter","Fury Swipes","Curse","Flail","Iron Tail","Metal Claw","Feint","Night Slash","Double Hit","Quick Guard","Final Gambit"]),
        new Pokemon("Seviper", 3, 0.5,"POISON","NONE","NONE",
            ["INFILTRATOR","SHED SKIN"],
            ["Body Slam","Scary Face","Iron Tail","Stockpile","Spit Up","Swallow","Assurance","Wring Out","Punishment","Night Slash","Switcheroo","Final Gambit"]),
        new Pokemon("Barboach", 3, 0.5,"GROUND","WATER","NONE",
            ["HYDRATION","ANTICIPATION","OBLIVIOUS"],
            ["Take Down","Thrash","Hydro Pump","Flail","Spark","Whirlpool","Muddy Water","Mud Shot","Dragon Dance","Earth Power"]),
        new Pokemon("Corphish", 3, 0.5,"WATER","NONE","DARK",
            ["ADAPTABILITY","SHELL ARMOR","HYPER CUTTER"],
            ["Body Slam","Double Edge","Metal Claw","Ancient Power","Superpower","Knock Off","Endeavor","Mud Sport","Dragon Dance","Trump Card","Switcheroo","Aqua Jet","Chip Away"]),
        new Pokemon("Feebas", 3, 0.5,"WATER","NONE","NONE",
            ["ADAPTABILITY","OBLIVIOUS","SWIFT SWIM"],
            ["Mist","Hypnosis","Confuse Ray","Haze","Dragon Breath","Iron Tail","Mirror Coat","Mud Sport","Tickle","Brine","Dragon Pulse","Captivate"]),
        new Pokemon("Kecleon", 3, 0.5,"NORMAL","NONE","NONE",
            ["PROTEAN","COLOR CHANGE"],
            ["Disable","Recover","Dizzy Punch","Fake Out","Trick","Magic Coat","Skill Swap","Snatch","Camouflage","Nasty Plot","Foul Play"]),
        new Pokemon("Shuppet", 3, 0.5,"GHOST","NONE","NONE",
            ["CURSED BODY","FRISK","INSOMNIA"],
            ["Disable","Confuse Ray","Foresight","Destiny Bond","Pursuit","Imprison","Astonish","Shadow Sneak","Gunk Shot","Ominous Wind","Phantom Force"]),
        new Pokemon("Duskull", 3, 0.5,"GHOST","NONE","NONE",
            ["FRISK","LEVITATE"],
            ["Haze","Feint Attack","Destiny Bond","Pain Split","Memento","Skill Swap","Imprison","Grudge","Dark Pulse","Ominous Wind"]),
        new Pokemon("Wynaut", 3, 0.5,"PSYCHIC","NONE","NONE",
            ["TELEPATHY","SHADOW TAG"],
            ["No Egg Moves"]),
        new Pokemon("Snorunt", 3, 0.5,"ICE","NONE","GHOST",
            ["MOODY","ICE BODY","INNER FOCUS"],
            ["Disable","Bide","Spikes","Rollout","Weather Ball","Fake Tears","Block","Switcheroo","Avalanche","Hex"]),
        new Pokemon("Spheal", 3, 0.5,"WATER","ICE","NONE",
            ["OBLIVIOUS","ICE BODY","THICK FAT"],
            ["Fissure","Curse","Belly Drum","Rollout","Sleep Talk","Stockpile","Spit Up","Swallow","Yawn","Signal Beam","Water Sport","Water Pulse","Aqua Ring"]),
        new Pokemon("Clamperl", 3, 0.5,"WATER","NONE","NONE",
            ["RATTLED","SHELL ARMOR"],
            ["Body Slam","Supersonic","Confuse Ray","Barrier","Endure","Refresh","Mud Sport","Muddy Water","Water Pulse","Brine","Aqua Ring"]),
        new Pokemon("Chimchar", 3, 0.125,"FIRE","NONE","FIGHTING",
            ["IRON FIST","BLAZE"],
            ["Fire Punch","Thunder Punch","Double Kick","Submission","Counter","Focus Energy","Encore","Fake Out","Heat Wave","Focus Punch","Helping Hand","Assist","Blaze Kick","Quick Guard"]),
        new Pokemon("Shinx", 3, 0.5,"ELECTRIC","NONE","NONE",
            ["GUTS","INTIMIDATE","RIVALRY"],
            ["Double Kick","Take Down","Quick Attack","Swift","Helping Hand","Fake Tears","Signal Beam","Howl","Shock Wave","Night Slash","Thunder Fang","Ice Fang","Fire Fang","Eerie Impulse"]),
        new Pokemon("Drifloon", 3, 0.5,"FLYING","GHOST","NONE",
            ["FLARE BOOST","UNBURDEN","AFTERMATH"],
            ["Body Slam","Disable","Hypnosis","Haze","Destiny Bond","Memento","Weather Ball","Tailwind","Defog","Clear Smog"]),
        new Pokemon("Bonsly", 3, 0.5,"ROCK","NONE","NONE",
            ["RATTLED","ROCK HEAD","STURDY"],
            ["Headbutt","Harden","Defense Curl","Self Destruct","Curse","Endure","Rollout","Sand Tomb","Stealth Rock"]),
        new Pokemon("Happiny", 3, 1.0,"NORMAL","NONE","NONE",
            ["FRIEND GUARD","SERENE GRACE","NATURAL CURE"],
            ["Counter","Metronome","Endure","Heal Bell","Present","Helping Hand","Aromatherapy","Gravity","Natural Gift","Last Resort","Mud Bomb"]),
        new Pokemon("Chatot", 3, 0.5,"FLYING","NORMAL","NONE",
            ["BIG PECKS","TANGLED FEET","KEEN EYE"],
            ["Supersonic","Agility","Night Shade","Steel Wing","Sleep Talk","Encore","Air Cutter","Nasty Plot","Defog","Boomburst"]),
        new Pokemon("Hippopotas", 3, 0.5,"GROUND","NONE","NONE",
            ["SAND FORCE","SAND STREAM"],
            ["Whirlwind","Body Slam","Curse","Sleep Talk","Stockpile","Spit Up","Swallow","Revenge","Slack Off","Sand Tomb"]),
        new Pokemon("Skorupi", 3, 0.5,"BUG","POISON","DARK",
            ["KEEN EYE","SNIPER","BATTLE ARMOR"],
            ["Whirlwind","Sand Attack","Twineedle","Agility","Screech","Confuse Ray","Slash","Feint Attack","Pursuit","Iron Tail","Poison Tail","Night Slash"]),
        new Pokemon("Carnivine", 3, 0.5,"GRASS","NONE","NONE",
            ["LEVITATE"],
            ["Slam","Leech Seed","Razor Leaf","Stun Spore","Sleep Powder","Giga Drain","Synthesis","Grass Whistle","Magical Leaf","Worry Seed","Rage Powder"]),
        new Pokemon("Snivy", 3, 0.125,"GRASS","NONE","NONE",
            ["CONTRARY","OVERGROW"],
            ["Glare","Mean Look","Pursuit","Sweet Scent","Iron Tail","Twister","Mirror Coat","Magical Leaf","Natural Gift","Captivate","Grassy Terrain"]),
        new Pokemon("Tepig", 3, 0.125,"FIRE","NONE","FIGHTING",
            ["THICK FAT","BLAZE"],
            ["Body Slam","Thrash","Curse","Sleep Talk","Magnitude","Superpower","Yawn","Endeavor","Covet","Sucker Punch","Heavy Slam"]),
        new Pokemon("Blitzle", 3, 0.5,"ELECTRIC","NONE","NONE",
            ["SAP SIPPER","MOTOR DRIVE","LIGHTNING ROD"],
            ["Double Kick","Sand Attack","Take Down","Double Edge","Rage","Screech","Endure","Snatch","Shock Wave","Me First"]),
        new Pokemon("Roggenrola", 3, 0.5,"ROCK","NONE","NONE",
            ["SAND FORCE","WEAK ARMOR","STURDY"],
            ["Take Down","Curse","Lock On","Magnitude","Rock Tomb","Gravity","Wide Guard","Autotomize","Heavy Slam"]),
        new Pokemon("Woobat", 3, 0.5,"FLYING","PSYCHIC","NONE",
            ["SIMPLE","KLUTZ","UNAWARE"],
            ["Supersonic","Charm","Flatter","Helping Hand","Knock Off","Fake Tears","Roost","Psycho Shift","Captivate","Synchronoise","Stored Power","Venom Drench"]),
        new Pokemon("Audino", 3, 0.5,"NORMAL","NONE","NONE",
            ["KLUTZ","REGENERATOR","HEALER"],
            ["Amnesia","Sweet Kiss","Sleep Talk","Heal Bell","Encore","Wish","Yawn","Healing Wish","Lucky Chant","Bestow","Draining Kiss"]),
        new Pokemon("Throh", 3, 0.0,"FIGHTING","NONE","NONE",
            ["MOLD BREAKER","INNER FOCUS","GUTS"],
            ["No Egg Moves"]),
        new Pokemon("Sawk", 3, 0.0,"FIGHTING","NONE","NONE",
            ["MOLD BREAKER","INNER FOCUS","STURDY"],
            ["No Egg Moves"]),
        new Pokemon("Sewaddle", 3, 0.5,"GRASS","BUG","NONE",
            ["OVERCOAT","CHLOROPHYLL","SWARM"],
            ["Razor Wind","Agility","Screech","Mind Reader","Baton Pass","Camouflage","Silver Wind","Me First","Air Slash"]),
        new Pokemon("Petilil", 3, 1.0,"GRASS","NONE","NONE",
            ["LEAF GUARD","OWN TEMPO","CHLOROPHYLL"],
            ["Bide","Endure","Charm","Sweet Scent","Ingrain","Grass Whistle","Healing Wish","Natural Gift","Worry Seed"]),
        new Pokemon("Sandile", 3, 0.5,"DARK","GROUND","NONE",
            ["ANGER POINT","MOXIE","INTIMIDATE"],
            ["Double Edge","Counter","Focus Energy","Mean Look","Pursuit","Beat Up","Uproar","Me First","Thunder Fang","Fire Fang","Rock Climb","Power Trip"]),
        new Pokemon("Darumaka", 3, 0.5,"FIRE","NONE","NONE",
            ["INNER FOCUS","HUSTLE"],
            ["Take Down","Focus Energy","Flame Wheel","Endure","Sleep Talk","Encore","Focus Punch","Yawn","Snatch","Hammer Arm"]),
        new Pokemon("Maractus", 3, 0.5,"GRASS","NONE","NONE",
            ["STORM DRAIN","CHLOROPHYLL","WATER ABSORB"],
            ["Leech Seed","Spikes","Grass Whistle","Bullet Seed","Bounce","Worry Seed","Seed Bomb","Wood Hammer","Grassy Terrain"]),
        new Pokemon("Dwebble", 3, 0.5,"ROCK","BUG","NONE",
            ["WEAK ARMOR","SHELL ARMOR","STURDY"],
            ["Counter","Curse","Spikes","Endure","Sand Tomb","Iron Defense","Block","Night Slash","Wide Guard","Rototiller"]),
        new Pokemon("Scraggy", 3, 0.5,"FIGHTING","DARK","NONE",
            ["INTIMIDATE","MOXIE","SHED SKIN"],
            ["Fire Punch","Ice Punch","Thunder Punch","Counter","Amnesia","Feint Attack","Detect","Fake Out","Dragon Dance","Drain Punch","Zen Headbutt","Quick Guard"]),
        new Pokemon("Karrablast", 3, 0.5,"BUG","NONE","STEEL",
            ["NO GUARD","SHED SKIN","SWARM"],
            ["Horn Attack","Counter","Screech","Feint Attack","Megahorn","Pursuit","Knock Off","Bug Bite","Drill Run"]),
        new Pokemon("Joltik", 3, 0.5,"ELECTRIC","BUG","NONE",
            ["SWARM","UNNERVE","COMPOUND EYES"],
            ["Poison Sting","Pin Missile","Disable","Feint Attack","Pursuit","Camouflage","Rock Climb","Cross Poison"]),
        new Pokemon("Shelmet", 3, 0.5,"BUG","NONE","NONE",
            ["OVERCOAT","SHELL ARMOR","HYDRATION"],
            ["Double Edge","Mind Reader","Mud Slap","Spikes","Endure","Baton Pass","Encore","Pursuit","Feint","Guard Split"]),
        new Pokemon("Pawniard", 3, 0.5,"STEEL","DARK","NONE",
            ["PRESSURE","INNER FOCUS","DEFIANT"],
            ["Headbutt","Mean Look","Pursuit","Revenge","Sucker Punch","Psycho Cut","Stealth Rock","Quick Guard"]),
        new Pokemon("Vullaby", 3, 1.0,"FLYING","DARK","NONE",
            ["WEAK ARMOR","OVERCOAT","BIG PECKS"],
            ["Scary Face","Steel Wing","Mean Look","Knock Off","Fake Tears","Roost","Foul Play"]),
        new Pokemon("Heatmor", 3, 0.5,"FIRE","NONE","NONE",
            ["WHITE SMOKE","FLASH FIRE","GLUTTONY"],
            ["Body Slam","Wrap","Curse","Feint Attack","Sleep Talk","Pursuit","Heat Wave","Tickle","Sucker Punch","Night Slash","Belch"]),
        new Pokemon("Chespin", 3, 0.125,"GRASS","NONE","FIGHTING",
            ["BULLETPROOF","OVERGROW"],
            ["Defense Curl","Curse","Belly Drum","Spikes","Rollout","Synthesis","Quick Guard"]),
        new Pokemon("Froakie", 3, 0.125,"WATER","NONE","DARK",
            ["PROTEAN","TORRENT"],
            ["Mind Reader","Camouflage","Mud Sport","Water Sport","Toxic Spikes","Bestow"]),
        new Pokemon("Flabebe", 3, 1.0,"FAIRY","NONE","NONE",
            ["SYMBIOSIS","FLOWER VEIL"],
            ["Camouflage","Copycat","Captivate"]),
        new Pokemon("Pancham", 3, 0.5,"FIGHTING","NONE","DARK",
            ["SCRAPPY","MOLD BREAKER","IRON FIST"],
            ["Me First","Storm Throw","Foul Play","Quick Guard","Quash","Power Trip"]),
        new Pokemon("Furfrou", 3, 0.5,"NORMAL","NONE","NONE",
            ["FUR COAT"],
            ["Mimic","Role Play","Refresh","Captivate","Work Up"]),
        new Pokemon("Clauncher", 3, 0.5,"WATER","NONE","NONE",
            ["MEGA LAUNCHER"],
            ["Crabhammer","Endure","Helping Hand","Aqua Jet","Entrainment"]),
        new Pokemon("Helioptile", 3, 0.5,"NORMAL","ELECTRIC","NONE",
            ["SOLAR POWER","SAND VEIL","DRY SKIN"],
            ["Agility","Glare","Camouflage","Electric Terrain"]),
        new Pokemon("Hawlucha", 3, 0.5,"FLYING","FIGHTING","NONE",
            ["MOLD BREAKER","UNBURDEN","LIMBER"],
            ["Agility","Baton Pass","Mud Sport","Me First","Entrainment","Quick Guard","Ally Switch"]),
        new Pokemon("Dedenne", 3, 0.5,"FAIRY","ELECTRIC","NONE",
            ["PLUS","PICKUP","CHEEK POUCH"],
            ["Helping Hand","Covet","Natural Gift","Eerie Impulse"]),
        new Pokemon("Grubbin", 3, 0.5,"BUG","NONE","ELECTRIC",
            ["SWARM"],
            ["Harden","Endure","Mud Shot","Electroweb"]),
        new Pokemon("Oricorio", 3, 0.75,"FLYING","NONE","NONE",
            ["DANCER"],
            ["Safeguard","Pluck","Tailwind","Captivate"]),
        new Pokemon("Cutiefly", 3, 0.5,"FAIRY","BUG","NONE",
            ["SWEET VEIL","SHIELD DUST","HONEY GATHER"],
            ["Baton Pass","Skill Swap","Bestow","Moonblast","Speed Swap"]),
        new Pokemon("Rockruff", 3, 0.5,"ROCK","NONE","NONE",
            ["STEADFAST","VITAL SPIRIT","KEEN EYE"],
            ["Thrash","Crush Claw","Sucker Punch","Thunder Fang","Fire Fang"]),
        new Pokemon("Mudbray", 3, 0.5,"GROUND","NONE","NONE",
            ["INNER FOCUS","STAMINA","OWN TEMPO"],
            ["Body Slam","Double Edge","Magnitude","Close Combat","Mud Bomb"]),
        new Pokemon("Morelull", 3, 0.5,"FAIRY","GRASS","NONE",
            ["RAIN DISH","EFFECT SPORE","ILLUMINATE"],
            ["Leech Seed","Growth","Poison Powder","Stun Spore","Amnesia"]),
        new Pokemon("Salandit", 3, 0.125,"FIRE","POISON","NONE",
            ["OBLIVIOUS","CORROSION"],
            ["Sand Attack","Fake Out","Knock Off","Snatch","Belch"]),
        new Pokemon("Bounsweet", 3, 1.0,"GRASS","NONE","NONE",
            ["SWEET VEIL","OBLIVIOUS","LEAF GUARD"],
            ["Charm","Synthesis","Grass Whistle","Feint","Acupressure","Play Rough"]),
        new Pokemon("Comfey", 3, 0.75,"FAIRY","NONE","NONE",
            ["NATURAL CURE","TRIAGE","FLOWER VEIL"],
            ["Amnesia","Endure","Lucky Chant","After You"]),
        new Pokemon("Wimpod", 3, 0.5,"WATER","BUG","NONE",
            ["WIMP OUT"],
            ["Harden","Spikes","Metal Claw","Aqua Jet","Wide Guard"]),
        new Pokemon("Sandygast", 3, 0.5,"GROUND","GHOST","NONE",
            ["SAND VEIL","WATER COMPACTION"],
            ["Amnesia","Destiny Bond","Ancient Power","Stockpile","Spit Up","Swallow"]),
        new Pokemon("Komala", 3, 0.5,"NORMAL","NONE","NONE",
            ["COMATOSE"],
            ["Sing","Charm","Wish","Play Rough"]),
        new Pokemon("Togedemaru", 3, 0.5,"STEEL","ELECTRIC","NONE",
            ["STURDY","LIGHTNING ROD","IRON BARBS"],
            ["Twineedle","Flail","Reversal","Present","Encore","Fake Out","Wish","Tickle","Disarming Voice"]),
        new Pokemon("Bruxish", 3, 0.5,"PSYCHIC","WATER","NONE",
            ["WONDER SKIN","STRONG JAW","DAZZLING"],
            ["Rage","Poison Fang","Water Pulse","Ice Fang"])
    ],
//rarity 4: rare
    [
        new Pokemon("Vulpix (Alolan)", 4, 0.75, "ICE", "NONE", "FAIRY",
            ["SNOW CLOAK", "SNOW WARNING"],
            ["Agility","Charm","Disable","Encore","Extrasensory","Flail","Freeze-Dry","Howl","Hypnosis","Moonblast","Power Swap","Spite","Secret Power","Tail Slap"]),
        new Pokemon("Meowth (Alolan)", 4, 0.5, "DARK", "NONE", "NONE",
            ["PICKUP", "TECHNICIAN", "RATTLED"],
            ["Amnesia","Assist","Charm","Covet","Flail","Flatter","Foul Play","Hypnosis","Parting Shot","Punishment","Snatch","Spite"]),
        new Pokemon("Grimer (Alolan)", 4, 0.5, "POISON", "DARK", "NONE",
            ["POISON TOUCH", "GLUTTONY", "POWER OF ALCHEMY"],
            ["Assurance","Clear Smog","Curse","Imprison","Mean Look","Power-Up Punch","Pursuit","Scary Face","Shadow Sneak","Spite","Spit Up", "Stockpile", "Swallow"]),
        new Pokemon("Relicanth", 4, 0.5, "WATER", "ROCK", "NONE",
            ["SWIFT SWIM", "ROCK HEAD", "STURDY"],
            ["Amnesia","Aqua Tail","Brine","Magnitude","Mud Shot","Mud-Slap","Muddy Water","Skull Bash","Sleep Talk","Snore","Water Sport","Zen Headbutt"]),
        new Pokemon("Mime Jr.", 4, 0.5, "PSYCHIC", "FAIRY", "NONE",
            ["SOUNDPROOF", "FILTER", "TECHNICIAN"],
            ["Charm","Confuse Ray","Fake Out","Future Sight","Healing Wish","Hypnosis","Icy Wind","Magic Room","Mimic","Nasty Plot","Power Split","Teeter Dance","Trick","Psychic Terrain","Wake-Up Slap"]),
        new Pokemon("Bouffalant", 4, 0.5, "NORMAL", "NONE", "NONE",
            ["RECKLESS", "SAP SIPPER", "SOUNDPROOF"],
            ["Amnesia","Belch","Cotton Guard","Headbutt","Iron Head","Mud Shot","Mud-Slap","Rock Climb","Skull Bash","Stomp"]),
        new Pokemon("Bergmite", 4, 0.5, "ICE", "NONE", "NONE",
            ["OWN TEMPO", "ICE BODY", "STURDY"],
            ["Barrier","Mirror Coat","Mist","Recover"]),

        new Pokemon("Bulbasaur", 4, 0.125,"POISON","GRASS","NONE",
            ["CHLOROPHYLL","OVERGROW"],
            ["Petal Dance","Sludge","Skull Bash","Amnesia","Curse","Giga Drain","Endure","Charm","Nature Power","Ingrain","Grass Whistle","Magical Leaf","Leaf Storm","Power Whip","Grassy Terrain"]),
        new Pokemon("Charmander", 4, 0.125,"FIRE","NONE","FLYING",
            ["SOLAR POWER","BLAZE"],
            ["Bite","Counter","Belly Drum","Outrage","Metal Claw","Crunch","Ancient Power","Beat Up","Focus Punch","Air Cutter","Dragon Dance","Flare Blitz","Dragon Pulse","Dragon Rush"]),
        new Pokemon("Vulpix", 4, 0.75,"FIRE","NONE","NONE",
            ["DROUGHT","FLASH FIRE"],
            ["Disable","Hypnosis","Flail","Spite","Feint Attack","Heat Wave","Secret Power","Extrasensory","Howl","Power Swap","Flare Blitz","Captivate","Hex","Tail Slap"]),
        new Pokemon("Growlithe", 4, 0.25,"FIRE","NONE","NONE",
            ["JUSTIFIED","FLASH FIRE","INTIMIDATE"],
            ["Double Kick","Body Slam","Thrash","Double Edge","Fire Spin","Iron Tail","Morning Sun","Crunch","Heat Wave","Howl","Covet","Close Combat","Flare Blitz","Burn Up"]),
        new Pokemon("Abra", 4, 0.25,"PSYCHIC","NONE","NONE",
            ["MAGIC GUARD","INNER FOCUS","SYNCHRONIZE"],
            ["Fire Punch","Ice Punch","Thunder Punch","Barrier","Encore","Knock Off","Skill Swap","Psycho Shift","Power Trick","Guard Swap","Guard Split","Ally Switch"]),
        new Pokemon("Ponyta", 4, 0.5,"FIRE","NONE","NONE",
            ["FLAME BODY","FLASH FIRE","RUN AWAY"],
            ["Double Kick","Horn Drill","Thrash","Double Edge","Low Kick","Hypnosis","Flame Wheel","Charm","Morning Sun","Captivate","Ally Switch"]),
        new Pokemon("Magnemite", 4, 0.5,"STEEL","ELECTRIC","NONE",
            ["ANALYTIC","STURDY","MAGNET PULL"],
            ["No Egg Moves"]),
        new Pokemon("Doduo", 4, 0.5,"FLYING","NORMAL","NONE",
            ["TANGLED FEET","EARLY BIRD","RUN AWAY"],
            ["Supersonic","Quick Attack","Haze","Mirror Move","Flail","Feint Attack","Endeavor","Natural Gift","Assurance","Brave Bird"]),
        new Pokemon("Grimer", 4, 0.5,"POISON","NONE","NONE",
            ["POISON TOUCH","STICKY HOLD","STENCH"],
            ["Haze","Lick","Curse","Scary Face","Mean Look","Stockpile","Spit Up","Swallow","Imprison","Shadow Punch","Shadow Sneak","Acid Spray"]),
        new Pokemon("Onix", 4, 0.5,"GROUND","ROCK","STEEL",
            ["WEAK ARMOR","STURDY","ROCK HEAD"],
            ["Defense Curl","Flail","Rollout","Block","Rock Blast","Rock Climb","Stealth Rock","Heavy Slam","Rototiller"]),
        new Pokemon("Drowzee", 4, 0.5,"PSYCHIC","NONE","NONE",
            ["INNER FOCUS","FOREWARN","INSOMNIA"],
            ["Fire Punch","Ice Punch","Thunder Punch","Barrier","Flatter","Role Play","Assist","Skill Swap","Secret Power","Guard Swap","Nasty Plot","Psycho Cut"]),
        new Pokemon("Voltorb", 4, 0.5,"ELECTRIC","NONE","NONE",
            ["AFTERMATH","STATIC","SOUNDPROOF"],
            ["No Egg Moves"]),
        new Pokemon("Exeggcute", 4, 0.5,"PSYCHIC","GRASS","NONE",
            ["HARVEST","CHLOROPHYLL"],
            ["Curse","Giga Drain","Synthesis","Moonlight","Ancient Power","Nature Power","Ingrain","Skill Swap","Block","Natural Gift","Lucky Chant","Power Swap","Leaf Storm","Grassy Terrain"]),
        new Pokemon("Koffing", 4, 0.5,"POISON","NONE","NONE",
            ["LEVITATE"],
            ["Psybeam","Screech","Psywave","Curse","Spite","Destiny Bond","Pain Split","Stockpile","Spit Up","Swallow","Grudge","Toxic Spikes"]),
        new Pokemon("Horsea", 4, 0.5,"WATER","NONE","DRAGON",
            ["DAMP","SNIPER","SWIFT SWIM"],
            ["Razor Wind","Disable","Aurora Beam","Dragon Rage","Splash","Flail","Octazooka","Outrage","Dragon Breath","Signal Beam","Muddy Water","Water Pulse","Clear Smog"]),
        new Pokemon("Scyther", 4, 0.5,"FLYING","BUG","STEEL",
            ["STEADFAST","TECHNICIAN","SWARM"],
            ["Razor Wind","Counter","Reversal","Endure","Steel Wing","Baton Pass","Silver Wind","Night Slash","Bug Buzz","Defog","Quick Guard"]),
        new Pokemon("Pinsir", 4, 0.5,"BUG","NONE","NONE",
            ["MOXIE","MOLD BREAKER","HYPER CUTTER"],
            ["Fury Attack","Quick Attack","Flail","Feint Attack","Superpower","Feint","Close Combat","Me First","Bug Bite"]),
        new Pokemon("Tauros", 4, 0.0,"NORMAL","NONE","NONE",
            ["SHEER FORCE","ANGER POINT","INTIMIDATE"],
            ["No Egg Moves"]),
        new Pokemon("Vaporeon", 4, 0.125,"WATER","NONE","NONE",
            ["HYDRATION","WATER ABSORB"],
            ["Captivate","Charm","Covet","Curse","Detect","Endure","Fake Tears","Flail","Natural Gift","Stored Power","Synchronoise","Tickle","Wish","Yawn"]),
        new Pokemon("Jolteon", 4, 0.125,"ELECTRIC","NONE","NONE",
            ["QUICK FEET","VOLT ABSORB"],
            ["Captivate","Charm","Covet","Curse","Detect","Endure","Fake Tears","Flail","Natural Gift","Stored Power","Synchronoise","Tickle","Wish","Yawn"]),
        new Pokemon("Flareon", 4, 0.125,"FIRE","NONE","NONE",
            ["GUTS","FLASH FIRE"],
            ["Captivate","Charm","Covet","Curse","Detect","Endure","Fake Tears","Flail","Natural Gift","Stored Power","Synchronoise","Tickle","Wish","Yawn"]),
        new Pokemon("Chikorita", 4, 0.125,"GRASS","NONE","NONE",
            ["LEAF GUARD","OVERGROW"],
            ["Vine Whip","Body Slam","Counter","Leech Seed","Flail","Ancient Power","Nature Power","Ingrain","Refresh","Aromatherapy","Grass Whistle","Wring Out","Leaf Storm","Heal Pulse","Grassy Terrain"]),
        new Pokemon("Cyndaquil", 4, 0.125,"FIRE","NONE","NONE",
            ["FLASH FIRE","BLAZE"],
            ["Double Kick","Thrash","Double Edge","Quick Attack","Fury Swipes","Reversal","Foresight","Nature Power","Crush Claw","Extrasensory","Howl","Covet","Flare Blitz","Flame Burst"]),
        new Pokemon("Pichu", 4, 0.5,"ELECTRIC","NONE","NONE",
            ["LIGHTNING ROD","STATIC"],
            ["Double Slap","Thunder Punch","Bide","Flail","Reversal","Endure","Present","Encore","Fake Out","Charge","Wish","Tickle","Lucky Chant","Bestow","Disarming Voice","Electric Terrain"]),
        new Pokemon("Cleffa", 4, 0.75,"FAIRY","NONE","NONE",
            ["FRIEND GUARD","MAGIC GUARD","CUTE CHARM"],
            ["Mimic","Metronome","Amnesia","Splash","Belly Drum","Present","Wish","Aromatherapy","Fake Tears","Tickle","Covet","Stored Power","Heal Pulse","Misty Terrain"]),
        new Pokemon("Espeon", 4, 0.125,"PSYCHIC","NONE","NONE",
            ["MAGIC BOUNCE","SYNCHRONIZE"],
            ["Captivate","Charm","Covet","Curse","Detect","Endure","Fake Tears","Flail","Natural Gift","Stored Power","Synchronoise","Tickle","Wish","Yawn"]),
        new Pokemon("Umbreon", 4, 0.125,"DARK","NONE","NONE",
            ["INNER FOCUS","SYNCHRONIZE"],
            ["Captivate","Charm","Covet","Curse","Detect","Endure","Fake Tears","Flail","Natural Gift","Stored Power","Synchronoise","Tickle","Wish","Yawn"]),
        new Pokemon("Unown", 4, 0.5,"PSYCHIC","NONE","NONE",
            ["LEVITATE"],
            ["No Egg Moves"]),
        new Pokemon("Girafarig", 4, 0.5,"PSYCHIC","NORMAL","NONE",
            ["SAP SIPPER","EARLY BIRD","INNER FOCUS"],
            ["Razor Wind","Double Kick","Take Down","Amnesia","Foresight","Mean Look","Mirror Coat","Future Sight","Beat Up","Wish","Magic Coat","Skill Swap","Secret Power"]),
        new Pokemon("Heracross", 4, 0.5,"FIGHTING","BUG","NONE",
            ["MOXIE","GUTS","SWARM"],
            ["Double Edge","Seismic Toss","Harden","Bide","Flail","Megahorn","Pursuit","Focus Punch","Revenge","Rock Blast"]),
        new Pokemon("Swinub", 4, 0.5,"GROUND","ICE","NONE",
            ["THICK FAT","SNOW CLOAK","OBLIVIOUS"],
            ["Body Slam","Take Down","Double Edge","Bite","Fissure","Curse","Ancient Power","Icicle Spear","Mud Shot","Avalanche","Stealth Rock","Icicle Crash","Freeze Dry"]),
        new Pokemon("Skarmory", 4, 0.5,"FLYING","STEEL","NONE",
            ["WEAK ARMOR","STURDY","KEEN EYE"],
            ["Whirlwind","Drill Peck","Sky Attack","Curse","Endure","Pursuit","Assurance","Guard Swap","Brave Bird","Stealth Rock"]),
        new Pokemon("Phanpy", 4, 0.5,"GROUND","NONE","NONE",
            ["SAND VEIL","PICKUP"],
            ["Body Slam","Counter","Fissure","Focus Energy","Snore","Mud Slap","Ancient Power","Endeavor","Ice Shard","Head Smash","Heavy Slam","Play Rough"]),
        new Pokemon("Tyrogue", 4, 0.0,"FIGHTING","NONE","NONE",
            ["VITAL SPIRIT","STEADFAST","GUTS"],
            ["Counter","High Jump Kick","Mind Reader","Mach Punch","Endure","Pursuit","Rapid Spin","Helping Hand","Feint","Vacuum Wave","Bullet Punch"]),
        new Pokemon("Smoochum", 4, 1.0,"PSYCHIC","ICE","NONE",
            ["HYDRATION","FOREWARN","OBLIVIOUS"],
            ["Ice Punch","Meditate","Fake Out","Wish","Miracle Eye","Wake Up Slap","Nasty Plot","Captivate"]),
        new Pokemon("Elekid", 4, 0.25,"ELECTRIC","NONE","NONE",
            ["VITAL SPIRIT","STATIC"],
            ["Karate Chop","Fire Punch","Ice Punch","Rolling Kick","Meditate","Barrier","Dynamic Punch","Cross Chop","Focus Punch","Hammer Arm","Feint"]),
        new Pokemon("Treecko", 4, 0.125,"GRASS","NONE","NONE",
            ["UNBURDEN","OVERGROW"],
            ["Razor Wind","Double Kick","Leech Seed","Dragon Breath","Synthesis","Crunch","Endeavor","Mud Sport","Crush Claw","Grass Whistle","Bullet Seed","Magical Leaf","Natural Gift","Worry Seed","Leaf Storm","Grassy Terrain"]),
        new Pokemon("Aron", 4, 0.5,"ROCK","STEEL","NONE",
            ["HEAVY METAL","ROCK HEAD","STURDY"],
            ["Stomp","Body Slam","Screech","Curse","Reversal","Smelling Salts","Superpower","Endeavor","Dragon Rush","Iron Head","Stealth Rock","Head Smash"]),
        new Pokemon("Meditite", 4, 0.5,"PSYCHIC","FIGHTING","NONE",
            ["TELEPATHY","PURE POWER"],
            ["Fire Punch","Ice Punch","Thunder Punch","Foresight","Dynamic Punch","Baton Pass","Fake Out","Secret Power","Power Swap","Guard Swap","Drain Punch","Bullet Punch","Psycho Cut","Quick Guard"]),
        new Pokemon("Wailmer", 4, 0.5,"WATER","NONE","NONE",
            ["PRESSURE","OBLIVIOUS","WATER VEIL"],
            ["Body Slam","Thrash","Double Edge","Fissure","Defense Curl","Snore","Curse","Sleep Talk","Tickle","Aqua Ring","Zen Headbutt","Soak","Clear Smog"]),
        new Pokemon("Spoink", 4, 0.5,"PSYCHIC","NONE","NONE",
            ["GLUTTONY","OWN TEMPO","THICK FAT"],
            ["Whirlwind","Amnesia","Endure","Mirror Coat","Future Sight","Trick","Skill Swap","Extrasensory","Lucky Chant","Zen Headbutt","Simple Beam"]),
        new Pokemon("Lunatone", 4, 0.5,"PSYCHIC","ROCK","NONE",
            ["LEVITATE"],
            ["No Egg Moves"]),
        new Pokemon("Solrock", 4, 0.5,"PSYCHIC","ROCK","NONE",
            ["LEVITATE"],
            ["No Egg Moves"]),
        new Pokemon("Baltoy", 4, 0.5,"PSYCHIC","GROUND","NONE",
            ["LEVITATE"],
            ["No Egg Moves"]),
        new Pokemon("Castform", 4, 0.5,"NORMAL","NONE","NONE",
            ["FORECAST"],
            ["Disable","Amnesia","Future Sight","Cosmic Power","Lucky Chant","Guard Swap","Ominous Wind","Clear Smog","Hex","Reflect Type"]),
        new Pokemon("Absol", 4, 0.5,"DARK","NONE","NONE",
            ["JUSTIFIED","SUPER LUCK","PRESSURE"],
            ["Double Edge","Curse","Feint Attack","Perish Song","Mean Look","Megahorn","Baton Pass","Magic Coat","Assurance","Me First","Punishment","Sucker Punch","Zen Headbutt","Hex","Play Rough"]),
        new Pokemon("Turtwig", 4, 0.125,"GRASS","NONE","GROUND",
            ["SHELL ARMOR","OVERGROW"],
            ["Body Slam","Thrash","Double Edge","Growth","Amnesia","Stockpile","Spit Up","Swallow","Superpower","Tickle","Sand Tomb","Worry Seed","Seed Bomb","Earth Power","Wide Guard","Grassy Terrain"]),
        new Pokemon("Piplup", 4, 0.125,"WATER","NONE","STEEL",
            ["DEFIANT","TORRENT"],
            ["Supersonic","Hydro Pump","Agility","Bide","Snore","Flail","Mud Slap","Icy Wind","Yawn","Feather Dance","Mud Sport","Aqua Ring","Double Hit"]),
        new Pokemon("Chingling", 4, 0.5,"PSYCHIC","NONE","NONE",
            ["LEVITATE"],
            ["Disable","Hypnosis","Recover","Curse","Future Sight","Wish","Skill Swap","Cosmic Power","Stored Power"]),
        new Pokemon("Riolu", 4, 0.125,"FIGHTING","NONE","STEEL",
            ["PRANKSTER","INNER FOCUS","STEADFAST"],
            ["Bite","Low Kick","Agility","High Jump Kick","Mind Reader","Detect","Cross Chop","Crunch","Follow Me","Blaze Kick","Sky Uppercut","Iron Defense","Vacuum Wave","Bullet Punch","Circle Throw"]),
        new Pokemon("Mantyke", 4, 0.5,"FLYING","WATER","NONE",
            ["WATER VEIL","WATER ABSORB","SWIFT SWIM"],
            ["Slam","Hydro Pump","Haze","Amnesia","Splash","Twister","Mirror Coat","Mud Sport","Signal Beam","Water Sport","Tailwind","Wide Guard"]),
        new Pokemon("Leafeon", 4, 0.125,"GRASS","NONE","NONE",
            ["CHLOROPHYLL","LEAF GUARD"],
            ["Captivate","Charm","Covet","Curse","Detect","Endure","Fake Tears","Flail","Natural Gift","Stored Power","Synchronoise","Tickle","Wish","Yawn"]),
        new Pokemon("Glaceon", 4, 0.125,"ICE","NONE","NONE",
            ["ICE BODY","SNOW CLOAK"],
            ["Captivate","Charm","Covet","Curse","Detect","Endure","Fake Tears","Flail","Natural Gift","Stored Power","Synchronoise","Tickle","Wish","Yawn"]),
        new Pokemon("Oshawott", 4, 0.125,"WATER","NONE","NONE",
            ["SHELL ARMOR","TORRENT"],
            ["Screech","Detect","Brine","Assurance","Trump Card","Copycat","Night Slash","Air Slash"]),
        new Pokemon("Munna", 4, 0.5,"PSYCHIC","NONE","NONE",
            ["TELEPATHY","SYNCHRONIZE","FOREWARN"],
            ["Sonic Boom","Barrier","Swift","Curse","Sleep Talk","Baton Pass","Helping Hand","Magic Coat","Secret Power","Healing Wish"]),
        new Pokemon("Venipede", 4, 0.5,"POISON","BUG","NONE",
            ["SPEED BOOST","SWARM","POISON POINT"],
            ["Take Down","Twineedle","Pin Missile","Spikes","Toxic Spikes","Rock Climb"]),
        new Pokemon("Yamask", 4, 0.5,"GHOST","NONE","NONE",
            ["MUMMY"],
            ["Disable","Nightmare","Endure","Memento","Imprison","Fake Tears","Heal Block","Toxic Spikes","Nasty Plot","Ally Switch"]),
        new Pokemon("Trubbish", 4, 0.5,"POISON","NONE","NONE",
            ["AFTERMATH","STICKY HOLD","STENCH"],
            ["Sand Attack","Haze","Self Destruct","Curse","Spikes","Rollout","Mud Sport","Rock Blast"]),
        new Pokemon("Zorua", 4, 0.125,"DARK","NONE","NONE",
            ["ILLUSION"],
            ["Counter","Detect","Memento","Snatch","Extrasensory","Copycat","Sucker Punch","Dark Pulse","Captivate"]),
        new Pokemon("Gothita", 4, 0.75,"PSYCHIC","NONE","NONE",
            ["SHADOW TAG","COMPETITIVE","FRISK"],
            ["Mean Look","Mirror Coat","Uproar","Miracle Eye","Dark Pulse","Captivate","Heal Pulse"]),
        new Pokemon("Solosis", 4, 0.5,"PSYCHIC","NONE","NONE",
            ["REGENERATOR","MAGIC GUARD","OVERCOAT"],
            ["Night Shade","Confuse Ray","Acid Armor","Helping Hand","Trick","Imprison","Secret Power","Astonish"]),
        new Pokemon("Frillish", 4, 0.5,"GHOST","WATER","NONE",
            ["DAMP","CURSED BODY","WATER ABSORB"],
            ["Mist","Recover","Confuse Ray","Constrict","Acid Armor","Pain Split"]),
        new Pokemon("Ferroseed", 4, 0.5,"STEEL","GRASS","NONE",
            ["IRON BARBS"],
            ["Leech Seed","Spikes","Bullet Seed","Gravity","Worry Seed","Seed Bomb","Rock Climb","Stealth Rock","Acid Spray"]),
        new Pokemon("Klink", 4, 0.5,"STEEL","NONE","NONE",
            ["CLEAR BODY","MINUS","PLUS"],
            ["No Egg Moves"]),
        new Pokemon("Tynamo", 4, 0.5,"ELECTRIC","NONE","NONE",
            ["LEVITATE"],
            ["No Egg Moves"]),
        new Pokemon("Litwick", 4, 0.5,"FIRE","GHOST","NONE",
            ["INFILTRATOR","FLAME BODY","FLASH FIRE"],
            ["Acid","Haze","Acid Armor","Endure","Heat Wave","Captivate","Power Split","Clear Smog"]),
        new Pokemon("Cubchoo", 4, 0.5,"ICE","NONE","NONE",
            ["RATTLED","SLUSH RUSH","SNOW CLOAK"],
            ["Ice Punch","Sleep Talk","Encore","Focus Punch","Yawn","Assurance","Night Slash","Avalanche","Play Rough"]),
        new Pokemon("Rufflet", 4, 0.0,"FLYING","NORMAL","NONE",
            ["HUSTLE","SHEER FORCE","KEEN EYE"],
            ["No Egg Moves"]),
        new Pokemon("Larvesta", 4, 0.5,"FIRE","BUG","NONE",
            ["SWARM","FLAME BODY"],
            ["String Shot","Harden","Foresight","Endure","Morning Sun","Magnet Rise","Zen Headbutt"]),
        new Pokemon("Fennekin", 4, 0.125,"FIRE","NONE","PSYCHIC",
            ["MAGICIAN","BLAZE"],
            ["Hypnosis","Heat Wave","Wish","Magic Coat"]),
        new Pokemon("Espurr", 4, 0.5,"PSYCHIC","NONE","NONE",
            ["OWN TEMPO","INFILTRATOR","KEEN EYE"],
            ["Barrier","Trick","Assist","Yawn"]),
        new Pokemon("Honedge", 4, 0.5,"GHOST","STEEL","NONE",
            ["NO GUARD"],
            ["Destiny Bond","Metal Sound","Shadow Sneak","Wide Guard"]),
        new Pokemon("Spritzee", 4, 0.5,"FAIRY","NONE","NONE",
            ["AROMA VEIL","HEALER"],
            ["Disable","Wish","Refresh","Captivate"]),
        new Pokemon("Swirlix", 4, 0.5,"FAIRY","NONE","NONE",
            ["UNBURDEN","SWEET VEIL"],
            ["Belly Drum","Yawn","Copycat","After You"]),
        new Pokemon("Skrelp", 4, 0.5,"WATER","POISON","DRAGON",
            ["ADAPTABILITY","POISON TOUCH","POISON POINT"],
            ["Haze","Acid Armor","Toxic Spikes","Play Rough","Venom Drench"]),
        new Pokemon("Sylveon", 4, 0.125,"FAIRY","NONE","NONE",
            ["PIXILATE","CUTE CHARM"],
            ["Captivate","Charm","Covet","Curse","Detect","Endure","Fake Tears","Flail","Natural Gift","Stored Power","Synchronoise","Tickle","Wish","Yawn"]),
        new Pokemon("Klefki", 4, 0.5,"FAIRY","STEEL","NONE",
            ["MAGICIAN","PRANKSTER"],
            ["Thief","Lock On","Iron Defense","Switcheroo"]),
        new Pokemon("Rowlet", 4, 0.125,"FLYING","GRASS","NONE",
            ["LONG REACH","OVERGROW"],
            ["Confuse Ray","Haze","Curse","Baton Pass","Defog","Ominous Wind"]),
        new Pokemon("Litten", 4, 0.125,"FIRE","NONE","DARK",
            ["INTIMIDATE","BLAZE"],
            ["Body Slam","Crunch","Fake Out","Heat Wave","Revenge","Nasty Plot"]),
        new Pokemon("Popplio", 4, 0.125,"WATER","NONE","FAIRY",
            ["LIQUID VOICE","TORRENT"],
            ["Amnesia","Perish Song","Charm","Aqua Ring","Wonder Room","Aromatic Mist"]),
        new Pokemon("Stufful", 4, 0.5,"FIGHTING","NORMAL","NONE",
            ["CUTE CHARM","KLUTZ","FLUFFY"],
            ["Ice Punch","Thunder Punch","Mega Kick","Endure","Force Palm","Wide Guard","Stomping Tantrum"]),
        new Pokemon("Oranguru", 4, 0.5,"PSYCHIC","NORMAL","NONE",
            ["SYMBIOSIS","TELEPATHY","INNER FOCUS"],
            ["Extrasensory","Wonder Room","Psychic Terrain"]),
        new Pokemon("Passimian", 4, 0.5,"FIGHTING","NONE","NONE",
            ["DEFIANT","RECEIVER"],
            ["Seismic Toss","Quick Attack","Vital Throw","Feint","Iron Head","Quick Guard"]),
        new Pokemon("Minior", 4, 0.5,"FLYING","ROCK","NONE",
            ["SHIELDS DOWN"],
            ["No Egg Moves"]),
        new Pokemon("Mimikyu", 4, 0.5,"FAIRY","GHOST","NONE",
            ["DISGUISE"],
            ["Nightmare","Curse","Destiny Bond","Grudge"])
    ],
    //rarity 5: endangered
    [
        new Pokemon("Kangaskhan", 5, 1.0, "NORMAL", "NONE", "NONE",
            ["EARLY BIRD", "SCRAPPY", "INNER FOCUS"],
            ["Circle Throw","Counter","Crush Claw","Disable","Double-Edge","Endeavor","Focus Energy","Focus Punch","Foresight","Hammer Arm","Stomp","Trump Card","Uproar"]),
        new Pokemon("Rotom", 5, 0.5, "ELECTRIC", "GHOST", "NONE",
            ["LEVITATE"],
            ["No Egg Moves"]),
        new Pokemon("Spiritomb", 5, 0.5, "GHOST", "DARK", "NONE",
            ["PRESSURE", "INFILTRATOR"],
            ["Captivate","Destiny Bond","Disable","Foul Play","Grudge","Imprison","Nightmare","Pain Split","Shadow Sneak","Smokescreen"]),

        new Pokemon("Lapras", 5, 0.5,"ICE","WATER","NONE",
            ["HYDRATION","SHELL ARMOR","WATER ABSORB"],
            ["Horn Drill","Fissure","Curse","Foresight","Sleep Talk","Ancient Power","Future Sight","Whirlpool","Refresh","Tickle","Dragon Dance","Dragon Pulse","Avalanche","Freeze Dry"]),
        new Pokemon("Ditto", 5, 0.5,"NORMAL","NONE","NONE",
            ["IMPOSTER","LIMBER"],
            ["No Egg Moves"]),
        new Pokemon("Omanyte", 5, 0.125,"WATER","ROCK","NONE",
            ["WEAK ARMOR","SHELL ARMOR","SWIFT SWIM"],
            ["Slam","Supersonic","Bubble Beam","Aurora Beam","Haze","Bide","Spikes","Whirlpool","Knock Off","Muddy Water","Water Pulse","Wring Out","Toxic Spikes","Reflect Type"]),
        new Pokemon("Kabuto", 5, 0.125,"WATER","ROCK","NONE",
            ["WEAK ARMOR","BATTLE ARMOR","SWIFT SWIM"],
            ["Take Down","Bubble Beam","Aurora Beam","Screech","Confuse Ray","Flail","Foresight","Icy Wind","Giga Drain","Rapid Spin","Knock Off","Mud Shot"]),
        new Pokemon("Aerodactyl", 5, 0.125,"FLYING","ROCK","NONE",
            ["UNNERVE","PRESSURE","ROCK HEAD"],
            ["Whirlwind","Curse","Foresight","Steel Wing","Dragon Breath","Pursuit","Roost","Tailwind","Assurance","Wide Guard"]),
        new Pokemon("Dratini", 5, 0.5,"DRAGON","NONE","NONE",
            ["MARVEL SCALE","SHED SKIN"],
            ["Supersonic","Mist","Haze","Dragon Breath","Iron Tail","Extreme Speed","Dragon Dance","Water Pulse","Dragon Pulse","Dragon Rush","Aqua Jet"]),
        new Pokemon("Togepi", 5, 0.125,"FAIRY","NONE","FLYING",
            ["SUPER LUCK","SERENE GRACE","HUSTLE"],
            ["Peck","Mirror Move","Foresight","Present","Morning Sun","Future Sight","Secret Power","Extrasensory","Psycho Shift","Lucky Chant","Nasty Plot","Stored Power"]),
        new Pokemon("Natu", 5, 0.5,"FLYING","PSYCHIC","NONE",
            ["MAGIC BOUNCE","EARLY BIRD","SYNCHRONIZE"],
            ["Drill Peck","Quick Attack","Haze","Feint Attack","Steel Wing","Skill Swap","Refresh","Feather Dance","Roost","Sucker Punch","Zen Headbutt","Synchronoise","Simple Beam","Ally Switch"]),
        new Pokemon("Larvitar", 5, 0.5,"GROUND","ROCK","DARK",
            ["SAND VEIL","GUTS"],
            ["Stomp","Focus Energy","Curse","Outrage","Pursuit","Iron Tail","Ancient Power","Iron Defense","Dragon Dance","Assurance","Iron Head","Stealth Rock"]),
        new Pokemon("Ralts", 5, 0.5,"FAIRY","PSYCHIC","NONE",
            ["TELEPATHY","TRACE","SYNCHRONIZE"],
            ["Disable","Confuse Ray","Destiny Bond","Mean Look","Encore","Memento","Skill Swap","Grudge","Shadow Sneak","Synchronoise","Ally Switch","Misty Terrain"]),
        new Pokemon("Trapinch", 5, 0.5,"GROUND","NONE","DRAGON",
            ["SHEER FORCE","ARENA TRAP","HYPER CUTTER"],
            ["Gust","Quick Attack","Focus Energy","Flail","Endure","Fury Cutter","Signal Beam","Mud Shot","Earth Power","Bug Bite"]),
        new Pokemon("Swablu", 5, 0.5,"FLYING","NORMAL","DRAGON",
            ["CLOUD NINE","NATURAL CURE"],
            ["Agility","Rage","Haze","Steel Wing","Pursuit","Feather Dance","Hyper Voice","Roost","Power Swap","Dragon Rush"]),
        new Pokemon("Lileep", 5, 0.125,"GRASS","ROCK","NONE",
            ["STORM DRAIN","SUCTION CUPS"],
            ["Mega Drain","Recover","Barrier","Curse","Endure","Mirror Coat","Tickle","Wring Out","Stealth Rock"]),
        new Pokemon("Anorith", 5, 0.125,"BUG","ROCK","NONE",
            ["SWIFT SWIM","BATTLE ARMOR"],
            ["Sand Attack","Screech","Curse","Rapid Spin","Knock Off","Iron Defense","Water Pulse","Cross Poison","Aqua Jet"]),
        new Pokemon("Tropius", 5, 0.5,"FLYING","GRASS","NONE",
            ["HARVEST","SOLAR POWER","CHLOROPHYLL"],
            ["Razor Wind","Slam","Headbutt","Leech Seed","Curse","Synthesis","Nature Power","Bullet Seed","Leaf Blade","Dragon Dance","Natural Gift","Leaf Storm"]),
        new Pokemon("Bagon", 5, 0.5,"DRAGON","NONE","FLYING",
            ["SHEER FORCE","ROCK HEAD"],
            ["Thrash","Hydro Pump","Dragon Rage","Defense Curl","Endure","Twister","Dragon Dance","Dragon Pulse","Dragon Rush","Fire Fang"]),
        new Pokemon("Beldum", 5, 0.5,"PSYCHIC","STEEL","NONE",
            ["LIGHT METAL","CLEAR BODY"],
            ["No Egg Moves"]),
        new Pokemon("Cranidos", 5, 0.125,"ROCK","NONE","NONE",
            ["SHEER FORCE","MOLD BREAKER"],
            ["Whirlwind","Slam","Stomp","Thrash","Double Edge","Leer","Curse","Iron Tail","Crunch","Hammer Arm","Iron Head"]),
        new Pokemon("Shieldon", 5, 0.125,"STEEL","ROCK","NONE",
            ["SOUNDPROOF","STURDY"],
            ["Headbutt","Body Slam","Double Edge","Counter","Fissure","Screech","Focus Energy","Curse","Scary Face","Rock Blast","Stealth Rock","Wide Guard","Guard Split"]),
        new Pokemon("Bronzor", 5, 0.5,"PSYCHIC","STEEL","NONE",
            ["HEAVY METAL","HEATPROOF","LEVITATE"],
            ["No Egg Moves"]),
        new Pokemon("Gible", 5, 0.5,"GROUND","DRAGON","NONE",
            ["ROUGH SKIN","SAND VEIL"],
            ["Body Slam","Thrash","Double Edge","Scary Face","Outrage","Dragon Breath","Iron Tail","Metal Claw","Twister","Sand Tomb","Mud Shot","Rock Climb","Iron Head"]),
        new Pokemon("Munchlax", 5, 0.125,"NORMAL","NONE","NONE",
            ["GLUTTONY","THICK FAT","PICKUP"],
            ["Whirlwind","Double Edge","Counter","Self Destruct","Lick","Curse","Charm","Pursuit","Natural Gift","Zen Headbutt","After You","Belch"]),
        new Pokemon("Snover", 5, 0.5,"ICE","GRASS","NONE",
            ["SOUNDPROOF","SNOW WARNING"],
            ["Stomp","Double Edge","Mist","Leech Seed","Growth","Skull Bash","Bullet Seed","Magical Leaf","Natural Gift","Seed Bomb","Avalanche"]),
        new Pokemon("Sigilyph", 5, 0.5,"FLYING","PSYCHIC","NONE",
            ["TINTED LENS","MAGIC GUARD","WONDER SKIN"],
            ["Steel Wing","Ancient Power","Future Sight","Skill Swap","Roost","Psycho Shift","Stored Power"]),
        new Pokemon("Tirtouga", 5, 0.125,"ROCK","WATER","NONE",
            ["SWIFT SWIM","STURDY","SOLID ROCK"],
            ["Slam","Body Slam","Rock Throw","Bide","Flail","Whirlpool","Knock Off","Iron Defense","Water Pulse","Guard Swap","Liquidation"]),
        new Pokemon("Archen", 5, 0.125,"FLYING","ROCK","NONE",
            ["DEFEATIST"],
            ["Bite","Steel Wing","Knock Off","Dragon Pulse","Earth Power","Switcheroo","Defog","Head Smash","Ally Switch"]),
        new Pokemon("Elgyem", 5, 0.5,"PSYCHIC","NONE","NONE",
            ["ANALYTIC","SYNCHRONIZE","TELEPATHY"],
            ["Disable","Teleport","Barrier","Skill Swap","Astonish","Cosmic Power","Power Swap","Guard Swap","Nasty Plot","Ally Switch"]),
        new Pokemon("Axew", 5, 0.5,"DRAGON","NONE","NONE",
            ["UNNERVE","MOLD BREAKER","RIVALRY"],
            ["Razor Wind","Counter","Harden","Focus Energy","Reversal","Endure","Iron Tail","Endeavor","Night Slash","Dragon Pulse"]),
        new Pokemon("Druddigon", 5, 0.5,"DRAGON","NONE","NONE",
            ["MOLD BREAKER","SHEER FORCE","ROUGH SKIN"],
            ["Glare","Feint Attack","Pursuit","Iron Tail","Metal Claw","Snatch","Crush Claw","Poison Tail","Sucker Punch","Thunder Fang","Fire Fang"]),
        new Pokemon("Golett", 5, 0.5,"GHOST","GROUND","NONE",
            ["NO GUARD","KLUTZ","IRON FIST"],
            ["No Egg Moves"]),
        new Pokemon("Deino", 5, 0.5,"DRAGON","DARK","NONE",
            ["HUSTLE"],
            ["Screech","Astonish","Assurance","Dark Pulse","Earth Power","Thunder Fang","Ice Fang","Fire Fang","Head Smash","Double Hit"]),
        new Pokemon("Inkay", 5, 0.5,"PSYCHIC","DARK","NONE",
            ["INFILTRATOR","SUCTION CUPS","CONTRARY"],
            ["Destiny Bond","Flatter","Camouflage","Power Split","Simple Beam"]),
        new Pokemon("Tyrunt", 5, 0.125,"DRAGON","ROCK","NONE",
            ["STURDY","STRONG JAW"],
            ["Curse","Poison Fang","Dragon Dance","Rock Polish","Thunder Fang","Ice Fang","Fire Fang"]),
        new Pokemon("Amaura", 5, 0.125,"ICE","ROCK","NONE",
            ["SNOW WARNING","REFRIGERATE"],
            ["Barrier","Haze","Mirror Coat","Magnet Rise","Discharge"]),
        new Pokemon("Carbink", 5, 0.5,"FAIRY","ROCK","NONE",
            ["STURDY","CLEAR BODY"],
            ["No Egg Moves"]),
        new Pokemon("Goomy", 5, 0.5,"DRAGON","NONE","NONE",
            ["GOOEY","HYDRATION","SAP SIPPER"],
            ["Counter","Acid Armor","Curse","Endure","Iron Tail","Poison Tail"]),
        new Pokemon("Noibat", 5, 0.5,"DRAGON","FLYING","NONE",
            ["TELEPATHY","INFILTRATOR","FRISK"],
            ["Outrage","Snatch","Tailwind","Switcheroo"]),
        new Pokemon("Turtonator", 5, 0.5,"DRAGON","FIRE","NONE",
            ["SHELL ARMOR"],
            ["Fire Spin","Revenge","Head Smash","Wide Guard"]),
        new Pokemon("Drampa", 5, 0.5,"DRAGON","NORMAL","NONE",
            ["CLOUD NINE","SAP SIPPER","BERSERK"],
            ["Razor Wind","Mist","Dragon Rush","Hurricane","Play Rough"]),
        new Pokemon("Dhelmise", 5, 0.5,"GRASS","GHOST","NONE",
            ["STEELWORKER"],
            ["No Egg Moves"]),
        new Pokemon("Jangmo-o", 5, 0.5,"DRAGON","NONE","FIGHTING",
            ["OVERCOAT","SOUNDPROOF","BULLETPROOF"],
            ["Counter","Reversal","Dragon Breath"]),
        new Pokemon("Spiritomb", 5, 0.5,"GHOST","DARK","NONE",
            ["PRESSURE","INFILTRATOR"],
            ["Captivate","Destiny Bond","Disable", "Foul Play","Grudge","Imprison","Nightmare","Pain Split","Shadow Sneak","Smokescreen"])
    ]
];

//location/season constructor
let location_season = function (name, common_types, uncommon_types, rare_types, never_found){
    this.name = name;
    this.common_types = common_types;
    this.uncommon_types = uncommon_types;
    this.rare_types = rare_types;
    this.never_found = never_found;
};

let location_array = [
    [//array of values for WGF, in diff seasons
        new location_season("Western Great Forest in Spring",
            ["BUG", "DARK", "FLYING", "GRASS", "GRASS", "POISON"],
            ["GROUND", "NORMAL", "GHOST", "FAIRY"],
            ["ELECTRIC", "FIRE", "FIGHTING", "PSYCHIC", "WATER", "ROCK"],
            ["DRAGON", "STEEL", "ICE"]),
        new location_season("Western Great Forest in Summer",
            ["BUG", "BUG", "DARK", "FLYING", "GHOST", "GRASS", "POISON"],
            ["GROUND", "NORMAL", "ELECTRIC", "FIRE"],
            ["FAIRY", "FIGHTING", "PSYCHIC", "WATER", "ROCK"],
            ["DRAGON", "STEEL", "ICE"]),
        new location_season("Western Great Forest in Fall",
            ["BUG", "DARK", "FLYING", "GRASS", "POISON", "GHOST", "GHOST"],
            ["GROUND", "NORMAL"],
            ["ELECTRIC", "FIRE", "FIGHTING", "PSYCHIC", "WATER", "ROCK", "FAIRY"],
            ["DRAGON", "STEEL", "ICE"]),
        new location_season("Western Great Forest in Winter",
            ["DARK", "DARK", "GHOST", "POISON"],
            ["GROUND", "NORMAL", "GRASS", "BUG", "FLYING"],
            ["ELECTRIC", "FIRE", "FIGHTING", "PSYCHIC", "WATER", "ROCK", "FAIRY"],
            ["DRAGON", "STEEL", "ICE", "FIRE"])
    ],
    [
        new location_season("Crying Plateau in Spring",
            ["NORMAL", "ROCK", "WATER"],
            ["BUG", "ELECTRIC", "FLYING", "FIGHTING", "STEEL", "FAIRY", "GRASS"],
            ["DARK", "DRAGON", "GHOST", "GROUND", "POISON", "PSYCHIC"],
            ["FIRE", "ICE"]),
        new location_season("Crying Plateau in Summer",
            ["NORMAL", "ROCK", "WATER", "BUG", "ELECTRIC"],
            ["FLYING", "FIGHTING", "GHOST", "STEEL"],
            ["DARK", "DRAGON", "FAIRY", "GRASS", "GROUND", "POISON", "PSYCHIC"],
            ["FIRE", "ICE"]),
        new location_season("Crying Plateau in Fall",
            ["NORMAL", "ROCK", "WATER", "GHOST"],
            ["BUG", "ELECTRIC", "FLYING", "FIGHTING", "STEEL"],
            ["DARK", "DRAGON", "FAIRY", "GRASS", "GROUND", "POISON", "PSYCHIC"],
            ["FIRE", "ICE"]),
        new location_season("Crying Plateau in Winter",
            ["NORMAL", "ROCK", "WATER"],
            ["ELECTRIC", "FIGHTING", "GHOST", "STEEL", "DARK", "ICE"],
            ["BUG", "DRAGON", "FAIRY", "GROUND", "POISON", "PSYCHIC", "FLYING"],
            ["FIRE", "GRASS"])
    ],
    [
        new location_season("Eastern Great Forest in Spring",
            ["BUG", "ELECTRIC", "FLYING", "GRASS", "NORMAL", "POISON", "PSYCHIC", "GRASS", "FAIRY"],
            ["DRAGON", "FIRE", "GROUND", "WATER"],
            ["DARK", "FIGHTING", "ROCK", "STEEL", "GHOST"],
            ["ICE"]),
        new location_season("Eastern Great Forest in Summer",
            ["BUG", "ELECTRIC", "FLYING", "GRASS", "NORMAL", "POISON", "PSYCHIC", "BUG", "ELECTRIC", "FIRE"],
            ["DRAGON", "FAIRY", "GHOST", "GROUND", "WATER"],
            ["DARK", "FIGHTING", "ROCK", "STEEL"],
            ["ICE"]),
        new location_season("Eastern Great Forest in Fall",
            ["BUG", "ELECTRIC", "FLYING", "GRASS", "NORMAL", "POISON", "PSYCHIC", "GHOST"],
            ["DRAGON", "FAIRY", "FIRE", "GROUND", "WATER"],
            ["DARK", "FIGHTING", "ROCK", "STEEL", "ICE"],
            [""]),
        new location_season("Eastern Great Forest in Winter",
            ["ELECTRIC", "NORMAL", "POISON", "PSYCHIC"],
            ["DRAGON", "FAIRY", "FLYING", "GHOST", "GROUND", "WATER", "DARK", "ICE", "GRASS", "BUG"],
            ["FIRE", "FIGHTING", "ROCK", "STEEL"],
            [""])
    ],
    [
        new location_season("Dragon's Peninsula in Spring",
            ["DRAGON", "ELECTRIC", "FIGHTING", "FIRE", "FLYING", "GRASS", "GRASS", "ROCK", "STEEL", "NORMAL", "POISON"],
            ["BUG", "DARK", "GROUND", "PSYCHIC", "WATER"],
            ["ICE", "GHOST"],
            ["FAIRY"]),
        new location_season("Dragon's Peninsula in Summer",
            ["DRAGON", "ELECTRIC", "ELECTRIC", "FIGHTING", "BUG", "FIRE", "FIRE", "FLYING", "GRASS", "ROCK", "STEEL", "NORMAL", "POISON"],
            ["DARK", "GHOST", "GROUND", "PSYCHIC", "WATER"],
            ["ICE"],
            ["FAIRY"]),
        new location_season("Dragon's Peninsula in Fall",
            ["DRAGON", "ELECTRIC", "FIGHTING", "FIRE", "FLYING", "GRASS", "GHOST", "ROCK", "STEEL", "NORMAL", "POISON"],
            ["BUG", "DARK", "GROUND", "PSYCHIC", "WATER"],
            ["ICE"],
            ["FAIRY"]),
        new location_season("Dragon's Peninsula in Winter",
            ["DRAGON", "ELECTRIC", "FIGHTING", "ICE", "ROCK", "STEEL", "NORMAL", "POISON", "DARK"],
            ["FIRE", "FLYING", "GHOST", "GROUND", "PSYCHIC", "WATER", "GRASS"],
            ["BUG"],
            ["FAIRY"])
    ],
    [
        new location_season("Lion's Plains in Spring",
            ["BUG", "ELECTRIC", "FLYING", "GRASS", "NORMAL", "POISON", "GRASS"],
            ["DARK", "FIGHTING", "FIRE", "GROUND", "PSYCHIC", "WATER", "FAIRY"],
            ["GHOST", "ROCK"],
            ["DRAGON", "STEEL", "ICE"]),
        new location_season("Lion's Plains in Summer",
            ["BUG", "ELECTRIC", "FLYING", "GRASS", "NORMAL", "POISON", "BUG", "ELECTRIC", "FIRE"],
            ["DARK", "FIGHTING", "GHOST", "GROUND", "PSYCHIC", "WATER"],
            ["FAIRY", "ROCK"],
            ["DRAGON", "STEEL", "ICE"]),
        new location_season("Lion's Plains in Fall",
            ["BUG", "ELECTRIC", "FLYING", "GRASS", "NORMAL", "POISON", "GHOST"],
            ["DARK", "FIGHTING", "FIRE", "GROUND", "PSYCHIC", "WATER"],
            ["FAIRY", "ROCK"],
            ["DRAGON", "STEEL", "ICE"]),
        new location_season("Lion's Plains in Winter",
            ["ELECTRIC", "NORMAL", "POISON", "DARK"],
            ["BUG", "FIGHTING", "GRASS", "GHOST", "GROUND", "PSYCHIC", "WATER", "ICE", "FLYING"],
            ["FAIRY", "ROCK", "FIRE"],
            ["DRAGON", "STEEL"])
    ],
    [
        new location_season("Cloven Volcano in Spring",
            ["FIGHTING", "FIRE", "NORMAL", "ROCK", "STEEL"],
            ["BUG", "DARK", "DRAGON", "ELECTRIC", "FLYING", "GROUND", "POISON", "PSYCHIC", "FAIRY", "GRASS"],
            ["GHOST"],
            ["WATER", "ICE"]),
        new location_season("Cloven Volcano in Summer",
            ["FIGHTING", "FIRE", "NORMAL", "ROCK", "STEEL", "FIRE", "BUG", "ELECTRIC"],
            ["DARK", "DRAGON", "FLYING", "GHOST", "GROUND", "POISON", "PSYCHIC"],
            ["FAIRY", "GRASS"],
            ["WATER", "ICE"]),
        new location_season("Cloven Volcano in Fall",
            ["FIGHTING", "FIRE", "NORMAL", "ROCK", "STEEL", "GHOST"],
            ["BUG", "DARK", "DRAGON", "ELECTRIC", "FLYING", "GROUND", "POISON", "PSYCHIC"],
            ["FAIRY", "GRASS"],
            ["WATER", "ICE"]),
        new location_season("Cloven Volcano in Winter",
            ["FIGHTING", "NORMAL", "ROCK", "STEEL", "DARK"],
            ["FIRE", "DRAGON", "ELECTRIC", "GHOST", "GROUND", "POISON", "PSYCHIC"],
            ["FAIRY", "ICE", "FLYING", "BUG"],
            ["WATER", "GRASS"])
    ],
    [
        new location_season("Subterranean River in Spring",
            ["WATER"],
            ["DARK", "POISON", "GRASS", "ROCK", "STEEL"],
            ["BUG", "DRAGON", "FIGHTING", "FLYING", "GHOST", "GROUND", "ICE", "NORMAL", "PSYCHIC"],
            ["FAIRY", "FIRE", "ELECTRIC"]),
        new location_season("Subterranean River in Summer",
            ["WATER"],
            ["DARK", "POISON", "GHOST", "ROCK", "STEEL", "BUG", "GRASS"],
            ["DRAGON", "FIGHTING", "FLYING", "GROUND", "ICE", "NORMAL", "PSYCHIC"],
            ["FAIRY", "FIRE", "ELECTRIC"]),
        new location_season("Subterranean River in Fall",
            ["WATER", "GHOST"],
            ["DARK", "POISON", "ROCK", "STEEL"],
            ["BUG", "DRAGON", "FIGHTING", "FLYING", "GRASS", "GROUND", "ICE", "NORMAL", "PSYCHIC"],
            ["FAIRY", "FIRE", "ELECTRIC"]),
        new location_season("Subterranean River in Winter",
            ["WATER", "DARK"],
            ["POISON", "GHOST", "ROCK", "STEEL", "ICE"],
            ["DRAGON", "FIGHTING", "GROUND", "NORMAL", "PSYCHIC"],
            ["FAIRY", "FIRE", "ELECTRIC", "BUG", "FLYING", "GRASS"])
    ],
    [
        new location_season("Rolling Mountains in Spring",
            ["FIGHTING", "BUG", "FLYING", "NORMAL", "ROCK", "FAIRY", "GRASS"],
            ["DARK", "ELECTRIC", "FIRE", "DRAGON", "GROUND", "STEEL", "ICE"],
            ["POISON", "WATER", "GHOST"],
            ["PSYCHIC"]),
        new location_season("Rolling Mountains in Summer",
            ["FIGHTING", "BUG", "BUG", "FLYING", "NORMAL", "ROCK", "ELECTRIC", "FIRE"],
            ["DARK", "FAIRY", "GHOST", "GRASS", "DRAGON", "GROUND", "STEEL", "ICE"],
            ["POISON", "WATER"],
            ["PSYCHIC"]),
        new location_season("Rolling Mountains in Fall",
            ["FIGHTING", "BUG", "FLYING", "NORMAL", "ROCK", "GHOST"],
            ["DARK", "ELECTRIC", "FAIRY", "FIRE", "GRASS", "DRAGON", "GROUND", "STEEL", "ICE"],
            ["POISON", "WATER"],
            ["PSYCHIC"]),
        new location_season("Rolling Mountains in Winter",
            ["FIGHTING", "NORMAL", "ROCK", "ICE", "DARK"],
            ["BUG", "ELECTRIC", "FAIRY", "GHOST", "DRAGON", "GROUND", "STEEL", "FLYING"],
            ["POISON", "WATER", "FIRE", "GRASS"],
            ["PSYCHIC"])
    ],
    [
        new location_season("Onix Peak in Spring",
            ["FIGHTING", "FLYING", "NORMAL", "GROUND", "PSYCHIC", "STEEL", "ROCK", "FAIRY", "GRASS"],
            ["BUG", "DARK", "ELECTRIC", "DRAGON", "ICE"],
            ["FIRE", "POISON", "GHOST"],
            ["WATER"]),
        new location_season("Onix Peak in Summer",
            ["FIGHTING", "FLYING", "NORMAL", "GROUND", "PSYCHIC", "STEEL", "ROCK", "BUG", "ELECTRIC"],
            ["FIRE", "DARK", "DRAGON", "FAIRY", "GHOST", "GRASS", "ICE"],
            ["POISON"],
            ["WATER"]),
        new location_season("Onix Peak in Fall",
            ["FIGHTING", "FLYING", "NORMAL", "GROUND", "PSYCHIC", "STEEL", "ROCK", "GHOST"],
            ["BUG", "DARK", "ELECTRIC", "DRAGON", "FAIRY", "GRASS", "ICE"],
            ["FIRE", "POISON"],
            ["WATER"]),
        new location_season("Onix Peak in Winter",
            ["FIGHTING", "NORMAL", "GROUND", "PSYCHIC", "STEEL", "ROCK", "ICE", "DARK"],
            ["FLYING", "ELECTRIC", "DRAGON", "FAIRY", "GHOST"],
            ["POISON", "BUG", "GRASS"],
            ["WATER", "FIRE"])
    ],
    [
        new location_season("Chilling Cliffs in Spring",
            ["DARK", "FIGHTING", "FAIRY", "ICE", "NORMAL", "GRASS", "ROCK"],
            ["BUG", "FLYING", "PSYCHIC", "STEEL", "GHOST"],
            ["DRAGON", "ELECTRIC", "POISON", "GROUND"],
            ["FIRE", "WATER"]),
        new location_season("Chilling Cliffs in Summer",
            ["DARK", "FIGHTING", "GHOST", "ICE", "NORMAL", "BUG","ROCK"],
            ["ELECTRIC", "FLYING", "PSYCHIC", "STEEL"],
            ["DRAGON", "FAIRY", "GRASS", "POISON", "GROUND"],
            ["FIRE", "WATER"]),
        new location_season("Chilling Cliffs in Fall",
            ["DARK", "FIGHTING", "GHOST", "ICE", "NORMAL", "GHOST","ROCK"],
            ["BUG", "FLYING", "PSYCHIC", "STEEL"],
            ["DRAGON", "ELECTRIC", "FAIRY", "GRASS", "POISON", "GROUND"],
            ["FIRE", "WATER"]),
        new location_season("Chilling Cliffs in Winter",
            ["DARK", "FIGHTING", "GHOST", "ICE", "ICE", "NORMAL", "DARK","ROCK"],
            ["PSYCHIC", "STEEL"],
            ["DRAGON", "ELECTRIC", "FAIRY", "POISON", "BUG", "FLYING", "GROUND"],
            ["FIRE", "WATER", "GRASS"])
    ],
    [
        new location_season("Desert Strip in Spring",
            ["GROUND", "ROCK", "GRASS", "GRASS", "FAIRY"],
            ["BUG", "FIGHTING", "FLYING", "NORMAL", "POISON", "PSYCHIC", "STEEL", "FIRE", "DARK"],
            ["GHOST", "ELECTRIC", "WATER", "DRAGON"],
            ["ICE"]),
        new location_season("Desert Strip in Summer",
            ["GROUND", "ROCK", "GRASS", "BUG"],
            ["ELECTRIC", "FAIRY", "FIGHTING", "FLYING", "NORMAL", "POISON", "PSYCHIC", "STEEL", "FIRE", "DARK", "GHOST"],
            ["WATER", "DRAGON"],
            ["ICE"]),
        new location_season("Desert Strip in Fall",
            ["GROUND", "ROCK", "GRASS", "GHOST"],
            ["BUG", "FAIRY", "FIGHTING", "FLYING", "NORMAL", "POISON", "PSYCHIC", "STEEL", "DARK"],
            ["ICE", "ELECTRIC", "FIRE", "WATER", "DRAGON"],
            [""]),
        new location_season("Desert Strip in Winter",
            ["GROUND", "ROCK", "DARK"],
            ["GRASS", "FAIRY", "FIGHTING", "NORMAL", "POISON", "PSYCHIC", "STEEL", "ICE", "GHOST"],
            ["BUG", "ELECTRIC", "FIRE", "WATER", "DRAGON", "FLYING"],
            [""])
    ],
    [
        new location_season("Fairy Island in Spring",
            ["BUG", "FAIRY", "FAIRY", "ELECTRIC", "FLYING", "GRASS", "GRASS", "POISON", "NORMAL", "PSYCHIC", "WATER"],
            ["FIGHTING", "FIRE", "GROUND"],
            ["STEEL", "ROCK", "GHOST"],
            ["DRAGON", "ICE", "DARK"]),
        new location_season("Fairy Island in Summer",
            ["BUG", "FAIRY", "ELECTRIC", "ELECTRIC", "FLYING", "GRASS", "POISON", "NORMAL", "PSYCHIC", "WATER", "FIRE"],
            ["FIGHTING", "GHOST", "GROUND"],
            ["STEEL", "ROCK"],
            ["DRAGON", "ICE", "DARK"]),
        new location_season("Fairy Island in Fall",
            ["BUG", "FAIRY", "ELECTRIC", "FLYING", "GRASS", "POISON", "NORMAL", "PSYCHIC", "WATER", "GHOST"],
            ["FIGHTING", "FIRE", "GROUND"],
            ["STEEL", "ROCK"],
            ["DRAGON", "ICE", "DARK"]),
        new location_season("Fairy Island in Winter",
            ["FAIRY", "ELECTRIC", "POISON", "NORMAL", "PSYCHIC", "WATER"],
            ["FIGHTING", "GHOST", "GROUND", "BUG", "FLYING", "GRASS"],
            ["STEEL", "ROCK", "ICE", "FIRE"],
            ["DRAGON", "DARK"])
    ],
    [
        new location_season("Paradise Island in Spring",
            ["BUG", "ELECTRIC", "FAIRY", "FIRE", "FLYING", "GRASS", "GROUND", "POISON", "WATER", "FAIRY", "GRASS"],
            ["DARK", "DRAGON", "NORMAL", "ROCK", "PSYCHIC", "STEEL"],
            ["FIGHTING", "ICE", "GHOST"],
            [""]),
        new location_season("Paradise Island in Summer",
            ["BUG", "BUG", "ELECTRIC", "ELECTRIC", "FAIRY", "FIRE", "FIRE", "FLYING", "GRASS", "GROUND", "POISON", "WATER"],
            ["DARK", "DRAGON", "GHOST", "NORMAL", "ROCK", "PSYCHIC", "STEEL"],
            ["FIGHTING"],
            ["ICE"]),
        new location_season("Paradise Island in Fall",
            ["BUG", "ELECTRIC", "FAIRY", "FIRE", "FLYING", "GRASS", "GROUND", "POISON", "WATER", "GHOST"],
            ["DARK", "DRAGON", "NORMAL", "ROCK", "PSYCHIC", "STEEL"],
            ["FIGHTING", "ICE"],
            [""]),
        new location_season("Paradise Island in Winter",
            ["ELECTRIC", "FAIRY", "GROUND", "POISON", "WATER", "DARK"],
            ["BUG", "DRAGON", "GHOST", "NORMAL", "ROCK", "PSYCHIC", "STEEL", "FIRE", "FLYING", "GRASS", "ICE"],
            ["FIGHTING"],
            [""])
    ],
    [
        new location_season("Mud Baths in Spring",
            ["BUG", "FIRE", "GROUND", "POISON", "WATER", "GRASS"],
            ["DARK", "DRAGON", "ELECTRIC", "FLYING", "FAIRY", "NORMAL", "ROCK"],
            ["FIGHTING", "PSYCHIC", "STEEL", "GHOST"],
            ["ICE"]),
        new location_season("Mud Baths in Summer",
            ["BUG", "BUG", "FIRE", "FIRE", "ELECTRIC", "GROUND", "POISON", "WATER"],
            ["DARK", "DRAGON", "FLYING", "GRASS", "NORMAL", "ROCK"],
            ["FAIRY", "FIGHTING", "PSYCHIC", "STEEL", "GHOST"],
            ["ICE"]),
        new location_season("Mud Baths in Fall",
            ["BUG", "FIRE", "GROUND", "POISON", "WATER"],
            ["DARK", "DRAGON", "ELECTRIC", "FLYING", "GRASS", "NORMAL", "ROCK", "GHOST"],
            ["FAIRY", "FIGHTING", "PSYCHIC", "STEEL"],
            ["ICE"]),
        new location_season("Mud Baths in Winter",
            ["GROUND", "POISON", "WATER", "DARK"],
            ["BUG", "DRAGON", "ELECTRIC", "NORMAL", "ROCK", "FIRE"],
            ["FAIRY", "FIGHTING", "PSYCHIC", "STEEL", "FLYING", "GRASS", "GHOST"],
            ["ICE"])
    ]
];

let SELECT_PLACE_LAST_OPTION = 13;
let SELECT_SEASON_LAST_OPTION = 3;
let SELECT_RARITY_LAST_OPTION = 5;
let SELECT_TYPE_LAST_OPTION = 17;

//rarity distributions
let OVERPOP_THRESHOLD = 0.3; //includes 0, does not include 0.3
let COMMON_THRESHOLD = 0.6; //includes 0.3, does not include 0.6
let UNCOMMON_THRESHOLD = 0.85; //includes 0.6, does not include 0.85
let RARE_THRESHOLD = 0.9775; //includes 0.85, does not include 0.9775
let ENDANGERED_THRESHOLD = 1; //includes 0.9775, does not include 1

//DISPLAYING RESULTS

function print(string){
    let br = document.createElement("br");

    let list_element = document.getElementById("results");
    let node = document.createTextNode(string);

    list_element.appendChild(node);
    list_element.appendChild(br);
}

function print_bold(string){
    let br = document.createElement("br");
    let b = document.createElement("b");
    let list_element = document.getElementById("results");
    let node = document.createTextNode(string);

    b.appendChild(node);
    list_element.appendChild(b);
    list_element.appendChild(br);
}

//RANDOMIZING THE POKEMON’S STATS//

function randomize_sex (poke_fem_chance) {
    let rand_sex = Math.random();
    let sex;
    if (rand_sex < poke_fem_chance){
        sex = "FEMALE";
    }
    else if (rand_sex >= poke_fem_chance && rand_sex < 1){
        sex = "MALE";
    }
    else {
        print("Something went wrong with choosing the sex.");
        return -1; //error
    }
    return sex;
}

function randomize_x_from_array(x, array){
    if (x > array.length){
        print("There are not enough arguments in the array to pick " + x + " of them.");
    }
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    //while there remain elements to shuffle...
    while (0 !== currentIndex){
        //pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // and swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array.slice(0, x);
}

function randomize_eggmove_number () {
    let rand_number = Math.floor(Math.random() * 9) + 1;
    let eggmove_number;
    if (rand_number <= 3){
        eggmove_number = 0;
    }
    else if (rand_number >= 4 && rand_number <= 6){
        eggmove_number = 1;
    }
    else if (rand_number >= 7 && rand_number <= 8){
        eggmove_number = 2;
    }
    else if (rand_number == 9) {
        eggmove_number = 3;
    }
    else {
        print("Something went wrong with choosing how many egg moves.");
        return -1; //error
    }
    return eggmove_number;
}

function randomize_eggmoves(eggmove_array){
    let eggmove_number = randomize_eggmove_number();
    let eggmoves = randomize_x_from_array(eggmove_number, eggmove_array);
    print("Pokemon should have " + eggmove_number + " egg moves.");
    if (eggmove_number == 0){
        return "None this time";
    }
    print("Randomizing egg moves from " + eggmove_array);
    return eggmoves;
}

function randomize_nature(){
    let nature_int = Math.floor(Math.random()*25);
    switch (nature_int){
        case 0: return "Hardy";
        case 1: return "Lonely";
        case 2: return "Brave";
        case 3: return "Adamant";
        case 4: return "Naughty";
        case 5: return "Bold";
        case 6: return "Docile";
        case 7: return "Relaxed";
        case 8: return "Impish";
        case 9: return "Lax";
        case 10: return "Timid";
        case 11: return "Hasty";
        case 12: return "Serious";
        case 13: return "Jolly";
        case 14: return "Naive";
        case 15: return "Modest";
        case 16: return "Mild";
        case 17: return "Quiet";
        case 18: return "Bashful";
        case 19: return "Rash";
        case 20: return "Calm";
        case 21: return "Gentle";
        case 22: return "Sassy";
        case 23: return "Careful";
        case 24: return "Quirky";
        default: return "Could not determine nature";
    }
}

function randomize_stats(pokemon){
    let sex = randomize_sex(pokemon.fem_chance);
    let abil = randomize_x_from_array(1, pokemon.abilities);
    let eggmoves = randomize_eggmoves(pokemon.egg_moves);
    let nature1 = randomize_nature();
    let nature2 = randomize_nature();
    let nature3 = randomize_nature();

    print_bold("Sex: "+ sex +", Ability: "+ abil);
    print_bold("Egg moves: " + eggmoves);
    print("\n");
    console.log(pokemon.name + "'s suggested Nature is: " + nature1 + " and/or " + nature2 + ", maybe a bit " + nature3);
}

function randomize_stats_no_em(pokemon){
    let sex = randomize_sex(pokemon.fem_chance);
    let abil = randomize_x_from_array(1, pokemon.abilities);
    let nature1 = randomize_nature();
    let nature2 = randomize_nature();
    let nature3 = randomize_nature();

    print_bold("Sex: "+ sex +", Ability: "+ abil);
    //print("\n");
    console.log(pokemon.name + "'s suggested Nature is: " + nature1 + " and/or " + nature2 + ", maybe a bit " + nature3);
}

//RANDOMIZING POKEMON SPECIES

function randomize_poke (type, rarity, never_found) {
    //this function will need to find all the Pokemon with the given type and rarity and then randomly pick one
    console.log("Now randomizing Pokemon from Type: " + type + "... And Rarity: " + rarity);
    let possible_Pokemon = [];
    Pokemon_array[rarity].forEach(function(element) {
        let forbidden = false;
        never_found.forEach(function(f_type){
            if (f_type == element.type1 || f_type == element.type2 || f_type == element.type_evolved){
                forbidden = true;
            }
        });
        if ((element.type1 == type || element.type2 == type)
            && forbidden == false){
            possible_Pokemon.push(element);
        }
    });

    //need to make sure at least one Pokemon made it into possible_Pokemon.
    if (possible_Pokemon.length < 1){
        print("No suitable Pokemon exist with the randomized type and rarity.");
        print("\n");
        return -1;
    }
    else {
        console.log("Array built succesfully");
    }

    //print the results, so that we can make sure the program is working as intended
    let poss_pokemon_names = "";
    for (i = 0; i < possible_Pokemon.length; i++){
        poss_pokemon_names += possible_Pokemon[i].name + ". ";
    }
    print("Possible Pokemon for selected type and rarity: ");
    print(poss_pokemon_names);
    return possible_Pokemon[Math.floor(Math.random()*possible_Pokemon.length)];
}


//RANDOMIZING GENERAL INFO (RARITY AND TYPE)

function randomize_rarity () {
    let rand_rarity = Math.random();
    let poke_rarity;
    if (rand_rarity < OVERPOP_THRESHOLD){
        poke_rarity = 1; //overpopulated
    }
    else if (rand_rarity >= OVERPOP_THRESHOLD && rand_rarity < COMMON_THRESHOLD){
        poke_rarity = 2; //common
    }
    else if (rand_rarity >= COMMON_THRESHOLD && rand_rarity < UNCOMMON_THRESHOLD){
        poke_rarity = 3; //uncommon
    }
    else if (rand_rarity >= UNCOMMON_THRESHOLD && rand_rarity < RARE_THRESHOLD){
        poke_rarity = 4; //rare
    }
    else if (rand_rarity >= RARE_THRESHOLD && rand_rarity < ENDANGERED_THRESHOLD) {
        poke_rarity = 5; //endangered (threshold should always be 1)
    }
    else {
        print("Something went wrong with choosing the rarity.");
        return -1; //error
    }
    return poke_rarity;
}


function place_int_to_string(int){
    switch (int){
        case 0: return "WGF";
        case 1: return "Crying Plat";
        case 2: return "EGF";
        case 3: return "Dragon P";
        case 4: return "Lion's Plains";
        case 5: return "Cloven Volcano";
        case 6: return "Sub River";
        case 7: return "Rolling Mo";
        case 8: return "Onix P";
        case 9: return "Chilling Cl";
        case 10: return "Desert St";
        case 11: return "Fairy I";
        case 12: return "Paradise I";
        case 13: return "Mud Baths";
        default: return "Cannot change location to string.";
    }
}

function time_int_to_string(int){
    switch (int){
        case 0: return "Spring";
        case 1: return "Summer";
        case 2: return "Fall";
        case 3: return "Winter";
        default: return "Cannot change time to string.";
    }
}


//fucky rarity
function rarity_to_string(poke_rarity){
    switch (poke_rarity){
        case 0: return "ANY";
        case 1: return "OVERPOPULATED";
        case 2: return "COMMON";
        case 3: return "UNCOMMON";
        case 4: return "RARE";
        case 5: return "ENDANGERED";
        default: return "Cannot change rarity to string.";
    }
}

function type_int_to_string(poke_type){
    switch (poke_type){
        case 0: return "NORMAL";
        case 1: return "FIGHTING";
        case 2: return "FLYING";
        case 3: return "POISON";
        case 4: return "GROUND";
        case 5: return "ROCK";
        case 6: return "BUG";
        case 7: return "GHOST";
        case 8: return "STEEL";
        case 9: return "FIRE";
        case 10: return "WATER";
        case 11: return "GRASS";
        case 12: return "ELECTRIC";
        case 13: return "PSYCHIC";
        case 14: return "ICE";
        case 15: return "DRAGON";
        case 16: return "DARK";
        case 17: return "FAIRY";
        default: return "Cannot change type to string.";
    }
}

function randomize_general (location) {
    print("Randomizing for... " + location.name);
    let type_rarity = Math.random();
    let poke_type;
    if (type_rarity < 0.6) {
        console.log("Continue with one of the " + location.common_types.length + " COMMON types: " +
        location.common_types);
        let common_type = Math.floor(Math.random() * location.common_types.length);
        poke_type = location.common_types[common_type];

    }
    else if (type_rarity >= 0.6 && type_rarity < 0.85) {
        console.log("Continue with one of the " + location.uncommon_types.length + " UNCOMMON types: " +
            location.uncommon_types);
        let uncommon_type = Math.floor(Math.random() * location.uncommon_types.length);
        poke_type = location.uncommon_types[uncommon_type];

    }
    else if (type_rarity >= 0.85 && type_rarity < 1) {
        console.log("Continue with one of the " + location.rare_types.length + " RARE types: " +
            location.rare_types);
        let rare_type = Math.floor(Math.random() * location.rare_types.length);
        poke_type = location.rare_types[rare_type];

    }
    else {
        print("Something went wrong with choosing the rarity of the type.");
    }

    let poke_rarity = randomize_rarity();
    let rarity_string = rarity_to_string(poke_rarity);
    print_bold("You should spawn a " + poke_type + " type with " + rarity_string + " spawn rate.");
    return [poke_type, poke_rarity];
}

function print_type_info(poke_object){

    if (poke_object.type2 != "NONE"){
        print(poke_object.name + " has the following types: " + poke_object.type1 + " and " + poke_object.type2);
    }
    else{
        print(poke_object.name + " has the following type: " + poke_object.type1);
    }

    if (poke_object.type_evolved != "NONE"){
        print("If it evolves, it will also have " + poke_object.type_evolved);
    }
}

function shiny_chance(){
    let ran = Math.floor((Math.random()*100));

    print("Shiny? " + (ran+1));
    if (ran == 0) {
        print_bold("You may qualify for additional shininess!!! (1% chance)");
    }
    else{
        print("Probably no shiny this time (1% chance)");
    }
}

//PUTTING IT TOGETHER

function go(){
    //get the time and place from user input, or randomize if user input is -1 ("Any")
    let place = document.getElementById("select_place").value;
    console.log("User place input: " + place);
    let place_int = parseInt(place, 10);
    if (place_int == -1) {
        place_int = Math.floor(Math.random()*(SELECT_PLACE_LAST_OPTION+1));
        console.log("Location randomized: " + place_int );
    } else {
        console.log("Location is specified: " + place_int);
    }
    console.log("place_int to string: " + place_int_to_string(place_int));


    let time = document.getElementById("select_season").value;
    console.log("User time input: " + time);
    let time_int = parseInt(time, 10);
    if (time_int == -1) {
        time_int = Math.floor(Math.random()*(SELECT_SEASON_LAST_OPTION+1));
        console.log("Time randomized: " + time_int);
    } else {
        console.log("Time is specified: " + time_int);
    }
    console.log("time_int to string: " + time_int_to_string(time_int));


    let poke_info;
    poke_info = randomize_general(location_array[place_int][time_int]);
    let rand_poke = randomize_poke(poke_info[0], poke_info[1], location_array[place_int][time_int].never_found);
    if (rand_poke == -1){
        return -1;
    }

    print_bold("You should spawn a: " + rand_poke.name);
    print_type_info(rand_poke);

    //now to randomize some stats for the Pokemon
    randomize_stats(rand_poke);
}



//randomizing stats for given Pokemon species
function stats_go(string){
    string = document.getElementById("spec_poke").value;
    let user_string = compare_str_obj.bind(null, string);
    let poke_object;
    for (let i = 0; i < Pokemon_array.length; i++){
        poke_object = Pokemon_array[i].find(user_string);
        if (poke_object != undefined){
            break;
        }
    }
    if (poke_object == undefined){
        print("Please enter a valid Pokemon name");
        print("\n");
    }
    print_bold("Randomizing stats for: " + poke_object.name);
    print_type_info(poke_object);

    randomize_stats(poke_object);
}

function compare_str_obj(string, object){
    return string == object.name;
}




//randomizing species from given rarity and type
function spec_go(){

    //get the rarity and type from user input, or randomize if user input is -1 ("Any")
    let rarity = document.getElementById("select_rarity").value;
    console.log("User rarity input: " + rarity);
    let rarity_int = parseInt(rarity, 10);
    if (rarity_int == -1){
        rarity_int = randomize_rarity();
        console.log("Rarity randomized: " + rarity_int);
    } else {
        console.log("Rarity is specified: " + rarity_int);
    }
    console.log("rarity_int: " + rarity_int + " (" + rarity_to_string(rarity_int) + ")");

    let type = document.getElementById("select_type").value;
    console.log("User type input: " + type);
    let type_int = parseInt(type, 10);
    if (type_int == -1){
        type_int = Math.floor(Math.random()*(SELECT_TYPE_LAST_OPTION+1));
        console.log("Type randomized: " + type_int);
    }
    else {
        console.log("Type is specified: " + type_int)
    }
    console.log("type_int: " + type_int + " (" + type_int_to_string(type_int) + ")");

    print_bold("Spawning a " + type_int_to_string(type_int) + " type with " + rarity_to_string(rarity_int) + " spawn rate.");
    let rand_poke = randomize_poke(type_int_to_string(type_int), rarity_int, ["NA"]);
    if (rand_poke == -1){
        return -1;
    }
    print_bold("You should spawn a: " + rand_poke.name);
    print_type_info(rand_poke);

    //now to randomize some stats for the Pokemon
    randomize_stats(rand_poke);
}





function test() {
    let place = document.getElementById("select_place").value;
    print("User input: " + place);
    let place_int = parseInt(place, 10);

    let time = document.getElementById("select_season").value;
    print("User input: " + time);
    let time_int = parseInt(time, 10);

    let myArray = new Array;
    for(let i = 0; i < 10 ; i++){
        myArray.push(0);
    }
    for (let i = 0; i < 10000; i++){
        let info = randomize_general(location_array[place_int - 1][time_int - 1]);
        myArray[info[1]]++;
    }
    myArray.forEach(function(element){
        print(element + " " + (element/10000));
    });

}





//CALCULATING NUM OF POSSIBLE EGGMOVES. NOT FOR GENERAL PUBLIC USE.

function factorialize(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}

function n_choose_k(n, k){
    return factorialize(n) / ( factorialize(k) * (factorialize(n-k)) );
}

let parent_em = 5;

function calc_parent_em(){
    let p_arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    //directly edit the values of r_arr to be the chances of randomly mutating 0, 1, 2, 3 eggmoves
    let r_arr = [0.20, 0.50, 0.20, 0.10];
    for (let x = 1; x <= parent_em; x++){
        print_bold("IF PARENTS HAVE " + x + " EGG MOVE(s)");
        console.log("BEGIN CALCULATING for " + x + " parent eggmoves");
        for (let y = 0; y <= x; y++){
            let z = n_choose_k(x, y);
            console.log("Calculating " + x + " choose " + y + "... Result: " + z);
            let percent_chance = z * (Math.pow(0.5,x));
            console.log("Chance to inherit " + y + " egg move(s) from parents: "
                + percent_chance + " percent");
            p_arr[y] = percent_chance;
        }
        //= " + p_arr[0] + "*" + r_arr[0] + " = "


        // Calculate final probabilities based on arbitrary weights(r_arr) and the real calculated chances of inheriting
        // a given number of traits
        let chance_of_0 =    p_arr[0]*r_arr[0];

        let chance_of_1 = ( (p_arr[0]*r_arr[1]) +
                            (p_arr[1]*r_arr[0]));

        let chance_of_2 = ( (p_arr[0]*r_arr[2]) +
                            (p_arr[1]*r_arr[1]) +
                            (p_arr[2]*r_arr[0]));

        let chance_of_3 = ( (p_arr[0]*r_arr[3]) +
                            (p_arr[1]*r_arr[2]) +
                            (p_arr[2]*r_arr[1]) +
                            (p_arr[3]*r_arr[0]));

        print("Chance of 0 EM total: " + chance_of_0.toFixed(2));
        print("Chance of 1 EM total: " + chance_of_1.toFixed(2));
        print("Chance of 2 EM total: " + chance_of_2.toFixed(2));
        print("Chance of 3 EM total: " + chance_of_3.toFixed(2));
        print("Chance of 4 EM total: " + (1-chance_of_0-chance_of_1-chance_of_2-chance_of_3).toFixed(2));
    }
}





//BREEDING FUNCTIONS

class parent_obj {
    constructor(species, inheritable_eggmoves) {
        this.species = species;
        this.inheritable_eggmoves = inheritable_eggmoves;
    }
}

//function to turn user input into objects??? I'm not sure what to do with this function tbh. right now I'm just working around it by typing breed() into the console
function get_parents(){
    //player inputs CSV... program must interpret and turn into objects spec and arr like these 4 lines:
    let p1_spec = "Mareep";
    let p1_arr = ["Agility"];
    let p2_spec = "Chikorita";
    let p2_arr = ["Agility", "Iron Tail"];

    let parent1 = new parent_obj (p1_spec, p1_arr);
    let parent2 = new parent_obj (p2_spec, p2_arr);
    let returned_array = [];

    //set the chance to inherit an egg move from a parent
    let chance_to_inherit = 0.5;

    for (i = 0; i < p1_arr.length; i++){
        if (Math.random() <= chance_to_inherit){
            console.log("Offspring inherits " + p1_arr[i] + " from Parent 1");
            returned_array.push(p1_arr[i]);
        }
    }
    for (i = 0; i < p2_arr.length; i++){
        if (Math.random() <= chance_to_inherit){
            console.log("Offspring inherits " + p2_arr[i] + " from Parent 2");
            returned_array.push(p2_arr[i]);
        }
    }
    return returned_array;
}


//function for getting offspring's species, abil, sex, and shiny chance!
function offspring_stats(parent1_species, parent2_species){
    //determine the offspring's species
    let string;
    if (Math.random() < .5){
        string = parent1_species;
    }
    else{
        string = parent2_species;
    }
    print_bold("Offspring species will be: " + string);

    //convert the name into an actual object
    let species_string = compare_str_obj.bind(null, string);
    let poke_object;
    for (let i = 0; i < Pokemon_array.length; i++){
        poke_object = Pokemon_array[i].find(species_string);
        if (poke_object != undefined){
            break;
        }
    }
    if (poke_object == undefined){
        print("Please enter a Pokemon species");
        print("\n");
    }

    print_bold("Randomizing sex and abilities for: " + poke_object.name);
    randomize_stats_no_em(poke_object);

    shiny_chance();

    return poke_object;
}




//function for finding randomly mutated eggmoves (contains function for the rest of the stuff)
function rand_em(offspring_object){

    //variable to store number of randomized egg moves
    let num_rand_em;
    //set the threshold to randomly mutate 0 eggmoves, 1, 2, or 3.
    let rand_chance_arr = [0, 0.2, 0.7, 0.9];

    //this part of function determines how many random egg moves offspring should have
    let rand_num = Math.random();
    for (let i = 0; i < rand_chance_arr.length; i++) {
        if (rand_num >= rand_chance_arr[i]) {
            num_rand_em = i;
        }
    }
    console.log("Final number of mutated eggmoves: " + num_rand_em);

    //next I need to get access to the species' eggmove array and pull out num_rand_em elements to push into array of moves
    let random_eggmoves = randomize_x_from_array(num_rand_em, offspring_object.egg_moves);
    console.log("Randomly mutated eggmoves: " + random_eggmoves);
    print("The offspring acquires " + num_rand_em + " randomly mutated eggmove(s): " + random_eggmoves);
    return random_eggmoves;
}



function inherit_ems(offspring_object, p1_movelist_arr, p2_movelist_arr){
    //given the offspring's species (an object) and the parents' movelist arrays
    //need to figure out and hold onto the moves that also show up in the offspring's species.eggmove array (maybe filter function?)
    console.log("Possible EMs of species: " + offspring_object.egg_moves);

    let all_parent_moves = p1_movelist_arr.concat(p2_movelist_arr);
    console.log("Parents moves: " + all_parent_moves);

    //list the possible-to-inherit eggmoves in this array...

    let potential_array = all_parent_moves.filter(function (offspring_object, move) {
        for (let i = 0; i < offspring_object.egg_moves.length; i++){
            if (move == offspring_object.egg_moves[i]){
                return true;
            }
        }
        return false;
    }.bind(null, offspring_object)
);

    console.log("Potentially inherited eggmoves: " + potential_array);

    //and the ACTUAL inherited eggmoves in this one...
    let em_array = [];

    for (let i = 0; i < potential_array.length; i++){
        if (Math.random() <= 0.5){
            em_array.push(potential_array[i]);
        }
    }
    print("The offspring acquires the following inherited eggmove(s): " + em_array);
    return em_array;
}


function breed(parent1_species, parent2_species, parent1_movelist_str, parent2_movelist_str){
    parent1_species = document.getElementById("first_species").value;
    parent2_species = document.getElementById("second_species").value;
    parent1_movelist_str = document.getElementById("first_movelist").value;
    parent2_movelist_str = document.getElementById("second_movelist").value;

    //TODO: make this function less picky. right now it only works in the format "Move,Move,Move" and acts poorly if any spaces or deviations exist
    parent1_movelist = parent1_movelist_str.split(",");
    parent2_movelist = parent2_movelist_str.split(",");

    //get species object first
    let offspring_species = offspring_stats(parent1_species, parent2_species);

    //now start compiling eggmoves, based on the species
    let random_eggmoves = rand_em(offspring_species);

    let inherited_eggmoves = inherit_ems(offspring_species, parent1_movelist, parent2_movelist);

    let all_potential_ems = [];

    for (i=0; i < random_eggmoves.length; i++){
       if (random_eggmoves[i].length > 0){
            all_potential_ems.push(random_eggmoves[i]);
        }
    }
    for (i=0; i < inherited_eggmoves.length; i++){
        if (inherited_eggmoves[i] != null){
            all_potential_ems.push(inherited_eggmoves[i]);
        }
    }

    print("All possible eggmoves: " + all_potential_ems);
    print("Selecting 4 final eggmoves from list of all possible eggmoves...");
    let final_ems = randomize_x_from_array(4, all_potential_ems);
    print_bold("Final results: ")
    console.log(final_ems[0]);
    for (i=0; i < final_ems.length; i++){

        print("\"" + final_ems[i] + "\",");
    }
    print("\n");
}




//I think this function is broken and replaced with breed()... but I'm scared to delete it anyways.
// in-progress function that will bring all the information into one object
function breed_that_poke(){

    //set up the array that holds all the egg moves the offspring will potentially manifest
    let o_potarr = [];

    //get arrays and append the two functions into o_potarr
    let parents_array = get_parents();
    let randomized_array = rand_em("Mareep", "Chikorita");

    //append the things!

    console.log("Full list of potentially manifesting eggmoves: " + o_potarr);

}

