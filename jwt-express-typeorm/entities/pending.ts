import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("pending",{schema:"cmnd_mydb" } )
export class pending {

    @Column("int",{ 
        nullable:true,
        name:"site_id"
        })
    site_id:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:32,
        name:"temp_id"
        })
    temp_id:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"level"
        })
    level:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"count"
        })
    count:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"num"
        })
    num:number | null;
        
}
