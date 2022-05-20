import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, Put,
} from '@nestjs/common';
import { MatchesService } from './matches.service';

import {resourceMatchPath} from '../../../../../libs/common/resource/match/src/lib/common-resource-match';
import {
  EquipeCreateDto,
  EquipeDto, EquipeResetDto,
  EquipeUpdateDto
} from "../../../../../libs/common/resource/equipe/src/lib/equipe.dto";
import {
  MatchCreateDto,
  MatchDto,
  MatchResetDto,
  MatchUpdateDto
} from "../../../../../libs/common/resource/match/src/lib/match.dto";

@Controller(resourceMatchPath)
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  @Post()
  create(@Body() dto: MatchCreateDto): Promise<MatchDto> {
    return this.matchesService.create(dto);
  }

  @Get()
  findAll(): Promise<MatchDto[]> {
    return this.matchesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<MatchDto> {
    return this.matchesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatchDto: MatchUpdateDto): Promise<MatchDto> {
    return this.matchesService.update(id, updateMatchDto);
  }

  @Put(':id')
  reset(@Param('id') id: string, @Body() dto: MatchResetDto): Promise<MatchDto> {
    return this.matchesService.reset({ ...dto, id });
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.matchesService.remove(id);
  }
}
