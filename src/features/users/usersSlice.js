import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const fetchUsers = createAsyncThunk("usres/fetchUsers", () => {
  return fetch("https://fakestoreapi.com/users")
    .then((response) => response.json())
    .then((data) => data);
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      ((state.loading = false), (state.users = []));
      state.error = action.error.message;
    });
  },
});

export default usersSlice.reducer;
export { fetchUsers };
