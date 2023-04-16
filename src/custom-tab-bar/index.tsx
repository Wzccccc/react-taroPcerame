import { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import "./index.scss";

class customTabBar extends Component {
  state = {
    selected: 0,
    color: "rgba(178, 178, 178, 1)",
    selectedColor: "rgba(68, 68, 68, 1)",
    list: [
      {
        pagePath: "pages/home/index",
        iconPath: "../static/images/home.png",
        selectedIconPath: "../static/images/homeSelected.png",
        text: "首页",
      },
      {
        pagePath: "pages/music/index",
        iconPath: "../static/images/music.png",
        selectedIconPath: "../static/images/musicSelected.png",
        text: "音乐",
      },
      {
        text: "",
      },
      {
        pagePath: "pages/find/index",
        iconPath: "../static/images/find.png",
        selectedIconPath: "../static/images/findSelected.png",
        text: "发现",
      },
      {
        pagePath: "pages/user/index",
        iconPath: "../static/images/user.png",
        selectedIconPath: "../static/images/userSelected.png",
        text: "我的",
      },
    ],
  };
  switchTab = (item, index) => {
    if (index !== 2) {
      const url = "/" + item.pagePath;
      Taro.switchTab({
        url: url,
      });
    } else {
      console.log("打开弹层");
    }
  };
  render() {
    return (
      <View className="bottom-tab">
        {this.state.list.map((item, index) => {
          return index === 2 ? (
            <View
              className="bottom-tab-item"
              onClick={() => this.switchTab(item, index)}
            >
              <View className="bottom-tab-item-circle">王</View>
            </View>
          ) : (
            <View
              className="bottom-tab-item"
              onClick={() => this.switchTab(item, index)}
              data-path={item.pagePath}
              key={item.text}
            >
              <Image
                className="bottom-tab-item-img"
                mode="aspectFill"
                src={
                  this.state.selected === index
                    ? item.selectedIconPath!
                    : item.iconPath!
                }
              />
              <View
                className="bottom-tab-item-text"
                style={{
                  color:
                    this.state.selected === index
                      ? this.state.selectedColor
                      : this.state.color,
                }}
              >
                {item.text}
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

export default customTabBar;
