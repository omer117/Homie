import { Status } from "../enums/Status";

export interface User {
user_id: string;
username: string;
password: string;
email: string;
status : Status
creationDate: Date;
}