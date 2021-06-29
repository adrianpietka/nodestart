require('yargs')
  .scriptName('nodestart')
  .usage('$0 <cmd> [args]')
  .command('last-newsletter', 'Wyświetl tytuł ostatniego newslettera', () => {
    console.log('#04 Aplikacje Command Line w Node.js');
  })
  .command(
    'subscribe-newsletter [mail]',
    'Zapisz się do newslettera',
    (yargs) => {
      yargs.positional('mail', {
        type: 'string',
        default: 'example@example.com',
        describe: 'Twój adres e-mail',
      });
    },
    (argv) => {
      console.log(
        `Twój adres e-mail ${argv.mail} został zapisany do newslettera`
      );
    }
  )
  .help().argv;
