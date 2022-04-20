import {CreateDto, Dto, ResetDto, UpdateDto} from "../../../core/src/lib/dto";

export interface EquipeDto extends Dto {
  name: string;
}


export type EquipeCreateDto = Omit<EquipeDto, 'id'>;

export type EquipeUpdateDto = Pick<EquipeDto, 'id'> & Partial<EquipeCreateDto>;
export type EquipeResetDto = EquipeUpdateDto;
