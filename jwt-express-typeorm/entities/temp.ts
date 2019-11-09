import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("temp",{schema:"cmnd_mydb" } )
export class temp {

    @Column("varchar",{ 
        nullable:true,
        name:"link"
        })
    link:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"level"
        })
    level:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:32,
        name:"id"
        })
    id:string | null;
        
}
