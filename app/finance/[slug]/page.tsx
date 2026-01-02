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

// 1. BENARKAN HALAMAN DIJANA SECARA DINAMIK (On-Demand)
// Ini memastikan baki 9,000 halaman tidak akan 404 walaupun tidak didaftarkan semasa build.
export const dynamicParams = true; 

// 2. DAFTARKAN 1,000 SLUG PERTAMA SEMASA BUILD
// Mengehadkan kepada 1,000 mengikut permintaan anda untuk mengelakkan had log Vercel.
export async function generateStaticParams() {
  return cars.slice(0, 1000).map((car) => ({
    slug: car.slug,
  }));
}

// 3. METADATA DINAMIK (Logika asal dikekalkan sepenuhnya)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = cars.find((c) => c.slug === slug);
  if (!car) return { title: 'Report Not Found' };
  
  return {
    title: `${car.brand} ${car.model} 2026 Installment Report | LifeCalc`,
    description: `Official financial modeling for ${car.brand} ${car.model}. Accurate 2026 installment data.`
  };
}

// 4. SERVER COMPONENT (Logika asal dikekalkan sepenuhnya)
export default async function FinanceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = cars.find((c) => c.slug === slug);

  if (!car) notFound();

  // Memproses perbandingan di sisi server agar lebih cepat
  const suggestions = cars
    .filter(c => c.slug !== car.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return <FinanceReportUI car={car} suggestions={suggestions} />;
}