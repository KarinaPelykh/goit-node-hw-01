const contacts = require("./db/contacts");
console.log(contacts);
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const list = await contacts.listContacts();
      return console.log(list);

    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);

    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "C9sjBfCo4UJCWjzBnOtxl" });
// invokeAction({
//   action: "add",
//   name: "Andrea WanDerline",
//   email: "ander.1@gmail.com",
//   phone: "(420) 732-2161",
// });
// invokeAction({ action: "remove", id: "q_FkSoEsFazCwWviQ96cR" });
invokeAction(argv);
