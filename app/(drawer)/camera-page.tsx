import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { apiService } from "../../service/camera-service";
import { COLOR } from "../../styles/colors";

interface ImageData {
  id: number;
  encodedData: string;
  width: number;
  height: number;
}
const camera = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  useEffect(() => {
    async function fetchImages() {
      setLoading(true);
      const data = await apiService.getImages();
      setImages(data.object);
      setLoading(false);
    }
    fetchImages();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : images.length === 0 ? (
        <Text style={styles.message}>No hay imágenes disponibles.</Text>
      ) : (
        <FlatList
          data={images}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedImage(item)}>
              <Image
                source={{ uri: `data:image/png;base64,${item.encodedData}` }}
                style={styles.thumbnail}
              />
            </TouchableOpacity>
          )}
        />
      )}

      {selectedImage && (
        <TouchableOpacity
          style={styles.fullScreenOverlay}
          onPress={() => setSelectedImage(null)}
        >
          <Image
            source={{
              uri: `data:image/png;base64,${selectedImage.encodedData}`,
            }}
            style={styles.fullScreenImage}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default camera;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  message: { textAlign: "center", fontSize: 18, marginTop: 20 },
  thumbnail: { width: 100, height: 100, margin: 5 },
  fullScreenOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreenImage: { width: "90%", height: "80%", resizeMode: "contain" },
});
