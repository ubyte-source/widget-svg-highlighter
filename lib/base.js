(function (window) {

    'use strict';

    class Type {

        /**
         * Here there is a type for the SvgHighlighter shape
         * @returns a string.
         */

        static text() {
            return 'text';
        }

         /**
         * Here there is a type for the SvgHighlighter shape
         * @returns a string.
         */

        static circle() {
            return 'circle';
        }
    }

    class SvgHighlighter {

       /**
        * *Return the id of the current node.*
        * @returns The string 'id'
        */

        static id() {
            return 'id';
        }

        /**
         * *This function returns a string that is used as an attribute value for the HTML element that
         * contains the input text.*
         * 
         * The following code cell calls the `data()` function and displays the result.
         * @returns The `data-input-svg-highlighter` string.
         */

        static data() {
            return 'data-input-svg-highlighter';
        }

       /**
        * Create a new JavaScript object and set the SVG element to the parameter
        * @param svg - the svg element that will be used to draw the graph
        */

        constructor(svg) {
            this.debug = true;
            this.elements = {
                circles: [],
                texts: []
            };
            this.setSvg(svg);
        }

        /**
         * If the element that was clicked on is not a child of this element, then close this element
         * @param event - The event object that was passed to the callback.
         * @returns The closest attribute.
         */

        close(event) {
            let attribute = this.constructor.closestAttribute(event.target, this.constructor.data());
            if (attribute !== null) return;

            this.deactiveAllElements();
        }

        /**
         * Set the debug status of the class
         * @param status - Boolean value indicating whether to turn on debug mode.
         * @returns The debug status of the object.
         */

        setDebug(status) {
            this.debug = status;
            return this;
        }

        /**
         * Get the debug setting for the current session
         * @returns The debug property is being returned.
         */

        getDebug() {
            return this.debug;
        }

        /**
         * Set the SVG element to be used by the chart
         * @param svg - The SVG element to be used as the container for the chart.
         * @returns The `setSvg` method returns the `this` object.
         */

        setSvg(svg) {
            if (svg instanceof SVGElement
                && svg.tagName.toLowerCase() === 'svg') this.elements.svg = svg;

            return this
        }

        /**
         * Get the SVG element from the DOM
         * @returns The SVG element.
         */

        getSvg() {
            return this.elements.svg || null;
        }

        /**
         * Get all the elements in the DOM that match the selector
         * @returns The elements of the array.
         */

        getElements() {
            return this.elements;
        }

        /**
         * Get the names of all the elements in the page
         * @returns The names of the elements in the object.
         */

        getElementsName() {
            return Object.keys(this.elements);
        }

        /**
         * Get all elements of a given type
         * @param name - The name of the element to retrieve.
         * @returns An array of elements.
         */

        getElementsByType(name) {
            let elements = this.getElements();
            if (elements.hasOwnProperty(name)
                && Array.isArray(elements[name])) return this.elements[name];

            return [];
        }

        /**
         * Get an element by name and id. If the element doesn't exist, create it if create is true
         * @param name - The name of the element to be created.
         * @param id - The id of the element to be found.
         * @param create - If true, the element will be created if it doesn't exist.
         * @returns Nothing.
         */

        getElement(name, id, create) {
            let elements = this.getElementsByType(name);
            for (let item = 0; item < elements.length; item++) {
                let element_id = elements[item].getAttribute(this.constructor.id());
                if (element_id !== id) continue;

                return elements[item];
            }

            if (create !== true) return null;
            return this.addElement(name, id);
        }

        /**
         * Create an element of the given name and id, and add it to the elements object
         * @param name - The name of the element.
         * @param id - The id of the element.
         * @returns The element.
         */

        addElement(name, id) {
            let debug;
            try {
                let element = document.createElementNS('http://www.w3.org/2000/svg', name);

                element.setAttribute(this.constructor.id(), id);
                element.setAttribute(this.constructor.data(), true);

                if (false === this.elements.hasOwnProperty(name)) this.elements[name] = [];

                this.elements[name].push(element);

                return element;

            }
            catch (message) {
                debug = this.getDebug();
                if (debug === true) console.log(message);
            }
        }

        /**
         * Create an element with the given name, id, and attributes
         * @param name - The name of the element to be created.
         * @param id - The id of the element you want to create.
         * @param attributes - An object containing the attributes to be set on the element.
         * @returns The element that was created.
         */

        setElement(name, id, attributes) {
            let element = this.getElement(name, id, true);
            if (element === null) return null;

            if (typeof attributes !== 'object') return element;

            for (let item in attributes) element.setAttribute(item, attributes[item]);

            return element;
        }

        /**
         * *Finds the element with the given name and id and adds the active class to it.*
         * @param name - The name of the element to be activated.
         * @param id - The id of the element to be activated.
         * @returns The object itself.
         */

        activeElement(name, id) {
            let element = this.getElement(name, id);
            if (element === null) return this;

            element.classList.add('active');

            return this;
        }

        /**
         * Hide the element with the given name and id
         * @param name - The name of the element.
         * @param id - The id of the element to hide.
         * @returns The object itself.
         */

        hideElement(name, id) {
            let element = this.getElement(name, id);
            if (element === null) return this;

            this.constructor.removeElementDOM(element);

            return this;
        }

        /**
         * *Show the element with the given name and id.*
         * 
         * The function is used to add an element to the SVG. 
         * 
         * The function takes two parameters: 
         * 
         * * *name*: The name of the element to be added. 
         * * *id*: The id of the element to be added. 
         * 
         * The function returns the JavaScript object so that calls can be chained. 
         * 
         * The function creates a variable named *element* and assigns it the value of the function
         * call to the getElement function passing it the name and id parameters. 
         * 
         * The function creates a variable named *svg* and assigns it the value of the function call to
         * the getSvg function. 
         * 
         * If the *element* variable is not null and the *svg* variable is not null, the *svg* variable
         * is appended to the *element* variable. 
         * 
         * @param name - The name of the element.
         * @param id - The id of the element to be shown.
         * @returns The `addElement` method returns the `SVG` object.
         */

        showElement(name, id) {
            let element = this.getElement(name, id), svg = this.getSvg();
            if (element !== null && svg !== null) svg.appendChild(element);
            return this;
        }

        /**
         * Deactivates all elements of a given type
         * @returns The object itself.
         */

        deactiveAllElements() {
            let type = this.getElementsName();
            for (let item = 0; item < type.length; item++) {
                let elements = this.getElementsByType(type[item]);
                if (elements.length === 0) continue;

                for (let x = 0; x < elements.length; x++) elements[x].classList.remove('active');
            }

            return this;
        }

        /**
         * Hide all elements of a given type
         * @returns The object itself.
         */

        hideAllElements() {
            let type = this.getElementsName();
            for (let item = 0; item < type.length; item++) {
                let elements = this.getElementsByType(type[item]);
                if (elements.length === 0) continue;

                for (let x = 0; x < elements.length; x++) this.constructor.removeElementDOM(elements[x]);
            }

            return this;
        }

        /**
         * Remove an element from the DOM
         * @param name - The name of the element type to remove.
         * @param id - The id of the element to remove.
         * @returns The current instance of the class.
         */

        removeElement(name, id) {
            let elements = this.getElementsByType(name);
            for (let item = 0; item < elements.length; item++) {
                let element_id = elements[item].getAttribute(this.constructor.id());
                if (element_id !== id) continue;

                this.constructor.removeElementDOM(elements[item]);
                elements.splice(item, 1);
                break;
            }

            return this;
        }

        /**
         * If the event target has a data-handle-event attribute, then execute the function that is the
         * value of the attribute
         * @param event - The event object that was passed to the event handler.
         */
        handleEvent(event) {
            let attribute = this.constructor.closestAttribute(event.target, 'data-handle-event');
            if (attribute === null) return;

            let attribute_split = attribute.split(/\s+/);
            for (let item = 0; item < attribute_split.length; item++) {
                let execute = attribute_split[item].split(String.fromCharCode(58));
                if (execute.length !== 2) break;
                if (execute[0] === event.type || 0 === execute[0].length) {
                    if (typeof this[execute[1]] !== 'function') continue;

                    this[execute[1]].call(this, event);
                }
            }
        }

        /**
         * Find the closest attribute to the target element
         * @param target - The element to search for the closest attribute.
         * @param attribute - The attribute to search for.
         * @param html - If true, the attribute is searched for in the HTML source code.
         * @returns The closest attribute.
         */

        static closestAttribute(target, attribute, html) {
            if (typeof attribute === 'undefined'
                || !attribute.length) return null;

            let result = null, element = target;

            do {
                let tagname = element.tagName.toLowerCase();
                if (tagname === 'body') return null;

                result = element.getAttribute(attribute);
                if (result !== null) {
                    result = result.toString();
                    if (result.length) break;
                }

                element = element.parentNode;
            } while (element !== null
                || typeof element === 'undefined');

            if (typeof html === 'undefined'
                || html !== true) return result;

            return element;
        }

        /**
         * Remove the element from the DOM
         * @param element - The element to remove from the DOM.
         * @returns The return value is a boolean value.
        */
       
        static removeElementDOM(element) {
            let parent = element === null
                || typeof element === 'undefined' ? null : element.parentNode;

            if (parent === null) return false;

            parent.removeChild(element);

            return true;
        }
    }

    window.SvgHighlighter = SvgHighlighter;
    window.SvgHighlighter.Type = Type;

})(window);