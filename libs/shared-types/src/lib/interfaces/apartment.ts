import { ApartmentType } from "../enums/apartmentType";
import { HouseType } from "../enums/houseType";
import { OtherType } from "../enums/otherType";
import { Purpose } from "../enums/Purpose";

export interface Asset {
    Purpose : Purpose
    city: string;
    address: string;
    houseNumber : number | undefined;
    AssetType: ApartmentType | HouseType | OtherType;
    numberOfRooms: number;
    price: number;
    parkingLots: number;
    Description: string;
    SqrMeter: number;
    user_id : string;
    creationDate: Date;
}