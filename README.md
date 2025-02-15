# Build-a-Drum-Machine

# Drum Machine

This project is a Drum Machine web application, built as part of the FreeCodeCamp Front End Development Libraries certification. It allows users to trigger drum sounds by clicking on drum pads or pressing corresponding keys on their keyboard.

## Features

*   **Trigger Sounds:** Play drum sounds by clicking on the drum pads.
*   **Keyboard Support:** Trigger drum sounds by pressing the corresponding keys (Q, W, E, A, S, D, Z, X, C).
*   **Sound Display:** Shows the name of the sound being played on a display.
*   **Pre-loaded Sounds:** Uses pre-loaded drum sounds from FreeCodeCamp's CDN.

## Technologies Used

*   **HTML:** Structure of the webpage.
*   **CSS:** Styling of the elements.
*   **JavaScript:** Logic for playing sounds and handling user input.

## How to Run

1.  Save the `index.html`, `style.css`, and `script.js` files in the same directory.
2.  Open the `index.html` file in your web browser.

## Usage

*   **Click:** Click on a drum pad to play the associated sound.
*   **Keyboard:** Press the corresponding key (Q, W, E, A, S, D, Z, X, C) to play the associated sound.
*   **Display:** The `#display` element will show the name of the sound that was just played.

## Code Explanation

*   **`index.html`:**
    *   Sets up the basic HTML structure, including the `#drum-machine`, `#display`, and `.drum-pads` elements.
    *   Each `.drum-pad` element has an associated `<audio>` element with the `clip` class, containing the sound source URL.
    *   Includes the necessary CSS and JavaScript files, as well as the FreeCodeCamp test suite.
*   **`style.css`:**
    *   Styles the drum machine, display, and drum pads.  Provides basic visual feedback on interaction.
*   **`script.js`:**
    *   Uses `querySelectorAll` to select all `.drum-pad` elements.
    *   Adds event listeners to each drum pad for both `click` and `keydown` events.
    *   The `playSound` function:
        *   Resets the `currentTime` of the audio to 0 to allow immediate re-triggering of the sound.
        *   Plays the audio using `audio.play()`.
        *   Updates the `#display` element with the `data-sound` attribute of the clicked/pressed drum pad.

## FreeCodeCamp Certification

This project fulfills the requirements for the FreeCodeCamp Front End Development Libraries certification. The included FreeCodeCamp test suite can be used to verify the project's functionality.

## Developer

Yousef Kaihar ([@Kihar_Youssf](https://x.com/Kihar_Youssf)) - [LinkedIn](https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
