import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  auth: false,
  isloading: false,
  account: "",
  name: "",
  password: "",
  domain: "",
  ghimCha: false,
  ghimCon: false,
  valueCha: "",
  valueCon: "",
  idCha: null,
  keyName:''
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    doRefresh: (state, action) => {
      state.account = action.payload;
      state.auth = action.payload.auth;
      state.isloading = action.payload.isloading;
    },
    dataSaveTD: (state, action) => {
      state.account = action.payload;
      // state.accountConnect=action.payload
    },
    doSaveconnectTD: (state, action) => {},
    doDisConnect: (state, action) => {
      state.account = action.payload;
    },
    doGhimCha: (state, action) => {
      state.ghimCha = action.payload;
      // state.valueCha=action.payload.value
    },
    doGhimCon: (state, action) => {
      state.ghimCon = action.payload;
      // state.valueCha=action.payload.value
    },
    doSaveCha: (state, action) => {
      state.valueCha = action.payload.id;
    },
    doSaveCon: (state, action) => {
      state.valueCon = action.payload.id;
    },
    doSaveKeyName:(state,action)=>{
      state.keyName = action.payload
    }
  },
});
export const {
  doRefresh,
  dataSaveTD,
  doSaveconnectTD,
  doDisConnect,
  doGhimCha,
  doSaveCha,
  doGhimCon,
  doSaveCon,
  doSaveKeyName
} = userSlice.actions;
export default userSlice.reducer;
