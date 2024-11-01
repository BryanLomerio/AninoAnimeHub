# AninoAnimeHub Project

## Key Features and Structure

### Layout Component
- **Organizes the App Structure and Navigation**: 
  - **Sidebar**: Provides links to various sections like Home and My Lists, along with an external link to "Anino’s Collections."
  - **Theme Toggle**: Allows users to switch between light and dark modes, personalizing their app experience.
  - **Loading Animation**: Displays a loading GIF when transitioning between pages, ensuring smooth navigation.

### Home Component
- **Main View Displaying Anime Data**:
  - **Axios API Fetching**: Utilizes Axios to fetch data for top anime from the [Kitsu API](https://kitsu.docs.apiary.io/). This retrieves popular titles, including images and trailers, keeping users updated with current content.
  - **Anime Cards**: Presents anime details in a card format, showcasing the title and cover image. Users can click a "Play" button to view trailers in a modal.
  - **Load More Button**: Initially shows a limited number of anime titles, allowing users to load more dynamically without refreshing the page.
  - **Modal for Trailers**: Clicking the "Play" button opens a modal that plays the selected trailer video.

## Learning Goals
- **API Integration with Axios**: Focuses on using Axios for GET requests, effectively managing data fetching and error handling.
- **React State Management**: Demonstrates dynamic state updates based on user interactions, such as loading additional titles or toggling themes.
- **User Experience**: Aims to enhance engagement through responsive design, customizable light/dark themes, and interactive elements.

This project offers a hands-on opportunity to practice building a responsive, API-driven application in React. It emphasizes using Axios, React hooks, and state management to create an interactive and customizable user experience.
