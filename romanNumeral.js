function findMax(num){
  const v = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  //Find the highest decimal value that is less than or equal to num
  let max = v[0];
  for(let i=0; i<v.length; i++){
    if(v[i] <= num){
      max = v[i];
    }
  }
  return max;
}


//Decimal to Roman Numeral algorithm
function convertToRoman(num){

  let roman_numeral = "";
  
  
  while(true){
    let max = findMax(num);
    if(max == 1){
      roman_numeral += "I";
      num = num - max;
    }
    else if(max == 4){
      roman_numeral += "IV";
      num = num - max;
    }
    else if(max == 5){
      roman_numeral += "V";
      num = num - max;
    }
    else if(max == 9){
      roman_numeral += "IX";
      num = num - max;
    }
    else if(max == 10){
      roman_numeral += "X";
      num = num - max;
    }
    else if(max == 40){
      roman_numeral += "XL";
      num = num - max;
    }
    else if(max == 50){
      roman_numeral += "L";
      num = num - max;
    }
    else if(max == 90){
      roman_numeral += "XC";
      num = num - max;
    }
    else if(max == 100){
      roman_numeral += "C";
      num = num - max;
    }
    else if(max == 400){
      roman_numeral += "CD";
      num = num - max;
    }
    else if(max == 500){
      roman_numeral += "D";
      num = num - max;
    }
    else if(max == 900){
      roman_numeral += "CM";
      num = num - max;
    }
    else if(max == 1000){
      roman_numeral += "M";
      num = num - max;
    }
    if(num == 0){
      break;
    }
    
  }

  return roman_numeral;
}

console.log(convertToRoman(2));