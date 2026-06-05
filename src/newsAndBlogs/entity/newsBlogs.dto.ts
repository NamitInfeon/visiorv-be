import { productType, status, infoType } from "../../global/system.enums";
import { ApiProperty } from "@nestjsx/crud/lib/crud";
import { MediaItem } from "../../project/entity/project.dto";
import { IsEnum } from "class-validator";

export interface Slide {
  image: MediaItem;
  title: string;
  description: string;
}

export class NewsBlogsDTO {
  id: number;

  @ApiProperty()
  author: string;

  @ApiProperty()
  headline: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ enum: productType })
  @IsEnum(productType)
  type: productType;

  @ApiProperty({ enum: infoType })
  @IsEnum(infoType)
  infoType: infoType;

  @ApiProperty({ type: [Object] })
  slides: Slide[];

  @ApiProperty({ enum: status })
  @IsEnum(status)
  status: status;

  @ApiProperty()
  isPublished: boolean;

  @ApiProperty()
  issueDate: Date;

  @ApiProperty({ type: [MediaItem] })
  media: MediaItem[];

  created_at: Date;
  updated_at: Date;
  @ApiProperty()
  created_by: number;
  @ApiProperty()
  updated_by: number;
}
