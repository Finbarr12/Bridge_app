import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SearchTab from "../components/SearchTab";
import { SearchHistory } from "../components/SearchHistory";
import { Card } from "../common/Card";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SearchTab />
      <SearchHistory />
      <View style={styles.category_card}>
        <Card
          image={`${require("../assets/fruits.png")}`}
          text="Fruits & Vegetables"
          bgcolor="rgb(224, 255, 235)"
          bdcolor="#60b77f"
        />
        <Card
          image={`${require("../assets/cookingOil.png")}`}
          text="Cooking Oil & Ghee"
          bdcolor="#fc8a19"
          bgcolor="#ffcea0"
        />
        <Card
          image={`${require("../assets/MeatFish.png")}`}
          text="Meat & Fish"
          bdcolor="#F7A593"
          bgcolor="#fcc7bd"
        />
        <Card
          image={`${require("../assets/bakery_snacks.png")}`}
          text="Bakery & Snacks"
          bdcolor="#D3B0E0"
          bgcolor="#f1d4fc"
        />
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
