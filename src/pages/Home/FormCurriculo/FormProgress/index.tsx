import React, { useContext } from 'react';
import {
  ProgressBarTotal,
  ProgressBarValue,
  ProgressBarContainer,
  ProgressBarIconsContainer,
  IconContainer,
} from './styles';
import {
  FaAddressCard,
  FaBriefcase,
  FaGraduationCap,
  FaCogs,
  FaListAlt,
  FaDownload,
} from 'react-icons/fa';
import { ThemeContext } from 'styled-components';

interface Props {
  step: number;
}

type stepType = 1 | 2 | 3 | 4 | 5 | 6;

const progressBarValues = {
  1: '0%',
  2: '20%',
  3: '40%',
  4: '60%',
  5: '80%',
  6: '100%',
};

const FormProgress: React.FC<Props> = ({ step }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <ProgressBarContainer>
      <ProgressBarTotal>
        <ProgressBarValue
          style={{ width: progressBarValues[step as stepType] }}
        />
      </ProgressBarTotal>
      <ProgressBarIconsContainer>
        <IconContainer selected={step >= 1}>
          <FaAddressCard
            size={20}
            color={step >= 1 ? colors.progressIcon : colors.formBackground}
          />
        </IconContainer>
        <IconContainer selected={step >= 2}>
          <FaBriefcase
            size={20}
            color={step >= 2 ? colors.progressIcon : colors.formBackground}
          />
        </IconContainer>
        <IconContainer selected={step >= 3}>
          <FaGraduationCap
            size={20}
            color={step >= 3 ? colors.progressIcon : colors.formBackground}
          />
        </IconContainer>
        <IconContainer selected={step >= 4}>
          <FaCogs
            size={20}
            color={step >= 4 ? colors.progressIcon : colors.formBackground}
          />
        </IconContainer>
        <IconContainer selected={step >= 5}>
          <FaListAlt
            size={20}
            color={step >= 5 ? colors.progressIcon : colors.formBackground}
          />
        </IconContainer>
        <IconContainer selected={step >= 6}>
          <FaDownload
            size={20}
            color={step >= 6 ? colors.progressIcon : colors.formBackground}
          />
        </IconContainer>
      </ProgressBarIconsContainer>
    </ProgressBarContainer>
  );
};

export default FormProgress;
