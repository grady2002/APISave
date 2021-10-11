import ps from "prompt-sync";
import fs from "fs";
import axios from "axios";
import CircularJSON from "circular-json";

class APISave {
  constructor(_uri = "localhost", _method = "get") {
    this.uri = _uri;
    this.method = _method;
  }
  getAndSet() {
    let prompt = ps();
    const uriInput = prompt("Host ? ");
    let methodInput = prompt(
      "Method (get or post) default (get) ? "
    ).toLowerCase();
    if (methodInput == "") methodInput = "get";
    this.setProps(uriInput, methodInput);
  }
  setProps(uriInput, methodInput) {
    this.uri = uriInput;
    this.method = methodInput;
  }
  request() {
    console.log(`\nMaking a ${this.method} request to ${this.uri} ...`);
    try {
      axios({
        method: this.method,
        url: this.uri,
      })
        .then((response) => {
          let prompt = ps();
          let save = prompt(
            "\nDo you want to save the response ('y' or 'n') default (n) ? "
          ).toLowerCase();
          if (save == "") save = "n";
          if (save == "y") {
            let filename = "response.json";
            // format the JSON file with prettier formatter or any other of your choice
            // some responses might not contain the data object, so please be sure to edit the response in the source code as per to your response
            fs.writeFile(
              filename,
              CircularJSON.stringify(response.data),
              (err) => {
                if (err) throw err;
                else console.log(`\nResponse saved as ${filename}`);
              }
            );
          } else {
            console.log("\n");
            // response.data can be edited into any other object, since every API does not contain a data body in the response object
            console.log(response.data);
          }
        })
        .then((error) => {
          if (error) throw error;
        });
    } catch {
      console.log("An error occured");
    }
  }
  exec() {
    this.getAndSet();
    this.request();
  }
}

(() => {
  console.clear();
  const newSave = new APISave();
  console.log("");
  newSave.exec();
})();
