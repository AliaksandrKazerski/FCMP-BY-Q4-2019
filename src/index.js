import NewsApp from './NewsApp/NewsApp';
import FilterCreator from './FilterCreator/FilterCreator';
import QueryStateCreator from './QueryStateCreator/QueryStateCreator';
import NewsCreator from './NewsCreator/NewsCreator';

const FILTERS_CATEGORY = {
  CATEGORY: 'category',
  LANGUAGE: 'language',
  COUNTRY: 'country',
}

const newsCreator = new NewsCreator();

const newsApp = new NewsApp(newsCreator);

const queryStateCreator = new QueryStateCreator(newsApp, newsCreator);

const filterCreator = new FilterCreator(queryStateCreator, newsApp);
filterCreator.getFilterInitialization(FILTERS_CATEGORY.CATEGORY);
filterCreator.getFilterInitialization(FILTERS_CATEGORY.LANGUAGE);
filterCreator.getFilterInitialization(FILTERS_CATEGORY.COUNTRY);
