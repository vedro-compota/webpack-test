export {hello1};
import {helloCommon} from "./common";
import {jswl} from "../node_modules/js-wrapper-lib/src/jswl.js";

var hello1 = function()
{
    console.log('hello 1');
    helloCommon();
}

jswl.hello();


