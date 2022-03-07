# Documentation widget-svg-highlighter

Widget Javascript Svg-Highlighter is a library used to create svg of different shape inside an existing SVG.

## Usage

So the basic setup looks something like this:

```

let svg = new SvgHighlighter(draw.querySelector('svg'));

```

To add an circle element to the svg with event listener:

```

svg.yourevent = function () {
  console.log(this);
};

let x = 100,
    y = 100,
    r = 20;

let circle = svg.setElement(SvgHighlighter.Type.circle(), 'yourid', {
    'class': 'clickable',
    'cx': x,
    'cy': y,
    'r': r
});

circle.setAttribute('data-handle-event', ':yourevent');
circle.addEventListener('click', svg, false);

```

To add an easy element text to the svg:

```

let x = 100,
    y = 100;

let svg.setElement(SvgHighlighter.Type.text(), 'yourid', {
    'class': 'material-icons highlight active',
    'text-anchor': 'middle',
    'dominant-baseline': 'central',
    'x': x,
    'y': y
});

```

## Structure

library:
- [window.SvgHighlighter](https://github.com/energia-source/widget-svg-highlighter/tree/main/lib#class-windownsvghighlighter-usable-methods)
- [window.SvgHighlighter.Type](https://github.com/energia-source/widget-svg-highlighter/tree/main/lib#class-windownsvghighlightertype-usable-methods)

<br>

## Contributing

Please read [CONTRIBUTING.md](https://github.com/energia-source/widget-svg-highlighter/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting us pull requests.

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/energia-source/widget-svg-highlighter/tags). 

## Authors

* **Paolo Fabris** - *Initial work* - [energia-europa.com](https://www.energia-europa.com/)
* **Gabriele Luigi Masero** - *Developer* - [energia-europa.com](https://www.energia-europa.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details