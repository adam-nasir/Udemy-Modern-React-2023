/// Parent component

import Child from "./DestructedPropsChild";

export default function Parent() {
  return <Child color="red" fontSize="20px" />;
}

// For this example to work you need to import this into App.jsx
