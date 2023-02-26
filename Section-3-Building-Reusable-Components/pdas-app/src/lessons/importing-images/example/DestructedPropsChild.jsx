/// Child component
export default function Child({ color, fontSize }) {
  // Method #1 - placing the props values in variables
  /* 
const color = props.color;
const fontSize = props.fontSize;

*/

  // Method #2 - destructing the props object
  /* 
const {color, fontSize} = props;


*/

  // Method #3 - destructing the props object
  /* 
LOOK AT THE EXAMPLE!!!!!!!!!
*/
  console.log({ fontSize });
  return (
    <div style={{ color, fontSize }}>
      This is desturcted props example. {color} is the value of the props.color
      and {fontSize} is the value props.fontsize.
    </div>
  );
}

// TRICK

/*

the name you give the destructed variable has to be the same name as the key in the key value pair of the props object
and if you have Two word, don't forget to make it camelCase!



*/
