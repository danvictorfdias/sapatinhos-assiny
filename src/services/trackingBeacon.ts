import { supabase } from '../lib/supabase';
import { getUTMParams } from '../utils/utm';

export interface ClickTrackingData {
  source_url: string;
  destination_url: string;
  button_location: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  user_agent?: string;
  referrer?: string;
}

export function trackClickNonBlocking(
  destinationUrl: string,
  buttonLocation: string
): void {
  try {
    const utmParams = getUTMParams();

    const trackingData: ClickTrackingData = {
      source_url: window.location.href,
      destination_url: destinationUrl,
      button_location: buttonLocation,
      ...utmParams,
      user_agent: navigator.userAgent,
      referrer: document.referrer || undefined,
    };

    supabase.from('click_tracking').insert(trackingData).then(({ error }) => {
      // Silent error handling - tracking failures don't affect UX
    });
  } catch (error) {
    // Silent error handling - tracking failures don't affect UX
  }
}

export function trackAndNavigate(
  destinationUrl: string,
  buttonLocation: string,
  openInNewTab = true
): void {
  const urlWithUTM = buildURLWithUTM(destinationUrl);

  trackClickNonBlocking(urlWithUTM, buttonLocation);

  if (openInNewTab) {
    window.open(urlWithUTM, '_blank');
  } else {
    window.location.href = urlWithUTM;
  }
}
