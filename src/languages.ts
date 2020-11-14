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

  CurriculoPersonalDataTitle: string;
  CurriculoSkillsTitle: string;
  CurriculoExperiencesTitle: string;
  CurriculoEducationTitle: string;
  CurriculoCurrent: string;
  CurriculoBirthdayTitle: string;
  CurriculoContactTitle: string;
  CurriculoAddressTitle: string;
  CurriculoPersonalDescriptionTitle: string;
  CurriculoLanguageLevels: {
    Basic: string;
    Intermediate: string;
    Advanced: string;
    Fluent: string;
  }

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

  PortugueseLabel: string;
  EnglishLabel: string;
}

export const messages: Messages = {
  pt: {
    HomeTitle: 'Faça seu currículo',
    ContactTitle: 'Contato',
    FooterAuthor: 'Autor',
    FooterDonate: 'Doar',
    NavbarHome: 'Início',
    NavbarContact: 'Contato',

    CurriculoPersonalDataTitle: 'Dados Pessoais',
    CurriculoSkillsTitle: 'Habilidades',
    CurriculoExperiencesTitle: 'Experiências',
    CurriculoEducationTitle: 'Formação',
    CurriculoCurrent: 'Atualmente',
    CurriculoBirthdayTitle: 'Data de Nascimento',
    CurriculoContactTitle: 'Contato',
    CurriculoAddressTitle: 'Endereço',
    CurriculoPersonalDescriptionTitle: 'Descrição Pessoal',
    CurriculoLanguageLevels: {
      Basic: 'Básico',
      Intermediate: 'Intermediário',
      Advanced: 'Avançado',
      Fluent: 'Fluente',
    },

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

    PortugueseLabel: 'Português',
    EnglishLabel: 'Inglês',
  },
  en: {
    HomeTitle: 'Make your CV',
    ContactTitle: 'Contact',
    FooterAuthor: 'Author',
    FooterDonate: 'Donate',
    NavbarHome: 'Home',
    NavbarContact: 'Contact',

    CurriculoPersonalDataTitle: 'Personal Data',
    CurriculoSkillsTitle: 'Skills',
    CurriculoExperiencesTitle: 'Experiences',
    CurriculoEducationTitle: 'Education',
    CurriculoCurrent: 'Current',
    CurriculoBirthdayTitle: 'Date of Birth',
    CurriculoContactTitle: 'Contact',
    CurriculoAddressTitle: 'Address',
    CurriculoPersonalDescriptionTitle: 'Summary',
    CurriculoLanguageLevels: {
      Basic: 'Basic',
      Intermediate: 'Intermediate',
      Advanced: 'Advanced',
      Fluent: 'Fluent',
    },

    FormContatoTitle: 'Contact Information',
    FormContatoMessage1: 'What\'s the best way for employers to contact you?',
    FormContatoMessage2: 'It is not necessary to complete all fields, but we suggest you to include an email and phone number.',
    FormContatoFirstName: 'Name',
    FormContatoLastName: 'Last Name',
    FormContatoJobTitle: 'Profession',
    FormContatoCity: 'City',
    FormContatoDistrict: 'District',
    FormContatoPhone: 'Phone',
    FormContatoEmail: 'Email',
    FormContatoChangeImage: 'Change photo',
    FormContatoUF: 'State',
    FormContatoStreet: 'Street',

    FormDownloadTitle: 'Curriculum completed!',
    FormDownloadMessage: 'Choose the format you want to download.',

    FormFeedbackThank: 'Thank you',
    FormFeedback: 'Rate this tool',
    FormFeedbackMessage: 'Message...',

    FormEducacaoTitle: 'Education',
    FormEducacaoMessage: 'Include every education, even if you\'re still there or didn\'t graduate.',
    FormEducacaoCurso: 'Course',
    FormEducacaoEscola: 'School',
    FormEducacaoCidade: 'City',
    FormEducacaoAtualmente: 'Current',
    FormEducacaoStart: 'Start',
    FormEducacaoEnd: 'End',

    FormExperienciaTitle: 'Work History',
    FormExperienciaMessage1: 'Employers scan your resume for six seconds to decide if you match.',
    FormExperienciaMessage2: 'We suggest you to put the main ones, to make a good impression.',
    FormExperienciaEmpresa: 'Company',
    FormExperienciaCargo: 'Job Title',
    FormExperienciaCidade: 'City',
    FormExperienciaEstado: 'State',
    FormExperienciaAtualmente: 'Current',
    FormExperienciaDescricao: 'Description',

    FormHabilidadeTitle: 'Skills',
    FormHabilidadeMessage1: 'Employers scan skills for relevant keywords.',
    FormHabilidadeMessage2: 'Examples: MS-Office, Troubleshooting, Organization.',
    FormHabilidadeHabilidade: 'Skill',
    FormHabilidadeNivel: 'Level',

    FormResumoTitle: 'Summary',
    FormResumoMessage1: 'A brief summary of you.',
    FormResumoMessage2: 'Your summary shows employers you\'re right for their job.',
    FormResumoResumo: 'A brief summary...',

    Loading: 'Loading',

    Send: 'Send',

    FormNext: 'Next',
    FormPrevious: 'Previous',
    FormFinish: 'Finish',

    PortugueseLabel: 'Portuguese',
    EnglishLabel: 'English',
  }
}