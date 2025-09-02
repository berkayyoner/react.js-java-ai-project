import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProjects, addProject } from "../services/projectService";

export const fetchProjects = createAsyncThunk("projects/fetch", getProjects);
export const createProject = createAsyncThunk("projects/create", addProject);

const slice = createSlice({
  name: "projects",
  initialState: { list: [], loading: false },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchProjects.pending, (s) => { s.loading = true })
     .addCase(fetchProjects.fulfilled, (s, a) => { s.loading = false; s.list = a.payload })
     .addCase(createProject.fulfilled, (s, a) => { s.list.push(a.payload) });
  },
});
export default slice.reducer;