import { createSlice } from "@reduxjs/toolkit";
export const ApplicationsSlice = createSlice({
  name: "applications",
  initialState: {
    defaultCoordinates: [
      {
        key: 1,
        latFrom: 59.84660399,
        lngFrom: 30.29496392,
        latTo: 59.82934196,
        lngTo: 30.42423701,
      },
      {
        key: 2,
        latFrom: 59.82934196,
        lngFrom: 30.42423701,
        latTo: 59.82761295,
        lngTo: 30.41705607,
      },
      {
        key: 3,
        latFrom: 59.83567701,
        lngFrom: 30.38064206,
        latTo: 59.84660399,
        lngTo: 30.29496392,
      },
      {
        key: 4,
        latFrom: 59.84660399,
        lngFrom: 30.29496392,
        latTo: 59.8261295,
        lngTo: 30.41705607,
      },
      {
        key: 5,
        latFrom: 59.83567701,
        lngFrom: 30.38064206,
        latTo: 59.84660399,
        lngTo: 30.29496392,
      },
    ],
    routeCoordinates: [],
    markerCoordinates: [
      [59.84660399, 30.29496392],
      [59.82934196, 30.42423701],
    ],
  },
  reducers: {
    getRouteCoordinates: (state, action) => {
      state.routeCoordinates = action.payload;
    },
    getMarkerCoordinates: (state, action) => {
      state.markerCoordinates = [
        [action.payload.latFrom, action.payload.lngFrom],
        [action.payload.latTo, action.payload.lngTo],
      ];
    },
  },
});

export const { getRouteCoordinates, getMarkerCoordinates } =
  ApplicationsSlice.actions;

export default ApplicationsSlice.reducer;
