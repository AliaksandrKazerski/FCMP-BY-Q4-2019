import NewsApp from './NewsApp/NewsApp';
import FilterCreator from './FilterCreator/FilterCreator';
import QueryStateCreator from './QueryStateCreator/QueryStateCreator';
import NewsCreator from './NewsCreator/NewsCreator';

const FILTERS_CATEGORY = {
  CATEGORY: 'category',
  LANGUAGE: 'language',
  COUNTRY: 'country',
  NEWS_CHANEL: 'sources',
}

const ENDPOINTS = {
  TOP_HEADLINES:'top-headlines?',
  SOURCES:'sources?',
}

const NEWS_CHANEL = [
  'abc-news',
  'aftenposten',
  'ansa',
  'ars-technica',
  'associated-press',
  'axios',
  'abc-news-au',
  'al-jazeera-english',
  'argaam',
  'ary-news',
  'australian-financial-review',
  'bbc-news',
];

const newsCreator = new NewsCreator();

const newsApp = new NewsApp(newsCreator);

const queryStateCreator = new QueryStateCreator(newsApp, newsCreator);

const filterCreator = new FilterCreator(queryStateCreator, newsApp);
filterCreator.getFilterInitialization(FILTERS_CATEGORY.CATEGORY, ENDPOINTS.SOURCES);
filterCreator.getFilterInitialization(FILTERS_CATEGORY.LANGUAGE, ENDPOINTS.SOURCES);
filterCreator.getFilterInitialization(FILTERS_CATEGORY.COUNTRY, ENDPOINTS.SOURCES);
filterCreator.createFilters(NEWS_CHANEL, FILTERS_CATEGORY.NEWS_CHANEL, ENDPOINTS.TOP_HEADLINES);
