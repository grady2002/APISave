import ps from "prompt-sync";
import fs from "fs";
import axios from "axios";
import CircularJSON from "circular-json";

class APISave {
  static save_request(url, method, fileName) {
    console.log(`Making a ${method} request to ${url} ...`);
    try {
      axios({
        method: method,
        url: url,
      })
        .then((response) => {
          fs.writeFile(
            fileName,
            CircularJSON.stringify(response.data),
            (err) => {
              if (err) throw err;
              console.log(`Response saved as ${fileName}`);
            }
          );
        })
        .then((error) => {
          console.log(error);
        });
    } catch {
      console.log("An error occured");
    }
  }
}

console.clear();
let prompt = ps();
let url = prompt("Host ? ");
let method = prompt("Method (get or post) ? ").toLowerCase();
// Now You can Directly import save_requset method from APISave class in other files and use it
APISave.save_request(url, method, "data.json");
