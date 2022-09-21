let x = 7;


// gornji dio piramide
for (let i = 1; i <= x; i+=2) {
  // printing spaces
  for (let j = 1; j <= x - i/2; j++) {
    process.stdout.write(' ')
  }
  // printing star
  for (let k = 0; k <  i ; k++) {
    process.stdout.write('*')
  }
  console.log();
}

//donji dio piramide 

for (let i = x - 2; i > 0 ; i-=2) {

  for (let j = 1; j < x - i/2; j++) {
     process.stdout.write(' ');
  }


  for (let  j = 0; j< i; j++) {
    process.stdout.write('*');
  }
  console.log();


}