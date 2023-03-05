<h1>Prop System and Props Objects</h1>

<h2>What is a props?</h2>
<p>
    props are data that a parent component to passes to its child component.With this the parent component can configure each child component differently. Showing different text, images, style, etc for each child component.
</p>

<strong>
  REMEMBER: But it is one way. The parent can passed to the child components, but not the other way around.
</strong>

<h3>Example:</h3>
<p>Here is your parent component named Parent</p>
<img src="./images/parent-component.png" alt="code block" />

<p>Here is your child component named Child</p>
<img src="./images/child-component.png" alt="code block" />

<p>
 Step 1: We give the parent component data we want to pass to as an JSX attribute.
</p>

<p>You can name the atrribute whatever you.</p>
 
<p> In the example we will pass down a first name and last name to child component, called firstName and lastName.
 The attribute values will be two string, firstName is Jacob and lastName is Byron-Mellues.</p>

<img src="./images/parent-props-image-2.png" alt="code block">

<em>REMEMEBER TO SPELL THE ATTRIBUTE NAME CORRECTLY</em>

<p>Step 2: React takes all the attributes from the parent component put into an object known as the prop object.</p>

<p>Each child component get its own object.</p>

<img src="./images/prop-object-image.png" alt="code block">

<p>Step 3: Props object will be the first argument of the child component.</p>
<p>You can name it whatever but the convention is to name it props</p>

Ex. /// Child component
function Child(props){
return(

)
}

<p>Step 4: Use the content in the props object however you want.</p>

/// Child component
function Child(props){
return(

<div color={props.color}></div>
)
}

<strong>REMEMEBER TO SPELL THE ATTRIBUTE NAME CORRECTLY AND CHECK IT</strong>

<h2>CONFUSION POINT!</h2>

<p>I was confused about the props used for HMTL tags and props used for react component tags.</p>

<p>Remember that HTML tags props are HTML attributes and react component tags props are custom attributes you create.</p>

Ex.

HTML ---> <input type="checkbox">

Component ---> <MyName name="John" />

\*/
