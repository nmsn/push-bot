import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EntityModel } from '@midwayjs/orm';
import { RSSHubItem } from './rsshubItem';

@EntityModel()
export class RSSHubRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  lastBuildDate: Date;

  @Column()
  views: number;

  @Column()
  isPublished: boolean;

  @OneToMany(() => RSSHubItem, item => item.record)
  items: RSSHubItem;
}
