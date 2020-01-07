function intToRoman(num) {
  // 千
  const thousand = parseInt(num / 1000, 10);
  let thousandStr = '';
  if (thousand === 0) {
    thousandStr = '';
  } else {
    let i = 0;
    while (i < thousand) {
      thousandStr += 'M'; i += 1;
    }
  }

  // 百
  const hundred = parseInt((num % 1000) / 100, 10);
  let hundredStr = '';
  if (hundred === 0) {
    hundredStr = '';
  } else if (hundred === 4) { hundredStr = 'CD'; } else if (hundred === 9) { hundredStr = 'CM'; } else if (hundred === 5) { hundredStr = 'D'; } else if (hundred < 4) {
    let i = 0;
    while (i < hundred) {
      hundredStr += 'C';
      i += 1;
    }
  } else if (hundred > 5) {
    let i = hundred;
    hundredStr = 'D';
    while (i > 5) {
      hundredStr += 'C';
      i -= 1;
    }
  }

  // 十
  const dozens = parseInt((num % 100) / 10, 10);
  let dozensStr = '';
  if (dozens === 0) {
    dozensStr = '';
  } else if (dozens === 4) { dozensStr = 'XL'; } else if (dozens === 9) { dozensStr = 'XC'; } else if (dozens === 5) { dozensStr = 'L'; } else if (dozens < 4) {
    let i = 0;
    while (i < dozens) {
      dozensStr += 'X';
      i += 1;
    }
  } else if (dozens > 5) {
    let i = dozens;
    dozensStr = 'L';
    while (i > 5) {
      dozensStr += 'X';
      i -= 1;
    }
  }

  // 个
  const units = parseInt(num % 10, 10);
  let unitsStr = '';
  if (units === 0) {
    unitsStr = '';
  } else if (units === 4) { unitsStr = 'IV'; } else if (units === 9) { unitsStr = 'IX'; } else if (units === 5) { unitsStr = 'V'; } else if (units < 4) {
    let i = 0;
    while (i < units) {
      unitsStr += 'I';
      i += 1;
    }
  } else if (units > 5) {
    let i = units;
    unitsStr = 'V';
    while (i > 5) {
      unitsStr += 'I';
      i -= 1;
    }
  }
  return `${thousandStr}${hundredStr}${dozensStr}${unitsStr}`;
}

intToRoman(1996);
intToRoman(3);
