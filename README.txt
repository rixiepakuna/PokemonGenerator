
Tutorial:
1. All you really need to download are index.html and PokeSpawner.js. Also, make sure index.html and PokeSpawner.js are in the same file.
2. Open index.html with a web browser (I recommend Chrome).



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
 5. See "In the Works" for more detail.

 My suggestion is generally just re-roll until you get something that works.



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



 1.1.0 Randomizing Specific Pokemon! January 12, 2018

 New Features:
 1. There's a new button that allows you to randomize the stats of a specific Pokemon.

 Developer Notes:
 1. I moved some functions around and made new functions!
 Basically this allows all the randomization of stats to occur with the call of a single function.
 Then I made a text field, and an associated new button.
 Entering words into the text field and then clicking the button "Stats" calls, among other things, the function that randomizes stats of the Pokemon whose name was entered into the text field.




1.2.0 Randomizing Pokemon from Rarity and Type! January 26, 2018

New Features:
1. There's a new button that allows you to randomize a Pokemon from a specific Rarity and Type. I am feeling not-creative, so I called it Spec. Pokemon.

Developer Notes:
1. I moved some functions around and made new functions... again? I think this is going to become rather typical. New functions include spec_go(), type_int_to_string()...
2. I made more drop-down menus, with their associated new button, so now the user can select type and rarity, and skip the first function which usually randomizes type and rarity for the user based on location and season. Honestly, spec_go() is quite similar to normal go(), just skipping that first step as I mentioned.





1.3.0 Belated Update and All-New Features! January 28, 2020
Fixes:
1. Added Cryogonal (whoops). Also, used copy/paste, regex, and math to ensure that all Pokemon who should be here ARE here. (They are.)
2. Fixed a spelling error (embarrassing)...

Changes:
1. Edited the Reminders to reflect the new system of unmodded and adventure tiers, and mention pseudo-dragons.
2. Added a note about Gourmet Honey!
3. I changed some of the buttons, so that they are more self-explanatory in what they actually do. I did not change the related function names, not that anyone cares about that except Flameink.
4. Added a print-out to include information on what all the Pokemon's types are. (Primarily useful for checking dual-types, and helping in double-checking for Pokemon who are NEVER supposed to show up in a certain location, based on their typing.)

New Features:
1. Added in two "new" Pokemon.
2. Added the options "Any" into the various pull-down menus.
3. I'm experimenting with adding a Breeding function. Right now it works (I think), but is excessively picky about data entry. I'm beginning to work on a way to fix that.

Developer Notes:
1. This was hard. I broke a lot of things while adding in the "Any" options. I had to go through and fix them.
2. I re-numbered a bunch of the arrays for location, season, type... I did not re-number rarity, out of stubbornness and also because I don't think it's a good idea. Overpopulated, for now, will remain designation 1, while Endangered will remain designation 5.
3. Added two hidden, optional features in... Namely, natures and chances to be shiny. Natures are just there to provide optional inspiration for the Pokemon's demeanor, while the shiny chance is just a random number between 1 and 100. If someone has a 1% shiny chance, this number must be 1 in order for the Pokemon to spawn in as a shiny. I'll be honest; I don't expect anyone to use this except for me. But I mean. If you want to know how, just ask in Discord/PM.

