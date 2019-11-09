import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {candidate} from "./candidate";
import {skill} from "./skill";


@Entity("candidate_skills",{schema:"cmnd_mydb" } )
@Index("candidate_skills_candidateid_index",["candidate",])
@Index("candidate_skills_skillid_index",["skill",])
export class candidate_skills {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>candidate, candidate=>candidate.candidateSkillss,{ onDelete: 'CASCADE',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'candidateId'})
    candidate:candidate | null;


   
    @ManyToOne(type=>skill, skill=>skill.candidateSkillss,{ onDelete: 'CASCADE',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'skillId'})
    skill:skill | null;

}
