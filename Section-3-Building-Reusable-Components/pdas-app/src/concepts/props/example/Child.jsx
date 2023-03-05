/// Child component
function Child(props) {
  return (
    <div>
      My name is {props.firstName} {props.lastName}
    </div>
  );
}

export default Child;
