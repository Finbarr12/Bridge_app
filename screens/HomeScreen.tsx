import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SearchTab from "../components/SearchTab";
import { SearchHistory } from "../components/SearchHistory";
import { Card } from "../common/Card";
import { useQuery } from "@tanstack/react-query";
import { get_categories, get_products } from "../api/my_products";
import { Product_Card } from "../common/Product_card";

const categoryMapping: Record<string, string> = {
  electronics: "Fresh Food & Vegetables",
  jewelery: "Cooking Oil & Ghee",
  "men's clothing": "Meat & Fish",
  "women's clothing": "Bakery and snacks",
};

export default function HomeScreen() {
  const fetch_Categories = useQuery({
    queryKey: ["category"],
    queryFn: get_categories,
  });
  const my_data = fetch_Categories.data?.data;

  const get_all_products = useQuery({
    queryKey: ["products"],
    queryFn: get_products,
  });
  const my_product_data = get_all_products.data?.data;

  console.log(my_product_data);

  return (
    <ScrollView>
      <View style={styles.container}>
        <SearchTab />
        <SearchHistory />
        {/* Categories Section */}
        <View style={styles.textHold}>
          <Text style={styles.catetext}>Categories</Text>
        </View>
        <View style={styles.category_card}>
          {my_data?.map((category: any, index: any) => {
            const uiCategory =
              categoryMapping[category.toLowerCase()] || "Miscellaneous";
            return (
              <Card
                key={category.id || index}
                image={require("../assets/fruits.png")}
                text={uiCategory.charAt(0).toUpperCase() + uiCategory.slice(1)}
                bgcolor="rgb(224, 255, 235)"
                bdcolor="#60b77f"
              />
            );
          })}
        </View>

        <View style={styles.textHold}>
          <Text style={styles.catetext}>Products</Text>
        </View>
        <View style={styles.category_card}>
          {my_product_data?.map((product: any, index: any) => (
            <Product_Card
              key={product.id || index}
              image={product.image}
              text={
                product.title?.length > 20
                  ? `${product.title.slice(0, 20)}...`
                  : product.title || "Product Name"
              }
              desc={
                product.description?.length > 30
                  ? `${product.description.slice(0, 30)}...`
                  : product.description || "Product Name"
              }
              price={product.price}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
  },
  category_card: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 30,
    gap: 13,
  },
  textHold: {
    width: "100%",
    marginTop: 50,
    marginLeft: 25,
  },
  catetext: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
