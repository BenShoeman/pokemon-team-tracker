# Pok&eacute;mon Team Tracker Page

A browser-based Pok&eacute;mon team tracker meant for streamers to keep track of their team. Uses HTML5 local storage to keep track of the Pok&eacute;mon in between streaming sessions and can only be cleared manually.

- [ZIP of GIF files](https://github.com/BenShoeman/pokemon-team-tracker/releases/download/1.0/gif.zip) (needed unless you have images of all Pokemon already)
- [ZIP of entire page, including GIFs](https://github.com/BenShoeman/pokemon-team-tracker/releases/download/1.0/pokemonteamtracker-1.0.zip) (not needed unless you want to use a local page instead of the online page)

The following instructions assume you are using OBS but this likely works with other streaming software.

## Creating the Browser Source

1. Create a Browser source in OBS.
2. If you want to use the online page, set the URL to [https://benshoeman.github.io/pokemon-team-tracker/](https://benshoeman.github.io/pokemon-team-tracker/). If you want to use the page locally on your computer, check *Local file* and click Browse. Select the `index.html` file located in the root folder.
3. Set a width and height for the source. I recommend **width 1200** and **height 225**, but it will scale to whatever size you set so feel free to experiment. Click OK after this.

## Managing the Team

1. Right click the source and click Interact. This will pull up a separate window where you can interact with the page.
2. Click the upper half of a slot to add an image for the Pok&eacute;mon. GIFs of all Pok&eacute;mon up to Sword and Shield's release are in the `gif` folder of this repo.
3. Click the lower half of the slot to add a name for the Pok&eacute;mon. When you are done, press `Escape` to stop typing.
4. If you want to clear an image, right click the upper half. If you want to clear a name, click the X when you hover over the lower half.

Changes are saved automatically as you go and persist even when you close OBS and return to it, so no need to worry about hitting a save button or anything like that!

## Clearing the Team

If you decide you want to start from a clean slate, press `Delete` when you have the page open in the Interact window and a popup will appear asking if you want to clear all data.

*Happy streaming!*