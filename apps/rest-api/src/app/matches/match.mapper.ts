import {MatchDocument, MatchEntity, MatchEntityWithId} from "./entities/match.entity";
import {
  MatchCreateDto,
  MatchDto,
  MatchResetDto,
  MatchUpdateDto
} from "../../../../../libs/common/resource/match/src/lib/match.dto";

export const matchDocumentToDto = (document: MatchDocument): MatchDto => ({
  id: document.id,
  date: document.date?.toISOString(),
  homeTeamName: document.homeTeamName,
  awayTeamName: document.awayTeamName,
  homeTeamScore: document.homeTeamScore,
  awayTeamScore: document.awayTeamScore
});

export const matchCreateDtoToEntity = (dto: MatchCreateDto): MatchEntity => ({
  date: dto.date && new Date(dto.date),
  homeTeamName: dto.homeTeamName,
  awayTeamName: dto.awayTeamName,
  homeTeamScore: dto.homeTeamScore,
  awayTeamScore: dto.awayTeamScore
});

export const matchUpdateDtoToEntity = (dto: MatchUpdateDto): MatchEntityWithId => ({
  id: dto.id,
  date: dto.date && new Date(dto.date),
  homeTeamName: dto.homeTeamName,
  awayTeamName: dto.awayTeamName,
  homeTeamScore: dto.homeTeamScore,
  awayTeamScore: dto.awayTeamScore
});

export const matchResetDtoToEntity = (dto: MatchResetDto): MatchEntityWithId => ({
  id: dto.id,
  date: dto.date ? new Date(dto.date): null,
  homeTeamName: dto.homeTeamName ?? null,
  awayTeamName: dto.awayTeamName ?? null,
  homeTeamScore: dto.homeTeamScore ?? null,
  awayTeamScore: dto.awayTeamScore ?? null
});
