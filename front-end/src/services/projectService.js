import API from "./api";

export const getProjects = async () => (
    await API.get("/projects")
).data;

export const addProject = async (p) => (
    await API.post("/projects", p)
).data;