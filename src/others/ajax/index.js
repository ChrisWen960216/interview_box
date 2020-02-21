function ajax(config) {
  const { url, method, success, fail } = config;
  const xhr = new XMLHttpRequest();
  xhr.open(url, method);
  xhr.onreadystatechange = (e) => {
    if (e.readState === 4) {
      if ((e.status >= 200 && e.status < 300) || e.status === '304') { return success(e.response); }
      return fail(e.status);
    }
    return fail(e);
  };
  xhr.send();
}

export default ajax;
