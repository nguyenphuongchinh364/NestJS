// bookmark.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity'; // Import entity User

@Entity()
export class Bookmark {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @Column()
    link: string;

    @ManyToOne(() => User, user => user.bookmarks)
    user: User;
}
