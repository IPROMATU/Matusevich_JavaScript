let s1 = '[((()))]'
let s2 = '([()()])'
let s3 = '(([])())'
let s4 = '([()])()'
let s5 = '(()[()])'
let s6 ='(()()[])'
let s7 ='(()())[]'
let s8 ='(())[()]'
let s9 ='(())[]()'
let s10 ='()([()])'
let s11 ='()([]())'
let s12='()[()]()'
let s13 ='()[](())'
let s14='[]()()()'


function isValid(s) {
  const brackets = {
    ")": "(",
    "]": "["
  };

  const st = [];
  for (let i = 0; i < s.length; i++) {
    if (isClosedBracket(s[i])) {
      if (brackets[s[i]] !== st.pop()) return false;
    } else {
      st.push(s[i]);
    }
  }
  return st.length === 0;
}

function isClosedBracket(ch) {
  return [")", "]"].indexOf(ch) > -1;
}


console.log(s1, isValid(s1))
console.log(s2, isValid(s2))
console.log(s3, isValid(s3))
console.log(s4, isValid(s4))
console.log(s5, isValid(s5))
console.log(s6, isValid(s6))
console.log(s7, isValid(s7))
console.log(s8, isValid(s8))
console.log(s9, isValid(s9))
console.log(s10, isValid(s10))
console.log(s11, isValid(s11))
console.log(s12, isValid(s12))
console.log(s13, isValid(s13))
console.log(s14, isValid(s14))