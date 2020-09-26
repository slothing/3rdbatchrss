const http = require("http");

function serverHandler(request, response) {
  console.log(`got request ${request.url}`);
  response.setHeader("Content-Type", "application/json");
  if (request.url === "/hello") {
    response.write(JSON.stringify({ hello: "world" }));
  } else if (request.url === "/201") {
    let status = 201;
    response.statusCode = status;
    response.write(JSON.stringify({ status: status }));
  } else if (request.url === "/302") {
    let status = 302;
    response.statusCode = status;
    response.setHeader("Location", "http://localhost:3000/hello");
  } else if (request.url === "/404") {
    let status = 404;
    response.statusCode = status;
  } else if (request.url === "/i18n") {
    const headers = request.headers;
    let acceptLang = headers["accept-language"];
    let resp = handleI18n(acceptLang);
    response.write(JSON.stringify({ message: resp }));
  }
  response.end();
}

const server = http.createServer(serverHandler);

server.listen(3000, () => {
  console.log(`server is running`);
});

const handleI18n = (language) => {
  switch (language) {
    case "en":
      text = "hello";
      break;
    case "es":
      text = "hola";
      break;
    case "fr":
      text = "bonjour";
      break;
    default:
      text = "hello";
  }
  return text;
};

