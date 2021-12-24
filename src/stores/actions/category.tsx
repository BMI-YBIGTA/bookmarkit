export const SET_CATEGORY = "SET_CATEGORY";

const setCategory = (load: string) => {
  return {
    type: SET_CATEGORY, //type은 필수
    payload: load, // 선택
  };
};

export default {
  setCategory,
};
