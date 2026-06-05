import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { MediaItem } from "./homepage.dto";

@Entity("homepage")
export class EN_HomePage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "json", nullable: true })
  stats: { key: string; value: number; icon?: string }[];

  @Column({ type: "json" })
  media: MediaItem[];

  @Column({ type: "varchar", length: 500, nullable: true, default: null })
  footer_bg_image: string;

  @Column({ type: "varchar", length: 500, nullable: true, default: null })
  aboutus_bg_image: string;

  @Column({ type: "varchar", length: 500, nullable: true, default: null })
  services_bg_image: string;

  @Column({ type: "varchar", length: 500, nullable: true, default: null })
  projects_bg_image: string;

  @Column({ type: "varchar", length: 500, nullable: true, default: null })
  news_blogs_bg_image: string;

  @Column({ type: "varchar", length: 500, nullable: true, default: null })
  home_contact_bg_image: string;

  @CreateDateColumn({ type: "datetime" })
  created_at: Date;

  @UpdateDateColumn({ type: "datetime" })
  updated_at: Date;

  @Column({ default: null, nullable: true })
  created_by: number;

  @Column({ default: null, nullable: true })
  updated_by: number;
}
