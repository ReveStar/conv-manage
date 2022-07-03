import request from "./request";

export function fetchCourseList(data) {
  return request({
    url: "/course/all",
    method: "get",
    params: data,
  });
}
