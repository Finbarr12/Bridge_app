import { StyleSheet, Text, View } from "react-native";

export const SearchHistory = () => {
  return (
    <View>
      <View style={styles.MainTH}>
        <Text style={styles.MainT}>Search History</Text>
        <Text style={styles.cl}>clear</Text>
      </View>
      <View style={styles.srcHistoryh}>
        <View style={styles.srcCon}>
          <Text>Others</Text>
        </View>
        <View style={styles.srcCon}>
          <Text>Women</Text>
        </View>
        <View style={styles.srcCon}>
          <Text>Men's Clothing</Text>
        </View>
        <View style={styles.srcCon}>
          <Text>Electronics</Text>
        </View>
        <View style={styles.srcCon}>
          <Text>Shirts</Text>
        </View>
        <View style={styles.srcCon}>
          <Text>Fresh Vegetables</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainT: {
    fontSize: 30,
    marginLeft: 15,
  },
  MainTH: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  cl: {
    marginRight: 15,
    color: "#ff7716",
  },
  srcHistoryh: {
    flexDirection: "row",
    // gap: 2,
    flexWrap: "wrap",
    marginTop: 10,
  },
  srcCon: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#f5f5f5",
    marginLeft: 15,
    marginTop: 15,
  },
});
