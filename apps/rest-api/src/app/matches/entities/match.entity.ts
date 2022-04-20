import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
@Schema()
export class MatchEntity {
  static collectionName = 'matches';
  @Prop({required: true }) homeTeamName: string;
  @Prop({required: true, type: Date }) date: Date;
  @Prop() awayTeamName: string;
  @Prop() homeTeamScore: number;
  @Prop() awayTeamScore: number;
}

export type MatchEntityWithId = MatchEntity & Pick<Document, 'id'>;
export type MatchDocument = MatchEntity & Document;
export const MatchSchema = SchemaFactory.createForClass(MatchEntity);
