# Marvel Soccer Team

## Overview

The Marvel Soccer Team is a React-based web application that allows users to create their own unique soccer team using characters from the Marvel.

## Key Features

- **Character Search**: Users can search for the Marvel Characters.
- **Team Formation** : Users can create their own 5-aside soccer team by assigning characters to specific positions.
- **Responsive Design**: The application is responsive, ensuring a seamless experience on both desktop and mobile devices.
- **Sharing on Social Media**: Users can share their custom team formations on Twitter and Reddit.

## Tech Stack

- React
- Styled-Components for CSS
- FontAwesome for icons
- React-Bootstrap for modal
- Axios for API requests

1 **Install Dependencies**
npm install

2 **Environment Variables**

- Create .env file in the root directory
- Add Marvel API keys
  REACT_APP_PUBLIC_KEY=yourPublicKey
  REACT_APP_PRIVATE_KEY=yourPrivateKey

3 **Start the Application**
npm start

## Usage

- **Searching Characters**: Use the search bar to find Marvel Characters. Click on a character to add them to your team.
- **Removing Characters from the Team**: Click on a Remove button located below the soccer pitch to remove a selected character from the team.
- **Sharing Teams**: Use the share buttons located above the soccer pitch to share your team on social media platforms.

## Notes

- The focus was on creating a user-friendly interface.
- The application demonstrates the ability to fetch and display data from the Marvel API.
- Although tried making a soccer pitch using a picture at first, struggled with displaying positions on a pitch. Therefore, created a pitch with reference to a project found at "https://codepen.io/diogopalhais/pen/Zrojxd".
