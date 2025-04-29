const api = 'https://dd3c-219-241-29-82.ngrok-free.app';

const getLectures = () => api.get("/lectures/search");
const getSummary = (lecture_id) => api.get(`/lectures/${lecture_id}/summary`);
const getdetails = (lecture_id) => api.get(`/lectures/${lecture_id}/details`);

export {getLectures, getSummary, getdetails};