import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SearchTab from "./components/SearchTab";
import { SearchHistory } from "./components/SearchHistory";
import { Card } from "./common/Card";
import axios from "axios";
import { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({});
