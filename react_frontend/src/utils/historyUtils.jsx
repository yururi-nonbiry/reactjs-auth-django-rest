//import createHistory from "history/createBrowserHistory";
//export default createHistory();

import { createBrowserHistory } from "history";
const historyObject = createBrowserHistory({window});
export default historyObject; 
