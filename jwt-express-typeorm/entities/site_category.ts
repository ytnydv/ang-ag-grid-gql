import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("site_category",{schema:"cmnd_mydb" } )
export class site_category {

    @Column("int",{ 
        nullable:true,
        name:"site_id"
        })
    site_id:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"category_id"
        })
    category_id:number | null;
        
}
