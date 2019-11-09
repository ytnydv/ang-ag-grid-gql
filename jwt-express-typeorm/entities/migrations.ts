import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("migrations",{schema:"cmnd_mydb" } )
export class migrations {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("bigint",{ 
        nullable:false,
        name:"timestamp"
        })
    timestamp:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        
}
