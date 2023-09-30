import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";
import { addTimeReserveAdapter } from "../adapters/addTimeReserveAdapter";

export const getTimeReserve = addTimeReserveAdapter.getSelectors<StateSchema>(
    (state) => state.addReservationSchema || addTimeReserveAdapter.getInitialState()
)