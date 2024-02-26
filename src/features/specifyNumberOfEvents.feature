Feature: Specify Number of Events

 Scenario: When user hasn’t specified a number, 32 events are shown by default.
    Given the user has not specified the number of events to be displayed;
    When the user opens the app or navigates to the event section;
    Then the user should see a default list of 32 upcoming events.

  Scenario: User can change the number of events displayed.
    Given the user is viewing the list of upcoming events;
    When the user selects a different number of events from the settings or preferences menu;
    Then the list of events should update to display the specified number of events accordingly.