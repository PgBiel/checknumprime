# checknumprime

To check if a number is prime. Make sure you give a number under 4294967295
It, however, does accept 1 as a prime. To make it ignore 1 and -1, feed `true` as second argument.

#### Node.js:
npm package: `npm install checknumprime`

```js
var isPrime = require("checknumprime").isPrime;
isPrime(2); //true
isPrime(9); //false
isPrime(1); //true
isPrime(1, true); //false
isPrime(-1); //true
isPrime(-1, true); //false
```

#### Browser:
```html
<script src="https://cdn.rawgit.com/PgBiel/checknumprime/master/main.js"></script>
```
then
```js
//isPrime gets defined in window
isPrime(2); //true
```


