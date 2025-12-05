import { memo } from 'react';

function TopBanner() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
    });

    return (
        <div className="bg-black text-white text-center py-2 px-4 text-sm md:text-base font-medium">
            Último dia com preço especial. Somente <span className="font-bold" style={{ color: '#FDD835' }}>HOJE</span>, <span className="font-bold" style={{ color: '#FDD835' }}>{formattedDate}</span>.
        </div>
    );
}

export default memo(TopBanner);
