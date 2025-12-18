import { useMemo } from 'react';
import { buildURLWithUTM } from '../utils/utm';

const CHECKOUT_BASE_URL = 'https://pay.assiny.com.br/L4o8Rs/node/0DCVZy';

export function useCheckoutLink(): string {
  const checkoutUrl = useMemo(() => {
    return buildURLWithUTM(CHECKOUT_BASE_URL);
  }, []);

  return checkoutUrl;
}
