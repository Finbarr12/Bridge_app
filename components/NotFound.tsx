import { Video } from "expo-av";
import { View, Text, StyleSheet } from "react-native";

export const NotFound = () => {
  return (
    <View>
      <Video
        source={require("../assets/empty.mp4")}
        isLooping={true}
        shouldPlay={true}
        useNativeControls={true}
        rate={1.0}
        volume={1.0}
        style={styles.video}
      />
      <Text>No Categories Found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: "100%",
  },
});
