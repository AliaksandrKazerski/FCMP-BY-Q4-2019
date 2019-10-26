import App from './App/App';
import FilterCreator from './FilterCreator/FilterCreator';
import QueryState from './QueryState/QueryState';

const app = new App();

const state = new QueryState(app);

const filterCreator = new FilterCreator(state);
filterCreator.createFilters(['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'], 'category', 'category');
filterCreator.createFilters(['ar', 'de', 'en', 'es' ,'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud', 'zh'], 'language', 'language');
