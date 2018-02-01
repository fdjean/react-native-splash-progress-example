export const initialState = {
  isLoading: true,
  progress: 0,
  statusLog: [],
  position: 0
};

export const reducerLoading = (state = initialState, action) => {
  var actionStatus = "";
  if (action.type.substr(0, 5) == "INIT_") {
    var actionStatus = "INIT";
  }
  if (action.type.substr(action.type.length - 8) == "_SUCCESS") {
    var actionStatus = "SUCCESS";
  }
  if (action.type.substr(action.type.length - 5) == "_FAIL") {
    var actionStatus = "FAIL";
  }
  if (action.type.substr(action.type.length - 8) == "ALL_DONE") {
    var actionStatus = "ALL_DONE";
  }

  switch (actionStatus) {
    case "INIT":
      var statusLog = state.statusLog;
      statusLog.push(action.label);
      return {
        ...state,
        isLoading: true,
        statusLog,
        progress: action.progress
      };

    case "SUCCESS":
      var statusLog = state.statusLog;
      var logIndex = statusLog.length-1;
      statusLog[logIndex] = statusLog[logIndex] + " OK";
      return {
        ...state,
        statusLog,
        progress: action.progress
      };

    case "FAIL":
    var statusLog = state.statusLog;
    var logIndex = statusLog.length-1;
    statusLog[logIndex] = statusLog[logIndex] + " FAIL";
      return {
        ...state,
        isLoading: true,
        statusLog,
        progress: action.progress
      };

    case "ALL_DONE":
      return {
        ...state,
        progress: 1,
        isLoading: false
      };

    default:
      return state;
  }
};
