const url = window.location.hostname === "localhost" ? "http://localhost/pomme-d-api/back/" : "";

const dbGet = async (route) => {
  const response = await fetch(url + route);
  return await response.json();
};

const dbPost = async (route, data) => {
  data.append("method", "POST");
  const response = await fetch(url + route, {
    method: "POST",
    body: data,
  });
  return await response.json();
};

const dbPut = async (route, data) => {
  data.append("method", "PUT");
  const response = await fetch(url + route, {
    method: "POST",
    body: data,
  });
  return await response.json();
};

const dbDel = async (route, data) => {
  data.append("method", "DELETE");
  const response = await fetch(url + route, {
    method: "POST",
    body: data,
  });
};

export { dbGet, dbPost, dbPut, dbDel };
