import request from "./request"

export interface StudentQueryParams {
  student: string
  subject: string
  limit: string
  page: string
}

export const getStudentInfo = async (params: StudentQueryParams) => {
  const resp = await request({
      url: '/student/info',
      method: 'get',
      params: params
  })
  return resp
}
