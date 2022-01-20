(function (window) {

    'use strict';

    class Type {

        static text() {
            return 'text';
        }
        static circle() {
            return 'circle';
        }
    }

    class SvgHighlighter {

        static id() {
            return 'id';
        }
        static data() {
            return 'data-input-svg-highlighter';
        }

        constructor(svg) {
            this.debug = true;
            this.elements = {
                circles: [],
                texts: []
            };
            this.setSvg(svg);
        }

        close(event) {
            let attribute = this.constructor.closestAttribute(event.target, this.constructor.data());
            if (attribute !== null) return;

            this.deactiveAllElements();
        }
        setDebug(status) {
            this.debug = status;
            return this;
        }
        getDebug() {
            return this.debug;
        }
        setSvg(svg) {
            if (svg instanceof SVGElement
                && svg.tagName.toLowerCase() === 'svg') this.elements.svg = svg;

            return this
        }
        getSvg() {
            return this.elements.svg || null;
        }
        getElements() {
            return this.elements;
        }
        getElementsName() {
            return Object.keys(this.elements);
        }
        getElementsByType(name) {
            let elements = this.getElements();
            if (elements.hasOwnProperty(name)
                && Array.isArray(elements[name])) return this.elements[name];

            return [];
        }
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
        setElement(name, id, attributes) {
            let element = this.getElement(name, id, true);
            if (element === null) return null;

            if (typeof attributes !== 'object') return element;

            for (let item in attributes) element.setAttribute(item, attributes[item]);

            return element;
        }
        activeElement(name, id) {
            let element = this.getElement(name, id);
            if (element === null) return this;

            element.classList.add('active');

            return this;
        }
        hideElement(name, id) {
            let element = this.getElement(name, id);
            if (element === null) return this;

            this.constructor.removeElementDOM(element);

            return this;
        }
        showElement(name, id) {
            let element = this.getElement(name, id), svg = this.getSvg();
            if (element !== null && svg !== null) svg.appendChild(element);
            return this;
        }
        deactiveAllElements() {
            let type = this.getElementsName();
            for (let item = 0; item < type.length; item++) {
                let elements = this.getElementsByType(type[item]);
                if (elements.length === 0) continue;

                for (let x = 0; x < elements.length; x++) elements[x].classList.remove('active');
            }

            return this;
        }
        hideAllElements() {
            let type = this.getElementsName();
            for (let item = 0; item < type.length; item++) {
                let elements = this.getElementsByType(type[item]);
                if (elements.length === 0) continue;

                for (let x = 0; x < elements.length; x++) this.constructor.removeElementDOM(elements[x]);
            }

            return this;
        }
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