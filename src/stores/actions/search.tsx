export const SET_SEARCH = "SET_SEARCH";

const setSearch = (load: string) => {
  return {
    type: SET_SEARCH, //type은 필수
    payload: load, // 선택
  };
};

export default {
  setSearch,
};
