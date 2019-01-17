import {hello1} from "./mod1";
import {hello2} from "./mod2";

hello1();
hello2();

export default { // экспортируем как модуль 'MyLibrary' (см. webpack.config.js)
    asd: () => console.log('456465465') 
}
