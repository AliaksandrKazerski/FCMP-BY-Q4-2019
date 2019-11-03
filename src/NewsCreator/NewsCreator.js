import Wrapper from '../Components/Wrapper';
import News from '../Components/News';

import {
  DIV_ELEMENT,
  BLOCK_CLASS_NAME,
} from './constants';

import './NewsCreator.scss';

export default class NewsCreator {

  createNews(newsObject) {
    this.wrapper = Wrapper.createWrapper(DIV_ELEMENT, BLOCK_CLASS_NAME);
    document.body.appendChild(this.wrapper);
    newsObject.forEach(news => this.wrapper.appendChild(News.createNews(news)));
  }
}
