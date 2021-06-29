// $: node app-02.js key1=1 key2=2 key3=3

const args = process.argv.slice(2).reduce((acc, current) => {
    const item = current.split('=');
    acc[item[0]] = item[1];
    return acc;
  }, {});

console.log(args);