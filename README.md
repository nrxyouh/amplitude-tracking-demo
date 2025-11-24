# ZenMind A/B Testing with Amplitude

A demonstration project showcasing user behavior tracking using Amplitude Analytics in a React application. The project implements A/B testing for a meditation app landing page.

## Features

The project demonstrates:

- A/B testing of UI components
- Event tracking with Amplitude
- Persistent variant selection for users

## Amplitude Events

The project tracks the following events:

1. `Hero_Experiment_Viewed`

   - Triggered when the landing page is viewed
   - Includes `variant` parameter (A or B)

2. `Hero_CTA_Click`
   - Triggered when the call-to-action button is clicked
   - Includes `variant` parameter to track effectiveness of each variant

## Test Variants

### Variant A

- Heading: "Find Your Inner Calm"
- CTA Button: "Start Free Session"

### Variant B

- Heading: "Transform Your Mind with Daily Meditation"
- CTA Button: "Join Now"

## Technologies

- React
- TypeScript
- Amplitude Analytics
- Local Storage for variant persistence

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run deploy`

Deploys the application to GitHub Pages.

## Implementation Notes

- A/B variants are randomly distributed (50/50)
- Selected variant is stored in localStorage
- Amplitude is initialized with the provided API key
- All events are automatically tracked upon user interaction
