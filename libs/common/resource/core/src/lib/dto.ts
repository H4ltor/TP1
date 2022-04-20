export interface Dto {
  id: string;
}

export type CreateDto<TDto extends Dto> = Omit<TDto, 'id'>;

export type UpdateDto<TDto extends Dto, TCreateDto = CreateDto<TDto>> = Pick<TDto, 'id'> & Partial<TCreateDto>;
export type ResetDto<TDto extends Dto> = UpdateDto<TDto>;
