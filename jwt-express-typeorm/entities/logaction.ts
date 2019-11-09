import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("logaction",{schema:"cmnd_mydb" } )
export class logaction {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"logid"
        })
    logid:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"userid"
        })
    userid:string;
        

    @Column("text",{ 
        nullable:false,
        name:"action"
        })
    action:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"result"
        })
    result:string;
        

    @Column("text",{ 
        nullable:false,
        name:"logUrl"
        })
    logUrl:string;
        

    @Column("timestamp",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"CRUDSTAMP"
        })
    CRUDSTAMP:Date;
        
}
