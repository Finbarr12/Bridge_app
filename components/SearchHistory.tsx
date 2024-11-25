import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface SearchHistoryProps {
  history: string[];
  onClear: () => Promise<void>;
}

export const SearchHistory: React.FC<SearchHistoryProps> = ({
  history,
  onClear,
}) => {
  return (
    <View>
      <View style={styles.MainTH}>
        <Text style={styles.MainT}>Search History</Text>
        <TouchableOpacity onPress={onClear}>
          <Text style={styles.cl}>clear</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.srcHistoryh}>
        {history.map((item, index) => (
          <View key={index} style={styles.srcCon}>
            <Text>{item}</Text>
          </View>
        ))}
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
    width: "100%",
  },
  cl: {
    marginRight: 15,
    color: "#ff7716",
  },
  srcHistoryh: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  srcCon: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
    marginLeft: 15,
    marginTop: 15,
  },
});
