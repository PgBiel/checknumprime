# checknumprime

To check if a number is prime. Make sure you give a number under 4294967295
It, however, does only accept 1 as a prime IF you feed `true` as the 2nd argument. By default it returns 1 and -1 as NOT prime.

#### Node.js:
npm package: `npm install checknumprime`

```js
var isPrime = require("checknumprime").isPrime;
isPrime(2); //true
isPrime(9); //false
isPrime(1); //false
isPrime(1, true); //true
isPrime(-1); //false
isPrime(-1, true); //true
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


