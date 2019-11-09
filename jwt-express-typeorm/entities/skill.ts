import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {candidate_skills} from "./candidate_skills";


@Entity("skill",{schema:"cmnd_mydb" } )
export class skill {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"name"
        })
    name:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"type"
        })
    type:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:1000,
        name:"description"
        })
    description:string | null;
        

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
        

   
    @OneToMany(type=>candidate_skills, candidate_skills=>candidate_skills.skill,{ onDelete: 'CASCADE' ,onUpdate: 'RESTRICT' })
    candidateSkillss:candidate_skills[];
    
}
