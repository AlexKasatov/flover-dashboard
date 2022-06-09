import styled from 'styled-components';
import { toast } from 'react-toastify';
import { BtnActive } from '../../components/FreeTrial/FreeTrial.styled';

export const notify = () => toast(`You're logged out!`);
export const BtnLogOut = styled(BtnActive)``;
