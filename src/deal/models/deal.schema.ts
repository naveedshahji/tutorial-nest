import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "src/database/abstract.schema";

@Schema({versionKey: false})
export class DealDocument extends AbstractDocument {
    @Prop()
    name: string;

    @Prop()
    readonly userId: string;

    @Prop()
    link: string;
}

export const DealSchema = SchemaFactory.createForClass(DealDocument);