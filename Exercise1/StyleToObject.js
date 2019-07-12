let style = `
  position: absolute;
  top: -999px;
  left: 0px;
  right: auto;
  bottom: auto;
  border: 0px;
  box-sizing: content-box;
  word-wrap: break-word;
  overflow: hidden;
  height: 0px !important;
  min-height: 0px !important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  text-transform: none;
  word-spacing: 0px;
  text-indent: 0px;
  line-height: 20px;
  width: 191px;
`;

function styleToObject(str) {
  const obj = {};
  let key = '';
  let value = 0;
  while (str.indexOf(":") != -1) {
    //starting with the position 3 because the leading chars before each style are non-printable
    key = str.slice(3, str.indexOf(":"));

    //adding 2 more positions to cater for  ":" and blank space
    value = str.slice(str.indexOf(":") + 2, str.indexOf(";"));
    obj[key] = value;

    //reducing the string 
    str = str.slice(str.indexOf(";") + 1);
  }
  return obj;
}

styleToObject(style);
