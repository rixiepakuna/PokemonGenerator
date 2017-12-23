//THE POKEMON DATA

//pokemon object constructor
var Pokemon = function (name, rarity, type1, type2, type_evolved,
                        fem_chance, abilities, egg_moves) {
    this.name = name;
    this.rarity = rarity;
    this.type1 = type1;
    this.type2 = type2;
    this.type_evolved = type_evolved;
    this.fem_chance = fem_chance;
    this.abilities = abilities;
    this.egg_moves = egg_moves;
};

var Pokemon_array = [
    //rarity 0
    [
        new Pokemon("Error", 0, "ERROR", "ERROR", "ERROR",
            0.5, ["ERROR"],
            ["Error"])
    ],
    //rarity 1
    [
        new Pokemon("Error", 1, "ERROR", "ERROR", "ERROR",
            0.5, ["ERROR"],
            ["Error"])
    ],
    //2
    [ //overpopulated
        new Pokemon("Burmy", 2, "BUG", "NONE", "FLYING",
            0.5, ["SHED SKIN", "OVERCOAT"],
            ["No Egg Moves"]),
        new Pokemon("Durant", 2, "BUG", "STEEL", "NONE",
            0.5, ["SWARM", "HUSTLE", "TRUANT"],
            ["Baton Pass", "Endure", "Feint Attack", "Rock Climb", "Screech", "Thunder Fang"]),
        new Pokemon("Kricketot", 2, "BUG", "NONE", "FLYING",
            0.5, ["SHED SKIN", "RUN AWAY"],
            ["No Egg Moves"]),
        new Pokemon("Ledyba", 2, "BUG", "FLYING", "NONE",
            0.5, ["SWARM", "EARLY BIRD", "RATTLED"],
            ["Bide", "Bug Bite", "Bug Buzz", "Counter", "Dizzy Punch", 
             "Drain Punch", "Encore", "Endure", "Focus Punch", 
             "Knock Off", "Psybeam", "Screech", "Silver Wind", "Tailwind"]),
        new Pokemon("Scatterbug", 2, "BUG", "NONE", "FLYING",
            0.5, ["SHIELD DUST", "COMPOUND EYES", "FRIEND GUARD"],
            ["Poison Powder", "Rage Powder", "Stun Spore"]),
        new Pokemon("Wurmple", 2, "BUG", "FLYING", "POISON",
            0.5, ["SHIELD DUST", "RUN AWAY"],
            ["No Egg Moves"]),
      //#FIXME: Wurmple should technically have Flying and Poison both be type_evolved, not type_2...
     
        new Pokemon("Hoppip", 2, "GRASS", "FLYING", "NONE",
            0.5, ["CHLOROPHYLL", "LEAF GUARD", "INFILTRATOR"],
            ["Amnesia", "Aromatherapy", "Confusion", "Cotton Guard", "Double-Edge", 
             "Encore", "Endure", "Grassy Terrain", "Helping Hand", "Seed Bomb", 
             "Strength Sap", "Worry Seed"]),
        new Pokemon("Pidove", 2, "NORMAL", "FLYING", "NONE",
            0.5, ["BIG PECKS", "SUPER LUCK", "RIVALRY"],
            ["Bestow", "Hypnosis", "Lucky Chant", "Morning Sun", "Night Slash", 
             "Steel Wing", "Uproar", "Wish"]),
        new Pokemon("Pikipek", 2, "NORMAL", "FLYING", "NONE",
            0.5, ["KEEN EYE", "SKILL LINK", "PICKUP"],
            ["Boomburst", "Brave Bird", "Mirror Move", "Tailwind", "Uproar"]),
        new Pokemon("Starly", 2, "NORMAL", "FLYING", "NONE",
            0.5, ["KEEN EYE", "RECKLESS"],
            ["Astonish", "Detect", "Double-Edge", "Feather Dance", "Foresight", 
             "Fury Attack", "Mirror Move", "Pursuit", "Revenge", "Roost", 
             "Sand Attack", "Steel Wing", "Uproar"]),
        new Pokemon("Wingull", 2, "WATER", "FLYING", "NONE",
            0.5, ["KEEN EYE", "HYDATION", "RAIN DISH"],
            ["Agiliity", "Aqua Ring", "Brine", "Gust", "Knock Off", "Mist", 
             "Roost", "Soak", "Twister", "Water Sport", "Wide Guard"]),
        new Pokemon("Zubat", 2, "POISON", "FLYING", "NONE",
            0.5, ["INNER FOCUS", "INFILTRATOR"],
            ["Brave Bird", "Curse", "Defog", "Feint Attack", "Giga Drain", 
             "Gust", "Hypnosis", "Nasty Plot", "Pursuit", "Quick Attack", 
             "Steel Wing", "Venom Drench", "Whirlwind", "Zen Headbutt"]),
        new Pokemon("Foongus", 2, "GRASS", "POISON", "NONE",
            0.5, ["EFFECT SPORE", "REGENERATOR"],
            ["Egg Moves Unavailable"]),
      
        new Pokemon("Bidoof", 2, "NORMAL", "NONE", "WATER",
            0.5, ["SIMPLE", "UNAWARE", "MOODY"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Buneary", 2, "NORMAL", "NONE", "NONE",
            0.5, ["RUN AWAY", "KLUTZ", "LIMBER"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Bunnelby", 2, "NORMAL", "NONE", "GROUND",
            0.5, ["PICKUP", "CHEEK POUCH", "HUGE POWER"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Dunsparce", 2, "NORMAL", "NONE", "NONE",
            0.5, ["SERENE GRACE", "RUN AWAY", "RATTLED"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Rattata", 2, "NORMAL", "NONE", "NONE",
            0.5, ["RUN AWAY", "GUTS", "HUSTLE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Sentret", 2, "NORMAL", "NONE", "NONE",
            0.5, ["RUN AWAY", "KEEN EYE", "FRISK"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Zigzagoon", 2, "NORMAL", "NONE", "NONE",
            0.5, ["PICK UP", "GLUTTONY", "QUICK FEET"],
            ["Egg Moves Unavailable"]),
          
        new Pokemon("Binacle", 2, "ROCK", "WATER", "NONE",
            0.5, ["SNIPER", "TOUGH CLAWS", "PICKPOCKET"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Wishiwashi", 2, "WATER", "NONE", "NONE",
            0.5, ["SCHOOLING"],
            ["Egg Moves Unavailable"]),   
      
      //common
        new Pokemon("Caterpie", 2, "BUG", "NONE", "FLYING",
            0.5, ["SHIELD DUST", "RUN AWAY"],
            ["No Egg Moves"]),
        new Pokemon("Combee", 2, "BUG", "FLYING", "NONE",
            0.125, ["HONEY GATHER", "HUSTLE"],
            ["No Egg Moves"]),
        new Pokemon("Dewpider", 2, "WATER", "BUG", "NONE",
            0.5, ["WATER BUBBLE", "WATER ABSORB"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Illumise", 2, "BUG", "NONE", "NONE",
            1.0, ["OBLIVIOUS", "TINTED LENS", "PRANKSTER"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Nincada", 2, "BUG", "GROUND", "FLYING",
            0.5, ["COMPOUND EYES", "RUN AWAY"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Spinarak", 2, "BUG", "POISON", "NONE",
            0.5, ["SWARM", "INSOMNIA", "SNIPER"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Surskit", 2, "BUG", "WATER", "NONE",
            0.5, ["SWIFT SWIM", "RAIN DISH"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Volbeat", 2, "BUG", "NONE", "NONE",
            0.0, ["ILLUMINATE", "SWARM", "PRANKSTER"],
            ["Egg Moves Unavailable"]),          
        new Pokemon("Weedle", 2, "BUG", "POISON", "NONE",
            0.5, ["SHIELD DUST", "RUN AWAY"],
            ["Egg Moves Unavailable"]),
          
        new Pokemon("Poochyena", 2, "DARK", "NONE", "NONE",
            0.5, ["RUN AWAY", "QUICK FEET", "RATTLED"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Purrloin", 2, "DARK", "NONE", "NONE",
            0.5, ["LIMBER", "UNBURDEN", "PRANKSTER"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Rattata (Alolan)", 2, "DARK", "NORMAL", "NONE",
            0.5, ["GLUTTONY", "HUSTLE", "THICK FAT"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Stunky", 2, "POISON", "DARK", "NONE",
            0.5, ["STENCH", "AFTERMATH", "KEEN EYE"],
            ["Egg Moves Unavailable"]),

        new Pokemon("Emolga", 2, "ELECTRIC", "FLYING", "NONE",
            0.5, ["STATIC", "MOTOR DRIVE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Mareep", 2, "ELECTRIC", "NONE", "NONE",
            0.5, ["STATIC", "PLUS"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Minun", 2, "ELECTRIC", "NONE", "NONE",
            0.5, ["MINUS", "VOLT ABSORB"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Pachirisu", 2, "ELECTRIC", "NONE", "NONE",
            0.5, ["RUN AWAY", "PICKUP", "VOLT ABSORB"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Plusle", 2, "ELECTRIC", "NONE", "NONE",
            0.5, ["PLUS", "LIGHTNING ROD"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Stunfisk", 2, "GROUND", "ELECTRIC", "NONE",
            0.5, ["STATIC", "LIMBER", "SAND VEIL"],
            ["Egg Moves Unavailable"]),
                   
        new Pokemon("Azurill", 2, "NORMAL", "FAIRY", "WATER",
            0.5, ["THICK FAT", "HUGE POWER", "SAP SIPPER"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Cottonee", 2, "GRASS", "FAIRY", "NONE",
            0.5, ["PRANKSTER", "INFILTRATOR", "CHLOROPHYLL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Snubbull", 2, "FAIRY", "NONE", "NONE",
            0.75, ["INTIMIDATE", "RUN AWAY", "RATTLED"],
            ["Egg Moves Unavailable"]),
         
        new Pokemon("Crabrawler", 2, "FIGHTING", "NONE", "ICE",
            0.5, ["HYPER CUTTER", "IRON FIST", "ANGER POINT"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Croagunk", 2, "POISON", "FIGHTING", "NONE",
            0.5, ["ANTICIPATION", "DRY SKIN", "POISON TOUCH"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Mankey", 2, "FIGHTING", "NONE", "NONE",
            0.5, ["VITAL SPIRIT", "ANGER POINT", "DEFIANT"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Mienfoo", 2, "FIGHTING", "NONE", "NONE",
            0.5, ["INNER FOCUS", "REGENERATOR", "RECKLESS"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Timburr", 2, "FIGHTING", "NONE", "NONE",
            0.25, ["GUTS", "SHEER FORCE", "IRON FIST"],
            ["Egg Moves Unavailable"]),
          
        new Pokemon("Litleo", 2, "FIRE", "NORMAL", "NONE",
            0.875, ["RIVALRY", "UNNERVE", "MOXIE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Numel", 2, "FIRE", "GROUND", "NONE",
            0.5, ["OBLIVIOUS", "SIMPLE", "OWN TEMPO"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Pansear", 2, "FIRE", "NONE", "NONE",
            0.125, ["GLUTTONY", "BLAZE"],
            ["Egg Moves Unavailable"]),
          
        new Pokemon("Ducklett", 2, "WATER", "FLYING", "NONE",
            0.5, ["KEEN EYE", "BIG PECKS", "HYDRATION"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Fletchling", 2, "NORMAL", "FLYING", "FIRE",
            0.5, ["BIG PECKS", "GALE WINGS"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Pidgey", 2, "NORMAL", "FLYING", "NONE",
            0.5, ["KEEN EYE", "TANGLED FEET", "BIG PECKS"],
            ["Air Cutter", "Air Slash", "Brave Bird", "Defog", "Feint Attack", 
             "Foresight", "Pursuit", "Steel Wing", "Uproar"]),
        new Pokemon("Spearow", 2, "NORMAL", "FLYING", "NONE",
            0.5, ["KEEN EYE", "SNIPER"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Taillow", 2, "NORMAL", "FLYING", "NONE",
            0.5, ["GUTS", "SCRAPPY"],
            ["Egg Moves Unavailable"]),
          
        new Pokemon("Phantump", 2, "GHOST", "GRASS", "NONE",
            0.5, ["NATURAL CURE", "FRISK", "HARVEST"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Pumpkaboo", 2, "GHOST", "GRASS", "NONE",
            0.5, ["PICKUP", "FRISK", "INSOMNIA"],
            ["Egg Moves Unavailable"]),
          
        new Pokemon("Bellsprout", 2, "GRASS", "POISON", "NONE",
            0.5, ["CHLOROPHYLL", "GLUTTONY"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Budew", 2, "GRASS", "POISON", "NONE",
            0.5, ["NATURAL CURE", "POISON POINT", "LEAF GUARD"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Cherubi", 2, "GRASS", "NONE", "NONE",
            0.5, ["CHLOROPHYLL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Deerling", 2, "NORMAL", "GRASS", "NONE",
            0.5, ["CHLOROPHYLL", "SAP SIPPER", "SERENE GRACE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Fomantis", 2, "GRASS", "NONE", "NONE",
            0.5, ["LEAF GUARD", "CONTRARY"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Lotad", 2, "WATER", "GRASS", "NONE",
            0.5, ["SWIFT SWIM", "RAIN DISH", "OWN TEMPO"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Oddish", 2, "GRASS", "POISON", "NONE",
            0.5, ["CHLOROPHYLL", "RUN AWAY"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Pansage", 2, "GRASS", "NONE", "NONE",
            0.125, ["GLUTTONY", "OVERGROW"],
            ["Egg Moves Unavailable"]),          
        new Pokemon("Shroomish", 2, "GRASS", "NONE", "FIGHTING",
            0.5, ["EFFECT SPORE", "POISON HEAL", "QUICK FEET"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Skiddo", 2, "GRASS", "NONE", "NONE",
            0.5, ["SAP SIPPER", "GRASS PELT"],
            ["Egg Moves Unavailable"]),
          
        new Pokemon("Diglett", 2, "GROUND", "NONE", "NONE",
            0.5, ["SAND VEIL", "ARENA TRAP", "SAND FORCE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Drillbur", 2, "GROUND", "NONE", "STEEL",
            0.5, ["SAND RUSH", "SAND FORCE", "MOLD BREAKER"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Geodude", 2, "ROCK", "GROUND", "NONE",
            0.5, ["ROCK HEAD", "STURDY", "SAND VEIL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Sandshrew", 2, "GROUND", "NONE", "NONE",
            0.5, ["SAND VEIL", "SAND RUSH"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Wooper", 2, "WATER", "GROUND", "NONE",
            0.5, ["DAMP", "WATER ABSORB", "UNAWARE"],
            ["Egg Moves Unavailable"]),
          
        new Pokemon("Vanillite", 2, "ICE", "NONE", "NONE",
            0.5, ["ICE BODY", "SNOW CLOAK", "WEAK ARMOR"],
            ["Egg Moves Unavailable"]),
          
        new Pokemon("Aipom", 2, "NORMAL", "NONE", "NONE",
            0.5, ["RUN AWAY", "PICKUP", "SKILL LINK"],
            ["Egg Moves Unavailable"]),
          
        new Pokemon("Glameow", 2, "NORMAL", "NONE", "NONE",
            0.75, ["LIMBER", "OWN TEMPO", "KEEN EYE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Lillipup", 2, "NORMAL", "NONE", "NONE",
            0.5, ["VITAL SPIRIT", "PICKUP", "RUN AWAY"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Miltank", 2, "NORMAL", "NONE", "NONE",
            1.0, ["THICK FAT", "SCRAPPY", "SAP SIPPER"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Minccino", 2, "NORMAL", "NONE", "NONE",
            0.75, ["CUTE CHARM", "TECHNICIAN", "SKILL LINK"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Patrat", 2, "NORMAL", "NONE", "NONE",
            0.5, ["RUN AWAY", "KEEN EYE", "ANALYTIC"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Skitty", 2, "NORMAL", "NONE", "NONE",
            0.75, ["CUTE CHARM", "NORMALIZE", "WONDER SKIN"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Slakoth", 2, "NORMAL", "NONE", "NONE",
            0.5, ["TRUANT"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Whismur", 2, "NORMAL", "NONE", "NONE",
            0.5, ["SOUNDPROOF", "RATTLED"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Yungoos", 2, "NORMAL", "NONE", "NONE",
            0.5, ["STAKEOUT", "STRONG JAW", "ADAPTABILITY"],
            ["Egg Moves Unavailable"]),
          
        new Pokemon("Ekans", 2, "POISON", "NONE", "NONE",
            0.5, ["INTIMIDATE", "SHED SKIN", "UNNERVE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Gulpin", 2, "POISON", "NONE", "NONE",
            0.5, ["LIQUID OOZE", "STICKY HOLD", "GLUTTONY"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Mareanie", 2, "POISON", "WATER", "NONE",
            0.5, ["MERCILESS", "LIMBER", "REGENERATOR"],
            ["Egg Moves Unavailable"]),
          
        new Pokemon("Corsola", 2, "WATER", "ROCK", "NONE",
            0.75, ["HUSTLE", "NATURAL CURE", "REGENERATOR"],
            ["Egg Moves Unavailable"]),
          
        new Pokemon("Alomomola", 2, "WATER", "NONE", "NONE",
            0.5, ["HEALER", "HYDRATION", "REGENERATOR"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Basculin", 2, "WATER", "NONE", "NONE",
            0.5, ["RECKLESS", "ADAPTABILITY", "ROCK HEAD", "MOLD BREAKER"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Buizel", 2, "WATER", "NONE", "NONE",
            0.5, ["SWIFT SWIM", "WATER VEIL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Finneon", 2, "WATER", "NONE", "NONE",
            0.5, ["SWIFT SWIM", "STORM DRAIN", "WATER VEIL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Goldeen", 2, "WATER", "NONE", "NONE",
            0.5, ["SWIFT SWIM", "WATER VEIL", "LIGHTNING ROD"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Krabby", 2, "WATER", "NONE", "NONE",
            0.5, ["HYPER CUTTER", "SHELL ARMOR", "SHEER FORCE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Luvdisc", 2, "WATER", "NONE", "NONE",
            0.75, ["SWIFT SWIM", "HYDRATION"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Panpour", 2, "WATER", "NONE", "NONE",
            0.125, ["GLUTTONY", "TORRENT"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Poliwag", 2, "WATER", "NONE", "FIGHTING",
            0.5, ["WATER ABSORB", "DAMP", "SWIFT SWIM"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Pyukumuku", 2, "WATER", "NONE", "NONE",
            0.5, ["INNARDS OUT", "UNAWARE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Shellder", 2, "WATER", "NONE", "ICE",
            0.5, ["SHELL ARMOR", "SKILL LINK", "OVERCOAT"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Shellos", 2, "WATER", "NONE", "GROUND",
            0.5, ["STICKY HOLD", "STORM DRAIN", "SAND FORCE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Tympole", 2, "WATER", "NONE", "GROUND",
            0.5, ["SWIFT SWIM", "HYDRATION", "WATER ABSORB"],
            ["Egg Moves Unavailable"])
          
    ],
    //3
    [
        new Pokemon("Cutiefly", 3, "BUG", "FAIRY", "NONE",
            0.5, ["HONEY GATHER", "SHIELD DUST", "SWEET VEIL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Dwebble", 3, "BUG", "ROCK", "NONE",
            0.5, ["STURDY", "SHELL ARMOR", "WEAK ARMOR"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Grubbin", 3, "BUG", "NONE", "ELECTRIC",
            0.5, ["SWARM"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Joltik", 3, "BUG", "ELECTRIC", "NONE",
            0.5, ["COMPOUND EYES", "UNNERVE", "SWARM"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Karrablast", 3, "BUG", "NONE", "STEEL",
            0.5, ["SWARM", "SHELL ARMOR", "OVERCOAT"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Paras", 3, "BUG", "GRASS", "NONE",
            0.5, ["EFFECT SPORE", "DRY SKIN", "DAMP"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Pineco", 3, "BUG", "NONE", "STEEL",
            0.5, ["STURDY", "OVERCOAT"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Sewaddle", 3, "BUG", "GRASS", "NONE",
            0.5, ["SWARM", "CHLOROPHYLL", "OVERCOAT"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Shelmet", 3, "BUG", "NONE", "NONE",
            0.5, ["HYDRATION", "SHELL ARMOR", "OVERCOAT"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Shuckle", 3, "BUG", "ROCK", "NONE",
            0.5, ["STURDY", "GLUTTONY", "CONTRARY"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Skorupi", 3, "POISON", "BUG", "DARK",
            0.5, ["BATTLE ARMOR", "SNIPER", "KEEN EYE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Venonat", 3, "BUG", "POISON", "NONE",
            0.5, ["COMPOUND EYES", "TINTED LENS", "RUN AWAY"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Wimpod", 3, "BUG", "WATER", "NONE",
            0.5, ["WIMP OUT"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Yanma", 3, "BUG", "FLYING", "NONE",
            0.5, ["SPEED BOOST", "COMPOUND EYES", "FRISK"],
            ["Egg Moves Unavailable"]),
      
        new Pokemon("Carvanha", 3, "WATER", "DARK", "NONE",
            0.5, ["ROUGH SKIN", "SPEED BOOST"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Houndour", 3, "DARK", "FIRE", "NONE",
            0.5, ["EARLY BIRD", "FLASH FIRE", "UNNERVE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Murkrow", 3, "DARK", "FLYING", "NONE",
            0.5, ["INSOMNIA", "SUPER LUCK", "PRANKSTER"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Pawniard", 3, "DARK", "STEEL", "NONE",
            0.5, ["DEFIANT", "INNER FOCUS", "PRESSURE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Sableye", 3, "DARK", "GHOST", "NONE",
            0.5, ["KEEN EYE", "STALL", "PRANKSTER"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Sandile", 3, "GROUND", "DARK", "NONE",
            0.5, ["INTIMIDATE", "MOXIE", "ANGER POINT"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Scraggy", 3, "DARK", "FIGHTING", "NONE",
            0.5, ["SHED SKIN", "MOXIE", "INTIMIDATE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Sneasel", 3, "DARK", "ICE", "NONE",
            0.5, ["INNER FOCUS", "KEEN EYE", "PICKPOCKET"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Vullaby", 3, "DARK", "FLYING", "NONE",
            1.0, ["BIG PECKS", "OVERCOAT", "WEAK ARMOR"],
            ["Egg Moves Unavailable"]),
      
        new Pokemon("Blitzle", 3, "ELECTRIC", "NONE", "NONE",
            0.5, ["LIGHTNING ROD", "MOTOR DRIVE", "SAP SIPPER"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Chinchou", 3, "WATER", "ELECTRIC", "NONE",
            0.5, ["VOLT ABSORB", "ILLUMINATE", "WATER ABSORB"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Dedenne", 3, "ELECTRIC", "FAIRY", "NONE",
            0.5, ["CHEEK POUCH", "PICKUP", "PLUS"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Geodude (Alolan)", 3, "ROCK", "ELECTRIC", "NONE",
            0.5, ["MAGNET PULL", "STURDY", "GALVANIZE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Helioptile", 3, "ELECTRIC", "NORMAL", "NONE",
            0.5, ["DRY SKIN", "SAND VEIL", "SOLAR POWER"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Shinx", 3, "ELECTRIC", "NONE", "NONE",
            0.5, ["RIVALRY", "INTIMIDATE", "GUTS"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Togedemaru", 3, "ELECTRIC", "STEEL", "NONE",
            0.5, ["IRON BARBS", "LIGHTNING ROD", "STURDY"],
            ["Egg Moves Unavailable"]),
      
        new Pokemon("Comfey", 3, "FAIRY", "NONE", "NONE",
            0.75, ["FLOWER VEIL", "TRIAGE", "NATURAL CURE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Flabebe", 3, "FAIRY", "NONE", "NONE",
            1.0, ["FLOWER VEIL", "SYMBIOSIS"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Igglybuff", 3, "NORMAL", "FAIRY", "NONE",
            0.75, ["CUTE CHARM", "COMPETITIVE", "FRIEND GUARD"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Mawile", 3, "STEEL", "FAIRY", "NONE",
            0.5, ["HYPER CUTTER", "INTIMIDATE", "SHEER FORCE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Morelull", 3, "GRASS", "FAIRY", "NONE",
            0.5, ["ILLUMINATE", "EFFECT SPORE", "RAIN DISH"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Hawlucha", 3, "FIGHTING", "FLYING", "NONE",
            0.5, ["LIMBER", "UNBURDEN", "MOLD BREAKER"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Machop", 3, "FIGHTING", "NONE", "NONE",
            0.25, ["GUTS", "NO GUARD", "STEADFAST"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Makuhita", 3, "FIGHTING", "NONE", "NONE",
            0.25, ["THICK FAT", "GUTS", "SHEER FORCE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Pancham", 3, "FIGHTING", "NONE", "DARK",
            0.5, ["IRON FIST", "MOLD BREAKER", "SCRAPPY"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Sawk", 3, "FIGHTING", "NONE", "NONE",
            0.0, ["STURDY", "INNER FOCUS", "MOLD BREAKER"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Throh", 3, "FIGHTING", "NONE", "NONE",
            0.0, ["GUTS", "INNER FOCUS", "MOLD BREAKER"],
            ["Egg Moves Unavailable"]),
      
        new Pokemon("Chimchar", 3, "FIRE", "NONE", "FIGHTING",
            0.125, ["BLAZE", "IRON FIST"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Darumaka", 3, "FIRE", "NONE", "NONE",
            0.5, ["HUSTLE", "INNER FOCUS"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Heatmor", 3, "FIRE", "NONE", "NONE",
            0.5, ["GLUTTONY", "FLASH FIRE", "WHITE SMOKE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Magby", 3, "FIRE", "NONE", "NONE",
            0.25, ["FLAME BODY", "VITAL SPIRIT"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Salandit", 3, "POISON", "FIRE", "NONE",
            0.125, ["CORROSION", "OBLIVIOUS"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Slugma", 3, "FIRE", "NONE", "ROCK",
            0.5, ["MAGMA ARMOR", "FLAME BODY", "WEAK ARMOR"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Tepig", 3, "FIRE", "NONE", "FIGHTING",
            0.125, ["BLAZE", "THICK FAT"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Torchic", 3, "FIRE", "NONE", "FIGHTING",
            0.125, ["BLAZE", "SPEED BOOST"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Torkoal", 3, "FIRE", "NONE", "NONE",
            0.5, ["WHITE SMOKE", "DROUGHT", "SHELL ARMOR"],
            ["Egg Moves Unavailable"]),
      
        new Pokemon("Chatot", 3, "NORMAL", "FLYING", "NONE",
            0.5, ["KEEN EYE", "TANGLED FEET", "BIG PECKS"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Delibird", 3, "ICE", "FLYING", "NONE",
            0.5, ["VITAL SPIRIT", "HUSTLE", "INSOMNIA"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Drifloon", 3, "GHOST", "FLYING", "NONE",
            0.5, ["AFTERMATH", "UNBURDEN", "FLARE BOOST"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Farfetchd", 3, "NORMAL", "FLYING", "NONE",
            0.5, ["KEEN EYE", "INNER FOCUS", "DEFIANT"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Gligar", 3, "GROUND", "FLYING", "NONE",
            0.5, ["HYPER CUTTER", "SAND VEIL", "IMMUNITY"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Hoothoot", 3, "NORMAL", "FLYING", "NONE",
            0.5, ["INSOMNIA", "KEEN EYE", "TINTED LENS"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Oricorio", 3, "FLYING", "NONE", "NONE",
            0.75, ["ABIL"],
            ["Egg Moves Unavailable"]),
      //#FIXME: Oricorio has FOUR more types... hm.
      
        new Pokemon("Woobat", 3, "PSYCHIC", "FLYING", "NONE",
            0.5, ["UNAWARE", "KLUTZ", "SIMPLE"],
            ["Egg Moves Unavailable"]),
      
        new Pokemon("Duskull", 3, "GHOST", "NONE", "NONE",
            0.5, ["LEVITATE", "FRISK"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Gastly", 3, "GHOST", "POISON", "NONE",
            0.5, ["LEVITATE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Misdreavus", 3, "GHOST", "NONE", "NONE",
            0.5, ["LEVITATE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Sandygast", 3, "GHOST", "GROUND", "NONE",
            0.5, ["WATER COMPACTION", "SAND VEIL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Shuppet", 3, "GHOST", "NONE", "NONE",
            0.5, ["INSOMNIA", "FRISK", "CURSED BODY"],
            ["Egg Moves Unavailable"]),
      
        new Pokemon("Bounsweet", 3, "GRASS", "NONE", "NONE",
            1.0, ["LEAF GUARD", "OBLIVIOUS", "SWEET VEIL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Cacnea", 3, "GRASS", "NONE", "DARK",
            0.5, ["SAND VEIL", "WATER ABSORB"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Carnivine", 3, "GRASS", "NONE", "NONE",
            0.5, ["LEVITATE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Chespin", 3, "GRASS", "NONE", "FIGHTING",
            0.125, ["OVERGROW", "BULLETPROOF"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Maractus", 3, "GRASS", "NONE", "NONE",
            0.5, ["WATER ABSORB", "CHLOROPHYLL", "STORM DRAIN"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Petilil", 3, "GRASS", "NONE", "NONE",
            1.0, ["CHLOROPHYLL", "OWN TEMPO", "LEAF GUARD"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Seedot", 3, "GRASS", "NONE", "DARK",
            0.5, ["CHLOROPHYLL", "EARLY BIRD", "PICKPOCKET"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Snivy", 3, "GRASS", "NONE", "NONE",
            0.125, ["OVERGROW", "CONTRARY"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Sunkern", 3, "GRASS", "NONE", "NONE",
            0.5, ["CHLOROPHYL", "SOLAR POWER", "EARLY BIRD"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Tangela", 3, "GRASS", "NONE", "NONE",
            0.5, ["CHLOROPHYLL", "LEAF GUARD", "REGENERATOR"],
            ["Egg Moves Unavailable"]),
      
        new Pokemon("Barboach", 3, "WATER", "GROUND", "NONE",
            0.5, ["OBLIVIOUS", "ANTICIPATION", "HYDRATION"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Cubone", 3, "GROUND", "NONE", "NONE",
            0.5, ["ROCK HEAD", "LIGHTNING ROD", "BATTLE ARMOR"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Diglett (Alolan)", 3, "GROUND", "STEEL", "NONE",
            0.5, ["SAND VEIL", "TANGLING HAIR", "SAND FORCE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Hippopotas", 3, "GROUND", "NONE", "NONE",
            0.5, ["SAND STREAM", "SAND FORCE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Mudbray", 3, "GROUND", "NONE", "NONE",
            0.5, ["OWN TEMPO", "STAMINA", "INNER FOCUS"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Rhyhorn", 3, "GROUND", "ROCK", "NONE",
            0.5, ["LIGHTNING ROD", "ROCK HEAD", "RECKLESS"],
            ["Egg Moves Unavailable"]),
      
        new Pokemon("Cryogonal", 3, "ICE", "NONE", "NONE",
            0.5, ["LEVITATE"],
            ["Egg Moves Unavailable"]),
      //#FIXME: Do we want to make it genderless somehow?
      
        new Pokemon("Sandshrew (Alolan)", 3, "ICE", "STEEL", "NONE",
            0.5, ["SNOW CLOAK", "SLUSH RUSH"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Snorunt", 3, "ICE", "NONE", "GHOST",
            0.5, ["INNER BODY", "ICE BODY", "MOODY"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Spheal", 3, "ICE", "WATER", "NONE",
            0.5, ["THICK FAT", "ICE BODY", "OBLIVIOUS"],
            ["Egg Moves Unavailable"]),
      
        new Pokemon("Audino", 3, "NORMAL", "NONE", "FAIRY",
            0.5, ["HEALER", "REGENERATOR", "KLUTZ"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Eevee", 3, "NORMAL", "NONE", "NONE",
            0.125, ["RUN AWAY", "ADAPTABILITY", "ANTICIPATION"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Furfrou", 3, "NORMAL", "NONE", "NONE",
            0.5, ["FUR COAT"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Happiny", 3, "NORMAL", "NONE", "NONE",
            1.0, ["NATURAL CURE", "SERENE GRACE", "FRIEND GUARD"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Kecleon", 3, "NORMAL", "NONE", "NONE",
            0.5, ["COLOR CHANGE", "PROTEAN"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Komala", 3, "NORMAL", "NONE", "NONE",
            0.5, ["COMATOSE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Lickitung", 3, "NORMAL", "NONE", "NONE",
            0.5, ["OWN TEMPO", "OBLIVIOUS", "CLOUD NINE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Meowth", 3, "NORMAL", "NONE", "NONE",
            0.5, ["PICKUP", "TECHNICIAN", "UNNERVE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Smeargle", 3, "NORMAL", "NONE", "NONE",
            0.5, ["OWN TEMPO", "TECHNICIAN", "MOODY"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Spinda", 3, "NORMAL", "NONE", "NONE",
            0.5, ["OWN TEMPO", "TANGLED FEET", "CONTRARY"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Stantler", 3, "NORMAL", "NONE", "NONE",
            0.5, ["INTIMIDATE", "FRISK", "SAP SIPPER"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Teddiursa", 3, "NORMAL", "NONE", "NONE",
            0.5, ["PICKUP", "QUICK FEET", "HONEY GATHER"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Zangoose", 3, "NORMAL", "NONE", "NONE",
            0.5, ["IMMUNITY", "TOXIC BOOST"],
            ["Egg Moves Unavailable"]),
      
        new Pokemon("Nidoran m", 3, "POISON", "NONE", "GROUND",
            0.0, ["POISON POINT", "RIVALRY", "HUSTLE"],
            ["Egg Moves Unavailable"]),
      //#FIXME: Male and Female have different egg moves... make sure to add that to the thread
        new Pokemon("Nidoran f", 3, "POISON", "NONE", "GROUND",
            1.0, ["POISON POINT", "RIVALRY", "HUSTLE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Qwilfish", 3, "WATER", "POISON", "NONE",
            0.5, ["POISON POINT", "SWIFT SWIM", "INTIMIDATE"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Seviper", 3, "POISON", "NONE", "NONE",
            0.5, ["SHED SKIN", "INFILTRATOR"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Tentacool", 3, "WATER", "POISON", "NONE",
            0.5, ["CLEAR BODY", "LIQUID OOZE", "RAIN DISH"],
            ["Egg Moves Unavailable"]),
      
        new Pokemon("Bruxish", 3, "WATER", "PSYCHIC", "NONE",
            0.5, ["DAZZLING", "STRONG JAW", "WONDER SKIN"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Slowpoke", 3, "WATER", "PSYCHIC", "NONE",
            0.5, ["OBLIVIOUS", "OWN TEMPO", "REGENERATOR"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Wynaut", 3, "PSYCHIC", "NONE", "NONE",
            0.5, ["SHADOW TAG", "TELEPATHY"],
            ["Egg Moves Unavailable"]),
      
        new Pokemon("Bonsly", 3, "NONE", "NONE", "NONE",
            0.5, ["ABIL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Dwebble", 3, "NONE", "NONE", "NONE",
            0.5, ["ABIL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Nosepass", 3, "NONE", "NONE", "NONE",
            0.5, ["ABIL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Rockruff", 3, "NONE", "NONE", "NONE",
            0.5, ["ABIL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Roggenrola", 3, "NONE", "NONE", "NONE",
            0.5, ["ABIL"],
            ["Egg Moves Unavailable"]),
      
        new Pokemon("Clamperl", 3, "NONE", "NONE", "NONE",
            0.5, ["ABIL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Clauncher", 3, "NONE", "NONE", "NONE",
            0.5, ["ABIL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Corphish", 3, "NONE", "NONE", "NONE",
            0.5, ["ABIL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Feebas", 3, "NONE", "NONE", "NONE",
            0.5, ["ABIL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Froakie", 3, "NONE", "NONE", "NONE",
            0.5, ["ABIL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Magikarp", 3, "NONE", "NONE", "NONE",
            0.5, ["ABIL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Mudkip", 3, "NONE", "NONE", "NONE",
            0.5, ["ABIL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Psyduck", 3, "NONE", "NONE", "NONE",
            0.5, ["ABIL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Remoraid", 3, "NONE", "NONE", "NONE",
            0.5, ["ABIL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Seel", 3, "NONE", "NONE", "NONE",
            0.5, ["ABIL"],
            ["Egg Moves Unavailable"]),

        new Pokemon("Squirtle", 3, "WATER", "NONE", "NONE",
            0.125, ["TORRENT", "RAIN DASH"],
            ["Aqua Jet", "Aqua Ring", "Aura Sphere", "Brine", "Dragon Pulse", 
             "Fake Out”, “Flail”, “Foresight”, “Haze”, “Mirror Coat”, “Mist”, 
             "Mud Sport", “Muddy Water”, “Refresh”, “Water Spout”, "Yawn"]),
        new Pokemon("Staryu", 3, "NONE", "NONE", "NONE",
            0.5, ["ABIL"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Totodile", 3, "NONE", "NONE", "NONE",
            0.5, ["ABIL"],
            ["Egg Moves Unavailable"])             
    ],
    //rarity 4
    [
        new Pokemon("Bulbasaur", 4, "GRASS", "POISON", "NONE",
            0.125, ["OVERGROW", "CHLOROPHYLL"],
            ["Amnesia", "Charm", "Curse", "Endure", "Giga Drain", "Grass Whistle",
             “Grassy Terrain”, “Ingrain”, “Leaf Storm”, “Magical Leaf”, 
             “Nature Power”, “Petal Dance”, “Power Whip”, “Skull Bash”, “Sludge”]),
        new Pokemon("Charmander", 4, "FIRE", "NONE", "FLYING",
            0.125, ["BLAZE", "SOLAR POWER"],
            ["Air Cutter", "Ancient Power", "Beat Up", "Belly Drum", 
             “Bite”, “Counter”, “Crunch”, “Dragon Dance”, “Dragon Pulse”, 
             “Dragon Rush”, “Flare Blitz”, “Focus Punch”, “Metal Claw”, “Outrage”])
    ],
    //5
    [
        new Pokemon("Endangered Poke", 5, "N/A", "N/A", "N/A",
        0.5, ["N/A"],
        ["N/A"])
    ]
];


//RANDOMIZING THE POKEMON’S STATS//

function randomize_sex (poke_fem_chance) {
    var rand_sex = Math.random();
    var sex;
    if (rand_sex < poke_fem_chance){
        sex = "FEMALE";
    }
    else if (rand_sex >= poke_fem_chance && rand_sex < 1){
        sex = "MALE";
    }
    else {
        console.log("Something went wrong with choosing the sex.");
        return -1; //error
    }
    return sex;
}

function randomize_eggmove_number () {
    var rand_number = Math.floor(Math.random() * 9) + 1;
    var eggmove_number;
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
        console.log("Something went wrong with choosing how many egg moves.");
        return -1; //error
    }
    return eggmove_number;
}


function randomize_x_from_array(x, array){
    if (x > array.length){
        console.log("There are not enough arguments in the array to pick " + x + " of them.");
        return -1;
    }
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
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


//later, will need to add a bit in so that the function will pick x based on result from randomize_eggmove_number

function randomize_eggmoves(eggmove_array){
    randomize_x_from_array(randomize_eggmove_number(), eggmove_array);
}







//RANDOMIZING A POKEMON SPECIES

function randomize_rarity () {
    var rand_rarity = Math.random();
    var poke_rarity;
    if (rand_rarity < 0.6){
        poke_rarity = 2; //overpopulated/common
    }
    else if (rand_rarity >= 0.6 && rand_rarity < 0.85){
        poke_rarity = 3; //uncommon
    }
    else if (rand_rarity >= 0.85 && rand_rarity < 0.9775){
        poke_rarity = 4; //rare
    }
    else if (rand_rarity >= 0.9775 && rand_rarity < 1) {
        poke_rarity = 5; //endangered
    }
    else {
        console.log("Something went wrong with choosing the rarity.");
        return -1; //error
    }
    return poke_rarity;
}

function rarity_to_string(poke_rarity){
    switch (poke_rarity){
        case 2: return "OVERPOPULATED/COMMON";
        case 3: return "UNCOMMON";
        case 4: return "RARE";
        case 5: return "ENDANGERED";
        default: return "Cannot change rarity to string.";
    }
}

function randomize_poke (type, rarity, never_found) {
    //this function will need to find all the Pokemon with the given type and rarity and then randomly pick one
    var possible_Pokemon = [];
    Pokemon_array[rarity].forEach(function(element) {
        var forbidden = false;
        never_found.forEach(function(f_type){
            if (f_type == element.type1 || f_type == element.type2 || f_type == element.type_evolved){
                forbidden = true;
            }
        });
        if ((element.type1 == type || element.type2 == type || element.type_evolved == type)
            && forbidden == false){
            possible_Pokemon.push(element);
        }
    });

    //need to make sure at least one Pokemon made it into possible_Pokemon.
    if (possible_Pokemon.length < 1){
        console.log("No suitable Pokemon exist with the randomized type and rarity.");
        return -1;
    }

    return possible_Pokemon[Math.floor(Math.random()*possible_Pokemon.length)];
}



//location/season constructor
var location_season = function (name, common_types, uncommon_types, rare_types, never_found){
    this.name = name;
    this.common_types = common_types;
    this.uncommon_types = uncommon_types;
    this.rare_types = rare_types;
    this.never_found = never_found;
};

var location_array = [
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
            ["NONE"]),
        new location_season("Eastern Great Forest in Winter",
            ["ELECTRIC", "NORMAL", "POISON", "PSYCHIC"],
            ["DRAGON", "FAIRY", "FLYING", "GHOST", "GROUND", "WATER", "DARK", "ICE", "GRASS", "BUG"],
            ["FIRE", "FIGHTING", "ROCK", "STEEL"],
            ["NONE"])
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
            ["NONE"]),
        new location_season("Desert Strip in Winter",
            ["GROUND", "ROCK", "DARK"],
            ["GRASS", "FAIRY", "FIGHTING", "NORMAL", "POISON", "PSYCHIC", "STEEL", "ICE", "GHOST"],
            ["BUG", "ELECTRIC", "FIRE", "WATER", "DRAGON", "FLYING"],
            ["NONE"])
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
            ["NONE"]),
        new location_season("Paradise Island in Summer",
            ["BUG", "BUG", "ELECTRIC", "ELECTRIC", "FAIRY", "FIRE", "FIRE", "FLYING", "GRASS", "GROUND", "POISON", "WATER"],
            ["DARK", "DRAGON", "GHOST", "NORMAL", "ROCK", "PSYCHIC", "STEEL"],
            ["FIGHTING"],
            ["ICE"]),
        new location_season("Paradise Island in Fall",
            ["BUG", "ELECTRIC", "FAIRY", "FIRE", "FLYING", "GRASS", "GROUND", "POISON", "WATER", "GHOST"],
            ["DARK", "DRAGON", "NORMAL", "ROCK", "PSYCHIC", "STEEL"],
            ["FIGHTING", "ICE"],
            ["NONE"]),
        new location_season("Paradise Island in Winter",
            ["ELECTRIC", "FAIRY", "GROUND", "POISON", "WATER", "DARK"],
            ["BUG", "DRAGON", "GHOST", "NORMAL", "ROCK", "PSYCHIC", "STEEL", "FIRE", "FLYING", "GRASS", "ICE"],
            ["FIGHTING"],
            ["NONE"])
    ],
    [
        new location_season("Mud Baths in Spring",
            ["BUG", "FIRE", "GROUND", "POISON", "WATER", "GRASS"],
            ["DARK", "DRAGON", "ELECTRIC", "FLYING", "FAIRY", "NORMAL", "ROCK"],
            ["FIGHTING", "ICE", "PSYCHIC", "STEEL"],
            ["GHOST"]),
        new location_season("Mud Baths in Summer",
            ["BUG", "BUG", "FIRE", "FIRE", "ELECTRIC", "GROUND", "POISON", "WATER"],
            ["DARK", "DRAGON", "FLYING", "GRASS", "NORMAL", "ROCK"],
            ["FAIRY", "FIGHTING", "ICE", "PSYCHIC", "STEEL"],
            ["GHOST"]),
        new location_season("Mud Baths in Fall",
            ["BUG", "FIRE", "GROUND", "POISON", "WATER"],
            ["DARK", "DRAGON", "ELECTRIC", "FLYING", "GRASS", "NORMAL", "ROCK"],
            ["FAIRY", "FIGHTING", "ICE", "PSYCHIC", "STEEL"],
            ["GHOST"]),
        new location_season("Mud Baths in Winter",
            ["GROUND", "POISON", "WATER", "DARK"],
            ["BUG", "DRAGON", "ELECTRIC", "NORMAL", "ROCK", "FIRE", "ICE"],
            ["FAIRY", "FIGHTING", "PSYCHIC", "STEEL", "FLYING", "GRASS"],
            ["NONE"])
    ]
];




//need to make a function that takes a location/season object. Randomizes a number for which array to pull from (common type or uncommon type, etc)...
//then it needs to generate a random number based on how long the array is… and then … is it okay if a case is impossible to get? And then the array value will also be impossible?

function randomize_general (location) {
    var type_rarity = Math.random();
    var poke_type;
    if (type_rarity < 0.6) {
        //console.log("Continue with one of the " + location.common_types.length + " COMMON types");
        var common_type = Math.floor(Math.random() * location.common_types.length);
        poke_type = location.common_types[common_type];

    }
    else if (type_rarity >= 0.6 && type_rarity < 0.85) {
        //console.log("Continue with one of the " + location.uncommon_types.length + " UNCOMMON types");
        var uncommon_type = Math.floor(Math.random() * location.uncommon_types.length);
        poke_type = location.uncommon_types[uncommon_type];

    }
    else if (type_rarity >= 0.85 && type_rarity < 1) {
        //console.log("Continue with one of the " + location.rare_types.length + " RARE types");
        var rare_type = Math.floor(Math.random() * location.rare_types.length);
        poke_type = location.rare_types[rare_type];

    }
    else {
        console.log("Something went wrong with choosing the rarity of the type.");
    }

    var poke_rarity = randomize_rarity();
    var rarity_string = rarity_to_string(poke_rarity);
    console.log("You should spawn a " + poke_type + " with " + rarity_string + " spawn rate.");
    return [poke_type, poke_rarity];
}

function go(){
    var place = document.getElementById("select_place").value;
    console.log("User input: " + place);
    var place_int = parseInt(place, 10);

    var time = document.getElementById("select_season").value;
    console.log("User input: " + time);
    var time_int = parseInt(time, 10);

    var poke_info = randomize_general(location_array[place_int][time_int]);

    var rand_poke = randomize_poke(poke_info[0], poke_info[1], location_array[place_int][time_int].never_found);

    console.log(rand_poke.name);

    //now to randomize some stats for the Pokemon
    var sex = randomize_sex(rand_poke.fem_chance);
    var abil = randomize_x_from_array(1, rand_poke.abilities);
    var eggmoves = randomize_eggmoves(rand_poke.egg_moves);

    console.log(sex + abil);
    console.log(eggmoves);

}


function test() {
    var place = document.getElementById("select_place").value;
    console.log("User input: " + place);
    var place_int = parseInt(place, 10);

    var time = document.getElementById("select_season").value;
    console.log("User input: " + time);
    var time_int = parseInt(time, 10);

    var myArray = new Array;
    for(var i = 0; i < 10 ; i++){
        myArray.push(0);
    }
    for (var i = 0; i < 10000; i++){
        var info = randomize_general(location_array[place_int][time_int]);
        myArray[info[1]]++;
    }
    myArray.forEach(function(element){
        console.log(element + " " + (element/10000));
    });

}

