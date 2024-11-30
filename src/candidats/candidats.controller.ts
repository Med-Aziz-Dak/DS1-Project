import { Body, Controller, Get, Param, ParseIntPipe, Post, Delete, Put } from '@nestjs/common';
import { CandidatsService } from './candidats.service';

@Controller('candidats')
export class CandidatsController {
    constructor(private readonly candidatsService : CandidatsService){}

    @Get()
    getAll(){
        return this.candidatsService.getAll();
    }

    @Get('/search/:id')
    getById(@Param('id') id: string | number){
        return this.candidatsService.getById(id);
    }

    @Post('add')
    AddCandidat(@Body() body){
        return this.candidatsService.AddCandidat(body);
    }

    @Delete('/delete/:id')
    DeleteCandidat(@Param('id') id: string | number){
        return this.candidatsService.DeleteCandidat(id);
    }

    @Put('/edit/:id')
    UpdateCandidat(@Param('id') id: string | number, @Body() body){
        return this.candidatsService.UpdateCandidats(id, body);
    }
}
