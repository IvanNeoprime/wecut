// js/views/home.js
import { stateManager } from '../state.js';
import { renderView } from '../main.js';
import { getCitiesSection } from '../components/cities-section.js';

export function getHomePageContent() {
    const professionals = stateManager.getApprovedProfessionals();

    return `
        <div class="min-h-screen bg-white">
            <!-- Hero Section -->
            <section class="bg-white py-20">
                <div class="max-w-7xl mx-auto px-4 text-center">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
                        Encontre o salão perfeito<br>para o seu estilo
                    </h1>
                    
                    <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Descubra os melhores profissionais de beleza perto de você.<br>
                        Agende seu próximo corte com facilidade e segurança.
                    </p>
                    
                    <!-- Search Bar -->
                    <div class="max-w-4xl mx-auto mb-8">
                        <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                            <div class="flex flex-col md:flex-row gap-4">
                                <div class="flex-1 relative">
                                    <i data-lucide="search" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                                    <input 
                                        type="text"
                                        placeholder="Pesquisar salão ou profissional..."
                                        class="w-full pl-10 h-12 border border-gray-300 rounded-lg focus:border-black focus:ring-0"
                                        id="home-search-input"
                                    />
                                </div>
                                <button onclick="performHomeSearch()" 
                                        class="bg-black text-white hover:bg-gray-800 h-12 px-8 rounded-lg wecut-button-hover font-medium">
                                    Buscar
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Quick Actions -->
                    <div class="flex flex-wrap justify-center gap-3 mb-12">
                        <button class="px-4 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer transition-colors">
                            💇 Corte Masculino
                        </button>
                        <button class="px-4 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer transition-colors">
                            💇‍♀️ Corte Feminino
                        </button>
                        <button class="px-4 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer transition-colors">
                            🎨 Coloração
                        </button>
                        <button class="px-4 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer transition-colors">
                            🧔 Barba
                        </button>
                        <button class="px-4 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer transition-colors">
                            👑 Tranças
                        </button>
                    </div>
                </div>
            </section>

            <!-- Stats Section -->
            <section class="py-16 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div class="text-3xl font-bold text-black mb-2">500+</div>
                            <div class="text-gray-600">Profissionais</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-black mb-2">10.000+</div>
                            <div class="text-gray-600">Clientes Satisfeitos</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-black mb-2">15+</div>
                            <div class="text-gray-600">Cidades</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-black mb-2">4.8★</div>
                            <div class="text-gray-600">Avaliação Média</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Featured Professionals -->
            <section class="py-16 bg-white">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold text-black mb-4">Profissionais em Destaque</h2>
                        <p class="text-gray-600 text-lg">Os melhores cabeleireiros avaliados em Moçambique</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${professionals.slice(0, 3).map(professional => `
                            <div class="border border-gray-300 rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group">
                                <div class="aspect-[4/3] relative overflow-hidden">
                                    <img 
                                        src="${professional.profileImage}" 
                                        alt="${professional.name}"
                                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div class="absolute top-4 right-4">
                                        <span class="bg-white text-black border border-gray-300 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                                            ${professional.price}
                                        </span>
                                    </div>
                                    <div class="absolute bottom-4 left-4">
                                        <span class="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                                            Disponível
                                        </span>
                                    </div>
                                </div>
                                
                                <div class="p-6">
                                    <h3 class="text-xl font-semibold text-black mb-2">${professional.name}</h3>
                                    <p class="text-gray-600 mb-3">${professional.specialty}</p>
                                    
                                    <div class="flex items-center gap-4 mb-4 text-sm text-gray-600">
                                        <div class="flex items-center gap-1">
                                            <i data-lucide="star" class="w-4 h-4 fill-yellow-400 stroke-yellow-400"></i>
                                            <span class="font-medium text-black">${professional.rating}</span>
                                            <span>(${professional.reviews} avaliações)</span>
                                        </div>
                                        <div class="flex items-center gap-1">
                                            <i data-lucide="map-pin" class="w-4 h-4"></i>
                                            <span>${professional.location}</span>
                                        </div>
                                    </div>

                                    <div class="flex gap-2">
                                        <button 
                                            class="flex-1 border border-gray-300 hover:bg-gray-50 py-2 rounded-lg wecut-button-hover transition-colors"
                                            onclick="viewProfessional(${professional.id})"
                                        >
                                            Ver Perfil
                                        </button>
                                        <button 
                                            class="flex-1 bg-black text-white hover:bg-gray-800 py-2 rounded-lg wecut-button-hover transition-colors"
                                            onclick="startBooking(${professional.id})"
                                        >
                                            Agendar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="text-center mt-12">
                        <button onclick="renderView('search-page')" 
                                class="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors wecut-button-hover font-medium">
                            Ver Todos os Profissionais
                        </button>
                    </div>
                </div>
            </section>

            <!-- How it Works -->
            <section class="py-16 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold text-black mb-4">Como Funciona</h2>
                        <p class="text-gray-600 text-lg">Simples, rápido e seguro</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="text-center p-6">
                            <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                                <i data-lucide="search" class="w-8 h-8 text-white"></i>
                            </div>
                            <h3 class="text-xl font-semibold text-black mb-3">1. Busque</h3>
                            <p class="text-gray-600">Encontre cabeleireiros no seu bairro ou cidade usando nossos filtros inteligentes e avaliações reais</p>
                        </div>

                        <div class="text-center p-6">
                            <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                                <i data-lucide="calendar" class="w-8 h-8 text-white"></i>
                            </div>
                            <h3 class="text-xl font-semibold text-black mb-3">2. Agende</h3>
                            <p class="text-gray-600">Escolha o horário disponível que melhor se encaixa na sua agenda com apenas alguns cliques</p>
                        </div>

                        <div class="text-center p-6">
                            <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                                <i data-lucide="scissors" class="w-8 h-8 text-white"></i>
                            </div>
                            <h3 class="text-xl font-semibold text-black mb-3">3. Aproveite</h3>
                            <p class="text-gray-600">Tenha o corte perfeito sem preocupações e avalie sua experiência para ajudar outros clientes</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Cities Section -->
            ${getCitiesSection()}

            <!-- CTA Section -->
            <section class="py-20 bg-black">
                <div class="max-w-4xl mx-auto px-4 text-center">
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                        Pronto para o seu próximo corte?
                    </h2>
                    <p class="text-gray-300 text-lg mb-8">
                        Junte-se a milhares de clientes satisfeitos e descubra os melhores profissionais de beleza perto de você.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onclick="renderView('search-page')" 
                                class="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors wecut-button-hover font-medium">
                            Encontrar Profissionais
                        </button>
                        ${!stateManager.state.currentUser ? `
                            <button onclick="renderView('login-page')" 
                                    class="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors wecut-button-hover font-medium">
                                Criar Conta
                            </button>
                        ` : ''}
                    </div>
                </div>
            </section>
        </div>
    `;
}
