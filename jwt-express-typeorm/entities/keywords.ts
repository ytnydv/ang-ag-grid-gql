import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("keywords",{schema:"cmnd_mydb" } )
@Index("kw",["keyword",],{unique:true})
@Index("keyword",["keyword",])
export class keywords {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"keyword_id"
        })
    keyword_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        length:30,
        name:"keyword"
        })
    keyword:string;
        
}
