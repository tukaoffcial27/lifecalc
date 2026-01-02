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

// A. DAFTARKAN 10.000 SLUG KE GOOGLE (Kunci Utama pSEO)
export async function generateStaticParams() {
  return cars.map((car) => ({
    slug: car.slug,
  }));
}

// B. METADATA DINAMIS (Data sesuai file lampiran)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = cars.find((c) => c.slug === slug);
  if (!car) return { title: 'Report Not Found' };
  
  return {
    title: `${car.brand} {car.model} 2026 Installment Report | LifeCalc`,
    description: `Official financial modeling for ${car.brand} ${car.model}. Accurate 2026 installment data.`
  };
}

// C. SERVER COMPONENT (MENGIRIM DATA KE UI Tanpa Kehilangan Data)
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