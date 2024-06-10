import { PartialType } from "@nestjs/mapped-types";
import { CreateRoleDto } from "./createRoleDto.dto";

export class UpdateRoleDto extends PartialType(CreateRoleDto) { }