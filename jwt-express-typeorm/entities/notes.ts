import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("notes",{schema:"cmnd_mydb" } )
export class notes {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"noteId"
        })
    noteId:number;
        

    @Column("mediumtext",{ 
        nullable:false,
        name:"hash"
        })
    hash:string;
        

    @Column("text",{ 
        nullable:false,
        name:"noteTitle"
        })
    noteTitle:string;
        

    @Column("text",{ 
        nullable:false,
        name:"noteUrl"
        })
    noteUrl:string;
        

    @Column("text",{ 
        nullable:false,
        name:"noteContent"
        })
    noteContent:string;
        

    @Column("timestamp",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"CRUDSTAMP"
        })
    CRUDSTAMP:Date;
        
}
