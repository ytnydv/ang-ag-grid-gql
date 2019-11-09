import {
    BaseEntity, Column, Entity,
    Unique, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId
} from "typeorm";
import * as bcrypt from "bcryptjs";
import { Length, IsNotEmpty } from "class-validator";

@Entity()
@Unique(["userid"])
export class Users {

    @PrimaryGeneratedColumn({
        type: "mediumint",
        name: "id"
    })
    id: number;


    @Column("varchar", {
        nullable: false,
        name: "userid"
    })
    userid: string;

    @Column()
    @IsNotEmpty()
    role: string;


    @Column("varchar", {
        nullable: false,
        length: 15,
        name: "first_name"
    })
    first_name: string;


    @Column("varchar", {
        nullable: false,
        length: 30,
        name: "last_name"
    })
    last_name: string;


    @Column("varchar", {
        nullable: false,
        length: 6,
        name: "sex"
    })
    sex: string;


    @Column("varchar", {
        nullable: false,
        length: 40,
        name: "email"
    })
    email: string;


    @Column("varchar", {
        nullable: false,
        name: "password"
    })
    password: string;


    @Column("varchar", {
        nullable: false,
        name: "website"
    })
    website: string;


    @Column("text", {
        nullable: false,
        name: "avatar"
    })
    avatar: string;


    @Column("varchar", {
        nullable: false,
        length: 25,
        name: "dob"
    })
    dob: string;


    @Column("varchar", {
        nullable: false,
        length: 25,
        name: "country"
    })
    country: string;


    @Column("varchar", {
        nullable: false,
        length: 25,
        name: "state"
    })
    state: string;


    @Column("varchar", {
        nullable: false,
        length: 25,
        name: "city"
    })
    city: string;


    @Column("varchar", {
        nullable: false,
        length: 25,
        name: "pin"
    })
    pin: string;


    @Column("varchar", {
        nullable: false,
        length: 25,
        name: "contact"
    })
    contact: string;


    @Column("text", {
        nullable: false,
        name: "address"
    })
    address: string;


    @Column("varchar", {
        nullable: false,
        name: "profession"
    })
    profession: string;


    @Column("text", {
        nullable: false,
        name: "sec_que"
    })
    sec_que: string;


    @Column("text", {
        nullable: false,
        name: "sec_ans"
    })
    sec_ans: string;


    @Column("text", {
        nullable: false,
        name: "about_me"
    })
    about_me: string;


    @Column("datetime", {
        nullable: false,
        name: "registration_date"
    })
    registration_date: Date;


    @Column("timestamp", {
        nullable: false,
        default: () => "CURRENT_TIMESTAMP",
        name: "CRUDSTAMP"
    })
    CRUDSTAMP: Date;

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }

}
