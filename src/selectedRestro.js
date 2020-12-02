import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { backgroundColor, mainColor } from "./utils";

const styles = {
  root: {
    flex: 1,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flex: 0.6,
  },
  image: {
    flex: 0.5,
    width: "100%",
    resizeMode: "cover",
  },
  title: {
    fontSize: 27,
    fontWeight: "500",
    marginBottom: 3,
  },
  phoneNo: {
    fontSize: 15,
    fontWeight: "500",
    color: "gray",
    marginBottom: 7,
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
  },
  descriptionContainer: {
    display: "flex",
    marginVertical: 10,
  },
  star: {
    height: 15,
    width: 15,
    marginRight: 2,
  },
  descriptionHeading: {
    fontSize: 15,
  },
  descriptionText: {
    marginTop: 3,
    fontSize: 15,
    color: "gray",
  },
};
class SelectedRestro extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={require("../assets/icons/img.png")}
        />
        <View style={styles.container}>
          <Text style={styles.title}>this is the title</Text>
          <Text style={styles.phoneNo}>+91 685741236</Text>
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <Image
                key={index}
                style={styles.star}
                source={require("../assets/icons/Star-fill.png")}
              />
            ))}
            <Text>{`( ${1000} Riviews )`}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionHeading}>Description</Text>
            <Text style={styles.descriptionText}>
              {
                "sdfasdfgsadfg sdfg adfg dsfg dsafg dsafg asdfg dsafg adsfg dsafg asdfg adsfg adfg adsfg adfg dasfg asdf adsfg adfg adf "
              }
            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionHeading}>Address</Text>
            <Text style={styles.descriptionText}>
              {
                "sdfasdfgsadfg sdfg adfg dsfg dsafg dsafg asdfg dsafg adsfg dsafg asdfg adsfg adfg adsfg adfg dasfg asdf adsfg adfg adf "
              }
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default SelectedRestro;
