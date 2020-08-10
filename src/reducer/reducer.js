import {combineReducers} from "redux";
import {reducer as app} from "./app/app";
import {reducer as data} from "./data/data";
import {reducer as user} from "./user/user";
import {reducer as comments} from "./comments/comments";
import NameSpace from "./name-space";

export default combineReducers({
  [NameSpace.APP]: app,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
  [NameSpace.COMMENTS]: comments,
});
