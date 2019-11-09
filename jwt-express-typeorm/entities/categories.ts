import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("categories",{schema:"cmnd_mydb" } )
export class categories {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"category_id"
        })
    category_id:number;
        

    @Column("text",{ 
        nullable:true,
        name:"category"
        })
    category:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"parent_num"
        })
    parent_num:number | null;
        
}
