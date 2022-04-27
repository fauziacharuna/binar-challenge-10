import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../config/firebaseApp";

import {
    collection,
    doc,
    getDoc,
    getDocs,
    updateDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

export const updateScore = createAsyncThunk(
    "games/updateScore",
    async (Credentials) => {
        const { score } = Credentials;
        try {
            const userDoc = doc(db, "users", auth.currentUser.uid);
            const docSnap = await getDoc(userDoc);
            const currentScore = docSnap.data().score.game;
            const newScore = currentScore + score;
            await updateDoc(userDoc, { "score.game1": newScore });
            await updateDoc(userDoc, { "gameplayed.game1": true });
            } catch (error) {
                throw TypeError("Cant push score");
    
        }
    }
);

export const gameSlice = createSlice({
    name: "games",
    initialState: {
        isListGameLoading: false,

        data:[],
        result: 0,
        score: 0,
    }, 
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.isListGameLoading = true;
        })
    }
})

export default gameSlice.reducer;