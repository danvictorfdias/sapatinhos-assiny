import { memo } from 'react';

function TopBanner() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
    });

    return (
        <div className="bg-vermelho-urgencia text-white text-center py-2 px-4 text-sm md:text-base font-medium">
            Desconto de Black Friday, só <span className="text-amarelo-destaque font-bold">HOJE</span> - <span className="text-amarelo-destaque font-bold">{formattedDate}</span>
        </div>
    );
}

export default memo(TopBanner);
