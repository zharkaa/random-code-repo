// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

// MY CODE
function century(year) {
    const century = Math.floor(year / 100)
    const decade = year % 100
    
    if(decade > 0) {
      return century + 1;
    }
    return century;
}

// BEST PRACTICE
// const century = year => Math.ceil(year / 100);