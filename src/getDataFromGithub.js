/*
interface :
  args:
    String url,
    Object params: {
      String owner,
      String repo
    }
  Object result: {
    Array data: [
      { id, name, createdAt},
      { id, name, createdAt},
      ...
    ],
    XMLHttpRequest request
  }
*/
const getData = (url = 'https://api.github.com/', params = {} ) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', newUrl, true);
  xhr.send();
  // for POST requests need to include body in send

};

export default getData;
