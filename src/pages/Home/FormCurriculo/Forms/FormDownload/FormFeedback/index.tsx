import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Textarea from '../../../../../../components/Form/Textarea';
import { Button } from '../../../../../../components/FormButton/styles';
import {
  FeedbackContainer,
  StarsContainer,
  ButtonSendFeedbackContainer,
  ThanksContainer,
} from './styles';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FormParagraph, FormTitle } from '../../../styles';
import { CurriculoData } from '../../../model';
import { firestoreDB } from '../../../../../../services/firestore';
import { LanguageContext } from '../../../../../../App';
import { messages } from '../../../../../../languages';

interface feedback {
  message: string;
}

interface FormFeedbackProps {
  curriculoData: CurriculoData;
  closeModal: () => void;
}

const FormFeedback: React.FC<FormFeedbackProps> = ({
  curriculoData,
  closeModal,
}) => {
  const [grade, setGrade] = useState<number>(-1);
  const [thanks, setThanks] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const [language] = useContext(LanguageContext);
  const [labels, setLabels] = useState(messages[language]);

  useEffect(() => {
    setLabels(messages[language]);
  }, [language]);

  const handleSubmit = (data: feedback) => {
    firestoreDB
      .collection('feedbacks')
      .add({
        user: {
          name: `${curriculoData.nome} ${curriculoData.sobrenome}`,
          email: curriculoData.email,
          phone: curriculoData.telefone,
        },
        date: Date.now(),
        grade,
        message: data.message,
      })
      .catch((error) => {
        console.error('Erro ao enviar o feedback: ', error);
      });

    setThanks(true);

    setTimeout(() => {
      closeModal();
    }, 1000);
  };

  return (
    <FeedbackContainer>
      {thanks ? (
        <ThanksContainer>
          <FormTitle>{labels.FormFeedbackThank} :)</FormTitle>
        </ThanksContainer>
      ) : (
        <>
          <FormTitle>Feedback</FormTitle>
          <FormParagraph>{labels.FormFeedback}</FormParagraph>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <StarsContainer>
              {grade >= 1 ? (
                <AiFillStar
                  size={35}
                  onPointerEnter={() => setGrade(1)}
                  onClick={() => setGrade(1)}
                />
              ) : (
                <AiOutlineStar
                  size={35}
                  onPointerEnter={() => setGrade(1)}
                  onClick={() => setGrade(1)}
                />
              )}
              {grade >= 2 ? (
                <AiFillStar
                  size={35}
                  onPointerEnter={() => setGrade(2)}
                  onClick={() => setGrade(2)}
                />
              ) : (
                <AiOutlineStar
                  size={35}
                  onPointerEnter={() => setGrade(2)}
                  onClick={() => setGrade(2)}
                />
              )}
              {grade >= 3 ? (
                <AiFillStar
                  size={35}
                  onPointerEnter={() => setGrade(3)}
                  onClick={() => setGrade(3)}
                />
              ) : (
                <AiOutlineStar
                  size={35}
                  onPointerEnter={() => setGrade(3)}
                  onClick={() => setGrade(3)}
                />
              )}
              {grade >= 4 ? (
                <AiFillStar
                  size={35}
                  onPointerEnter={() => setGrade(4)}
                  onClick={() => setGrade(4)}
                />
              ) : (
                <AiOutlineStar
                  size={35}
                  onPointerEnter={() => setGrade(4)}
                  onClick={() => setGrade(4)}
                />
              )}
              {grade >= 5 ? (
                <AiFillStar
                  size={35}
                  onPointerEnter={() => setGrade(5)}
                  onClick={() => setGrade(5)}
                />
              ) : (
                <AiOutlineStar
                  size={35}
                  onPointerEnter={() => setGrade(5)}
                  onClick={() => setGrade(5)}
                />
              )}
            </StarsContainer>
            <Textarea name='message' placeholder={labels.FormFeedbackMessage} />
            <ButtonSendFeedbackContainer>
              <Button>{labels.Send}</Button>
            </ButtonSendFeedbackContainer>
          </Form>
        </>
      )}
    </FeedbackContainer>
  );
};

export default FormFeedback;
