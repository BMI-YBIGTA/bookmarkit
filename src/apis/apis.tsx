import axios from "axios";

import { Cookies } from "react-cookie";

const cookies = new Cookies();

const accessToken = cookies.get("accessToken");

export const api = axios.create({
  baseURL: "http://54.226.57.233:8080",
  headers: {
    Authorization: accessToken ? `Bearer ${accessToken}` : "",
  },
});

export const fetchMainCategoryData = async (category: string) => {
  try {
    const response = await api.get("/api/memberbookmark/query", {
      params: {
        category: category,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log();
  }
};

export interface IpostRegisterBookmark {
  memberId: string;
  title: string;
  header: string;
  link: string;
  content: string;
}

export const postRegisterBookmark = async (params: IpostRegisterBookmark) => {
  try {
    console.log(params);
    const response = await api.post("/api/memberbookmark", {
      memberId: params.memberId,
      title: params.title,
      header: params.header,
      link: params.link,
      content: params.content,
    });
    console.log(response.data);
  } catch (e) {
    console.log("북마크 등록에 실패하셨습니다.");
  }
};
