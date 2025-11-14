"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  HelpCircle,
  ArrowLeft,
  Send,
  MessageCircle,
  Mail,
  Phone,
  Clock,
} from "lucide-react";
import Link from "next/link";

export default function SupportPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulação de envio
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setLoading(false);
  };

  const faqs = [
    {
      question: "Como funciona a análise de calorias?",
      answer:
        "Nossa IA analisa a foto da sua refeição e identifica os alimentos, calculando automaticamente as calorias e macronutrientes com 98% de precisão.",
    },
    {
      question: "Posso usar o app offline?",
      answer:
        "Não, o SnapFit precisa de conexão com internet para processar as análises através da nossa IA.",
    },
    {
      question: "Como funciona a garantia de 30 dias?",
      answer:
        "Se você não ficar satisfeito por qualquer motivo, devolvemos 100% do seu dinheiro em até 30 dias após a compra. Sem perguntas, sem burocracia.",
    },
    {
      question: "Quantas fotos posso analisar por dia?",
      answer:
        "Com o acesso vitalício, você tem análises ILIMITADAS. Pode tirar quantas fotos quiser, sem restrições.",
    },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-black mb-4">Mensagem Enviada!</h2>
          <p className="text-gray-600 mb-6">
            Nossa equipe vai responder em até 2 horas. Fique de olho no seu email!
          </p>
          <Link href="/dashboard">
            <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-600">
              Voltar ao Dashboard
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto py-8">
        <Link href="/dashboard">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-black mb-2">Suporte 24/7</h1>
              <p className="text-gray-600">Estamos aqui para ajudar você</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  required
                  className="h-12"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="h-12"
                />
              </div>

              <div>
                <Label htmlFor="subject">Assunto</Label>
                <Input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Como podemos ajudar?"
                  required
                  className="h-12"
                />
              </div>

              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Descreva sua dúvida ou problema..."
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 text-lg font-bold bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700"
              >
                {loading ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700">suporte@snapfit.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700">(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700">Disponível 24/7</span>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h2 className="text-2xl font-black mb-6">Perguntas Frequentes</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group border-b border-gray-200 pb-4 last:border-0"
                  >
                    <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                      <span>{faq.question}</span>
                      <span className="text-orange-500 group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-pink-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-black mb-4">Resposta Rápida</h3>
              <p className="mb-4 opacity-90">
                Nossa equipe responde em média em 2 horas. Mas geralmente é muito mais
                rápido!
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm font-bold">Tempo médio de resposta:</p>
                <p className="text-3xl font-black">15 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
