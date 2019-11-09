import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("link_keyword0",{schema:"cmnd_mydb" } )
@Index("linkid",["link_id",])
@Index("keyid",["keyword_id",])
export class link_keyword0 {

    @Column("int",{ 
        nullable:false,
        name:"link_id"
        })
    link_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"keyword_id"
        })
    keyword_id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"weight"
        })
    weight:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"domain"
        })
    domain:number | null;
        
}
