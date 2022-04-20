import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
@Schema()
export class EquipeEntity {
  static collectionName = 'equipes';
  @Prop({required: true }) name: string;
}

export type EquipeEntityWithId = EquipeEntity & Pick<Document, 'id'>;
export type EquipeDocument = EquipeEntity & Document;
export const EquipeSchema = SchemaFactory.createForClass(EquipeEntity);
