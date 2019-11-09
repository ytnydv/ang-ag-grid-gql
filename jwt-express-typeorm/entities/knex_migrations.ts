import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("knex_migrations",{schema:"cmnd_mydb" } )
export class knex_migrations {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"name"
        })
    name:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"batch"
        })
    batch:number | null;
        

    @Column("timestamp",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"migration_time"
        })
    migration_time:Date;
        
}
