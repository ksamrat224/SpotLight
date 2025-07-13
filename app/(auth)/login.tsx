import { COLORS } from "@/constants/theme";
import { styles } from "@/styles/auth.styles";
import { useSSO } from "@clerk/clerk-expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const login = () => {
    const {startSSOFlow}=useSSO();
    const router = useRouter();
    const handleGoogleLogin = async () => {
        try{
        const {createdSessionId,setActive}= await startSSOFlow({strategy:"oauth_google"});
        if(setActive && createdSessionId){
            setActive({session:createdSessionId});
            router.replace("/(tabs)");
        } }catch (error) {
            console.error("Error during Google login:", error);
        }
    }

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

      <View style={styles.illustrationContainer}>
        <Image
          source={require("../../assets/images/auth_bg.png")}
          style={styles.illustration}
          resizeMode="cover"
        />
      </View>
      <View style={styles.loginSection}>
       <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
        </View>
        <Text style={styles.googleButtonText}>Continue with Google</Text>

       </TouchableOpacity>
       <Text style={styles.termsText}>
        By continuing,you agree to out Terms and Privacy Policy
       </Text>
      </View>
    </View>
  );
};

export default login;
