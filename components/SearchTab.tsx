import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function SearchTab() {
  return (
    // <View style={styles.container}>
    <View style={styles.srchold}>
      <View style={styles.search}>
        <AntDesign
          name="search1"
          size={24}
          color="black"
          style={{ color: "#ff7716" }}
        />
        <TextInput style={styles.input} placeholder="Search" />
      </View>
      <View style={styles.box}>
        <Image source={require("../assets/menu.png")}></Image>
      </View>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  srchold: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "space-around",
    flexDirection: "row",
    height: "100%",
    paddingLeft: 10,
    fontSize: 18,
    color: "#ff7716",
  },
  search: {
    width: "68%",
    height: 50,
    backgroundColor: "#f5f5f5",
    marginTop: 70,
    borderColor: "#f2f2f2",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    flexDirection: "row",
  },
  box: {
    width: 60,
    height: 50,
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    marginTop: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
