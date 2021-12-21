export const SET_LOADING = 'SET_LOADING';
export const SET_DATE_ERROR = 'SET_DATE_ERROR';

const setLoading = (load:string) => {
    return {
        type: SET_LOADING, //type은 필수
        payload: load // 선택
    }
} 

const setDateError = (dateerror:string) => {
    return {
        type: SET_DATE_ERROR,
        payload: dateerror
    }
}
export default {
    setLoading,
    setDateError
}