import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SearchTab } from "../components/SearchTab";
import { SearchHistory } from "../components/SearchHistory";
import { Card } from "../common/Card";
import { useQuery } from "@tanstack/react-query";
import { get_categories, get_products } from "../api/my_products";
import { Product_Card } from "../common/Product_card";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { NotFound } from "../components/NotFound";

const categoryMapping: Record<string, string> = {
  electronics: "Fresh Food & Vegetables",
  jewelery: "Cooking Oil & Ghee",
  "men's clothing": "Meat & Fish",
  "women's clothing": "Bakery and snacks",
};

export default function HomeScreen() {
  const [searchResults, setSearchResults] = useState({
    products: [],
    categories: [],
  });
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Fetch categories and products
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

  // Load search history on component mount
  useEffect(() => {
    (async () => {
      const history = await AsyncStorage.getItem("searchHistory");
      setSearchHistory(history ? JSON.parse(history) : []);
    })();
  }, []);

  // Save a search term to history
  const saveSearchHistory = async (term: string) => {
    const updatedHistory = [
      term,
      ...searchHistory.filter((item) => item !== term),
    ];
    setSearchHistory(updatedHistory);
    await AsyncStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  // Clear search history
  const clearSearchHistory = async () => {
    setSearchHistory([]);
    await AsyncStorage.removeItem("searchHistory");
  };

  // Handle search term change
  const handleSearch = (term: string) => {
    setSearchTerm(term);

    // Search logic for products and categories
    const productResults = my_product_data?.filter(
      (product: any) =>
        product.title.toLowerCase().includes(term.toLowerCase()) ||
        product.description.toLowerCase().includes(term.toLowerCase())
    );

    const categoryResults = my_data?.filter((category: any) =>
      category.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults({
      products: productResults || [],
      categories: categoryResults || [],
    });

    saveSearchHistory(term);
  };

  const images: any = {
    electronics: require("../assets/fruits.png"),
    jewelery: require("../assets/cookingOil.png"),
    "men's clothing": require("../assets/MeatFish.png"),
    "women's clothing": require("../assets/bakery_snacks.png"),
  };

  const bd: any = {
    electronics: "#53B175B2",
    jewelery: "#F8A44CB2",
    "men's clothing": "#F7A59340",
    "women's clothing": "#D3B0E0",
  };

  const bg: any = {
    electronics: "rgb(224, 255, 235)",
    jewelery: "#fcd5ae",
    "men's clothing": "#fcc5ba",
    "women's clothing": "#f4dbff",
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SearchTab onSearch={handleSearch} />
        <SearchHistory history={searchHistory} onClear={clearSearchHistory} />

        {/* Categories Section */}
        <View style={styles.textHold}>
          <Text style={styles.catetext}>Categories</Text>
        </View>
        <View style={styles.category_card}>
          {searchTerm === "" ? (
            my_data?.map((category: any, index: any) => {
              const uiCategory =
                categoryMapping[category.toLowerCase()] || "Miscellaneous";

              const categoryImage: any = images[category] || "";
              const border: any = bd[category] || "";
              const backgroundColor: any = bg[category] || "";
              return (
                <Card
                  key={category.id || index}
                  image={categoryImage}
                  text={
                    uiCategory.charAt(0).toUpperCase() + uiCategory.slice(1)
                  }
                  bgcolor={backgroundColor}
                  bdcolor={border}
                />
              );
            })
          ) : searchResults.categories.length === 0 ? (
            <View
              style={{
                width: "100%",
                // backgroundColor: "red",
                alignItems: "center",
              }}
            >
              <NotFound text="No Category Found" />
            </View>
          ) : (
            searchResults.categories.map((category: any, index: any) => {
              const uiCategory =
                categoryMapping[category.toLowerCase()] || "Miscellaneous";

              const categoryImage: any = images[category] || "";
              const border: any = bd[category] || "";
              const backgroundColor: any = bg[category] || "";
              return (
                <Card
                  key={category.id || index}
                  image={categoryImage}
                  text={
                    uiCategory.charAt(0).toUpperCase() + uiCategory.slice(1)
                  }
                  bgcolor={backgroundColor}
                  bdcolor={border}
                />
              );
            })
          )}
        </View>

        {/* Products Section */}
        <View style={styles.textHold}>
          <Text style={styles.catetext}>Products</Text>
        </View>
        <View style={styles.category_card}>
          {searchTerm === "" ? (
            my_product_data?.map((product: any, index: any) => (
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
                bdcolor=""
              />
            ))
          ) : searchResults.products.length === 0 ? (
            <View
              style={{
                width: "100%",
                // backgroundColor: "red",
                alignItems: "center",
              }}
            >
              <NotFound text="No Product Found" />
            </View>
          ) : (
            searchResults.products.map((product: any, index: any) => (
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
                bdcolor="#60b77f"
              />
            ))
          )}
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
