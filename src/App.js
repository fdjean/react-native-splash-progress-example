import React, { Component } from "react";
import { Provider } from "react-redux";

import Main from "./containers/containerMain";
import serviceStore from "./services/serviceStore";

class App extends Component {
  render() {
    return (
      <Provider store={serviceStore}>
        <Main />
      </Provider>
    );
  }
}
 
export default App;