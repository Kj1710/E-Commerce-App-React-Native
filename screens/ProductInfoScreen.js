import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import React, { useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartReducer";
import "../ignoreWarnings";

const ProductInfoScreen = () => {
  const route = useRoute();
  const { width } = Dimensions.get("window");
  const navigation = useNavigation();
  const [addedToCart, setAddedToCart] = useState(false);
  const height = (width * 100) / 100;
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ marginTop: 55, flex: 1, backgroundColor: "white" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Pressable>
            <Feather name="shopping-bag" size={24} color="black" />
          </Pressable>
        </View>

        <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 2,
          }}
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {route.params.carouselImages.map((item, index) => (
            <ImageBackground
              style={{ width, height, marginTop: 25, resizeMode: "contain" }}
              source={{ uri: item }}
              key={index}
            >
              <View
                style={{
                  padding: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: "#C60C30",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontWeight: "600",
                      fontSize: 12,
                    }}
                  >
                    20% off
                  </Text>
                </View>

                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: "#E0E0E0",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <MaterialCommunityIcons
                    name="share-variant"
                    size={24}
                    color="black"
                  />
                </View>
              </View>

              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#E0E0E0",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  marginTop: "auto",
                  marginLeft: 20,
                  marginBottom: 20,
                }}
              >
               
              </View>
            </ImageBackground>
          ))}
        </ScrollView>
        <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 2,
          }}
        />

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            {route?.params?.title}
          </Text>

          <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 6 }}>
            ₹{route?.params?.price}
          </Text>
        </View>

        <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1 }} />

        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <Text>Color: </Text>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            {route?.params?.color}
          </Text>
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <Text>Size: </Text>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            {route?.params?.size}
          </Text>
        </View>

        <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1 }} />

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", marginVertical: 5 }}>
            Total : ₹{route.params.price}
          </Text>
          <Text style={{ color: "#00CED1" }}>
            FREE delivery Tomorrow by 3 PM.Order within 10hrs 30 mins
          </Text>

          <View
            style={{
              flexDirection: "row",
              marginVertical: 5,
              alignItems: "center",
              gap: 5,
            }}
          >
            <Ionicons name="location" size={24} color="black" />

            <Text style={{ fontSize: 15, fontWeight: "500" }}>Address</Text>
          </View>
        </View>

        <Text
          style={{ color: "green", marginHorizontal: 10, fontWeight: "500" }}
        >
          IN Stock
        </Text>
      </ScrollView>

      <View style={styles.bottomButtons}>
        <Pressable
          onPress={() => addItemToCart(route?.params?.item)}
          style={[styles.button, { backgroundColor: "#FFC72C" }]}
        >
          {addedToCart ? <Text>Added to Cart</Text> : <Text>Add to Cart</Text>}
        </Pressable>
        <Pressable style={[styles.button, { backgroundColor: "#FFAC1C" }]}>
          <Text>Buy Now</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductInfoScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#D0D0D0",
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderTopWidth: 2,
    borderTopColor: "#D0D0D0",
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
});
