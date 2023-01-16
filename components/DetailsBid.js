import { Text, View, Image, TextInput } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { EthPrice } from "./SubInfo";

const DetailsBid = ({ bid }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 45, height: 45 }}
      />
      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid placed by {bid.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.primary,
          }}
        >
          Bid placed by {bid.date}
        </Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  );
};

export default DetailsBid;
