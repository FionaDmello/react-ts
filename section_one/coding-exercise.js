// coding exercise from Just JavaScript (Equalitz of Values)

function strictEquals(a, b) {
  // handling for Nan === Nan being false all the time
  if (
    (Object.is(a, NaN) && Object.is(b, NaN)) ||
    (Object.is(a, 0) && Object.is(b, -0)) ||
    (Object.is(a, -0) && Object.is(b, 0))
  )
    return !Object.is(a, b);
  else return Object.is(a, b);
}

console.log(strictEquals(NaN, NaN)); //false
console.log(strictEquals(0, -0)); //true
console.log(strictEquals(2, 3)); //false
console.log(strictEquals(4, "4")); //false
