import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {MatchDocument, MatchEntity} from "./entities/match.entity";
import { Model } from 'mongoose';
import {
  MatchCreateDto,
  MatchDto, MatchResetDto,
  MatchUpdateDto
} from "../../../../../libs/common/resource/match/src/lib/match.dto";
import {
  matchCreateDtoToEntity,
  matchDocumentToDto,
  matchResetDtoToEntity,
  matchUpdateDtoToEntity
} from "./match.mapper";

@Injectable()
export class MatchesService {

  constructor(
    @InjectModel(MatchEntity.collectionName) private model: Model<MatchDocument>
  ) {
  }

  create(dto: MatchCreateDto) {
    const entity = matchCreateDtoToEntity(dto);
    return this.model.create(entity)
      .then(matchDocumentToDto);
  }

  findAll(): Promise<MatchDto[]> {
    return this.model.find().exec()
      .then(entities => entities.map(matchDocumentToDto));
  }

  findOne(id: string) {
    return this.model.findById(id).exec()
      .then(matchDocumentToDto);
  }

  update(dto: MatchUpdateDto): Promise<MatchDto> {
    const entity = matchUpdateDtoToEntity(dto);
    return this.model.findByIdAndUpdate(entity.id, entity, { new: true }).exec()
      .then(matchDocumentToDto);
  }

  reset(dto: MatchResetDto): Promise<MatchDto> {
    const entity = matchResetDtoToEntity(dto);
    return this.model.findByIdAndUpdate(entity.id, entity, { new: true }).exec()
      .then(matchDocumentToDto);
  }

  remove(id: string): Promise<void> {
    return this.model.deleteOne({ _id: id }).exec()
      .then(() => null);
  }
}
