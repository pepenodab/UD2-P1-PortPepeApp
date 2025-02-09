import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Pressable,
} from "react-native";
import { apiService } from "../../service/camera-service";
import { useNavigation, useRouter } from "expo-router";
import { Camera, CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

interface ImageData {
  id: number;
  encodedData: string;
  width: number;
  height: number;
}
const camera = () => {
  const router = useRouter();
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [camera, setCamera] = useState(false);
  const cameraRef = useRef<CameraView | null>(null);

  useEffect(() => {
    async function fetchImages() {
      setLoading(true);
      const data = await apiService.getImages();
      setImages(data.object);
      setLoading(false);
    }
    fetchImages();
  }, []);

  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [mediaLibraryPermission, requestMediaLibraryPermission] =
    MediaLibrary.usePermissions();

  if (!cameraPermission || !mediaLibraryPermission) {
    return <View />;
  }

  if (
    !cameraPermission.granted ||
    mediaLibraryPermission.status !== "granted"
  ) {
    return (
      <View>
        <Text>We need your permissions to continue</Text>
        <TouchableOpacity
          onPress={() => {
            requestCameraPermission();
            requestMediaLibraryPermission();
          }}
        >
          <Text style={styles.conditionButton}>Grant permissions</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePicture = async () => {
    if (!cameraRef.current) return;

    try {
      const photo = await cameraRef.current.takePictureAsync({ base64: true });
      if (!photo || !photo.base64) {
        console.error("Error: No se pudo obtener la imagen.");
        return;
      }
      await apiService.saveImage(photo.base64, photo.width, photo.height);
      setLoading(true);
      const updatedImages = await apiService.getImages();
      setImages(updatedImages.object);
      setLoading(false);

      setCamera(false);
    } catch (error) {
      console.error("Error al tomar la foto:", error);
    }
  };

  return (
    <View style={styles.container}>
      {camera ? (
        <>
          <View style={styles.container}>
            <View style={styles.topControlContainer}>
              <Pressable onPress={() => setCamera(false)}>
                <Text style={styles.close}>Cerrar</Text>
              </Pressable>
            </View>
            <CameraView ref={cameraRef} style={styles.camera} />
            <TouchableOpacity
              style={styles.captureButton}
              onPress={takePicture}
            >
              <Text style={styles.captureText}>Tomar Foto</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : images.length === 0 ? (
        <>
          <Text style={styles.message}>No hay imágenes disponibles.</Text>
          <TouchableOpacity
            onPress={() => setCamera(true)}
            style={styles.captureButton}
          >
            <Text> Abrir Cámara</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
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
          <TouchableOpacity
            onPress={() => setCamera(true)}
            style={styles.captureButton}
          >
            <Text> Abrir Cámara</Text>
          </TouchableOpacity>
        </>
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
  camera: { flex: 1, justifyContent: "flex-end", width: "100%" },
  topControlContainer: {
    height: 25,
    backgroundColor: "black",
  },
  close: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderColor: "white",
    borderWidth: 1,
    padding: 2,
  },
  captureButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "red",
    padding: 10,
    borderRadius: 50,
  },
  conditionButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "green",
    color: "white",
    padding: 10,
    borderRadius: 50,
  },

  captureText: { color: "white", fontWeight: "bold" },
});
