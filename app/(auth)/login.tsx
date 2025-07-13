import { COLORS } from "@/constants/theme";
import { styles } from "@/styles/auth.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";

const login = () => {
  return (
    <View style={styles.container}>
      {/*BRAND SECTION */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>Spotlight</Text>
        <Text style={styles.tagline}>
          Discover and share your favorite moments
        </Text>
      </View>
    </View>
  );
};

export default login;
