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
 <strong>Step 1:</strong> We give the parent component data we want to pass to as an JSX attribute.
</p>

<p>You can name the attrribute whatever you.</p>
 
<p> In the example we will pass down a first name and last name to child component, called firstName and lastName.
 The attribute values will be two string, firstName is Jacob and lastName is Byron-Mellues.</p>

<img src="./images/parent-props-image-2.png" alt="code block">

<strong>REMEMEBER TO SPELL THE ATTRIBUTE NAME CORRECTLY AND CHECK IT TWICE! We will discuss this later!</strong>

<p><strong>Step 2:</strong> React takes all the attributes from the parent component put into an object known as the prop object.</p>

<p>Each child component get its own object.</p>

<p>Remember how I say spell the JSX attribute correctly and check! It is because jsx attribute name will be the property name in the prop object </p>

<img src="./images/prop-object-image.png" alt="code block">

<p><strong>Step 3:</strong> Props object will be the first argument of the child component.</p>

<p>You can name it whatever but the convention is to name it props</p>

<img src="./images/child-component-prop-image.png" alt="code block">

<p><strong>Step 4:</strong> To use the properties in the props object use the curly brace and inside it use the dot notation to access whatever property you want to use in the object</p>

<p>In the example we are using both the firstName and lastName properties.</p>

<img src="./images/child-component-prop-in-use-image.png" alt="code block">

<strong>REMEMEBER TO SPELL THE ATTRIBUTE NAME AND PROP NAME CORRECTLY AND CHECK IT TWICE OR NO VALUE WILL SHOW ON THE BROWSER because it is undefined!</strong>

<h2>CONFUSION POINT!</h2>

<p>I was confused about the props used for HMTL tags and props used for react component tags.</p>

<p>Remember that HTML tags props are HTML attributes and react component tags props are custom attributes you create.</p>

Ex.

HTML ---> <input type="checkbox">

Component ---> <MyName name="John" />
