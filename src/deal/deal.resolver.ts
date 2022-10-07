import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { User } from 'src/users/models/user.model';
import { DealService } from './deal.service';
import { AddDealInput } from './dto/input/create-deal-input.dto';
import { DeleteDealInput } from './dto/input/delete-deal-input.dto';
import { Deal } from './models/deal.model';

@Resolver(() => Deal)
export class DealResolver {
  constructor(private readonly dealService: DealService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Deal)
  async addDeal(
    @Args('addDealData') addDealData: AddDealInput,
    @CurrentUser() user: User,
  ) {
    return this.dealService.addDeal(addDealData, user._id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Deal], { name: 'deals' })
  async getDelas(
    @CurrentUser() user: User,
  ) {
    return this.dealService.getDeals(user._id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Deal)
  async deleteDeals(
    @Args('deleteDeals') deleteDeals: DeleteDealInput
  ) {
    return this.dealService.deleteDeals(deleteDeals._id);
  }

}
