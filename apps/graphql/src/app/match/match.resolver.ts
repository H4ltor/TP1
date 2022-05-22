import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import {MatchesService} from "../../../../rest-api/src/app/matches/matches.service";
import {MatchCreateDto, MatchDto, MatchUpdateDto} from "../../../../../libs/common/resource/match/src/lib/match.dto";
import {MatchCreateType, MatchType, MatchUpdateType, RemoveType} from "./match.type";


@Resolver(() => MatchType)
export class MatchResolver {
  constructor(private matchService: MatchesService) {}

  @Query(() => MatchType)
  match(@Args('id') id: string): Promise<MatchDto> {
    return this.matchService.findOne(id);
  }

  @Query(() => [MatchType])
  matches(
  ) {
    return this.matchService.findAll();
  }

  @Mutation(() => MatchType)
  createMatch(
    @Args({ name: 'match', type: () => MatchCreateType }) match: MatchCreateDto
  ): Promise<MatchDto> {
    return this.matchService.create(match);
  }

  @Mutation(() => MatchType)
  updateMatch(
    @Args({ name: 'match', type: () => MatchUpdateType })
      match: MatchUpdateDto
  ): Promise<MatchDto> {
    return this.matchService.update(match.id, match);
  }

  @Mutation(() => RemoveType)
  deleteMatch(@Args('id') id: string): Promise<RemoveType> {
    return this.matchService.remove(id).then(() => {
      return {
        ok: 'true',
      };
    });
  }
}
