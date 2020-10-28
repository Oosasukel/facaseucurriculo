import React from 'react';
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';

import styles from './styles';

import phoneIcon from '../../../../../assets/images/phone-solid.png';
import emailIcon from '../../../../../assets/images/envelope-open-solid.png';
import linkedinIcon from '../../../../../assets/images/linkedin-in-brands.png';
import addressIcon from '../../../../../assets/images/map-marker-alt-solid.png';
import workIcon from '../../../../../assets/images/briefcase-solid.png';
import graduationIcon from '../../../../../assets/images/graduation-cap-solid.png';
import { CurriculoData } from '../../model';

const months = [
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

interface Props {
  curriculoData: CurriculoData;
}

const Curriculo1: React.FC<Props> = ({ curriculoData }) => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
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
                <Text style={styles.contactText}>{curriculoData.telefone}</Text>
              </View>
            )}
            {curriculoData.email !== '' && (
              <View style={styles.contactItem}>
                <View style={styles.contactIconContainer}>
                  <Image src={emailIcon} style={styles.contactIcon} />
                </View>
                <Text style={styles.contactText}>{curriculoData.email}</Text>
              </View>
            )}
            {curriculoData.linkedin !== '' && (
              <View style={styles.contactItem}>
                <View style={styles.contactIconContainer}>
                  <Image src={linkedinIcon} style={styles.contactIcon} />
                </View>
                <Text style={styles.contactText}>{curriculoData.linkedin}</Text>
              </View>
            )}
            {(curriculoData.cidade !== '' ||
              curriculoData.bairro !== '' ||
              curriculoData.estado !== '' ||
              curriculoData.rua !== '') && (
              <View style={styles.contactItem}>
                <View style={styles.contactIconContainer}>
                  <Image src={addressIcon} style={styles.contactIcon} />
                </View>
                <View style={styles.addressContainer}>
                  <Text style={styles.contactText}>
                    {curriculoData.rua !== '' ? `${curriculoData.rua}, ` : ''}
                    {curriculoData.bairro}
                  </Text>
                  <Text style={styles.contactText}>
                    {curriculoData.cidade !== ''
                      ? `${curriculoData.cidade} - `
                      : ''}
                    {curriculoData.estado}
                  </Text>
                </View>
              </View>
            )}
          </View>

          {(curriculoData.habilidades.length > 2 ||
            curriculoData.habilidades[0].children.length > 0 ||
            curriculoData.habilidades[1].children.length > 0) && (
            <View style={styles.skillsContainer}>
              <View style={styles.skillsTitle}>
                <Text style={styles.skillsTitleText}>HABILIDADES</Text>
                <View style={styles.skillsTitleDivider}></View>
              </View>

              {curriculoData.habilidades.map((habilidade) => {
                return (
                  <View key={habilidade.id}>
                    {habilidade.children !== undefined &&
                      habilidade.children.length > 0 && (
                        <View style={styles.skillsCategory}>
                          <Text style={styles.skillsCategoryTitle}>
                            {habilidade.category}
                          </Text>
                          <View style={styles.skillsCategoryItems}>
                            {habilidade.children.map((habilidadeChild) => {
                              return (
                                <View
                                  key={habilidadeChild.id}
                                  style={styles.skillItem}
                                >
                                  <Text style={styles.skillItemText}>
                                    {habilidadeChild.habilidade}
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
          {(curriculoData.nome !== '' || curriculoData.sobrenome !== '') && (
            <View style={styles.nameContainer}>
              <Text style={styles.firstName}>
                {curriculoData.nome.toUpperCase()}
              </Text>
              <Text style={styles.lastName}>
                {curriculoData.sobrenome.toUpperCase()}
              </Text>
            </View>
          )}

          {curriculoData.profissao !== '' && (
            <Text style={styles.jobText}>{curriculoData.profissao}</Text>
          )}

          {curriculoData.resumo !== '' && (
            <Text style={styles.summaryText}>{curriculoData.resumo}</Text>
          )}

          {curriculoData.empregos.length > 0 && (
            <View style={styles.experiencesContainer}>
              <View style={styles.experiencesHeader}>
                <View style={styles.experiencesHeaderIconContainer}>
                  <Image src={workIcon} style={styles.experiencesHeaderIcon} />
                </View>
                <Text style={styles.experiencesHeaderTitle}>EXPERIÊNCIAS</Text>
                <View style={styles.experiencesHeaderDivider}></View>
              </View>

              {curriculoData.empregos.map((emprego) => {
                return (
                  <View key={emprego.id} style={styles.experienceItemContainer}>
                    <View style={styles.experienceItemRoleContainer}>
                      <Text style={styles.experienceItemRole}>
                        {emprego.cargo}
                      </Text>
                      <Text style={styles.experienceItemTime}>
                        {`${
                          months[emprego.inicio.getMonth()]
                        }.${emprego.inicio.getFullYear()} - ${
                          emprego.atualmente
                            ? 'Atualmente'
                            : `${
                                months[emprego.fim.getMonth()]
                              }.${emprego.fim.getFullYear()}`
                        }`}
                      </Text>
                    </View>
                    <View style={styles.experienceItemCompanyContainer}>
                      <Text style={styles.experienceItemCompanyTitle}>
                        {emprego.empresa}
                      </Text>
                      {(emprego.cidade !== '' || emprego.estado !== '') && (
                        <Text style={styles.experienceItemCompanySummary}>
                          {emprego.cidade !== '' ? `${emprego.cidade} - ` : ''}
                          {emprego.estado}
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
                <Text style={styles.experiencesHeaderTitle}>FORMAÇÃO</Text>
                <View style={styles.experiencesHeaderDivider}></View>
              </View>

              {curriculoData.cursos.map((curso) => {
                return (
                  <View key={curso.id} style={styles.experienceItemContainer}>
                    <View style={styles.courseItemRoleContainer}>
                      <Text style={styles.experienceItemRole}>
                        {curso.curso}
                      </Text>
                      <Text style={styles.experienceItemTime}>
                        {`${
                          months[curso.inicio.getMonth()]
                        }.${curso.inicio.getFullYear()} - ${
                          curso.atualmente
                            ? 'Atualmente'
                            : `${
                                months[curso.fim.getMonth()]
                              }.${curso.fim.getFullYear()}`
                        }`}
                      </Text>
                    </View>
                    <View style={styles.experienceItemCompanyContainer}>
                      <Text style={styles.experienceItemCompanyTitle}>
                        {curso.escola}
                      </Text>
                      <Text style={styles.experienceItemCompanySummary}>
                        {curso.cidade}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default Curriculo1;
