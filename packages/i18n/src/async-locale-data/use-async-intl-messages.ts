import React from 'react';

export type TMessageTranslations = {
  [key: string]: string;
};
export type TMessagesAsync = (locale: string) => Promise<TMessageTranslations>;
export type TState = {
  isLoading: boolean;
  messages?: TMessageTranslations;
  error?: Error;
};
export type THookOptions = {
  locale?: string;
  loader: TMessagesAsync;
};

const initialState: TState = {
  isLoading: true,
  messages: undefined,
  error: undefined,
};

// Low level hook to load messages for a specific locale. The loading is async
// because it's assumed that the translation files are dynamically imported (code splitted).
const useAsyncIntlMessages = ({ locale, loader }: THookOptions): TState => {
  const [state, setState] = React.useState(initialState);

  React.useEffect(() => {
    let _isUnmounting = false;

    async function load(_locale: string) {
      try {
        if (!_isUnmounting) {
          const messages = await loader(_locale);
          setState({ isLoading: false, messages });
        }
      } catch (error) {
        setState({ isLoading: false, error });
      }
    }

    if (locale) load(locale);

    return () => {
      _isUnmounting = true;
    };
  }, [locale, loader]);

  return state;
};

export default useAsyncIntlMessages;