import json
import random
import os

def generate_car_data(total_records=10000):
    brands = {
        "Toyota": ["Avanza", "Innova Zenix", "Fortuner", "Alphard", "Veloz", "Raize", "Yaris Cross", "Camry"],
        "Honda": ["Brio", "HR-V", "CR-V", "Civic RS", "City Hatchback", "BR-V", "WR-V", "Accord"],
        "Mitsubishi": ["Xpander", "Xpander Cross", "Pajero Sport", "Xforce", "L300", "Triton"],
        "BMW": ["320i Sport", "520i M Sport", "X1 sDrive18i", "X3 xDrive30i", "X5 xDrive40i", "i4 eDrive40"],
        "Mercedes-Benz": ["C200 Avantgarde", "E300 AMG Line", "GLC 200", "GLA 200", "S450", "EQE 350"],
        "Hyundai": ["Stargazer", "Creta", "Ioniq 5", "Ioniq 6", "Palisade", "Santa Fe"],
        "Lexus": ["RX 350h", "NX 250", "LX 600", "ES 300h", "UX 250h"],
        "Suzuki": ["Ertiga", "XL7", "Grand Vitara", "Jimny", "Baleno"],
        "Mazda": ["CX-5", "CX-3", "Mazda 3", "CX-30", "Mazda 6"]
    }

    cars = []
    for i in range(total_records):
        brand = random.choice(list(brands.keys()))
        model_base = random.choice(brands[brand])
        
        # Variasi Tahun & Tipe untuk keunikan SEO
        year = random.choice([2025, 2026])
        variant = random.choice(["Standard", "Luxury", "Sport", "Hybrid", "Ultimate"])
        full_model_name = f"{model_base} {variant} {year}"
        
        if brand in ["BMW", "Mercedes-Benz", "Lexus"]:
            price = random.randint(950_000_000, 4_200_000_000)
            base_interest = round(random.uniform(2.4, 3.2), 2)
        else:
            price = random.randint(190_000_000, 850_000_000)
            base_interest = round(random.uniform(3.1, 4.8), 2)

        # Slug unik mutlak dengan ID
        slug = f"calculate-{brand.lower()}-{model_base.lower().replace(' ', '-')}-{i+1}-report"

        cars.append({
            "slug": slug,
            "brand": brand,
            "model": full_model_name,
            "price": price,
            "baseInterest": base_interest,
            "category": random.choice(["Luxury", "SUV", "MPV", "EV", "Sedan"])
        })

    if not os.path.exists('data'): os.makedirs('data')
    with open('data/cars.json', 'w') as f:
        json.dump(cars, f, indent=2)

    print(f"Success: {total_records} car data entries generated.")

if __name__ == "__main__":
    generate_car_data(10000)