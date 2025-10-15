export function getCitiesSection() {
    return `
        <section class=\"py-16 bg-white\">
            <div class=\"max-w-7xl mx-auto px-4\">
                <div class=\"text-center mb-12\">
                    <h2 class=\"text-3xl font-bold text-black mb-4\">Disponível nas Principais Cidades</h2>
                    <p class=\"text-gray-600 text-lg\">Encontre profissionais de qualidade em todo Moçambique</p>
                </div>

                <div class=\"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4\">
                    ${['Maputo', 'Matola', 'Beira', 'Nampula', 'Quelimane', 'Tete', 'Xai-Xai', 'Inhambane', 'Lichinga', 'Pemba', 'Chimoio', 'Nacala'].map(city => `
                        <div class=\"text-center p-4 border border-gray-200 rounded-lg hover:border-black transition-colors cursor-pointer\">
                            <i data-lucide=\"map-pin\" class=\"w-6 h-6 text-red-500 mx-auto mb-2\"></i>
                            <span class=\"text-black font-medium\">${city}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}