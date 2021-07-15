import { Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { EntityModel } from '@midwayjs/orm';
import { RSSHubRecord } from './rsshubRecord';

@EntityModel()
export class RSSHubItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  pubDate: Date;

  @Column()
  guid: number;

  @Column()
  link: boolean;

  @Column()
  author: string;

  @ManyToOne(() => RSSHubRecord, record => record.items)
  record: RSSHubRecord;
}
