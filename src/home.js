import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { backgroundColor, mainColor } from "./utils";

const styles = {
  root: {
    flex: 1,
    justify: "stretch",
    backgroundColor: backgroundColor,
  },
  listContainer: {
    margin: 5,
  },
  gridView: {
    display: "flex",
    flexDirection: "row",
    justify: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    margin: 5,
    borderRadius: 4,
  },
  image: {
    flex: 0.2,
    height: 65,
    // width: 50,
    borderRadius: 5,
  },
  shopImageContainer: {
    paddingTop: 5,
    paddingHorizontal: 3,
    flex: 0.1,
    height: 38,
    justify: "center",
    alignItems: "center",
    backgroundColor: mainColor,
    borderRadius: 5,
  },
  shopImage: {
    height: 27,
    width: 27,
    resizeMode: "contain",
    // width: 50,
  },
  detail: {
    flex: 0.7,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 3,
  },
  star: {
    height: 18,
    width: 18,
  },
};

class Home extends Component {
  handleSelection = () => {
    this.props.navigation.navigate("SelectedRestro");
  };

  handleMapView = () => {
    this.props.navigation.navigate("RestroMapView");
  };

  render() {
    return (
      <View style={styles.root}>
        <ScrollView>
          <View style={styles.listContainer}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.gridView}
                onPress={() => this.handleSelection(item)}
              >
                <Image
                  style={styles.image}
                  source={require("../assets/icons/img.png")}
                />
                <View style={styles.detail}>
                  <Text style={styles.title}>{"KapilRao"}</Text>
                  <Image
                    style={styles.star}
                    source={require("../assets/icons/Star-fill.png")}
                  />
                </View>
                <TouchableOpacity
                  style={styles.shopImageContainer}
                  onPress={() => this.handleMapView()}
                >
                  <Image
                    style={styles.shopImage}
                    source={require("../assets/icons/map.png")}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Home;
