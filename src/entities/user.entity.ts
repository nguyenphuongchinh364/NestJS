// user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Bookmark } from './bookmark.entity'; // Import entity Bookmark nếu cần

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @Column({ unique: true })
    email: string;

    @Column()
    hash: string;

    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @OneToMany(() => Bookmark, bookmark => bookmark.user)
    bookmarks: Bookmark[];
}
