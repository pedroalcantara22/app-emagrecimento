"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, ArrowLeft, Send, Star } from "lucide-react";
import Link from "next/link";

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
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

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-black mb-4">Obrigado!</h2>
          <p className="text-gray-600 mb-6">
            Seu feedback é muito importante para nós. Vamos analisar suas sugestões com carinho!
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
      <div className="max-w-2xl mx-auto py-8">
        <Link href="/dashboard">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-black mb-2">Envie seu Feedback</h1>
            <p className="text-gray-600">
              Sua opinião nos ajuda a melhorar o SnapFit para você
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label className="text-lg font-bold mb-3 block">
                Como você avalia o SnapFit?
              </Label>
              <div className="flex gap-2 justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-12 h-12 ${
                        star <= rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-lg font-bold mb-2 block">
                Seu Email (opcional)
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="h-12"
              />
              <p className="text-sm text-gray-500 mt-1">
                Para podermos responder seu feedback
              </p>
            </div>

            <div>
              <Label htmlFor="feedback" className="text-lg font-bold mb-2 block">
                Conte-nos sua experiência
              </Label>
              <Textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="O que você achou do SnapFit? Sugestões de melhorias?"
                required
                rows={6}
                className="resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={loading || rating === 0}
              className="w-full h-12 text-lg font-bold bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700"
            >
              {loading ? (
                "Enviando..."
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Feedback
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Outras formas de contato:</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📧 Email: suporte@snapfit.com</p>
              <p>💬 WhatsApp: (11) 99999-9999</p>
              <p>⏰ Horário: 24/7 - Sempre disponível</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
