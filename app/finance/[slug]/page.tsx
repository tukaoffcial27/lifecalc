import { notFound } from 'next/navigation';
import carsData from '../../../data/cars.json'; 
import FinanceReportUI from './FinanceReportUI';

interface Car {
  slug: string;
  brand: string;
  model: string;
  price: number;
  baseInterest: number;
  category: string;
}

const cars = carsData as Car[];

// 1. TETAP AKTIFKAN ON-DEMAND GENERATION
// Ini menjamin sisa 9.500 halaman tetap bisa diakses meskipun tidak di-build di awal.
export const dynamicParams = true; 

// 2. DAFTARKAN 500 SLUG PERTAMA SEMASA BUILD
// Angka 500 jauh lebih aman untuk limit log dan memori Vercel Free Tier.
export async function generateStaticParams() {
  return cars.slice(0, 500).map((car) => ({
    slug: car.slug,
  }));
}

// 3. METADATA DINAMIK (Disesuaikan dengan format file Anda)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = cars.find((c) => c.slug === slug);
  if (!car) return { title: 'Report Not Found' };
  
  return {
    title: `${car.brand} ${car.model} 2026 Installment Report | LifeCalc`,
    description: `Official financial modeling for ${car.brand} ${car.model}. Accurate 2026 installment data.`
  };
}

// 4. SERVER COMPONENT UTAMA
export default async function FinanceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = cars.find((c) => c.slug === slug);

  if (!car) notFound();

  // Memproses perbandingan secara acak dari database asli
  const suggestions = cars
    .filter(c => c.slug !== car.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return <FinanceReportUI car={car} suggestions={suggestions} />;
}