//============================================================================//
// Destructing Arguments
//============================================================================//

/*

/// Child component
function Child(props){
    return(
        <div color={props.color}></div>
    )
}

This looks perfectly, but there might be a time where you need to use props.color multiple times.

/// Child component
function Child(props){
    return(
        <div color={props.color}></div>
        <div color={props.color}></div>
        <div color={props.color}></div>
        <div color={props.color}></div>
        <div color={props.color}></div>
        <div color={props.color}></div>
        <div color={props.color}></div>
        <div color={props.color}></div>
        <div color={props.color}></div>
        <div color={props.color}></div>
        <div color={props.color}></div>
        <div color={props.color}></div>
        <div color={props.color}></div>
        <div color={props.color}></div>
    )
}

That looks right! Well there is way to make a code look A LOT CLEANER 
by placing props.color in a variable

/// Child component
function Child(props){
    const color = props.color;

    return(
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
    )
}

Now that looks nice, but there is a BETTER WAY by destructuring the props object.
/// Child component
function Child(props){
    const {color} = props;

    return(
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
    )
}

Now this fine but, something you are going to see A LOT is destructing the props object in the function.
function Child(props){
    const {color} = props;

    return(
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
        <div color={color}></div>
    )
}

*/
