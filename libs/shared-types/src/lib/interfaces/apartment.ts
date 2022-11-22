import { ApartmentType } from "../enums/apartmentType";
import { HouseType } from "../enums/houseType";
import { OtherType } from "../enums/otherType";

export interface AssetToSale {
    city: string;
    address: string;
    number : number;
    numberOfHouse : number | undefined;
    AssetType: ApartmentType | HouseType | OtherType;
    numberOfRooms: number;
    price: number;
    parkingLots: number;
    Description: string;
    SqrMeter: number;
    
}