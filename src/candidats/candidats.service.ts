import { Injectable, NotFoundException } from '@nestjs/common';
import { runInThisContext } from 'vm';

type skill =string[];
    
type Candidat = {
    id: number| string; 
    name:string; 
    email:string; 
    skills:skill; 
    status: "En attente" | "En entretien" | "Rejeté" | "Accepté"; 
    recruited: Boolean; 
    recruitmentYear?:number
};

@Injectable()
export class CandidatsService {
    private candidats : Candidat[] = [];

    AddCandidat(candidat: Candidat){
        const candidatExit = this.candidats.find(p => p.id === candidat.id);

        if(candidatExit){
            throw new NotFoundException(`Candidat With ID : ${candidat.id} Already Exists`);
        }
        else{
            this.candidats.push(candidat);
            return { message: `Candidat with ID ${candidat.id} added successfully`, candidat };
        }
    }

    getAll(){
        return this.candidats;
    }

    getById(id :string | number){
        const OneCandidat = this.candidats.find(p => p.id ===id);

        if(!OneCandidat){
            throw new NotFoundException(`Candidat with ID : ${id} Not Found`);
        }
        else{
            return OneCandidat;
        }
    }

    DeleteCandidat(id :string | number){
        const CandidatIndex = this.candidats.findIndex((p) => p.id === id);

        if(CandidatIndex == -1){
            throw new NotFoundException(`Candidats With ID : ${id} Not Found`);
        }
        else{
            this.candidats.splice(CandidatIndex, 1);
            return { message: `Candidat with ID ${id} deleted successfully`};
        }
    }

    UpdateCandidats(id: string | number, 
        CandidatData: Partial<{name:string | number, 
        email:string, 
        skills:skill, 
        status: "En attente" | "En entretien" | "Rejeté" | "Accepté", 
        recruited: Boolean, 
        recruitmentYear?:number}>){
        let candidatUpdate = this.candidats.find(p => p.id ===id);

        if(!candidatUpdate){
            throw new NotFoundException(`Candidat with ID : ${id} Not Found`);
        }
        else{
            Object.assign(candidatUpdate, CandidatData);
            return candidatUpdate;
        }
    }
}
