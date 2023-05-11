import axios from "../../Axios/axios";

export const fetchJobs = async () => {
  const response = await axios.get("/jobs");
  return response.data;
};

export const addJobs = async (data) => {
  const response = await axios.post("/jobs", data);
  return response.data;
};

export const editJob = async (id, data) => {
  const response = await axios.put(`/jobs/${id}`, data);
  return response.data;
};

export const removeJob = async (id) => {
  const response = await axios.delete(`/jobs/${id}`);
  return response.data;
};
