import { EntityState } from "@reduxjs/toolkit";
import { TimeReservationType } from "./timeReservationTypes";

export interface AddReservationStateSchema extends EntityState<TimeReservationType> {
    isLoading: boolean
    error: string | null
}