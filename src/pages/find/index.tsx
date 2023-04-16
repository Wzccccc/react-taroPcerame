import { useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

const Find = () => {
  useEffect(() => {
    const currentPage = Taro.getCurrentInstance().page! as any;
    if (
      typeof currentPage.getTabBar === "function" &&
      currentPage.getTabBar()
    ) {
      currentPage.getTabBar().$taroInstances.setState({
        selected: 3,
      });
    }
  });
  return (
    <View className="index">
      <Text>发现</Text>
    </View>
  );
};
export default Find;
