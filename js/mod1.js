export {hello1};
import {helloCommon} from "./common";
import {jswl} from "js-wrapper-lib";

var hello1 = function()
{
    console.log('hello 1');
    helloCommon();
}

jswl.hello();


