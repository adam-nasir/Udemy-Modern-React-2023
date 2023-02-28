/// Child component
function Child() {
  return <div>Child</div>;
}

export default Child;

// export default function Child(props) {
//   console.log(props.color);
//   console.log(props.fontsize);

//   return (
//     <div style={{ color: props.color, fontSize: props.fontsize }}>
//       {props.color} is the value of the props.color and {props.fontsize} is the
//       value props.fontsize.
//     </div>
//   );
// }
