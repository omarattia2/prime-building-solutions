import { useCallback, useState } from 'react';

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const useFormStatus = () => {
  const [status, setStatus] = useState<FormStatus>('idle');

  const runSubmit = useCallback(async (submitFn: () => void | Promise<void>) => {
    setStatus('submitting');
    try {
      await submitFn();
      setStatus('success');
    } catch (error) {
      console.error('Form submission failed:', error);
      setStatus('error');
    }
  }, []);

  const resetStatus = useCallback(() => {
    setStatus('idle');
  }, []);

  return {
    status,
    runSubmit,
    resetStatus,
    setStatus,
  };
};

export default useFormStatus;
