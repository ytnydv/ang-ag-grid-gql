import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("url2crawl",{schema:"cmnd_mydb" } )
export class url2crawl {

    @Column("double",{ 
        nullable:false,
        precision:255,
        scale:0,
        name:"rank"
        })
    rank:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"url"
        })
    url:string;
        

    @Column("varchar",{ 
        nullable:false,
        default: () => "'0'",
        name:"crawled"
        })
    crawled:string;
        
}
