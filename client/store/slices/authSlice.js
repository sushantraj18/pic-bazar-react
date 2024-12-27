import  {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name:"auth",
    initialState:{
        accessToken : localStorage.getItem("accessToken" || null),
        refresToken : localStorage.getItem("refreshToken" || null),
        role : localStorage.getItem("role" || null),
        author : localStorage.getItem("author"|| null),
        isAuthenticated : !!localStorage.getItem("accessToken")

    },
    reducers:{
        login : (state,action)=>{
            state.accessToken = action.payload.accessToken;
            state.refresToken = action.payload.refresToken;
            state.role = action.payload.role;
            state.author = action.payload.author
            state.isAuthenticated = true;;

            localStorage.setItem("accessToken",action.payload.accessToken)
            localStorage.setItem("refresToken",action.payload.refresToken)
            localStorage.setItem("role",action.payload.role)
            localStorage.setItem("author",action.payload.author)

        },

        logout : (state) =>{
            state.accessToken = null;
            state.refresToken = null;
            state.role = null;
            state.author = null;
            state.isAuthenticated = null;

            localStorage.removeItem("accessToken");
            localStorage.removeItem("author");
            localStorage.removeItem("refresToken");
            localStorage.removeItem("role");

        }
    }
})

export const {login,logout} = authSlice.actions

export default authSlice.reducer