# APISave

### A NodeJS script to save API response data in a seperate JSON file which can be stored for later use.

<br />

## Usage

### Syntax

- <code>import { APISave } from "./APISave.js"</code />
- <code>APISave.request_save(url, method, filename)</code>
<br />
<img src="https://i.ibb.co/Pg17z7Z/code.png" style="margin: 20px 0" onclick="this.src"/>

<br />

## Libraries

- fs : To write response data into a file
- axios : To make requests to the API
- circular-json : Convert circular JSON into string
