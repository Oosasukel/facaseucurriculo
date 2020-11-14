import React from 'react';
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';

import styles from './styles';

import { CurriculoProps, languagesDateFormat, months } from '../Curriculo1';
import { dateFormat } from '../../../../../utils/dateFormat';

const Curriculo2: React.FC<CurriculoProps> = ({
  curriculoData,
  labels,
  language,
}) => {
  const getLanguageLevel = (nivel: number) => {
    if (nivel < 50) {
      return labels.CurriculoLanguageLevels.Basic;
    } else if (nivel < 80) {
      return labels.CurriculoLanguageLevels.Intermediate;
    } else if (nivel < 95) {
      return labels.CurriculoLanguageLevels.Advanced;
    } else {
      return labels.CurriculoLanguageLevels.Fluent;
    }
  };

  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.marginTop} fixed />
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>
                {`${curriculoData.nome
                  .trim()
                  .toUpperCase()} ${curriculoData.sobrenome
                  .trim()
                  .toUpperCase()}`}
              </Text>
              {curriculoData.profissao !== '' && (
                <Text style={styles.jobTitle}>
                  {curriculoData.profissao.trim()}
                </Text>
              )}
            </View>
            <View style={styles.photoContainer}>
              <Image source={curriculoData.foto} style={styles.photo} />
            </View>
          </View>
          <View style={styles.headerDivider} />
          <View style={styles.lanesContainer}>
            <View style={styles.lane1}>
              {curriculoData.resumo !== '' && (
                <>
                  <Text style={styles.infoTitle}>
                    {labels.CurriculoPersonalDescriptionTitle.toUpperCase()}
                  </Text>
                  <View style={styles.softDivider} />
                  <Text style={styles.descriptionText}>
                    {curriculoData.resumo.trim()}
                  </Text>
                </>
              )}

              {curriculoData.cursos.length > 0 && (
                <>
                  <Text style={styles.infoTitle}>
                    {labels.CurriculoEducationTitle.toUpperCase()}
                  </Text>
                  <View style={styles.softDivider} />
                  <View style={styles.escolaridadeItems}>
                    {curriculoData.cursos.map((curso) => {
                      return (
                        <View
                          key={curso.id}
                          wrap={false}
                          style={styles.escolaridadeItemContainer}
                        >
                          <Text style={styles.escolaridadeUniversidade}>
                            {curso.cidade !== ''
                              ? `${curso.escola.trim()} - ${curso.cidade.trim()}`
                              : curso.escola.trim()}
                          </Text>
                          <Text style={styles.escolaridadeDate}>{`${
                            months[new Date(curso.inicio).getMonth()]
                          }.${new Date(curso.inicio).getFullYear()} - ${
                            curso.atualmente
                              ? labels.CurriculoCurrent
                              : `${
                                  months[new Date(curso.fim).getMonth()]
                                }.${new Date(curso.fim).getFullYear()}`
                          }`}</Text>
                          <Text style={styles.escolaridadeCourse}>
                            {curso.curso.trim()}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                </>
              )}

              {curriculoData.empregos.length > 0 && (
                <>
                  <Text style={styles.infoTitle}>
                    {labels.CurriculoExperiencesTitle.toUpperCase()}
                  </Text>
                  <View style={styles.softDivider} />
                  <View style={styles.escolaridadeItems}>
                    {curriculoData.empregos.map((emprego) => {
                      return (
                        <View
                          key={emprego.id}
                          wrap={false}
                          style={styles.escolaridadeItemContainer}
                        >
                          <Text style={styles.escolaridadeUniversidade}>
                            {emprego.empresa}
                          </Text>
                          <Text style={styles.escolaridadeDate}>
                            {(emprego.cidade.trim() !== '' ||
                              emprego.estado.trim() !== '') && (
                              <Text style={styles.experienceItemCompanySummary}>
                                {emprego.cidade.trim() !== ''
                                  ? `${emprego.cidade.trim()} - `
                                  : ''}
                                {emprego.estado.trim()}
                              </Text>
                            )}
                          </Text>
                          <Text style={styles.escolaridadeDate}>{`${
                            months[new Date(emprego.inicio).getMonth()]
                          }.${new Date(emprego.inicio).getFullYear()} - ${
                            emprego.atualmente
                              ? labels.CurriculoCurrent
                              : `${
                                  months[new Date(emprego.fim).getMonth()]
                                }.${new Date(emprego.fim).getFullYear()}`
                          }`}</Text>
                          <Text style={styles.escolaridadeCourse}>
                            {emprego.cargo.trim()}
                          </Text>
                          <Text style={styles.jobDescription}>
                            {emprego.descricao}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                </>
              )}
            </View>
            <View style={styles.lane2}>
              <Text style={styles.infoTitle}>
                {labels.CurriculoPersonalDataTitle.trim().toUpperCase()}
              </Text>
              <View style={styles.softDivider} />
              <View style={styles.personalInfoContainer}>
                <View style={styles.personalItem}>
                  <Text style={styles.personalLabel}>
                    {labels.CurriculoBirthdayTitle.toUpperCase()}:
                  </Text>
                  <Text style={styles.personalText}>
                    {dateFormat(
                      curriculoData.dateBirth,
                      languagesDateFormat[language]
                    )}
                  </Text>
                </View>
                <View style={styles.softDivider} />

                {(curriculoData.cidade.trim() !== '' ||
                  curriculoData.bairro.trim() !== '' ||
                  curriculoData.estado.trim() !== '' ||
                  curriculoData.rua.trim() !== '') && (
                  <>
                    <View style={styles.personalItem}>
                      <Text style={styles.personalLabel}>
                        {labels.CurriculoAddressTitle.toUpperCase()}:
                      </Text>
                      <Text style={styles.personalText}>
                        {`${curriculoData.rua.trim()}${
                          curriculoData.rua.trim() !== '' &&
                          curriculoData.bairro.trim() !== ''
                            ? `, ${curriculoData.bairro.trim()}`
                            : curriculoData.bairro.trim()
                        }`}
                      </Text>
                      <Text style={styles.personalText}>
                        {`${curriculoData.cidade.trim()}${
                          curriculoData.cidade.trim() !== '' &&
                          curriculoData.estado.trim() !== ''
                            ? ` - ${curriculoData.estado.trim()}`
                            : curriculoData.estado.trim()
                        }`}
                      </Text>
                    </View>
                    <View style={styles.softDivider} />
                  </>
                )}

                {(curriculoData.telefone !== '' ||
                  curriculoData.email !== '' ||
                  curriculoData.linkedin !== '') && (
                  <>
                    <View style={styles.personalItem}>
                      <Text style={styles.personalLabel}>
                        {labels.CurriculoContactTitle.toUpperCase()}:
                      </Text>
                      {curriculoData.telefone !== '' && (
                        <Text style={styles.personalText}>
                          {language !== 'pt' ? '+55 ' : ''}
                          {curriculoData.telefone}
                        </Text>
                      )}
                      {curriculoData.email !== '' && (
                        <Text style={styles.personalText}>
                          {curriculoData.email.trim()}
                        </Text>
                      )}
                      {curriculoData.linkedin !== '' && (
                        <Text style={styles.personalText}>
                          {curriculoData.linkedin.trim()}
                        </Text>
                      )}
                    </View>
                    <View style={styles.softDivider} />
                  </>
                )}
              </View>

              {(curriculoData.habilidades.length > 3 ||
                curriculoData.habilidades[0].children.length > 0 ||
                curriculoData.habilidades[1].children.length > 0 ||
                curriculoData.habilidades[2].children.length > 0) && (
                <>
                  <Text style={styles.infoTitle}>
                    {labels.CurriculoSkillsTitle.toUpperCase()}
                  </Text>
                  <View style={styles.softDivider} />

                  {curriculoData.habilidades.map((habilidade) => {
                    return (
                      <View
                        key={habilidade.id}
                        style={styles.habilidadeCategory}
                      >
                        {habilidade.children !== undefined &&
                          habilidade.children.length > 0 && (
                            <>
                              <Text style={styles.habilidadeCategoryTitle}>
                                {habilidade.category.trim()}:
                              </Text>
                              {habilidade.children.map((habilidadeChild) => {
                                return (
                                  <View
                                    key={habilidadeChild.id}
                                    style={styles.habilidadeItem}
                                  >
                                    <Text style={styles.habilidadeIcon}>•</Text>
                                    <Text style={styles.habilidadeText}>
                                      {habilidadeChild.habilidade.trim()}
                                      {habilidade.id === '-1'
                                        ? ` - ${getLanguageLevel(
                                            habilidadeChild.nivel
                                          )}`
                                        : ''}
                                    </Text>
                                  </View>
                                );
                              })}
                            </>
                          )}
                      </View>
                    );
                  })}
                </>
              )}
            </View>
          </View>
        </View>
        <View style={styles.marginBottom} fixed />
      </Page>
    </Document>
  );
};

export default Curriculo2;
