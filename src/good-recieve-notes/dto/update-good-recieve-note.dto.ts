import { PartialType } from '@nestjs/mapped-types';
import { CreateGoodRecieveNoteDto } from './create-good-recieve-note.dto';

export class UpdateGoodRecieveNoteDto extends PartialType(CreateGoodRecieveNoteDto) {}
