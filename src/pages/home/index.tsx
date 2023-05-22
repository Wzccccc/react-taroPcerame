import { useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import "./index.scss";

const Home = () => {
  useEffect(() => {
    const currentPage = Taro.getCurrentInstance().page! as any;
    if (
      typeof currentPage.getTabBar === "function" &&
      currentPage.getTabBar()
    ) {
      currentPage.getTabBar().$taroInstances.setState({
        selected: 0,
      });
    }
  });
  return (
    <View className="index">
      <Text>首页文字呢</Text>
      <Image src={require("../../static/images/avtar.jpg")}></Image>
    </View>
  );
};
export default Home;
