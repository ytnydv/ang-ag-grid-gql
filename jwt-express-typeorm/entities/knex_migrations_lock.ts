import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("knex_migrations_lock",{schema:"cmnd_mydb" } )
export class knex_migrations_lock {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"index"
        })
    index:number;
        

    @Column("int",{ 
        nullable:true,
        name:"is_locked"
        })
    is_locked:number | null;
        
}
