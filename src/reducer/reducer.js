import {combineReducers} from "redux";
import {reducer as app} from "./app/app.js";
import {reducer as data} from "./data/data.js";
import {reducer as user} from "./user/user.js";
import {reducer as comments} from "./comments/comments.js";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.APP]: app,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
  [NameSpace.COMMENTS]: comments,
});
