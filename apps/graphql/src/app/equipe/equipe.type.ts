import {Field, InputType, Int, IntersectionType, ObjectType, OmitType, PartialType, PickType,} from '@nestjs/graphql';
import {
  EquipeCreateDto,
  EquipeDto,
  EquipeUpdateDto
} from "../../../../../libs/common/resource/equipe/src/lib/equipe.dto";

@ObjectType('Author')
export class EquipeType implements EquipeDto {
  @Field() id: string;
  @Field() firstName: string;
  @Field() lastName: string;
  @Field() name: string;
}

@ObjectType('RemoveStatus')
export class RemoveStatusType {
  @Field() ok: boolean;
}

@InputType('EquipeCreateInput')
export class EquipeCreateType extends OmitType(EquipeType, ['id'], InputType) implements EquipeCreateDto {}

@InputType('EquipeUpdateInput')
export class EquipeUpdateType extends IntersectionType(PickType(EquipeType, ['id']), PartialType(EquipeCreateType), InputType) {}

@ObjectType()
export class RemoveType {
  @Field() ok: string;
}

