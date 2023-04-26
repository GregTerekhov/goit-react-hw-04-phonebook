import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContainer = styled.div`
  text-align: center;
`;

export const FormEl = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 48px;
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 8px;
  font-size: 24px;
  transition: color 250ms ease;

  &:hover,
  &:focus {
    color: #3160cd;
  }
`;

export const FormInput = styled(Field)`
  width: 700px;
  font-size: 24px;
  border-radius: 20px;
  border: 1px solid #959595;
  padding: 16px;
  outline: none;
  transition: border-color 250ms ease, box-shadow 250ms ease;

  &::placeholder {
    color: #959595;
  }

  &:hover,
  &:focus,
  &:active {
    border-color: #3160cd;
    box-shadow: 0px 1px 7px 1px #4e4e4e;
  }
`;

export const ErrorMessageForUser = styled(ErrorMessage)`
  width: 700px;
  text-align: justify;
  font-size: 18px;
`;

export const FormButton = styled.button`
  font-size: 24px;
  background-color: #3160cd;
  color: #f4f4f4;
  border: none;
  outline: none;
  border-radius: 20px;
  width: 240px;
  padding: 8px 16px;
  cursor: pointer;
  transition: outline-color 250ms ease, box-shadow 250ms ease;

  &:hover,
  &:focus {
    box-shadow: 0px 2px 6px 2px #4e4e4e;
    outline: 1px solid #f4f4f4;
  }
`;
