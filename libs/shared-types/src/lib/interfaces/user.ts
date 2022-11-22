import { Status } from "../enums/Status";

export interface User {
username: string;
password: string;
email: string;
status : Status
}