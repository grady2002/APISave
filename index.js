import fs from "fs";
import axios from "axios";
import CircularJSON from "circular-json";

class APISave {
  static request_save(url, method, fileName) {
    console.log(`Making a ${method} request to ${url} ...`);
    try {
      axios({
        method: method,
        url: url,
      })
        .then((response) => {
          // format the JSON file with prettier formatter or any other of your choice
          // some responses might not contain the data object, so please be sure to edit the response in the source code as per to your response
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
          if (error) throw error;
        });
    } catch {
      console.log("An error occured");
    }
  }
}
export default APISave.request_save;
