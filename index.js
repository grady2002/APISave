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
    const methodInput = prompt("Method (get or post) ? ").toLowerCase();
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
          console.log("");
          const save = prompt(
            "Do you want to save the response ('y' or 'n') ? "
          ).toLowerCase();
          if (save == "y") {
            let filename = "response.json";
            fs.writeFile(
              filename,
              CircularJSON.stringify(response.data),
              (err) => {
                if (err) throw err;
                else console.log(`\nResponse saved as ${filename}`);
              }
            );
          } else {
            console.log(response);
          }
        })
        .then((error) => {
          console.log(error);
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
