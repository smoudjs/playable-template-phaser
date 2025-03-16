# Playable Template with Phaser

A starter template for creating playable ads using Phaser with TypeScript support. This template combines:

- [Phaser](https://phaser.io/) - Fast, modern 2D game framework
- [@smoud/playable-sdk](https://github.com/smoudjs/playable-sdk#readme) - SDK for creating playable ads with standardized events and methods
- [@smoud/playable-scripts](https://github.com/smoudjs/playable-scripts#readme) - Build and development tools optimized for playable ads

## Demo

Try out this template:
- [View on CodePen](https://codepen.io/peter-hutsul/pen/jEOYKLJ)

## Features

- Phaser 3 integration for high-performance 2D game development
- TypeScript support for better development experience
- Hot module replacement during development
- Game structure with Phaser and SDK integration
- Event handling (resize, pause, resume, volume, etc.)
- Installation button implementation
- Interaction tracking
- Responsive canvas scaling

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- `src/index.ts` - Main entry point with SDK, Phaser and Game initialization
- `src/Game.ts` - Game logic and Phaser scene setup
- `src/index.css` - Styles for your playable
- `src/index.html` - HTML template
- `assets/` - Directory for your game assets (sprites, textures, etc.)

## Looking for More?

Check out other available templates for different frameworks and use cases:
- [playable-template-base](https://github.com/smoudjs/playable-template-base) - Template base version
- [playable-template-base-js](https://github.com/smoudjs/playable-template-base-js) - Template base version (JavaScript)
- [playable-template-pixi](https://github.com/smoudjs/playable-template-pixi) - Template with PixiJS
- [playable-template-three](https://github.com/smoudjs/playable-template-three) - Template with Three.js
