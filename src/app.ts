import { PropsWithChildren } from "react";
import "./app.scss";

const App = (props: PropsWithChildren) => {
  // props.children 是将要会渲染的页面
  return props.children;
};

export default App;
