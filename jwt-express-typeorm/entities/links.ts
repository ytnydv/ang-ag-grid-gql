import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("links",{schema:"cmnd_mydb" } )
@Index("url",["url",])
@Index("md5key",["md5sum",])
export class links {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"link_id"
        })
    link_id:number;
        

    @Column("int",{ 
        nullable:true,
        name:"site_id"
        })
    site_id:number | null;
        

    @Column("varchar",{ 
        nullable:false,
        name:"url"
        })
    url:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:200,
        name:"title"
        })
    title:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"description"
        })
    description:string | null;
        

    @Column("mediumtext",{ 
        nullable:true,
        name:"fulltxt"
        })
    fulltxt:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"indexdate"
        })
    indexdate:string | null;
        

    @Column("float",{ 
        nullable:true,
        name:"size"
        })
    size:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:32,
        name:"md5sum"
        })
    md5sum:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"visible"
        })
    visible:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"level"
        })
    level:number | null;
        
}
