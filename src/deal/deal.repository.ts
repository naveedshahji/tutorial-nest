import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { AbstractRepository } from "src/database/abstract.repository"; 
import { Deal } from "./models/deal.model";
import { DealDocument } from "./models/deal.schema";

@Injectable()
export class DealRepository extends AbstractRepository<DealDocument> {
    protected readonly logger = new Logger(DealRepository.name)

    constructor(
        @InjectModel(Deal.name) dealModule: Model<DealDocument>,
      ) {
        super(dealModule);
      }
}