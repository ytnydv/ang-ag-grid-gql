import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {candidate_skills} from "./candidate_skills";


@Entity("candidate",{schema:"cmnd_mydb" } )
export class candidate {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"firstName"
        })
    firstName:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"lastName"
        })
    lastName:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:1000,
        name:"description"
        })
    description:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"experience"
        })
    experience:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:10,
        name:"contactNumber"
        })
    contactNumber:string | null;
        

    @Column("json",{ 
        nullable:true,
        name:"address"
        })
    address:Object | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"createdAt"
        })
    createdAt:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"updatedAt"
        })
    updatedAt:string;
        

   
    @OneToMany(type=>candidate_skills, candidate_skills=>candidate_skills.candidate,{ onDelete: 'CASCADE' ,onUpdate: 'RESTRICT' })
    candidateSkillss:candidate_skills[];
    
}
