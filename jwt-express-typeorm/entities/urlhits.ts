import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("urlhits",{schema:"cmnd_mydb" } )
export class urlhits {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"hash"
        })
    hash:string;
        

    @Column("text",{ 
        nullable:false,
        name:"url"
        })
    url:string;
        

    @Column("timestamp",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"hitStamp"
        })
    hitStamp:Date;
        
}
