import { Module } from '@nestjs/common';
import { EquipeService } from './equipe.service';
import { EquipeResolver } from './equipe.resolver';

@Module({
  providers: [EquipeResolver, EquipeService],
})
export class EquipeModule {}
