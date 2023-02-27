// ----------------------------------------------------------------//
// Prop System                                                     //
// ----------------------------------------------------------------//

/*
props allow a parent component to passes data an object to its child component.
With this the parent component can configure each child component differently.

Ex. Showing different text, images, style for each child component.


But it is one way. The parent can passed to the child components, but not 
the other way around.


Example: 

/// Parent component
function App(){
    return(
        <div>
            <Child1 />
        </div>
    )
}

///------------------------------------------------///

/// Child component
function Child(){
    return(
        <div></div>
    )
}

Step 1: We give the parent component data  we want to pass to 
 as an JSX attribute 

You can name the atrribute whatever you. 


/// Parent component
function App(){
    return(
        <div>
            <Child1 color ="red" />
        </div>
    )
}

REMEMEBER TO SPELL THE ATTRIBUTE NAME CORRECTLY


Step 2: React takes all the attributes from the parent component put into an object
known as the prop object. Each attribute get its own object.


///Prop Object

{color: "red"}


Step 3: Props object will be the first argument of the child component. 
You can named it whatever but the convention is to name it props

/// Child component
function Child(props){
    return(
        <div></div>
    )
}


Step 4: Use the content in the props object however you want.

/// Child component
function Child(props){
    return(
        <div color={props.color}></div>
    )
}

REMEMEBER TO SPELL THE ATTRIBUTE NAME CORRECTLY AND CHECK IT
///-------------------------------------------------------------------

CONFUSION POINT! 

I was confused about the props used from html tags and props used react component tags. 
Remember this that HTML tags props are HTML attributes and react component tags props 
are custom attributes you create

Ex.

HTML ---> <input type="checkbox">

Component ---> <MyName name="John" />


*/
