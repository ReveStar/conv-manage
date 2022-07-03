import request from "./request";

export function fetchSubjectList() {
  return request({
    url: "/subject/info",
    method: "get",
  });
}

export function searchSubjects(data) {
  return request({
    url: "/subject/info",
    method: "get",
    params: data,
  });
}

export function orderSubject(data) {
  return request({
    url: "subject/order",
    method: "post",
    data,
  });
}
