import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/reducers";

export const api = axios.create({
  baseURL: "http://54.226.57.233:8080",
});

export interface IfetchMainCategoryDataProps {
  token: string;
  category: string;
}
export const fetchMainCategoryData = async (
  props: IfetchMainCategoryDataProps
) => {
  try {
    console.log(props);
    axios.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;

    const response = await axios.get(
      "http://54.226.57.233:8080/api/memberbookmark/query",
      {
        params: {
          category: props.category,
        },
      }
    );
    console.log(response.data.result);
    return response.data.result;
  } catch (e) {
    console.log("fetch 실패");
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

export interface IfetchSearchDataProps {
  token: string;
  searchText: string;
}
export const fetchSearchData = async (props: IfetchSearchDataProps) => {
  try {
    console.log(props);
    axios.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;

    const response = await axios.get(
      "http://54.226.57.233:8080/api/memberbookmark/search",
      {
        params: {
          query: props.searchText,
        },
      }
    );
    console.log("search: ", response.data.result);
    return response.data.result;
  } catch (e) {
    console.log("fetch 실패");
  }
};
