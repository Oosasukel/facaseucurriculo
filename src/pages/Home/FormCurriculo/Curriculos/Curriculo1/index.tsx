import React from 'react';
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';

import styles from './styles';

import birthDayIcon from '../../../../../assets/images/birthCake.png';
import phoneIcon from '../../../../../assets/images/phone-solid.png';
import emailIcon from '../../../../../assets/images/envelope-open-solid.png';
import linkedinIcon from '../../../../../assets/images/linkedin-in-brands.png';
import addressIcon from '../../../../../assets/images/map-marker-alt-solid.png';
import workIcon from '../../../../../assets/images/briefcase-solid.png';
import graduationIcon from '../../../../../assets/images/graduation-cap-solid.png';
import { CurriculoData } from '../../model';

import { Labels } from '../../../../../languages';
import { dateFormat } from '../../../../../utils/dateFormat';

export const months = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];

export const languagesDateFormat: { [language: string]: string } = {
  pt: 'dd/MM/yyyy',
  en: 'M/d/yyyy',
};

export interface CurriculoProps {
  curriculoData: CurriculoData;
  labels: Labels;
  language: string;
}

const Curriculo1: React.FC<CurriculoProps> = ({
  curriculoData,
  labels,
  language,
}) => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.pageHeader} fixed>
          <View style={styles.pageHeaderBlack}></View>
          <View style={styles.pageHeaderWhite}></View>
        </View>
        <View style={styles.pageContent}>
          <View style={styles.sectionBlack}>
            <View style={styles.photoContainer}>
              <Image
                src={curriculoData.foto ? curriculoData.foto : ''}
                style={styles.photo}
              />
            </View>

            <View style={styles.contactContainer}>
              {curriculoData.telefone !== '' && (
                <View style={styles.contactItem}>
                  <View style={styles.contactIconContainer}>
                    <Image src={phoneIcon} style={styles.contactIcon} />
                  </View>
                  <Text style={styles.contactText}>
                    {language !== 'pt' ? '+55 ' : ''}
                    {curriculoData.telefone}
                  </Text>
                </View>
              )}
              {curriculoData.email.trim() !== '' && (
                <View style={styles.contactItem}>
                  <View style={styles.contactIconContainer}>
                    <Image src={emailIcon} style={styles.contactIcon} />
                  </View>
                  <Text style={styles.contactText}>
                    {curriculoData.email.trim()}
                  </Text>
                </View>
              )}
              {curriculoData.linkedin.trim() !== '' && (
                <View style={styles.contactItem}>
                  <View style={styles.contactIconContainer}>
                    <Image src={linkedinIcon} style={styles.contactIcon} />
                  </View>
                  <Text style={styles.contactText}>
                    {curriculoData.linkedin.trim()}
                  </Text>
                </View>
              )}
              {(curriculoData.cidade.trim() !== '' ||
                curriculoData.bairro.trim() !== '' ||
                curriculoData.estado.trim() !== '' ||
                curriculoData.rua.trim() !== '') && (
                <View style={styles.contactItem}>
                  <View style={styles.contactIconContainer}>
                    <Image src={addressIcon} style={styles.contactIcon} />
                  </View>
                  <View style={styles.addressContainer}>
                    <Text style={styles.contactText}>
                      {curriculoData.rua.trim() !== ''
                        ? `${curriculoData.rua.trim()}, `
                        : ''}
                      {curriculoData.bairro.trim()}
                    </Text>
                    <Text style={styles.contactText}>
                      {curriculoData.cidade.trim() !== ''
                        ? `${curriculoData.cidade.trim()} - `
                        : ''}
                      {curriculoData.estado.trim()}
                    </Text>
                  </View>
                </View>
              )}
              <View style={styles.contactItem}>
                <View style={styles.contactIconContainer}>
                  <Image src={birthDayIcon} style={styles.contactIcon} />
                </View>
                <Text style={styles.contactText}>
                  {dateFormat(
                    curriculoData.dateBirth,
                    languagesDateFormat[language]
                  )}
                </Text>
              </View>
            </View>

            {(curriculoData.habilidades.length > 3 ||
              curriculoData.habilidades[0].children.length > 0 ||
              curriculoData.habilidades[1].children.length > 0 ||
              curriculoData.habilidades[2].children.length > 0) && (
              <View style={styles.skillsContainer}>
                <View style={styles.skillsTitle}>
                  <Text style={styles.skillsTitleText}>
                    {labels.CurriculoSkillsTitle.toUpperCase()}
                  </Text>
                  <View style={styles.skillsTitleDivider}></View>
                </View>

                {curriculoData.habilidades.map((habilidade) => {
                  return (
                    <View key={habilidade.id}>
                      {habilidade.children !== undefined &&
                        habilidade.children.length > 0 && (
                          <View style={styles.skillsCategory}>
                            <Text style={styles.skillsCategoryTitle}>
                              {habilidade.category.trim()}
                            </Text>
                            <View style={styles.skillsCategoryItems}>
                              {habilidade.children.map((habilidadeChild) => {
                                return (
                                  <View
                                    wrap={false}
                                    key={habilidadeChild.id}
                                    style={styles.skillItem}
                                  >
                                    <Text style={styles.skillItemText}>
                                      {habilidadeChild.habilidade.trim()}
                                    </Text>
                                    <View style={styles.skillItemProgress}>
                                      <View
                                        style={{
                                          ...styles.skillItemProgressValue,
                                          width: `${Number(
                                            habilidadeChild.nivel
                                          )}%`,
                                        }}
                                      ></View>
                                    </View>
                                  </View>
                                );
                              })}
                            </View>
                          </View>
                        )}
                    </View>
                  );
                })}
              </View>
            )}
          </View>
          <View style={styles.sectionWhite}>
            {(curriculoData.nome.trim() !== '' ||
              curriculoData.sobrenome.trim() !== '') && (
              <View style={styles.nameContainer}>
                {curriculoData.nome
                  .trim()
                  .toUpperCase()
                  .split(' ')
                  .map((name, index) => {
                    return (
                      <Text key={`${name}${index}`} style={styles.firstName}>
                        {name}
                      </Text>
                    );
                  })}
                {curriculoData.sobrenome
                  .trim()
                  .toUpperCase()
                  .split(' ')
                  .map((name, index) => {
                    return (
                      <Text key={`${name}${index}`} style={styles.lastName}>
                        {name}
                      </Text>
                    );
                  })}
              </View>
            )}

            {curriculoData.profissao.trim() !== '' && (
              <Text style={styles.jobText}>
                {curriculoData.profissao.trim()}
              </Text>
            )}

            {curriculoData.resumo !== '' && (
              <Text style={styles.summaryText}>{curriculoData.resumo}</Text>
            )}

            {curriculoData.empregos.length > 0 && (
              <View style={styles.experiencesContainer}>
                <View style={styles.experiencesHeader}>
                  <View style={styles.experiencesHeaderIconContainer}>
                    <Image
                      src={workIcon}
                      style={styles.experiencesHeaderIcon}
                    />
                  </View>
                  <Text style={styles.experiencesHeaderTitle}>
                    {labels.CurriculoExperiencesTitle.toUpperCase()}
                  </Text>
                  <View style={styles.experiencesHeaderDivider}></View>
                </View>

                {curriculoData.empregos.map((emprego) => {
                  return (
                    <View
                      wrap={false}
                      key={emprego.id}
                      style={styles.experienceItemContainer}
                    >
                      <View style={styles.experienceItemRoleContainer}>
                        <Text style={styles.experienceItemRole}>
                          {emprego.cargo.trim()}
                        </Text>
                        <Text style={styles.experienceItemTime}>
                          {`${
                            months[new Date(emprego.inicio).getMonth()]
                          }.${new Date(emprego.inicio).getFullYear()} - ${
                            emprego.atualmente
                              ? labels.CurriculoCurrent
                              : `${
                                  months[new Date(emprego.fim).getMonth()]
                                }.${new Date(emprego.fim).getFullYear()}`
                          }`}
                        </Text>
                      </View>
                      <View style={styles.experienceItemCompanyContainer}>
                        <Text style={styles.experienceItemCompanyTitle}>
                          {emprego.empresa}
                        </Text>
                        {(emprego.cidade.trim() !== '' ||
                          emprego.estado.trim() !== '') && (
                          <Text style={styles.experienceItemCompanySummary}>
                            {emprego.cidade.trim() !== ''
                              ? `${emprego.cidade.trim()} - `
                              : ''}
                            {emprego.estado.trim()}
                          </Text>
                        )}
                        <Text style={styles.experienceItemCompanySummary}>
                          {emprego.descricao}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            )}

            {curriculoData.cursos.length > 0 && (
              <View style={styles.experiencesContainer}>
                <View style={styles.experiencesHeader}>
                  <View style={styles.experiencesHeaderIconContainer}>
                    <Image
                      src={graduationIcon}
                      style={styles.experiencesHeaderIcon}
                    />
                  </View>
                  <Text style={styles.experiencesHeaderTitle}>
                    {labels.CurriculoEducationTitle.toUpperCase()}
                  </Text>
                  <View style={styles.experiencesHeaderDivider}></View>
                </View>

                {curriculoData.cursos.map((curso) => {
                  return (
                    <View
                      wrap={false}
                      key={curso.id}
                      style={styles.experienceItemContainer}
                    >
                      <View style={styles.courseItemRoleContainer}>
                        <Text style={styles.experienceItemRole}>
                          {curso.curso.trim()}
                        </Text>
                        <Text style={styles.experienceItemTime}>
                          {`${
                            months[new Date(curso.inicio).getMonth()]
                          }.${new Date(curso.inicio).getFullYear()} - ${
                            curso.atualmente
                              ? labels.CurriculoCurrent
                              : `${
                                  months[new Date(curso.fim).getMonth()]
                                }.${new Date(curso.fim).getFullYear()}`
                          }`}
                        </Text>
                      </View>
                      <View style={styles.experienceItemCompanyContainer}>
                        <Text style={styles.experienceItemCompanyTitle}>
                          {curso.escola.trim()}
                        </Text>
                        <Text style={styles.experienceItemCompanySummary}>
                          {curso.cidade.trim()}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            )}
          </View>
        </View>
        <View style={styles.pageFooter} fixed>
          <View style={styles.pageFooterBlack}></View>
          <View style={styles.pageFooterWhite}></View>
        </View>
      </Page>
    </Document>
  );
};

export default Curriculo1;
