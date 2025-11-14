"use client";

import { useState } from "react";
import { Camera, Zap, TrendingDown, CheckCircle2, X, Flame, Target, Award, Copy, Check, Crown, Sparkles, Rocket, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SnapFitApp() {
  const [showPaywall, setShowPaywall] = useState(false);
  const [copied, setCopied] = useState(false);

  const pixCode = "00020126330014br.gov.bcb.pix0111020111536035204000053039865406147.005802BR5925PEDRO VINICIUS RODRIGUES 6009Sao Paulo62290525REC69178BE0D7C7E4815774086304C840";

  const handleCameraClick = () => {
    setShowPaywall(true);
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section - Premium e Moderno */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/30 shadow-xl">
              <Flame className="w-5 h-5 text-yellow-300 animate-pulse" />
              <span className="text-sm font-bold text-white">+127.482 transformações este mês</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-white">
                Transforme Seu Corpo
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Com Inteligência</span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto text-white/90 font-medium leading-relaxed">
              A tecnologia mais avançada de análise nutricional por IA.
              <span className="block mt-3 text-yellow-300 font-bold text-3xl">
                Resultados reais em 30 dias.
              </span>
            </p>

            <div className="flex flex-wrap gap-6 justify-center items-center mb-12">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 shadow-2xl">
                <TrendingDown className="w-8 h-8 text-green-400" />
                <div className="text-left">
                  <p className="text-sm text-white/80">Perda média</p>
                  <p className="font-black text-2xl text-white">8kg/mês</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 shadow-2xl">
                <Award className="w-8 h-8 text-yellow-400" />
                <div className="text-left">
                  <p className="text-sm text-white/80">Satisfação</p>
                  <p className="font-black text-2xl text-white">98%</p>
                </div>
              </div>
            </div>

            {/* CTA Principal */}
            <Button 
              onClick={handleCameraClick}
              className="h-16 px-12 text-xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 hover:from-yellow-500 hover:via-orange-600 hover:to-pink-600 text-white shadow-2xl hover:shadow-yellow-500/50 hover:scale-110 transition-all duration-300 rounded-2xl border-4 border-white/30"
            >
              <Rocket className="w-6 h-6 mr-3" />
              Começar Transformação Agora
            </Button>
          </div>
        </div>
      </div>

      {/* Demo Section - Visual Premium */}
      <div className="max-w-6xl mx-auto px-4 py-20 sm:py-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-purple-400/30">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-bold text-purple-300">Tecnologia de Ponta</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black mb-6 text-white">
            Tire uma Foto.
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Saiba Tudo em 2 Segundos.
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Nossa IA analisa cada detalhe da sua refeição com precisão profissional
          </p>
        </div>

        {/* App Demo Premium */}
        <div className="relative max-w-md mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-white/10">
            {/* Header Premium */}
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-black text-white flex items-center gap-2">
                  <Camera className="w-8 h-8" />
                  SnapFit
                </h3>
                <Crown className="w-8 h-8 text-yellow-300" />
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                <div className="text-center">
                  <p className="text-sm text-white/90 mb-2 font-semibold">Meta Diária</p>
                  <p className="text-5xl font-black text-white mb-1">1.510</p>
                  <p className="text-sm text-white/80">calorias restantes</p>
                </div>
              </div>
            </div>

            {/* Área de Análise */}
            <div className="p-8">
              <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl overflow-hidden aspect-square mb-6 border-2 border-purple-500/30">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e2d8a65e-9e20-4153-ae77-515919317c15.jpg"
                  alt="Exemplo de refeição"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    <p className="text-sm font-bold text-white">Análise IA Completa</p>
                  </div>
                  <p className="text-4xl font-black text-white">332 Cal</p>
                </div>
              </div>

              {/* Macros Premium */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl p-5 border border-orange-500/30 backdrop-blur-sm">
                  <p className="text-xs text-orange-300 font-bold mb-2">GORDURA</p>
                  <p className="text-3xl font-black text-orange-400">21g</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-5 border border-blue-500/30 backdrop-blur-sm">
                  <p className="text-xs text-blue-300 font-bold mb-2">PROTEÍNA</p>
                  <p className="text-3xl font-black text-blue-400">11g</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-5 border border-purple-500/30 backdrop-blur-sm">
                  <p className="text-xs text-purple-300 font-bold mb-2">CARBOIDRATOS</p>
                  <p className="text-3xl font-black text-purple-400">21g</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-5 border border-green-500/30 backdrop-blur-sm">
                  <p className="text-xs text-green-300 font-bold mb-2">FIBRA</p>
                  <p className="text-3xl font-black text-green-400">8g</p>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                onClick={handleCameraClick}
                className="w-full h-16 text-lg font-black bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 rounded-xl"
              >
                <Camera className="w-6 h-6 mr-3" />
                Experimentar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Planos Premium com Upgrades */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:py-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-yellow-400/30">
            <Crown className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-bold text-yellow-300">Planos Premium</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black mb-6 text-white">
            Escolha Seu Nível de
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              Transformação
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Plano Básico */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full mb-4">
                <Target className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-bold text-purple-300">BÁSICO</span>
              </div>
              <h3 className="text-3xl font-black text-white mb-2">Iniciante</h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl font-black text-white">R$ 97</span>
              </div>
              <p className="text-gray-400">Pagamento único</p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "✓ Análise de fotos ilimitada",
                "✓ Contagem de calorias IA",
                "✓ Histórico de 30 dias",
                "✓ Macros básicos",
                "✓ Suporte por email"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              onClick={handleCameraClick}
              className="w-full h-14 text-lg font-bold bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
            >
              Começar Agora
            </Button>
          </div>

          {/* Plano Pro - DESTAQUE */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-3xl blur-xl opacity-75 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border-2 border-yellow-400/50 transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 rounded-full">
                  <span className="text-sm font-black text-slate-900">MAIS POPULAR</span>
                </div>
              </div>

              <div className="text-center mb-8 mt-4">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-4 py-2 rounded-full mb-4 border border-yellow-400/30">
                  <Crown className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-bold text-yellow-300">PRO</span>
                </div>
                <h3 className="text-3xl font-black text-white mb-2">Profissional</h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-2xl text-gray-400 line-through">R$ 497</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                    -70% OFF
                  </span>
                </div>
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-6xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">R$ 147</span>
                </div>
                <p className="text-gray-400">Pagamento único • Acesso vitalício</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "✓ Tudo do plano Básico",
                  "✓ Análise nutricional avançada",
                  "✓ Histórico ilimitado",
                  "✓ Gráficos de progresso detalhados",
                  "✓ Recomendações personalizadas IA",
                  "✓ Planos de refeição customizados",
                  "✓ Suporte prioritário 24/7",
                  "✓ Atualizações gratuitas"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={handleCameraClick}
                className="w-full h-16 text-xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 hover:from-yellow-500 hover:via-orange-600 hover:to-pink-600 shadow-2xl hover:shadow-yellow-500/50"
              >
                <Rocket className="w-6 h-6 mr-2" />
                Garantir Minha Vaga
              </Button>
            </div>
          </div>

          {/* Plano Elite */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:scale-105">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-pink-500/20 px-4 py-2 rounded-full mb-4">
                <Star className="w-5 h-5 text-pink-400" />
                <span className="text-sm font-bold text-pink-300">ELITE</span>
              </div>
              <h3 className="text-3xl font-black text-white mb-2">Transformação Total</h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl font-black text-white">R$ 297</span>
              </div>
              <p className="text-gray-400">Pagamento único</p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "✓ Tudo do plano Pro",
                "✓ Consultoria nutricional IA",
                "✓ Análise de composição corporal",
                "✓ Treinos personalizados",
                "✓ Receitas exclusivas premium",
                "✓ Comunidade VIP",
                "✓ Coaching semanal",
                "✓ Garantia de resultados"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              onClick={handleCameraClick}
              className="w-full h-14 text-lg font-bold bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800"
            >
              Transformação Elite
            </Button>
          </div>
        </div>

        {/* Garantia */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400/30 rounded-3xl p-8 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-3xl font-black mb-4 text-white">
                Garantia Total de 30 Dias
              </h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                Experimente sem riscos. Se não ficar satisfeito, devolvemos 100% do seu investimento. 
                Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Prova Social Premium */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl sm:text-6xl font-black text-center mb-16 text-white">
          Transformações Reais
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Ana Silva", weight: "-12kg", time: "2 meses", rating: 5 },
            { name: "Carlos Mendes", weight: "-8kg", time: "1 mês", rating: 5 },
            { name: "Juliana Costa", weight: "-15kg", time: "3 meses", rating: 5 }
          ].map((person, i) => (
            <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex gap-1 mb-4">
                {[...Array(person.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h4 className="font-black text-2xl mb-2 text-white">{person.name}</h4>
              <p className="text-4xl font-black text-green-400 mb-1">{person.weight}</p>
              <p className="text-gray-400 mb-4">em {person.time}</p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-gray-300 italic leading-relaxed">
                  "Finalmente entendi onde estava errando. O SnapFit mudou minha vida completamente!"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Urgência */}
      <div className="bg-gradient-to-r from-red-600 via-orange-600 to-pink-600 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-3xl sm:text-4xl font-black mb-4 text-white">
            ⚠️ Apenas 47 vagas restantes hoje
          </p>
          <p className="text-xl text-white/90">
            Limitamos novos usuários para garantir qualidade premium
          </p>
        </div>
      </div>

      {/* Paywall Modal Premium */}
      {showPaywall && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl max-w-md w-full p-8 relative animate-in zoom-in duration-300 max-h-[90vh] overflow-y-auto border border-white/10">
            <button 
              onClick={() => setShowPaywall(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                <Crown className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-2 text-white">Acesso Premium</h3>
              <p className="text-gray-300">
                Desbloqueie o poder da transformação total
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 mb-6 border border-purple-400/30">
              <div className="text-center mb-4">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-2xl text-gray-400 line-through">R$ 497</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                    -70% OFF
                  </span>
                </div>
                <span className="text-6xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  R$ 147
                </span>
              </div>
              <p className="text-center text-sm text-gray-300 mb-4">
                Pagamento único • Acesso vitalício • Sem mensalidades
              </p>

              {/* Instruções PIX Premium */}
              <div className="bg-slate-900/50 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                <h4 className="font-black text-center mb-3 text-white flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  Pagamento Instantâneo PIX
                </h4>
                <ol className="text-sm text-gray-300 space-y-3 mb-4">
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-400 flex-shrink-0">1.</span>
                    <span>Copie o código PIX abaixo</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-400 flex-shrink-0">2.</span>
                    <span>Abra o app do seu banco</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-400 flex-shrink-0">3.</span>
                    <span>Cole e confirme o pagamento</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-400 flex-shrink-0">4.</span>
                    <span>Acesso liberado automaticamente!</span>
                  </li>
                </ol>

                {/* Código PIX */}
                <div className="bg-slate-800 rounded-lg p-3 mb-3 border border-white/10">
                  <p className="text-xs text-gray-400 mb-2 font-semibold">Código PIX Copia e Cola:</p>
                  <p className="text-xs text-gray-300 break-all font-mono leading-relaxed">
                    {pixCode}
                  </p>
                </div>

                <Button 
                  onClick={handleCopyPix}
                  className="w-full h-12 font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 hover:from-yellow-500 hover:via-orange-600 hover:to-pink-600 text-white shadow-xl"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Código Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5 mr-2" />
                      Copiar Código PIX
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="text-center space-y-2 text-xs text-gray-400">
              <p className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Pagamento 100% seguro via PIX
              </p>
              <p className="flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                Acesso liberado em até 2 minutos
              </p>
              <p className="flex items-center justify-center gap-2">
                <Award className="w-4 h-4 text-purple-400" />
                Garantia de 30 dias
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
