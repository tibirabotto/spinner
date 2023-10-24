process.stdout.write('hello from spinner2.js... \rheyyy\n');

const chars = ['|', '/', '-', '\\'];
let timeInterval = 100;

for (const char of chars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, timeInterval);
  timeInterval += 200;
}
