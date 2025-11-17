import { useEffect } from 'react';
import { trackClick } from '../services/clickTracking';

export function useClickTracking() {
  useEffect(() => {
    const handleClick = async (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href) {
        const isExternalLink = !link.href.startsWith(window.location.origin);
        const isTargetBlank = link.target === '_blank';

        if (isExternalLink || isTargetBlank) {
          event.preventDefault();

          const section = findSectionName(link);
          const linkText = link.textContent?.trim() || 'unknown';
          const location = `${section}-${linkText.toLowerCase().replace(/\s+/g, '-')}`;


          try {
            await trackClick(link.href, location);

            if (isTargetBlank || isExternalLink) {
              window.open(link.href, '_blank');
            } else {
              window.location.href = link.href;
            }
          } catch (error) {
            if (isTargetBlank || isExternalLink) {
              window.open(link.href, '_blank');
            } else {
              window.location.href = link.href;
            }
          }
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
}

function findSectionName(element: HTMLElement): string {
  let current: HTMLElement | null = element;

  while (current && current !== document.body) {
    if (current.id) {
      return current.id;
    }

    if (current.tagName === 'SECTION' && current.className) {
      const classes = current.className.split(' ');
      const meaningfulClass = classes.find(c => !c.startsWith('py-') && !c.startsWith('px-') && !c.startsWith('bg-'));
      if (meaningfulClass) {
        return meaningfulClass;
      }
    }

    current = current.parentElement;
  }

  return 'unknown-section';
}
