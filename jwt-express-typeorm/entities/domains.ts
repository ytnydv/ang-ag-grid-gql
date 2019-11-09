import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("domains",{schema:"cmnd_mydb" } )
export class domains {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"domain_id"
        })
    domain_id:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"domain"
        })
    domain:string | null;
        
}
