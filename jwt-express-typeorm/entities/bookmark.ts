import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("bookmark",{schema:"cmnd_mydb" } )
@Index("hash",["hash",],{unique:true})
export class bookmark {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        length:32,
        name:"hash"
        })
    hash:string;
        

    @Column("text",{ 
        nullable:false,
        name:"url"
        })
    url:string;
        

    @Column("text",{ 
        nullable:false,
        name:"title"
        })
    title:string;
        

    @Column("text",{ 
        nullable:false,
        name:"favico"
        })
    favico:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"userid"
        })
    userid:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"status"
        })
    status:string;
        

    @Column("timestamp",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"CRUDSTAMP"
        })
    CRUDSTAMP:Date;
        
}
