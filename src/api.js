// src/api.js

import mockData from './mock-data';

// @param {*} events:
// This function takes an events array, then uses map to create a new array with only locations.
// It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
// The Set will remove all duplicates from the array.
// The function will then return the new array of locations.
export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

// This function will fetch the list of all events
export const getEvents = async () => {
  return mockData;
};