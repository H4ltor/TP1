import {Field, InputType, Int, IntersectionType, ObjectType, OmitType, PartialType, PickType} from "@nestjs/graphql";
import {MatchCreateDto, MatchDto} from "../../../../../libs/common/resource/match/src/lib/match.dto";

@ObjectType()
export class MatchType implements MatchDto {
  @Field()
  id: string;

  @Field()
  homeTeamName: string;

  @Field()
  awayTeamName: string;

  @Field(() => Int)
  homeTeamScore: number;

  @Field(() => Int)
  awayTeamScore: number;

  @Field()
  date: string;

  @Field(() => Int)
  externalId: number;
}

@InputType('MatchCreateInput')
export class MatchCreateType
  extends OmitType(MatchType, ['id'], InputType)
  implements MatchCreateDto {}

@InputType('MatchUpdateInput')
export class MatchUpdateType extends IntersectionType(
  PickType(MatchType, ['id']),
  PartialType(MatchCreateType),
  InputType
) {}


@ObjectType()
export class RemoveType {
  @Field() ok: string;
}
