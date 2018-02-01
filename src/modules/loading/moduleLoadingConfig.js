import serviceLoading from "./moduleLoadingServices";
// import MyCustomService from './MyCustomServices';

export const configSteps = [
  {
    label: "Check Internet",
    action: "INTERNET",
    funcExec: serviceLoading.isInternetActive
  },
  {
    label: "Check Storage",
    action: "STORAGE",
    funcExec: serviceLoading.checkStorage
  },
  {
    label: "Check Test1",
    action: "TEST1",
    funcExec: serviceLoading.test
  },
  {
    label: "Check Test2",
    action: "TEST2",
    funcExec: serviceLoading.test
  },
  {
    label: "Check Test3",
    action: "TEST3",
    funcExec: serviceLoading.test
  },
  {
    label: "Check Test4",
    action: "TEST4",
    funcExec: serviceLoading.test
  },
  {
    label: "Check Test5",
    action: "TEST5",
    funcExec: serviceLoading.test
  } /*,
    {
      check: "Check Something",
      action: "SOMETHING",
      function: MyCustomService.checkSomething // Must be a Promise with a Boolean result
    },*/
];

export const configOptions = {
  backgroundColor: "#abc900",
  showAllLog: true, // show all lines or only the current task
  progressIndeterminate: false, // real or infinite progression
  progressWidth: 200,
  progressHeight: 7,
  progressColor: "#fff"


};
