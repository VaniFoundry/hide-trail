# Hide Movement Trail
**Manifest URL:** `https://raw.githubusercontent.com/VaniFoundry/hide-trail/main/module.json`

A Foundry VTT module that hides the movement trail left behind tokens as they move across the canvas.

I tried my best trying to figure it out tinkering with the system settings etc
So I made this to keep me sane...

## Features

- **Hides Movement Trail**: Suppresses the ruler/trail line that appears on tokens during movement, keeping the canvas clean during play

## How It Works

Hooks into Foundry's `refreshToken` event and sets the token ruler's visibility to false whenever it would appear. No configuration needed — install and forget about it.

## Installation

1. Place the `hide-trail/` folder inside your Foundry `Data/modules/` directory
2. Enable the module in Foundry's module management screen

## Compatibility

| Foundry Version | Status |
|---|---|
| v13 | ✅ Verified |