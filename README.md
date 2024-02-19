# MEET App
MEET (Meet Events Everywhere Today) is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. This application utilizes the Google Calendar API to fetch upcoming events, providing users with a seamless experience to discover events in various cities.

## Key Features
- Filter Events by City: Users can search for a city and get a list of events hosted in that specific location.
- Show/Hide Event Details: Event details are collapsible by default, allowing users to easily navigate through the list of events.
- Specify Number of Events: Users have the flexibility to specify the number of events they want to see, providing a customizable experience.
- Use the App When Offline: The app supports offline functionality, allowing users to access cached data and continue browsing events even without an internet connection.
- Add an App Shortcut to the Home Screen: Users can add the MEET app to their device's home screen for quick access.
- Display Charts Visualizing Event Details: Visualize event data with interactive charts, including a scatterplot showing the distribution of events in different locations and a pie chart displaying the popularity of event genres.

## Technical Requirements
- Built with React, following a test-driven development (TDD) approach.
- Utilizes the Google Calendar API and OAuth2 authentication flow for fetching upcoming events.
- Implements serverless functions (preferably AWS Lambda) for the authorization server.
- Hosted on GitHub, with code organized in a Git repository.
- Compatible with the latest versions of major browsers (Chrome, Firefox, Safari, Edge, Opera) and IE11.
- Responsive design ensures compatibility with various screen sizes, from 320px to 1920px wide.
- Passes Lighthouse’s PWA checklist to ensure progressive web app features.
- Supports offline functionality and slow network conditions through a service worker.
- Users can install the app on desktop and add it to their home screen on mobile devices.
- Deployed on GitHub Pages for easy access.
- Implements an alert system using an object-oriented programming (OOP) approach for user notifications.
- Integrates data visualization components to enhance user experience.
- Comprehensive test coverage with a rate of at least 90% to ensure reliability.
- Monitored using an online performance monitoring tool for continuous optimization.

## Getting Started
To run the MEET app locally, follow these steps:

1. Clone the GitHub repository: MEET App Repository.
2. Install dependencies using
```
npm install
```
3. Set up Google Calendar API credentials and configure environment variables.
4. Run the development server with
```
npm start
```
5. Access the app in your browser at http://localhost:3000.

# User Stories

## Feature 2: Show/Hide Event Details
- User Story 2.1:
As a user,
I want event details to be collapsed by default
So that I can have a concise view of upcoming events without being overwhelmed by details.
Acceptance Criteria:
Upon opening the app or event section, all event details are initially hidden or collapsed.

- User Story 2.2:
As a user,
I want to be able to expand an event to see details
So that I can get more information about a specific event when I'm interested.
Acceptance Criteria:
When I click on an event, its details should expand or be shown.

- User Story 2.3:
As a user,
I want to be able to collapse an event to hide details
So that I can maintain a clean and organized view of the events list.
Acceptance Criteria:
When I click on an expanded event, its details should collapse or be hidden.

## Feature 3: Specify Number of Events
- User Story 3.1:
As a user,
I want to see a default number of events displayed when I haven't specified a number
So that I can quickly view upcoming events without needing to set preferences.
Acceptance Criteria:
Upon opening the app or event section without specifying the number of events, a default of 32 events should be displayed.

- User Story 3.2:
As a user,
I want the ability to change the number of events displayed
So that I can adjust the view based on my preferences or device screen size.
Acceptance Criteria:
I should be able to select a different number of events from the settings or preferences menu.
Upon changing the number, the events list should update accordingly.

## Feature 4: Use the App When Offline
- User Story 4.1:
As a user,
I want the app to show cached data when there's no internet connection
So that I can still access event information even when offline.
Acceptance Criteria:
When I open the app without an internet connection, it should display previously cached data, including upcoming events.

- User Story 4.2:
As a user,
I want to receive an error when attempting to change search settings offline
So that I'm aware of the limitations and can avoid unnecessary frustration.
Acceptance Criteria:
If I try to change search settings like city or number of events while offline, the app should display an error message informing me that these changes cannot be made offline.

## Feature 5: Add an App Shortcut to the Home Screen
- User Story 5.1:
As a user,
I want to be able to install the app as a shortcut on my device home screen
So that I can quickly access it without having to open the browser first.
Acceptance Criteria:
I should have the option to "Add to Home Screen" or similar from the browser menu, enabling me to create a shortcut for the app on my device's home screen.

## Feature 6: Display Charts Visualizing Event Details
- User Story 6.1:
As a user,
I want to see a chart displaying the number of upcoming events in each city
So that I can get a visual overview of where events are concentrated.
Acceptance Criteria:
Within the app, there should be a section dedicated to displaying a chart or graph showing the distribution of upcoming events across different cities.

# Scenarios

## Feature 2: Show/Hide Event Details
- SCENARIO 2.1
An event element is collapsed by default.

Given the user is viewing the list of upcoming events;
When the user opens the event section;
Then each event's details should be initially hidden or collapsed.

- SCENARIO 2.2
User can expand an event to see details.

Given the user is viewing the list of upcoming events and an event's details are collapsed;
When the user clicks on the event;
Then the details of that event should be expanded or shown.

- SCENARIO 2.3
User can collapse an event to hide details.

Given the user is viewing the list of upcoming events and an event's details are expanded;
When the user clicks on the expanded event;
Then the details of that event should be collapsed or hidden.

## Feature 3: Specify Number of Events
- SCENARIO 3.1
When user hasn’t specified a number, 32 events are shown by default.

Given the user has not specified the number of events to be displayed;
When the user opens the app or navigates to the event section;
Then the user should see a default list of 32 upcoming events.
SCENARIO 3.2
User can change the number of events displayed.

Given the user is viewing the list of upcoming events;
When the user selects a different number of events from the settings or preferences menu;
Then the list of events should update to display the specified number of events accordingly.

## Feature 4: Use the App When Offline
- SCENARIO 4.1
Show cached data when there’s no internet connection.

Given the user has previously accessed the app and data has been cached;
When the user opens the app without an internet connection;
Then the app should display the previously cached data, such as upcoming events and settings.

- SCENARIO 4.2
Show error when user changes search settings (city, number of events).

Given the user is making changes to search settings like city or number of events;
When the user attempts to change these settings without an internet connection;
Then the app should display an error message informing the user that these changes cannot be made offline.

## Feature 5: Add an App Shortcut to the Home Screen
- SCENARIO 5.1
User can install the meet app as a shortcut on their device home screen.

Given the user is accessing the app through a compatible device;
When the user navigates to the browser's menu options;
Then the user should have the option to "Add to Home Screen" or similar, enabling them to create a shortcut for the app on their device's home screen.

## Feature 6: Display Charts Visualizing Event Details
- SCENARIO 6.1
Show a chart with the number of upcoming events in each city.

Given the user is viewing the list of upcoming events;
When the user navigates to the statistics or charts section;
Then the app should display a chart showing the distribution of upcoming events across different cities.
