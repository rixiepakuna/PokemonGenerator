Tutorial:
1. Make sure index.html and PokeSpawner.js are in the same file.
      Note: crawler.html is unnecessary; it is simply the machine that autofilled out the eggmoves for me. You can delete it if you desire.
2. Open index.html with a web browser (I recommend Chrome).
3. Select approprite location/time of year from the drop-down menus.
4. Press the button that says "Enter".

Remember!
 - You can always spawn an Overpopulated Pokemon instead of rolling.
 - Temp mods are not allowed to spawn Endangered Pokemon. If you are a temp mod and you get one of those, I'm afraid you'll need to roll again.
 - Grass types showing up in the desert must be desert-y ones. Like Cacnea.



Known issues:
 1. Genderless Pokemon are not genderless.
      Just ignore whatever gender it gives you, if the Pokemon is supposed to be Genderless.
 2. Some logic is required.
      (For example, Skrelp is part Poison type, so it comes up in the Western Great Forest, 
      even though there isn't a big body of water there.)
 3. Grass types show up in the desert, which is intended.
      ALL Grass types, not just desert plant ones, show up, which is not intended.
      I may attempt to find a fix for this. Not sure what to do yet.
 4. Some things, particularly egg moves, may still be missing or wrong.
      Please help out and let Rixie or an admin know if you see things you believe to be errors.
      It is difficult to double-check hundreds of Pokemon and all their egg moves.

 My suggestion is generally just re-roll until you get something that works.



Features I'd like to add/fix:
 1. Depending on how difficult it is, I will probably add genderless Pokemon in. This is low priority though.
 2. I'd like to be able to use the same type/rarity that was rolled and get more Pokemon of that type/rarity.
 3. I'd also like to be able to roll the stats (gender, ability, egg moves) of a particular species of Pokemon.
 4. Fix for Known Issue #4.



 Version History
 1.0.1 First Offical Release January 9, 2018

 1.0.2 Bug Fixes! January 10, 2018
 Fixes:
 1. Tepig, Chimchar, Torchic show up when a Fighting type is rolled. The generator was looking at the Pokemon’s evolution types when it shouldn’t be.

 2. The Eeveelutions had “No Egg Moves”, probably because they were not the base evolution.

 3. Not actually a bug, but I finished entering the egg moves for:
 Nidoran (M)
 Nidoran (F)
 Sandshrew (Alolan)
 Diglett (Alolan)
 Geodude (Alolan)
 Farfetchd

 4. Bug that caused huge problems in locations where no types are never found.
 I’m actually very amused by this bug. Huge shout out to Jani for giving enough detail that I was able to pinpoint what was going wrong very quickly.
 (For those interested, it’s because I listed “NONE” in the never_found array, for places that... well...
 didn’t have any types that are never found. Sounds reasonable right?
 Well I also put, for Pokémon with only one type, or with no change in type upon evolution, “NONE” as their second type.
 So my program checked to see what types aren’t allowed to spawn in the location, sees that the type “NONE” is forbidden,
 and then it sees that a whole lot of Pokémon have type_2 = “NONE”. Since “NONE” is a forbidden type... well... I’m sure you get the idea.)

 5. Data error: Mud Baths should never spawn Ghost types.
 It was technically possible for them to spawn, only during winter. Unlikely, but theoretically possible.

 6. A few Pokemon were missing. I guess my crawler just didn't like them.
 I fixed most of them before release, but I didn't notice that Bouffalant, Misdreavus, and Bergmite were missing.
 They are not missing anymore.

 7. Fix for issue: "Bad things happen if the program randomizes that the Pokemon should have 3 egg moves, but the Pokemon only has 1 or 2 possible egg moves."
 It should work!

 New Features:
 1. Not totally a new feature, but I made it easier to generate a lot of Pokemon without reloading the webpage. Basically I moved the "Enter" button to the bottom of the page instead of the type, so you can just keep scrolling down as you generate more stuff.