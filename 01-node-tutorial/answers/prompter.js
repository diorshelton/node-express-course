const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let instructions = "Pick a color to change the background";
let backgroundColor = null;
// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body style="background-color:${backgroundColor}":>
  <p>${instructions}</p>
  <form method="POST">
  <select name="color" id="color-select">
    <option value="">--Color options--</option>
    <option value="crimson">Crimson</option>
    <option value="dodgerblue">Dodger Blue</option>
    <option value="gold">Gold</option>
    <option value="orange">Orange</option>
    <option value="papayawhip">Papayawhip</option>
    <option value="orchid">Orchid</option>
    <option value="burlywood">Burlywood</option>
    <option value="whitesmoke">Whitesmoke</option>
    <option value="goldenrod">Goldenrod</option>
    <option value="peachpuff">Peachpuff</option>
  </select>
  <button type="submit">Submit</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      backgroundColor = body.color;
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");
