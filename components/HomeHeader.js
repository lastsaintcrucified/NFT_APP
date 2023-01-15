import { Text, View, Image, TextInput } from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image source={assets.logo1} style={{ height: 40, width: 60 }} />
        <View style={{ height: 45, width: 45 }}>
          <Image
            source={assets.person01}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
          <Image
            source={assets.badge}
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>
      <View style={{ marginVertical: SIZES.small }}>
        <Text
          style={{
            color: COLORS.white,
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
          }}
        >
          Hey Samantha 👋
        </Text>
        <Text
          style={{
            color: COLORS.white,
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            marginTop: SIZES.base - 2,
          }}
        >
          Let's find a masterpiece!
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "gray",
          paddingHorizontal: SIZES.small,
          paddingVertical: SIZES.small - 2,
          marginTop: SIZES.small / 2,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ height: 20, width: 20, marginRight: SIZES.small }}
          />
          <TextInput
            placeholder="Search NFTs"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
