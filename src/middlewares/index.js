import logger from "./logger";
import thunk from "redux-thunk";

const middlewares = [thunk, logger]

export default middlewares;
