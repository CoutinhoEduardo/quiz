import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnswerEntity } from 'src/typeorm/entities/answer.entity';
import { HttpStatus, HttpException } from '@nestjs/common';
import { FilteredAnswerDto } from '../../dtos/filteredAnswer.dto';

@Injectable()
export class GetAnswerService {

  constructor(@InjectRepository(AnswerEntity) private readonly answerRepository: Repository<AnswerEntity>) { }

  async getAnswerById(id: string) {
    try {
      const answer = await this.answerRepository.findOne({
        where: { id },
        relations: ['user'],
      });

      if (!answer) {
        throw new HttpException(
          'Resposta não encontrada',
          HttpStatus.NOT_FOUND,
        );
      }

      return answer;
    } catch (err) {
      throw new HttpException(
        'Erro ao buscar resposta',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  getAnswers() {
    return this.answerRepository.find();
  }

  filteredAnswers(filteredAnswers: FilteredAnswerDto) {
    const query = this.answerRepository.createQueryBuilder('answer');

    if (filteredAnswers.idQuiz) {
      query.andWhere('answer.idQuiz = :quiz_id', { quiz_id: filteredAnswers.idQuiz });
    }

    if (filteredAnswers.idDepartamento) {
      query.andWhere('answer.idDepartamento = :departamento_id', { departamento_id: filteredAnswers.idDepartamento });
    }

    if (filteredAnswers.idEmpresa) {
      query.andWhere('answer.idEmpresa = :empresa_id', { empresa_id: filteredAnswers.idEmpresa });
    }

    return query.getMany();
  }
}
