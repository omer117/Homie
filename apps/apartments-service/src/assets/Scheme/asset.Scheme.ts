import { Document } from "mongoose"
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { ApartmentType, HouseType, OtherType, Purpose } from "@homie/shared-types"

export type AssetDocument = Asset & Document


@Schema()
export class Asset {

    @Prop({ required: true, type: String })
    Purpose: Purpose;

    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    houseNumber: number;

    @Prop({ required: true, type: String })
    AssetType: ApartmentType | HouseType | OtherType;

    @Prop({ required: true })
    numberOfRooms: number;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    parkingLots: number;

    @Prop({ required: true })
    Description: string;

    @Prop({ required: true })
    SqrMeter: number;

    @Prop({ required: true })
    user_id: string;

    @Prop({ required: true })
    creationDate: Date;


}


export const AssetScheme = SchemaFactory.createForClass(Asset)