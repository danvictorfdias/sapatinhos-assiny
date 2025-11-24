import { trackClickNonBlocking } from '../services/trackingBeacon';

export const handleCheckoutNavigation = (
    e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>,
    url: string,
    location: string
) => {
    // Prevent default only if we are handling the navigation manually
    // However, for maximum robustness, we often want to let the browser handle the link click naturally
    // if it's a simple anchor tag. But since we want to track *before* (or in parallel),
    // and the user reported "frozen" behavior, we should be explicit.

    // If the user reported "frozen", it might be that a preventDefault was called but no navigation happened.
    // Or an error occurred in the click handler.

    try {
        // 1. Track the click non-blocking (fire and forget)
        trackClickNonBlocking(url, location);

        // 2. Allow the default browser behavior for <a> tags if possible, 
        // but if we want to force it to ensure it works:
        if (!url) return;

        // If it's an event that can be prevented, and we want to control navigation:
        // e.preventDefault(); 
        // window.location.href = url;

        // However, the safest way for affiliate/checkout links is often just letting the <a> tag work
        // UNLESS we need to open in a new tab or do something special.
        // The previous code in Offer.tsx was:
        // onClick={handlePurchase} -> trackClickNonBlocking
        // href={checkoutUrl}
        // This *should* have worked unless trackClickNonBlocking threw an error that bubbled up (it shouldn't, it has try/catch).

        // The user said "stays on the same page frozen". This suggests `e.preventDefault()` might have been called somewhere 
        // OR the href is empty/invalid.

        // Let's make this helper explicit:
        // We will NOT prevent default, allowing the <a> tag to do its job.
        // We will just track.
        // BUT, if the user wants to be 100% sure, we can force it.

        // Let's try a hybrid approach:
        // If it's a button (no href), we MUST navigate.
        // If it's an anchor (has href), we let it be, UNLESS we suspect the href is failing.

        // Given the "frozen" report, I will force navigation to be safe.
        e.preventDefault();
        window.location.href = url;

    } catch (error) {
        // Fallback: if anything fails in our logic, force navigation
        window.location.href = url;
    }
};
