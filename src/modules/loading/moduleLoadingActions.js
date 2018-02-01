
import serviceLoading from "./moduleLoadingServices";
import { configSteps } from "./moduleLoadingConfig";

const stepInit = index => {
  var stepUnit = 1 / configSteps.length;

  var stepPosition = index * stepUnit + stepUnit / 2;

  
  return {
    type: "INIT_" + configSteps[index].action,
    label: configSteps[index].label + " ... ",
    progress: stepPosition
  };
};

const stepSuccess = index => {
  var stepUnit = 1 / configSteps.length;
  var stepPosition = index * stepUnit + stepUnit;
  return {
    type: "INIT_" + configSteps[index].action + "_SUCCESS",
    progress: stepPosition
  };
};

const stepFail = index => {
  var stepUnit = 1 / configSteps.length;
  var stepPosition = index * stepUnit + stepUnit;
  return {
    type: "INIT_" + configSteps[index].action + "_FAIL",
    progress: stepPosition
  };
};

const stepAllDone = index => {
  return {
    type: "INIT_ALL_DONE"
  };
};

const wait = (delay = 10) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  }).catch(error => {
    console.log(error.message);
    reject(error.message);
  });
};

const stepExecute = index => {
  return async dispatch => {
    await wait(300);
    dispatch(stepInit(index));

    var status = await configSteps[index].funcExec();

    if (status) {
      dispatch(stepSuccess(index));
    } else {
      dispatch(stepFail(index));
    }

    if (index == configSteps.length - 1) {
      await wait(300);
      dispatch(stepAllDone());
    } else {
      dispatch(stepExecute(index + 1));
    }

    return status;
  };
};

export const initLoading = () => {
  return async dispatch => {
    dispatch(stepExecute(0));
  };
};
