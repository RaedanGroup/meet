import puppeteer from 'puppeteer';

describe('Feature 1: Filter Events By City', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    //     browser = await puppeteer.launch({
    //   headless: false,
    //   slowMo: 250, // slow down by 250ms,
    //   timeout: 0 // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
    // });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
  });

  afterAll(() => {
    browser.close();
  });

  test('User Story 1.1: See upcoming events from all cities by default', async () => {
    const events = await page.evaluate(() => document.querySelectorAll('.event').length);
    expect(events).toBeGreaterThan(0);
  });

  test('User Story 1.2: See a list of suggestions when searching for a city', async () => {
    await page.click('.city');
    await page.type('.city', 'Berlin');
    const suggestions = await page.evaluate(() => document.querySelectorAll('.suggestions li').length);
    expect(suggestions).toBeGreaterThan(0);
  });

  test('User Story 1.3: Select a city from the suggested list', async () => {
    
    // Click on the specific suggestion that contains 'Berlin, Germany'
    await page.evaluate(() => {
      const suggestions = Array.from(document.querySelectorAll('.suggestions li'));
      const targetSuggestion = suggestions.find(suggestion => suggestion.textContent.includes('Berlin, Germany'));
      if (targetSuggestion) targetSuggestion.click();
    });
  
    // Verify that the city input has the selected city
    const cityValue = await page.$eval('.city', el => el.value);
    expect(cityValue).toContain('Berlin, Germany');
  });

});

describe('show/hide event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    // browser = await puppeteer.launch({
    //   headless: false,
    //   slowMo: 250, // slow down by 250ms,
    //   timeout: 0 // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
    // });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });
});