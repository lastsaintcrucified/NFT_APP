import {
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  StatusBar,
} from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import {
  FocusedStatusBar,
  CircleButton,
  RectButton,
  DetailsBid,
  DetailsDesc,
} from "../components";
import { SubInfo, EthPrice, NFTTitle } from "../components/SubInfo";

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={{ width: "100%", height: 375 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
      <CircleButton
        imageUrl={assets.left}
        handlePress={() => navigation.goBack()}
        top={StatusBar.currentHeight + 8}
        left={15}
      />
      <CircleButton
        imageUrl={assets.heart}
        handlePress={() => null}
        top={StatusBar.currentHeight + 8}
        right={15}
      />
    </View>
  );
};
const Details = ({ route, navigation }) => {
  const { data } = route.params;
  //   console.log(data);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text style={{ fontFamily: FONTS.semiBold }}>Current bids</Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
