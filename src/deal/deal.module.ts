import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DealRepository } from './deal.repository';
import { DealResolver } from './deal.resolver';
import { DealService } from './deal.service';
import { Deal } from './models/deal.model';
import { DealSchema } from './models/deal.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: Deal.name,
      schema: DealSchema
    }
  ])],
  providers: [DealResolver, DealService, DealRepository]
})
export class DealModule {}
