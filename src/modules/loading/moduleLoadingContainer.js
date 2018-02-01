import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { Bar } from "react-native-progress";

import { initLoading } from "./moduleLoadingActions";
import { configOptions } from "./moduleLoadingConfig";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderStatus = () => {
    if (this.props.loading.statusLog.length == 0) {
      return;
    }

    if (configOptions.showAllLog) {
      return (
        <View style={styles.status}>
          {this.props.loading.statusLog.map((item, index) => {
            return (
              <Text style={styles.text} key={index}>
                {item}
              </Text>
            );
          })}
        </View>
      );
    } else {
      var logIndex = this.props.loading.statusLog.length - 1;
      return (
        <View style={styles.status}>
          <Text style={styles.text}>
            {this.props.loading.statusLog[logIndex]}
          </Text>
        </View>
      );
    }
  };

  render = () => {
    return (
      <View style={styles.container}>
        <View style={styles.rowTop}>
          <Bar
            progress={this.props.loading.progress}
            width={configOptions.progressWidth}
            height={configOptions.progressHeight}
            color={configOptions.progressColor}
            indeterminate={configOptions.progressIndeterminate}
          />
        </View>
        <View style={styles.rowBottom}>{this.renderStatus()}</View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: configOptions.backgroundColor
  },
  status: {
    width: configOptions.progressWidth - 10,
    alignItems: "flex-start"
  },
  rowTop: {
    justifyContent: "flex-end",
    flex: 1,
    alignItems: "center",
    paddingBottom: 10
  },
  rowBottom: {
    paddingTop: 10,
    flex: 1,
    alignItems: "center"
  },
  text: {
    color: configOptions.progressColor
  }
});

const mapStateToProps = state => {
  return {
    loading: state.reducerLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initLoading: () => dispatch(initLoading())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
