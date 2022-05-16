import { useContext } from 'react';
import { Context } from '../context/index';

export const useMode = () => useContext(Context);
