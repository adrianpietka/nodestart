// // $: node app-01.js param1 param2 param3

console.log(process.argv);

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});