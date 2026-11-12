# YAAV

Yep, I'm doing it. I am building yet another audio visualizer. A JS Canvas experiment that turns a track into rings and bars.

## Table of contents

- [How it works](#how-it-works)
- [Demo](#demo)
- [Getting started](#getting-started)
- [Resources](#resources)
- [License](#license)

## How it works

The core components are initialised by [`App`](src/static/js/App.ts):

- [`Player`](src/static/js/actors/Player/Player.ts) plays the track, handles the play/pause button, seeking and the spacebar, then reads the frequencies of the left and right channels separately and hands them over to the visualizer.
- [`Canvas`](src/static/js/actors/Canvas/Canvas.ts) clears the canvas on every frame and keeps its size in sync with the window.
- [`Visualizer`](src/static/js/actors/Visualizer/Visualizer.ts) draws the ring around the play button, then lets the active variant draw the rest.
- [`GUI`](src/static/js/managers/GUI/GUI.ts) controls live overrides for the variants, channels, colours, etc.

### Variants

Each variant has its own renderer and config, and you can switch between them live from the GUI.

The louder a frequency is, the more its colour changes. The play button, ring and progress bar follow the colours of the active variant, so the player always matches what you see.

[`Bars`](src/static/js/actors/Visualizer/renderers/Bars/BarsRenderer.ts)

Draws three rings of bars, from the inside out: bass, mids and highs. All rings have the same number of bars so they line up like an extension of each other.

When both channels are selected, the left one fills the left half and the right one the right half. With a single channel, it fills the whole circle. A very faint ring sits behind them and reacts to the whole spectrum at once.

Colours shift in hue, saturation and lightness.

[`Electric`](src/static/js/actors/Visualizer/renderers/Electric/ElectricRenderer.ts)

Draws a stack of rings that wobble with the music while slowly rotating. Every segment follows its own frequency.

Rings shift in hue and fade out when quiet, so they dissolve gradually when the music stops.

## Getting started

### Requirements

- Node.js
- [pnpm](https://pnpm.io/)

### Installation

```bash
$ git clone https://github.com/wolfpilot/YAAV.git
$ cd YAAV
$ pnpm install
```

### How to run

```bash
# Run a local server instance
$ pnpm start
```

Set the default colours, sizes and band counts in the config of each variant, next to its renderer ([`Bars`](src/static/js/actors/Visualizer/renderers/Bars/config.ts) and [`Electric`](src/static/js/actors/Visualizer/renderers/Electric/config.ts)). Most of them can also be changed live from the GUI.

### How to deploy

```bash
# Build and deploy to GitHub Pages with pnpm
$ pnpm deploy
```

## Resources

### Credits

- Track by [Cry](https://soundcloud.com/royaltyfreemusic-nocopyrightmusic/cry-vibe-tracks-free-download?in=royaltyfreemusic-nocopyrightmusic/sets/r-b-soul) (royalty free, no copyright music). Many thanks for this awesome track!

### Documentation

- [Web Audio API basics](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)

## License

This project is licensed under the [MIT License](LICENSE).
