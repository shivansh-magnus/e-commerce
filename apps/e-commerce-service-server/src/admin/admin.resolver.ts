import * as graphql from "@nestjs/graphql";
import { AdminService } from "./admin.service";

export class AdminResolver {
  constructor(protected readonly service: AdminService) {}

  @graphql.Query(() => String)
  async GetAllOrders(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.GetAllOrders(args);
  }
}
