export default defineAppConfig({
  // * 主包
  pages: [
    "pages/home/index",
    "pages/music/index",
    "pages/find/index",
    "pages/user/index",
  ],
  subPackages: [],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  // entryPagePath: "pages/home/index",
  enableShareAppMessage: false,
  tabBar: {
    // 自定义 tabbar 不可删除 list
    custom: true,
    list: [
      {
        pagePath: "pages/home/index",
        iconPath: "./static/images/home.png",
        selectedIconPath: "./static/images/homeSelected.png",
        text: "首页",
      },
      {
        pagePath: "pages/music/index",
        iconPath: "./static/images/music.png",
        selectedIconPath: "./static/images/musicSelected.png",
        text: "音乐",
      },
      {
        pagePath: "pages/find/index",
        iconPath: "./static/images/find.png",
        selectedIconPath: "./static/images/findSelected.png",
        text: "发现",
      },
      {
        pagePath: "pages/user/index",
        iconPath: "./static/images/user.png",
        selectedIconPath: "./static/images/userSelected.png",
        text: "我的",
      },
    ],
  },
  usingComponents: {},
  lazyCodeLoading: "requiredComponents", // 按需导入
});
