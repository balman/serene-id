# serene-id

Generate a unique identifier for your most peaceful projects. A simple, URL-friendly ID generator inspired by Azure's static site generator URLs and using nanoid under the hood.

Note that by default, these identifiers are not guaranteed to be collision resistant, but through the configuration options can be made collision resistant.

# Install

`npm install serene-id`

# Usage

## `sereneId([options])`

Generate a serene ID. By default, if no options are specified, an 11-digit Nano ID will be used in conjunction with the serene name.

### Options

#### `generator`

Pass a function to generate your own unique identifier at the end of the serene ID.

#### `identifierLength`

If no custom generator is used, specify the length of the identifier to add to the end of the serene ID. Default is 12.

#### `separator`

A separator to use instead of the default dashes (e.g. underscore or space). Default is `-`.

#### `skipIdentifier`

A boolean, signifying whether to skip applying an identifier to the end of the serene ID, and receive only a serene name (e.g. `harmonious-creek`). Default is `false`.

## `sereneId.adjectives`

Get the full list of adjectives available as an array.

## `sereneId.nouns`

Get the full list of nouns available as an array.

# Example

```js
const sereneId = require('serene-id')
const { v4: uuidv4 } = require('uuid')

// using slug-friendly (default)
console.log(sereneId())
// => harmonious-creek-Fw0LTHgglNz

// using uuid
console.log(sereneId({ generator: uuidv4 }))
// => adorable-leaf-efccd1d4-4eb7-40b4-ac96-e187bb6f5608
```

# See Also

- [marvel-characters](https://github.com/mattdesl/marvel-characters)
- [nanoid](https://github.com/ai/nanoid)
- [room-names](https://github.com/flet/room-names)

# License

MIT, see [LICENSE](http://github.com/balman/serene-id/blob/master/LICENSE) for details.
