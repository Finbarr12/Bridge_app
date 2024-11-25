import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SearchTab from "../components/SearchTab";
import { SearchHistory } from "../components/SearchHistory";
import { Card } from "../common/Card";
import { useQuery } from "@tanstack/react-query";
import { get_categories } from "../api/my_products";

export default function HomeScreen() {
  const query = useQuery({ queryKey: ["category"], queryFn: get_categories });
  const my_data = query.data?.data;
  console.log(my_data);
  return (
    <View style={styles.container}>
      <SearchTab />
      <SearchHistory />
      <View style={styles.category_card}>
        {my_data.map((category: any, index: any) => (
          <>
            <Card
              image={`${require("../assets/fruits.png")}`}
              text={category}
              bgcolor="rgb(224, 255, 235)"
              bdcolor="#60b77f"
            />
          </>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    // justifyContent: "center",
  },
  category_card: {
    width: "90%",
    flexDirection: "row",
    // justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 50,
    gap: 13,
  },
});
