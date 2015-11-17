# &lt;BodyStyle&gt;

Code originally came from documentation of [react-side-effect](https://github.com/gaearon/react-side-effect). We simply add support for className and make it pass lint

Update your body class or style in your ReactJs Flux

## Install

Install the component using [NPM](https://www.npmjs.com/):

```sh
$ npm install --save body-style
```

## Usage

1. Import Custom Element:

    ```js
    import BodyStyle from 'body-style';
    ```

2. Start using it!

    ```html
    render() {
      <div>
        <BodyStyle style={{backgroundColor: '#FFCC00'}} className="yourComponentClass" />
        ...
      </div>
    }
    ```

## License

[MIT License](http://opensource.org/licenses/MIT)
