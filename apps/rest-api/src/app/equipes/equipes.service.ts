import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {EquipeDocument, EquipeEntity} from "./entities/equipe.entity";
import { Model } from 'mongoose';
import {
  EquipeCreateDto,
  EquipeDto, EquipeResetDto,
  EquipeUpdateDto
} from "../../../../../libs/common/resource/equipe/src/lib/equipe.dto";
import {
  equipeCreateDtoToEntity,
  equipeDocumentToDto,
  equipeResetDtoToEntity,
  equipeUpdateDtoToEntity
} from "./equipe.mapper";
import {MatchDto, MatchUpdateDto} from "../../../../../libs/common/resource/match/src/lib/match.dto";

@Injectable()
export class EquipesService {

  constructor(
    @InjectModel(EquipeEntity.collectionName) private model: Model<EquipeDocument>
  ) {
  }

  create(dto: EquipeCreateDto) {
    const entity = equipeCreateDtoToEntity(dto);
    return this.model.create(entity)
      .then(equipeDocumentToDto);
  }

  findAll(): Promise<EquipeDto[]> {
    return this.model.find().exec()
      .then(entities => entities.map(equipeDocumentToDto));
  }

  findOne(id: string) {
    return this.model.findById(id).exec()
      .then(equipeDocumentToDto);
  }

  update(id: string, updateBookDto: EquipeUpdateDto): Promise<EquipeDto> {
    return this.model.updateOne({ id }, updateBookDto).exec()
      .then(() => this.findOne(id));
  }

  reset(dto: EquipeResetDto): Promise<EquipeDto> {
    const entity = equipeResetDtoToEntity(dto);
    return this.model.findByIdAndUpdate(entity.id, entity, { new: true }).exec()
      .then(equipeDocumentToDto);
  }

  remove(id: string): Promise<void> {
    return this.model.deleteOne({ _id: id }).exec()
      .then(() => null);
  }
}
