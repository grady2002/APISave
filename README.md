# APISave

### A javascript livrary to save API response data in a seperate JSON file which can be stored for later use.

<br />

## Installation

```
npm install apisave
```

<br />

## Documentation

The script has a APISave class which has a request_save() function, the function requires three arguments.

- The API url.
- The request method (GET | POST).
- The filename in which you want to save the response.

For example if you want to make a GET request to the Github API and save the response in a file named res.json, you can do so by the following syntax. <br />

The script can be invoked with the following syntax. <br />

```
import save from "apisave";
save("https://api.github.com/", "get", "res.json")
```

#### The script works with most of the modern Javascript frameworks

<br />

## Libraries

- fs : To write response data into a file
- axios : To make requests to the API
- circular-json : Convert circular JSON into string
