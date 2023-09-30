import { createEntityAdapter } from "@reduxjs/toolkit";
import { TimeReservationType } from "../../types/timeReservationTypes";

export const addTimeReserveAdapter = createEntityAdapter<TimeReservationType>({
    selectId: (reserve) => reserve.id
})