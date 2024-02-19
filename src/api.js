import axios from "axios";

// axios instance 생성
const instance = axios.create({
  baseURL: "http://localhost:4000",
});

// 요청 interceptor
instance.interceptors.request.use(
  // 요청 실행 전에 수행하는 작업
  (request) => {
    console.log("요청입니다.");
    return request;
  },
  // 에러 발생 시 수행하는 작업
  (error) => {
    console.log("요청 에러가 발생했습니다.");
    return Promise.reject(error);
  }
);

// 응답 interceptor
instance.interceptors.response.use(
  // 응답 실행 전에 수행하는 작업
  (response) => {
    console.log("응답입니다.");
    return response;
  },
  // 에러 발생 시 수행하는 작업
  (error) => {
    console.log("응답 에러가 발생했습니다.");
    return Promise.reject(error);
  }
);

export default instance;
