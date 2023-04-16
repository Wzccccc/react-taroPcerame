import { useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import "./index.scss";

const Music = () => {
  useEffect(() => {
    const currentPage = Taro.getCurrentInstance().page! as any;
    if (
      typeof currentPage.getTabBar === "function" &&
      currentPage.getTabBar()
    ) {
      currentPage.getTabBar().$taroInstances.setState({
        selected: 1,
      });
    }
  });
  return (
    <View className="index">
      <Text>音乐</Text>
    </View>
  );
};
export default Music;
