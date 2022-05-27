# Documentation widget-svg-highlighter

Widget Javascript Svg-Highlighter is a library used to create svg of different shape inside an existing SVG.

## Structure

library:
- [window.SvgHighlighter](https://github.com/energia-source/widget-svg-highlighter/tree/main/lib#class-windownsvghighlighter-usable-methods)
- [window.SvgHighlighter.Type](https://github.com/energia-source/widget-svg-highlighter/tree/main/lib#class-windownsvghighlightertype-usable-methods)

<br>

#### ***Class window.SvgHighlighter usable methods***

##### `static id()`

*Return the id of the current node.*

 * **Returns:** The string 'id'

##### `static data()`

*This function returns a string that is used as an attribute value for the HTML element that contains the input text.*

The following code cell calls the `data()` function and displays the result.

 * **Returns:** The `data-input-svg-highlighter` string.

##### `constructor(svg)`

Create a new JavaScript object and set the SVG element to the parameter

 * **Parameters:** `svg` — the svg element that will be used to draw the graph

##### `close(event)`

If the element that was clicked on is not a child of this element, then close this element

 * **Parameters:** `event` — The event object that was passed to the callback.
 * **Returns:** The closest attribute.

##### `setDebug(status)`

Set the debug status of the class

 * **Parameters:** `status` — Boolean value indicating whether to turn on debug mode.
 * **Returns:** The debug status of the object.

##### `getDebug()`

Get the debug setting for the current session

 * **Returns:** The debug property is being returned.

##### `setSvg(svg)`

Set the SVG element to be used by the chart

 * **Parameters:** `svg` — The SVG element to be used as the container for the chart.
 * **Returns:** The `setSvg` method returns the `this` object.

##### `getSvg()`

Get the SVG element from the DOM

 * **Returns:** The SVG element.

##### `getElements()`

Get all the elements in the DOM that match the selector

 * **Returns:** The elements of the array.

##### `getElementsName()`

Get the names of all the elements in the page

 * **Returns:** The names of the elements in the object.

##### `getElementsByType(name)`

Get all elements of a given type

 * **Parameters:** `name` — The name of the element to retrieve.
 * **Returns:** An array of elements.

##### `getElement(name, id, create)`

Get an element by name and id. If the element doesn't exist, create it if create is true

 * **Parameters:**
   * `name` — The name of the element to be created.
   * `id` — The id of the element to be found.
   * `create` — If true, the element will be created if it doesn't exist.
 * **Returns:** Nothing 

##### `addElement(name, id)`

Create an element of the given name and id, and add it to the elements object

 * **Parameters:**
   * `name` — The name of the element.
   * `id` — The id of the element.
 * **Returns:** The element.

##### `setElement(name, id, attributes)`

Create an element with the given name, id, and attributes

 * **Parameters:**
   * `name` — The name of the element to be created.
   * `id` — The id of the element you want to create.
   * `attributes` — An object containing the attributes to be set on the element.
 * **Returns:** The element that was created.

##### `activeElement(name, id)`

*Finds the element with the given name and id and adds the active class to it.*

 * **Parameters:**
   * `name` — The name of the element to be activated.
   * `id` — The id of the element to be activated.
 * **Returns:** The object itself.

##### `hideElement(name, id)`

Hide the element with the given name and id

 * **Parameters:**
   * `name` — The name of the element.
   * `id` — The id of the element to hide.
 * **Returns:** The object itself.

##### `showElement(name, id)`

*Show the element with the given name and id.*
The function is used to add an element to the SVG.
The function takes two parameters:

* *name*: The name of the element to be added. * *id*: The id of the element to be added.

The function returns the JavaScript object so that calls can be chained.

The function creates a variable named *element* and assigns it the value of the function call to the getElement function passing it the name and id parameters.

The function creates a variable named *svg* and assigns it the value of the function call to the getSvg function.

If the *element* variable is not null and the *svg* variable is not null, the *svg* variable is appended to the *element* variable.

 * **Parameters:**
   * `name` — The name of the element.
   * `id` — The id of the element to be shown.
 * **Returns:** The `addElement` method returns the `SVG` object.

##### `deactiveAllElements()`

Deactivates all elements of a given type

 * **Returns:** The object itself.

##### `hideAllElements()`

Hide all elements of a given type

 * **Returns:** The object itself.

##### `removeElement(name, id)`

Remove an element from the DOM

 * **Parameters:**
   * `name` — The name of the element type to remove.
   * `id` — The id of the element to remove.
 * **Returns:** The current instance of the class.

##### `handleEvent(event)`

If the event target has a data-handle-event attribute, then execute the function that is the value of the attribute

 * **Parameters:** `event` — The event object that was passed to the event handler.

##### `static closestAttribute(target, attribute, html)`

Find the closest attribute to the target element

 * **Parameters:**
   * `target` — The element to search for the closest attribute.
   * `attribute` — The attribute to search for.
   * `html` — If true, the attribute is searched for in the HTML source code.
 * **Returns:** The closest attribute.

##### `static removeElementDOM(element)`

Remove the element from the DOM

 * **Parameters:** `element` — The element to remove from the DOM.
 * **Returns:** The return value is a boolean value.

<br>

#### ***Class window.SvgHighlighter.Type usable methods***

##### `static text()`

Here there is a type for the SvgHighlighter shape

 * **Returns:** a string.

##### `static circle()`

Here there is a type for the SvgHighlighter shape

 * **Returns:** a string.

## Built With

* [Javascript](https://www.javascript.com/) - Javascript
