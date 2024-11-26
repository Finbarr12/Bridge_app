import { Video } from "expo-av";
import { useVideoPlayer, VideoView } from "expo-video";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { not_found } from "../interface/interfaces";

export const NotFound: React.FC<not_found> = ({ text }) => {
  const videoSource = `https://cdnl.iconscout.com/lottie/premium/thumb/no-result-animation-download-in-lottie-json-gif-static-svg-file-formats--results-empty-box-cart-is-design-development-animations-4133894.mp4`;

  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
        nativeControls={false}
      />
      <Text style={{ marginTop: 20, fontSize: 18 }}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: 200,
    height: 200,
  },
});
