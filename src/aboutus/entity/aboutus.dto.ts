import { ApiProperty } from "@nestjs/swagger";
import { achievementType, status } from "../../global/system.enums";
import { IsEnum } from "class-validator";

export class MediaItem {
  @ApiProperty()
  media_url: string;

  @ApiProperty()
  media_type: string;
}

export class Achievement {
  @ApiProperty()
  title: string;

  @ApiProperty()
  year: number;

  @ApiProperty()
  image: MediaItem;
}

export class WhyChooseUs {
  @ApiProperty()
  key: string;

  @ApiProperty()
  value: string;

  @ApiProperty()
  icon: string;
}

export class AboutusDTO {
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ type: Date })
  date: Date;

  @ApiProperty({ type: [MediaItem] })
  media: MediaItem[];

  @ApiProperty()
  description: string;

  @ApiProperty()
  designation: string;

  @ApiProperty()
  businessDescription: string;

  @ApiProperty({ type: [MediaItem] })
  image: MediaItem[];

  @ApiProperty()
  mission: string;

  @ApiProperty()
  vision: string;

  @ApiProperty()
  ourValues: string;

  @ApiProperty({ type: [WhyChooseUs] })
  whyChooseUs: WhyChooseUs[];

  @ApiProperty()
  bannerTitle: string;

  @ApiProperty()
  bannerDescription: string;

  @ApiProperty({ type: [Achievement] })
  achievements: Achievement[];

  @ApiProperty({ enum: achievementType })
  @IsEnum(achievementType)
  type: achievementType;

  @ApiProperty({ enum: status })
  @IsEnum(status)
  status: status;

  created_at: Date;
  updated_at: Date;
  @ApiProperty()
  created_by: number;
  @ApiProperty()
  updated_by: number;
}
