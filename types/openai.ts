import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  MISTRAL = 'mistral',
  MIXTRAL = 'mixtral',
  CODELLAMA = 'code-llama',
  DEEPSEEKCODER = 'deepseek-coder',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.MISTRAL;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {

  [OpenAIModelID.MISTRAL]: {
    id: OpenAIModelID.MISTRAL,
    name: 'mistral',
    maxLength: 12000, // TODO: test
    tokenLimit: 4000, // TODO: test
  },
  [OpenAIModelID.MIXTRAL]: {
    id: OpenAIModelID.MIXTRAL,
    name: 'mixtral',
    maxLength: 12000, // TODO: test
    tokenLimit: 4000, // TODO: test
  },
  [OpenAIModelID.CODELLAMA]: {
    id: OpenAIModelID.CODELLAMA,
    name: 'code-llama',
    maxLength: 12000, // TODO: test
    tokenLimit: 4000, // TODO: test
  },
  [OpenAIModelID.DEEPSEEKCODER]: {
    id: OpenAIModelID.DEEPSEEKCODER,
    name: 'deepseek-coder',
    maxLength: 12000, // TODO: test
    tokenLimit: 4000, // TODO: test
  },
};
