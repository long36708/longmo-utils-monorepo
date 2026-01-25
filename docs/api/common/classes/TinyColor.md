[@longmo-utils/common](../index.md) / TinyColor

# Class: TinyColor

## Constructors

### Constructor

```ts
new TinyColor(color?, opts?): TinyColor;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `color?` | `ColorInput` |
| `opts?` | `Partial`\<`TinyColorOptions`\> |

#### Returns

`TinyColor`

## Methods

### isDark()

```ts
isDark(): boolean;
```

#### Returns

`boolean`

***

### isLight()

```ts
isLight(): boolean;
```

#### Returns

`boolean`

***

### getBrightness()

```ts
getBrightness(): number;
```

Returns the perceived brightness of the color, from 0-255.

#### Returns

`number`

***

### getLuminance()

```ts
getLuminance(): number;
```

Returns the perceived luminance of a color, from 0-1.

#### Returns

`number`

***

### getAlpha()

```ts
getAlpha(): number;
```

Returns the alpha value of a color, from 0-1.

#### Returns

`number`

***

### setAlpha()

```ts
setAlpha(alpha?): this;
```

Sets the alpha value on the current color.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `alpha?` | `string` \| `number` | The new alpha value. The accepted range is 0-1. |

#### Returns

`this`

***

### isMonochrome()

```ts
isMonochrome(): boolean;
```

Returns whether the color is monochrome.

#### Returns

`boolean`

***

### toHsv()

```ts
toHsv(): Numberify<HSVA>;
```

Returns the object as a HSVA object.

#### Returns

`Numberify`\<`HSVA`\>

***

### toHsvString()

```ts
toHsvString(): string;
```

Returns the hsva values interpolated into a string with the following format:
"hsva(xxx, xxx, xxx, xx)".

#### Returns

`string`

***

### toHsl()

```ts
toHsl(): Numberify<HSLA>;
```

Returns the object as a HSLA object.

#### Returns

`Numberify`\<`HSLA`\>

***

### toHslString()

```ts
toHslString(): string;
```

Returns the hsla values interpolated into a string with the following format:
"hsla(xxx, xxx, xxx, xx)".

#### Returns

`string`

***

### toHex()

```ts
toHex(allow3Char?): string;
```

Returns the hex value of the color.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `allow3Char?` | `boolean` | will shorten hex value to 3 char if possible |

#### Returns

`string`

***

### toHexString()

```ts
toHexString(allow3Char?): string;
```

Returns the hex value of the color -with a # prefixed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `allow3Char?` | `boolean` | will shorten hex value to 3 char if possible |

#### Returns

`string`

***

### toHex8()

```ts
toHex8(allow4Char?): string;
```

Returns the hex 8 value of the color.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `allow4Char?` | `boolean` | will shorten hex value to 4 char if possible |

#### Returns

`string`

***

### toHex8String()

```ts
toHex8String(allow4Char?): string;
```

Returns the hex 8 value of the color -with a # prefixed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `allow4Char?` | `boolean` | will shorten hex value to 4 char if possible |

#### Returns

`string`

***

### toHexShortString()

```ts
toHexShortString(allowShortChar?): string;
```

Returns the shorter hex value of the color depends on its alpha -with a # prefixed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `allowShortChar?` | `boolean` | will shorten hex value to 3 or 4 char if possible |

#### Returns

`string`

***

### toRgb()

```ts
toRgb(): Numberify<RGBA>;
```

Returns the object as a RGBA object.

#### Returns

`Numberify`\<`RGBA`\>

***

### toRgbString()

```ts
toRgbString(): string;
```

Returns the RGBA values interpolated into a string with the following format:
"RGBA(xxx, xxx, xxx, xx)".

#### Returns

`string`

***

### toPercentageRgb()

```ts
toPercentageRgb(): RGBA;
```

Returns the object as a RGBA object.

#### Returns

`RGBA`

***

### toPercentageRgbString()

```ts
toPercentageRgbString(): string;
```

Returns the RGBA relative values interpolated into a string

#### Returns

`string`

***

### toName()

```ts
toName(): string | false;
```

The 'real' name of the color -if there is one.

#### Returns

`string` \| `false`

***

### toString()

#### Call Signature

```ts
toString<T>(format): string | boolean;
```

String representation of the color.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `"name"` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `format` | `T` | The format to be used when displaying the string representation. |

##### Returns

`string` \| `boolean`

#### Call Signature

```ts
toString<T>(format?): string;
```

String representation of the color.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `ColorFormats` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `format?` | `T` | The format to be used when displaying the string representation. |

##### Returns

`string`

***

### toNumber()

```ts
toNumber(): number;
```

#### Returns

`number`

***

### clone()

```ts
clone(): TinyColor;
```

#### Returns

`TinyColor`

***

### lighten()

```ts
lighten(amount?): TinyColor;
```

Lighten the color a given amount. Providing 100 will always return white.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount?` | `number` | valid between 1-100 |

#### Returns

`TinyColor`

***

### brighten()

```ts
brighten(amount?): TinyColor;
```

Brighten the color a given amount, from 0 to 100.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount?` | `number` | valid between 1-100 |

#### Returns

`TinyColor`

***

### darken()

```ts
darken(amount?): TinyColor;
```

Darken the color a given amount, from 0 to 100.
Providing 100 will always return black.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount?` | `number` | valid between 1-100 |

#### Returns

`TinyColor`

***

### tint()

```ts
tint(amount?): TinyColor;
```

Mix the color with pure white, from 0 to 100.
Providing 0 will do nothing, providing 100 will always return white.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount?` | `number` | valid between 1-100 |

#### Returns

`TinyColor`

***

### shade()

```ts
shade(amount?): TinyColor;
```

Mix the color with pure black, from 0 to 100.
Providing 0 will do nothing, providing 100 will always return black.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount?` | `number` | valid between 1-100 |

#### Returns

`TinyColor`

***

### desaturate()

```ts
desaturate(amount?): TinyColor;
```

Desaturate the color a given amount, from 0 to 100.
Providing 100 will is the same as calling greyscale

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount?` | `number` | valid between 1-100 |

#### Returns

`TinyColor`

***

### saturate()

```ts
saturate(amount?): TinyColor;
```

Saturate the color a given amount, from 0 to 100.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount?` | `number` | valid between 1-100 |

#### Returns

`TinyColor`

***

### greyscale()

```ts
greyscale(): TinyColor;
```

Completely desaturates a color into greyscale.
Same as calling `desaturate(100)`

#### Returns

`TinyColor`

***

### spin()

```ts
spin(amount): TinyColor;
```

Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
Values outside of this range will be wrapped into this range.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`TinyColor`

***

### mix()

```ts
mix(color, amount?): TinyColor;
```

Mix the current color a given amount with another color, from 0 to 100.
0 means no mixing (return current color).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | `ColorInput` |
| `amount?` | `number` |

#### Returns

`TinyColor`

***

### analogous()

```ts
analogous(results?, slices?): TinyColor[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `results?` | `number` |
| `slices?` | `number` |

#### Returns

`TinyColor`[]

***

### complement()

```ts
complement(): TinyColor;
```

taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js

#### Returns

`TinyColor`

***

### monochromatic()

```ts
monochromatic(results?): TinyColor[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `results?` | `number` |

#### Returns

`TinyColor`[]

***

### splitcomplement()

```ts
splitcomplement(): TinyColor[];
```

#### Returns

`TinyColor`[]

***

### onBackground()

```ts
onBackground(background): TinyColor;
```

Compute how the color would appear on a background

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `background` | `ColorInput` |

#### Returns

`TinyColor`

***

### triad()

```ts
triad(): TinyColor[];
```

Alias for `polyad(3)`

#### Returns

`TinyColor`[]

***

### tetrad()

```ts
tetrad(): TinyColor[];
```

Alias for `polyad(4)`

#### Returns

`TinyColor`[]

***

### polyad()

```ts
polyad(n): TinyColor[];
```

Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `n` | `number` |

#### Returns

`TinyColor`[]

***

### equals()

```ts
equals(color?): boolean;
```

compare color vs current color

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `color?` | `ColorInput` |

#### Returns

`boolean`

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="r"></a> `r` | `number` | red |
| <a id="g"></a> `g` | `number` | green |
| <a id="b"></a> `b` | `number` | blue |
| <a id="a"></a> `a` | `number` | alpha |
| <a id="format"></a> `format` | `ColorFormats` | the format used to create the tinycolor instance |
| <a id="originalinput"></a> `originalInput` | `ColorInput` | input passed into the constructer used to create the tinycolor instance |
| <a id="isvalid"></a> `isValid` | `boolean` | the color was successfully parsed |
| <a id="gradienttype"></a> `gradientType?` | `string` | - |
| <a id="rounda"></a> `roundA` | `number` | rounded alpha |
