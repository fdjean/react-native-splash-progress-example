import { AsyncStorage, NetInfo } from "react-native";

class ServiceLoading {
  /**
   *
   */
  isInternetActive = async () => {
    await this.wait(500);
    var value = await NetInfo.isConnected.fetch();
    return value;
  };

  /**
   *
   */
  wait = (delay = 10) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, delay);
    }).catch(error => {
      console.log(error.message);
      reject(error.message);
    });
  };

  /**
   *
   */
  checkStorage = async () => {
    await this.wait(500);
    await AsyncStorage.setItem("test", "test");
    var value = await AsyncStorage.getItem("test");
    return value == "test";
  };

  test = async () => {
    await this.wait(1000 * Math.random());
    return Math.random() > 0.5;
  };

}

const serviceLoading = new ServiceLoading();
export default serviceLoading;
