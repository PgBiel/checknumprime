(function(){
  isPrime=function(n, o){var r=2;if(o&&n==1||n==-1)r=!1;if(n>-1>>>0)throw new RangeError("Number must be under "+(-1>>>0));var g=2;do{if(n%g==0)r=n==2;g++;}while(g<=Math.pow(n, .5));return r==2?!0:r;};
  if (window) window.isPrime = isPrime;
  else if (module) {
    module.exports = {
      isPrime: isPrime
    };
  }
})();