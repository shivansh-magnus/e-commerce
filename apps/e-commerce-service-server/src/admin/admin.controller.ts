import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdminService } from "./admin.service";

@swagger.ApiTags("admins")
@common.Controller("admins")
export class AdminController {
  constructor(protected readonly service: AdminService) {}

  @common.Get("/orders")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetAllOrders(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetAllOrders(body);
      }
}
