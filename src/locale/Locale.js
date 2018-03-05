
import en from './en.json';
import sp from './sp.json';


const locales = {en, sp};

class Locale {
  constructor(language) {
    this.strings = locales[language];
    this.subscriptions = []; //build a subscription mechanism...
  }

  setLanguage(language) {
    this.strings = locales[language];
    //invoke all the registered subscribers....
    this.subscriptions.forEach(cb => cb());
  }

  subscribe(callback) {
    this.subscriptions.push(callback);
  }
}

export default Locale;