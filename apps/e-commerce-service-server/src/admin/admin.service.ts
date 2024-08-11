import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminService {
  constructor() {}
  async GetAllOrders(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
