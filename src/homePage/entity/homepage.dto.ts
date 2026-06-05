import { ApiProperty } from "@nestjs/swagger";

export class MediaItem {
  @ApiProperty()
  media_url: string;

  @ApiProperty()
  media_type: string;
}
export class StatItem {
  @ApiProperty()
  key: string;

  @ApiProperty()
  value: number;

  @ApiProperty({ required: false })
  icon?: string;
}
export class HomePageDTO {
  id: number;

  @ApiProperty({ type: [StatItem] })
  stats: StatItem[];

  @ApiProperty({ type: [MediaItem] })
  media: MediaItem[];

  @ApiProperty({ required: false })
  footer_bg_image?: string;

  @ApiProperty({ required: false })
  aboutus_bg_image?: string;

  @ApiProperty({ required: false })
  services_bg_image?: string;

  @ApiProperty({ required: false })
  projects_bg_image?: string;

  @ApiProperty({ required: false })
  news_blogs_bg_image?: string;

  @ApiProperty({ required: false })
  home_contact_bg_image?: string;

  created_at: Date;
  updated_at: Date;

  @ApiProperty()
  created_by: number;

  @ApiProperty()
  updated_by: number;
}
