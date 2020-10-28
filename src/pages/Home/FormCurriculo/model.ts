import userImage from '../../../assets/images/userImage.png';

export interface CurriculoData {
  // Step 1 - Informações de contato
  // Qual a melhor maneira dos recrutadores entrarem em contato com você?
  // Sugerimos você preencher seu email e telefone.
  nome: string;
  sobrenome: string;
  profissao: string;
  cidade: string;
  estado: string;
  linkedin: string;
  rua: string;
  bairro: string;
  telefone: string;
  email: string;
  foto: string;

  // Step 2 - Experiências Anteriores
  // Os recrutadores analisam seu resumo por seis segundos para decidir se você bate com a vaga.
  // Sugerimos você colocar os pontos principais para dar uma boa impressão.
  empregos: Array<Emprego>;

  // Step 3 - Educação
  // Inclua todos os cursos, mesmo que ainda esteja fazendo.
  cursos: Array<Curso>;

  // Step 4 - Habilidades
  // Recrutadores analisam as habilidades por palavras-chave.
  // Exemplos: MS-Office, Soluções de problemas, Organização.
  habilidades: Array<Habilidade>;

  // Step 5 - Resumo
  // Um breve resumo sobre você.
  // O resumo mostra aos empregadores que você está preparado para o trabalho.
  resumo: string;

  /** @TODO */
  // Possíveis resumos para ajudar o usuário:
  // [Job Title] with over [Number] years of successful experience in [Skill] and [Skill]. Recognized consistently for performance excellence and contributions to success in [Industry] industry. Strengths in [Skill] and [Skill] backed by training in [Area of study].
  // Experienced [Job Title] with over [Number] years of experience in [Industry]. Excellent reputation for resolving problems, improving customer satisfaction, and driving overall operational improvements. Consistently saved costs while increasing profits.
  // Senior [Job Title] and outstanding performer in [Skill] and [Skill] within [Industry]. Proven success in leadership, operational excellence and organizational development with keen understanding of elements of [Type] business. Recognized for inspiring management team members to excel and encouraging creative work environments.
  // Enthusiastic [Job Title] eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of [Task] and [Task] and training in [Skill]. Motivated to learn, grow and excel in [Industry].
  // Multi-talented [Job Title] consistently rewarded for success in planning and operational improvements. Experience in policy development and staff management procedures positively impacting overall morale and productivity.
}

export interface Emprego {
  id: number;
  empresa: string;
  cargo: string;
  cidade: string;
  estado: string;
  inicio: Date;
  fim: Date;
  atualmente: boolean;
  descricao: string;
}

export interface Curso {
  id: number;
  escola: string;
  cidade: string;
  curso: string;
  inicio: Date;
  fim: Date;
  atualmente: boolean;
}

export interface Habilidade {
  id: number;
  category: string;
  children: HabilidadeChild[];
}

export interface HabilidadeChild {
  id: number;
  habilidade: string;
  nivel: number;
}

export const curriculoDefaultData: CurriculoData = {
  nome: '',
  sobrenome: '',
  profissao: '',
  cidade: '',
  estado: '',
  linkedin: '',
  rua:  '',
  bairro:  '',
  telefone: '',
  email: '',
  foto: userImage,
  empregos: [],
  cursos: [],
  habilidades: [
    {
      id: -3,
      category: 'Profissionais',
      children: []
    },
    {
      id: -2,
      category: 'Pessoais',
      children: []
    },
    {
      id: -1,
      category: 'Idiomas',
      children: []
    }
  ],
  resumo: '',
};