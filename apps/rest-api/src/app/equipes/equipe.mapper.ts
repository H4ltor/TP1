import {EquipeDocument, EquipeEntity, EquipeEntityWithId} from "./entities/equipe.entity";
import {
  EquipeCreateDto,
  EquipeDto, EquipeResetDto,
  EquipeUpdateDto
} from "../../../../../libs/common/resource/equipe/src/lib/equipe.dto";

export const equipeDocumentToDto = (document: EquipeDocument): EquipeDto => ({
  id: document.id,
  name: document.name
});

export const equipeCreateDtoToEntity = (dto: EquipeCreateDto): EquipeEntity => ({
  name: dto.name
});

export const equipeUpdateDtoToEntity = (dto: EquipeUpdateDto): EquipeEntityWithId => ({
  id: dto.id,
  name: dto.name,
});

export const equipeResetDtoToEntity = (dto: EquipeResetDto): EquipeEntityWithId => ({
  id: dto.id,
  name: dto.name ?? null,
});
