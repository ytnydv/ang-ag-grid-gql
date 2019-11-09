import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("query_log",{schema:"cmnd_mydb" } )
@Index("query_key",["query",])
export class query_log {

    @Column("varchar",{ 
        nullable:true,
        name:"query"
        })
    query:string | null;
        

    @Column("timestamp",{ 
        nullable:false,
        default: () => "'CURRENT_TIMESTAMP(6)'",
        name:"time"
        })
    time:Date;
        

    @Column("float",{ 
        nullable:true,
        name:"elapsed"
        })
    elapsed:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"results"
        })
    results:number | null;
        
}
