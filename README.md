# APISave

### A NodeJS script to save API response data in a seperate JSON file which can be stored for later use.

<br />

## Documentation

The script has a APISave class which has a request_save() function, the function requires three arguments.

- The API url.
- The request method (GET | POST).
- The filename in which you want to save the response.

The script can be invoked with the following syntax. <br />
APISave.request_save("url", "method", "filename").

For example if you want to make a GET request to the Github API and save the response in a file named res.json, you can do so by the following syntax. <br />

<code>APISave.request_save("https://api.github.com/", "get", "res.json")</code>

#### I Hope the script works with most of the modern Javascript frameworks

<br />

## Usage Example

<img src="https://i.ibb.co/Pg17z7Z/code.png" style="margin: 20px 0" onclick="this.src"/>

<br />

## Libraries

- fs : To write response data into a file
- axios : To make requests to the API
- circular-json : Convert circular JSON into string
