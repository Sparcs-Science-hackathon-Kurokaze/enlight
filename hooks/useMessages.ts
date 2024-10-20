import {
  useContext,
} from 'react'
import { ChatsContext, ContextProps } from '../utils/MessageProvider';

export const useChats = () => useContext(ChatsContext);

export const useMessages = () => {
  return useContext(ChatsContext) as ContextProps
}