import React, { useState } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

interface SearchTabProps {
  onSearch: (term: string) => void;
}

export const SearchTab: React.FC<SearchTabProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <View style={styles.srchold}>
      <View style={styles.search}>
        <AntDesign name="search1" size={24} style={{ color: "#ff7716" }} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={handleSearch}
        />
      </View>
      <View style={styles.box}>
        <Image source={require("../assets/menu.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  srchold: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
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
    marginTop: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
