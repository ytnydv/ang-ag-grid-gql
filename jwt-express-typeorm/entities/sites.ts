import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("sites",{schema:"cmnd_mydb" } )
export class sites {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"site_id"
        })
    site_id:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"url"
        })
    url:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"title"
        })
    title:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"short_desc"
        })
    short_desc:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"indexdate"
        })
    indexdate:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'2'",
        name:"spider_depth"
        })
    spider_depth:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"required"
        })
    required:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"disallowed"
        })
    disallowed:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"can_leave_domain"
        })
    can_leave_domain:boolean | null;
        
}
