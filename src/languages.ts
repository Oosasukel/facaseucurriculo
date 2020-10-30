export const defaultLanguage = 'pt';

interface Messages {
  [language: string]: Labels;
}

export interface Labels {
  HomeTitle: string;

  ContactTitle: string;

  FooterAuthor: string;
  FooterDonate: string;

  NavbarHome: string;
  NavbarContact: string;

  CurriculoSkillsTitle: string;
  CurriculoExperiencesTitle: string;
  CurriculoEducationTitle: string;
  CurriculoCurrent: string;

  FormContatoTitle: string;
  FormContatoMessage1: string;
  FormContatoMessage2: string;
  FormContatoFirstName: string;
  FormContatoLastName: string;
  FormContatoJobTitle: string;
  FormContatoCity: string;
  FormContatoDistrict: string;
  FormContatoPhone: string;
  FormContatoEmail: string;
  FormContatoChangeImage: string;
  FormContatoUF: string;
  FormContatoStreet: string;

  FormDownloadTitle: string;
  FormDownloadMessage: string;

  FormFeedbackThank: string;
  FormFeedback: string;
  FormFeedbackMessage: string;

  FormEducacaoTitle: string;
  FormEducacaoMessage: string;
  FormEducacaoCurso: string;
  FormEducacaoEscola: string;
  FormEducacaoCidade: string;
  FormEducacaoAtualmente: string;
  FormEducacaoStart: string;
  FormEducacaoEnd: string;

  FormExperienciaTitle: string;
  FormExperienciaMessage1: string;
  FormExperienciaMessage2: string;
  FormExperienciaEmpresa: string;
  FormExperienciaCargo: string;
  FormExperienciaCidade: string;
  FormExperienciaEstado: string;
  FormExperienciaAtualmente: string;
  FormExperienciaDescricao: string;

  FormHabilidadeTitle: string;
  FormHabilidadeMessage1: string;
  FormHabilidadeMessage2: string;
  FormHabilidadeHabilidade: string;
  FormHabilidadeNivel: string;

  FormResumoTitle: string;
  FormResumoMessage1: string;
  FormResumoMessage2: string;
  FormResumoResumo: string;

  Loading: string;

  Send: string;

  FormNext: string;
  FormPrevious: string;
  FormFinish: string;
}

export const messages: Messages = {
  pt: {
    HomeTitle: 'Faça seu currículo',
    ContactTitle: 'Contato',
    FooterAuthor: 'Autor',
    FooterDonate: 'Doar',
    NavbarHome: 'Início',
    NavbarContact: 'Contato',

    CurriculoSkillsTitle: 'Habilidades',
    CurriculoExperiencesTitle: 'Experiências',
    CurriculoEducationTitle: 'Formação',
    CurriculoCurrent: 'Atualmente',

    FormContatoTitle: 'Informações de contato',
    FormContatoMessage1: 'Qual a melhor maneira dos recrutadores entrarem em contato com você?',
    FormContatoMessage2: 'Não é necessário preencher todos os campos, mas sugerimos você preencher seu email e telefone.',
    FormContatoFirstName: 'Nome',
    FormContatoLastName: 'Sobrenome',
    FormContatoJobTitle: 'Profissão',
    FormContatoCity: 'Cidade',
    FormContatoDistrict: 'Bairro',
    FormContatoPhone: 'Telefone',
    FormContatoEmail: 'Email',
    FormContatoChangeImage: 'Alterar foto',
    FormContatoUF: 'UF',
    FormContatoStreet: 'Rua',

    FormDownloadTitle: 'Currículo pronto!',
    FormDownloadMessage: 'Escolha em qual formato deseja fazer o download.',

    FormFeedbackThank: 'Obrigado',
    FormFeedback: 'O que você achou da ferramenta?',
    FormFeedbackMessage: 'Mensagem...',

    FormEducacaoTitle: 'Educação',
    FormEducacaoMessage: 'Inclua todos os cursos, mesmo que ainda esteja fazendo.',
    FormEducacaoCurso: 'Curso',
    FormEducacaoEscola: 'Escola',
    FormEducacaoCidade: 'Cidade',
    FormEducacaoAtualmente: 'Atualmente',
    FormEducacaoStart: 'Início',
    FormEducacaoEnd: 'Fim',

    FormExperienciaTitle: 'Experiências Anteriores',
    FormExperienciaMessage1: 'Os recrutadores analisam seu resumo por seis segundos para decidir se você bate com a vaga.',
    FormExperienciaMessage2: 'Sugerimos você colocar os pontos principais para dar uma boa impressão.',
    FormExperienciaEmpresa: 'Empresa',
    FormExperienciaCargo: 'Cargo',
    FormExperienciaCidade: 'Cidade',
    FormExperienciaEstado: 'UF',
    FormExperienciaAtualmente: 'Atualmente',
    FormExperienciaDescricao: 'Descricao',

    FormHabilidadeTitle: 'Habilidades',
    FormHabilidadeMessage1: 'Recrutadores analisam as habilidades por palavras-chave.',
    FormHabilidadeMessage2: 'Exemplos: MS-Office, Soluções de problemas, Organização.',
    FormHabilidadeHabilidade: 'Habilidade',
    FormHabilidadeNivel: 'Nível',

    FormResumoTitle: 'Descrição',
    FormResumoMessage1: 'Um breve resumo sobre você.',
    FormResumoMessage2: 'O resumo mostra aos empregadores que você está preparado para o trabalho.',
    FormResumoResumo: 'Uma breve descrição...',

    Loading: 'Carregando',

    Send: 'Enviar',

    FormNext: 'Próximo',
    FormPrevious: 'Voltar',
    FormFinish: 'Concluir',
  },
  en: {
    HomeTitle: 'Do your curriculum',
    ContactTitle: 'Contact',
    FooterAuthor: 'Author',
    FooterDonate: 'Donate',
    NavbarHome: 'Home',
    NavbarContact: 'Contact',

    CurriculoSkillsTitle: 'Skills',
    CurriculoExperiencesTitle: 'Experiences',
    CurriculoEducationTitle: 'Education',
    CurriculoCurrent: 'Current',

    FormContatoTitle: 'Contact Information',
    FormContatoMessage1: 'What is the best way to recrutadores entrarem em contact with you?',
    FormContatoMessage2: 'Not is necessary preencher todos os campos, mas sugerimos você preencher seu email e telefone.',
    FormContatoFirstName: 'Name',
    FormContatoLastName: 'Lastname',
    FormContatoJobTitle: 'Job',
    FormContatoCity: 'City',
    FormContatoDistrict: 'District',
    FormContatoPhone: 'Phone',
    FormContatoEmail: 'Email',
    FormContatoChangeImage: 'Change photo',
    FormContatoUF: 'UF',
    FormContatoStreet: 'Street',

    FormDownloadTitle: 'Curriculum completed!',
    FormDownloadMessage: 'Choose what formato deseja do the download.',

    FormFeedbackThank: 'Thank you',
    FormFeedback: 'What did you think of the tool?',
    FormFeedbackMessage: 'Message...',

    FormEducacaoTitle: 'Education',
    FormEducacaoMessage: 'Include all courses, even if you still doing.',
    FormEducacaoCurso: 'Course',
    FormEducacaoEscola: 'School',
    FormEducacaoCidade: 'City',
    FormEducacaoAtualmente: 'Current',
    FormEducacaoStart: 'Start',
    FormEducacaoEnd: 'End',

    FormExperienciaTitle: 'Previous Exp',
    FormExperienciaMessage1: 'Recruters see your curriculum about six seconds to decide something.',
    FormExperienciaMessage2: 'We sugest you put the main frames.',
    FormExperienciaEmpresa: 'Empresa em inglês',
    FormExperienciaCargo: 'Cargo em inglês',
    FormExperienciaCidade: 'City',
    FormExperienciaEstado: 'UF',
    FormExperienciaAtualmente: 'Current',
    FormExperienciaDescricao: 'Description',

    FormHabilidadeTitle: 'Habilidades',
    FormHabilidadeMessage1: 'Recrutadores analisam as habilidades por palavras-chave.',
    FormHabilidadeMessage2: 'Exemplos: MS-Office, Soluções de problemas, Organização.',
    FormHabilidadeHabilidade: 'Habilidade',
    FormHabilidadeNivel: 'Nível',

    FormResumoTitle: 'Description',
    FormResumoMessage1: 'A breve resume about you.',
    FormResumoMessage2: 'O resumo mostra aos empregadores que você está preparado para o trabalho.',
    FormResumoResumo: 'Uma breve descrição...',

    Loading: 'Loading',

    Send: 'Send',

    FormNext: 'Next',
    FormPrevious: 'Previous',
    FormFinish: 'Finish',
  }
}