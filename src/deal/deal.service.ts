import { Injectable } from '@nestjs/common';
import { DealRepository } from './deal.repository';
import { AddDealInput } from './dto/input/create-deal-input.dto';
 

@Injectable()
export class DealService {
    constructor(private readonly dealRepository: DealRepository) {}
    async addDeal(addDealData: AddDealInput, userId: string){

        const dealDocument = await this.dealRepository.create({
            ...addDealData,userId
        }) 
        return dealDocument;
    }

    async getDeals(userId: string) {
        const bookmarkDocument = await this.dealRepository.find({
            userId,
        });
        return bookmarkDocument;
    }

    async deleteDeals(id: string) {
        const bookmarkDocument = await this.dealRepository.delete({
            id,
        });
        return bookmarkDocument;
    }

}
