import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, Put,
} from '@nestjs/common';
import { EquipesService } from './equipes.service';

import {resourceEquipePath} from '../../../../../libs/common/resource/equipe/src/lib/common-resource-equipe';
import {
  EquipeCreateDto,
  EquipeDto, EquipeResetDto,
  EquipeUpdateDto
} from "../../../../../libs/common/resource/equipe/src/lib/equipe.dto";

@Controller(resourceEquipePath)
export class EquipesController {
  constructor(private readonly equipesService: EquipesService) {}

  @Post()
  create(@Body() dto: EquipeCreateDto): Promise<EquipeDto> {
    return this.equipesService.create(dto);
  }

  @Get()
  findAll(): Promise<EquipeDto[]> {
    return this.equipesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<EquipeDto> {
    return this.equipesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipeDto: EquipeUpdateDto): Promise<EquipeDto> {
    return this.equipesService.update(id, updateEquipeDto);
  }

  @Put(':id')
  reset(@Param('id') id: string, @Body() dto: EquipeResetDto): Promise<EquipeDto> {
    return this.equipesService.reset({ ...dto, id });
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.equipesService.remove(id);
  }
}
