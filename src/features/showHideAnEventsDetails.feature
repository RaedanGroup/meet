Feature: Show/Hide Event Details

 Scenario: An event element is collapsed by default.
  Given the user is viewing the list of upcoming events;
  When the user opens the event section;
  Then each event's details should be initially hidden or collapsed.

 Scenario: User can expand an event to see details.
  Given the user is viewing the list of upcoming events and an event's details are collapsed;
  When the user clicks on the event;
  Then the details of that event should be expanded or shown.

 Scenario: User can collapse an event to hide details.
  Given the user is viewing the list of upcoming events and an event's details are collapsed;
  And the user has expanded an event to see its details;
  When the user clicks on the "Hide Details" button;
  Then the details of that event should be collapsed or hidden.