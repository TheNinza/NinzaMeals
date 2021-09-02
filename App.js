import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>Our React native blank canvas</Text>
      </SafeAreaView>
      <ExpoStatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
});
