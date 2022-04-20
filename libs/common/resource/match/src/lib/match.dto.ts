import {CreateDto, Dto, ResetDto, UpdateDto} from "../../../core/src/lib/dto";
import {EquipeUpdateDto} from "../../../equipe/src/lib/equipe.dto";

export interface MatchDto extends Dto {
  homeTeamName: string;
  date: string;
  awayTeamName: string;
  homeTeamScore: number;
  awayTeamScore: number;
}

export type MatchCreateDto = Omit<MatchDto, 'id'>;

export type MatchUpdateDto = Pick<MatchDto, 'id'> & Partial<MatchCreateDto>;
export type MatchResetDto = MatchUpdateDto;
