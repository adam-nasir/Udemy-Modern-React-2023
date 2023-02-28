<h1>Prop System and Props Objects</h1>

<h2>What is a props?</h2>
<p>
    props are data that a parent component to passes to its child component.With this the parent component can configure each child component differently. Showing different text, images, style, etc for each child component.
</p>

<p>
  REMEMBER: But it is one way. The parent can passed to the child components, but not the other way around.
</p>

<h3>Example:</h3>
<p>Here is your parent component named Parent</p>
<img src="./images/parent-component.png" alt="code block" />

<p>Here is your parent component named Parent</p>
<img src="./images/child-component.png" alt="code block" />

Step 1: We give the parent component data we want to pass to
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

\*/
