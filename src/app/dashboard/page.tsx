"use client";

import { useEffect, useState } from "react";
import { supabase, type MealAnalysis } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Camera,
  TrendingDown,
  LogOut,
  BarChart3,
  User,
  MessageCircle,
  HelpCircle,
  Settings,
  Flame,
  Target,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState<MealAnalysis[]>([]);
  const [stats, setStats] = useState({
    totalCalories: 0,
    avgCalories: 0,
    totalMeals: 0,
    streak: 0,
  });

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      router.push("/login");
      return;
    }
    setUser(user);
    loadMeals(user.id);
    setLoading(false);
  };

  const loadMeals = async (userId: string) => {
    const { data } = await supabase
      .from("meal_analyses")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(10);

    if (data) {
      setMeals(data);
      calculateStats(data);
    }
  };

  const calculateStats = (mealData: MealAnalysis[]) => {
    const total = mealData.reduce((sum, meal) => sum + meal.calories, 0);
    setStats({
      totalCalories: total,
      avgCalories: mealData.length > 0 ? Math.round(total / mealData.length) : 0,
      totalMeals: mealData.length,
      streak: 7, // Simulado
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-black">SnapFit</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/profile">
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/support">
              <Button variant="ghost" size="icon">
                <HelpCircle className="w-5 h-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-black mb-2">
            Olá, {user?.user_metadata?.full_name || "Usuário"}! 👋
          </h2>
          <p className="text-gray-600">Vamos continuar sua jornada de transformação</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-100">
            <div className="flex items-center justify-between mb-2">
              <Flame className="w-8 h-8 text-orange-500" />
              <span className="text-sm text-gray-500">Hoje</span>
            </div>
            <p className="text-3xl font-black text-gray-900">{stats.totalCalories}</p>
            <p className="text-sm text-gray-600">Calorias totais</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-8 h-8 text-blue-500" />
              <span className="text-sm text-gray-500">Média</span>
            </div>
            <p className="text-3xl font-black text-gray-900">{stats.avgCalories}</p>
            <p className="text-sm text-gray-600">Cal por refeição</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100">
            <div className="flex items-center justify-between mb-2">
              <BarChart3 className="w-8 h-8 text-purple-500" />
              <span className="text-sm text-gray-500">Total</span>
            </div>
            <p className="text-3xl font-black text-gray-900">{stats.totalMeals}</p>
            <p className="text-sm text-gray-600">Refeições registradas</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100">
            <div className="flex items-center justify-between mb-2">
              <Award className="w-8 h-8 text-green-500" />
              <span className="text-sm text-gray-500">Sequência</span>
            </div>
            <p className="text-3xl font-black text-gray-900">{stats.streak}</p>
            <p className="text-sm text-gray-600">Dias consecutivos</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Link href="/analyze">
            <div className="bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl p-6 text-white cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <Camera className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-black mb-2">Analisar Refeição</h3>
              <p className="opacity-90">Tire uma foto e descubra as calorias instantaneamente</p>
            </div>
          </Link>

          <Link href="/progress">
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105">
              <TrendingDown className="w-12 h-12 mb-4 text-green-500" />
              <h3 className="text-2xl font-black mb-2 text-gray-900">Ver Progresso</h3>
              <p className="text-gray-600">Acompanhe sua evolução e conquistas</p>
            </div>
          </Link>
        </div>

        {/* Recent Meals */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl font-black mb-6">Refeições Recentes</h3>
          {meals.length === 0 ? (
            <div className="text-center py-12">
              <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">Nenhuma refeição registrada ainda</p>
              <Link href="/analyze">
                <Button className="bg-gradient-to-r from-orange-500 to-pink-600">
                  Registrar Primeira Refeição
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {meals.map((meal) => (
                <div
                  key={meal.id}
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <Flame className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{meal.meal_name}</h4>
                    <p className="text-sm text-gray-500">
                      {new Date(meal.created_at).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-orange-600">{meal.calories}</p>
                    <p className="text-xs text-gray-500">calorias</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Support Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/feedback">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-all">
              <MessageCircle className="w-10 h-10 text-blue-600 mb-3" />
              <h4 className="text-xl font-black mb-2 text-gray-900">Enviar Feedback</h4>
              <p className="text-gray-600">Ajude-nos a melhorar o SnapFit</p>
            </div>
          </Link>

          <Link href="/support">
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-all">
              <HelpCircle className="w-10 h-10 text-green-600 mb-3" />
              <h4 className="text-xl font-black mb-2 text-gray-900">Suporte 24/7</h4>
              <p className="text-gray-600">Precisa de ajuda? Estamos aqui!</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
