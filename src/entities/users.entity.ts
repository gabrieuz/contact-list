import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
} from "typeorm";
import { Exclude } from "class-transformer";
import { Contact } from "./contacts.entity";

@Entity("users")
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	email: string;

	@Column({ length: 150 })
	@Exclude()
	password: string;

	@Column()
	fullName: string;

	@Column()
	phone: string;

	@Column()
	isAdm: boolean;

	@Column("boolean", { default: true })
	isActive: boolean;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@OneToMany(() => Contact, (contact) => contact.user)
	contacts: Contact[];
}

export default User;
