import { Field, ObjectType } from '@nestjs/graphql';
import { MatchDto } from '../../../../../libs/common/resource/match/src/lib/match.dto';

@ObjectType('Match')
export class MatchType implements MatchDto {
  @Field() id: string;
  @Field() firstName: string;
  @Field() lastName: string;
  @Field() awayTeamName: string;
  @Field() awayTeamScore: number;
  @Field() date: string;
  @Field() homeTeamName: string;
  @Field() homeTeamScore: number;
}
