import { Module } from '@nestjs/common';

import {MatchesModule} from "../../../../rest-api/src/app/matches/matches.module";
import {MatchResolver} from "./match.resolver";

@Module({
  imports: [MatchesModule],
  providers: [MatchResolver],
})
export class MatchModule {}
